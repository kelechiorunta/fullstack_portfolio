// import axios from 'axios';

self.addEventListener('sync', (event) => {
  if (event.tag === 'sendMessages') {
    event.waitUntil(sendMessages());
  }
});

const sendMessages = async () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('messagesDB', 1);

    request.onsuccess = async (event) => {
      const db = event.target.result;
      const transaction = db.transaction('outbox', 'readonly');
      const store = transaction.objectStore('outbox');

      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = async () => {
        const messages = getAllRequest.result;

        try {
          for (const message of messages) {
            // Send each message to the server
            await fetch('/api/sendMessage', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(message)
            });

            // Create a new transaction for deleting the message
            const deleteTransaction = db.transaction('outbox', 'readwrite');
            const deleteStore = deleteTransaction.objectStore('outbox');
            deleteStore.delete(message.id);

            // Ensure transaction completes successfully
            await new Promise((res, rej) => {
              deleteTransaction.oncomplete = res;
              deleteTransaction.onerror = rej;
            });
          }

          // Notify the main thread about offline sync success
          self.clients.matchAll().then((clients) => {
            if (clients && clients.length) {
              clients.forEach((client) => {
                client.postMessage({
                  type: 'syncSuccess',
                  message: 'Outbox Messages now sent successfully to Email Inbox!',
                  method: 'offline'
                });
              });
            }
          });

          resolve();
        } catch (error) {
          console.error('Failed to send messages:', error);
          reject(error);
        }
      };

      getAllRequest.onerror = (event) => {
        console.error('Failed to retrieve messages:', event.target.error);
        reject(event.target.error);
      };
    };

    request.onerror = (event) => {
      console.error('Failed to open database:', event.target.error);
      reject(event.target.error);
    };
  });
};

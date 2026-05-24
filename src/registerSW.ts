let swMessageListenerRegistered = false;

import { toast } from 'react-toastify';

export const registerSync = async (url: string) => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(url);

      console.log('Service worker registered');

      await navigator.serviceWorker.ready;

      if ('sync' in registration) {
        await registration.sync.register('sendMessages');

        console.log('Background sync registered');
      }

      // ✅ Prevent duplicate listeners
      if (!swMessageListenerRegistered) {
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data.type === 'syncSuccess') {
            console.log(event.data.message);

            toast.success(`👋 ${event.data.message}!`, {
              position: 'top-right',
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              toastId: 'sync-success'
            });
          }

          if (event.data.type === 'syncError') {
            console.log(event.data.message);

            toast.error(event.data.message, {
              position: 'top-right',
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              toastId: 'sync-error'
            });
          }
        });

        swMessageListenerRegistered = true;
      }
    } catch (err) {
      console.error('Sync registration failed:', err);
    }
  }
};

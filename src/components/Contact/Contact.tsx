import { CodeIcon } from '@radix-ui/react-icons';
import { Box, Card, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import './Contact.css';

export default function Contact() {
  return (
    <Box>
      <Box id="contact" width={'50%'} mx={'auto'} justifySelf={'center'} mt={'9'}>
        <Heading className="contact_title" size={'8'} color="gold" my={'4'}>
          Contact Me
        </Heading>
        <Box width={'69%'} mx={'auto'}>
          <Text size={'2'} mb={'4'}>
            I'm always interested in new opportunities and interesting projects. Let's discuss how
            we can work together.
          </Text>
        </Box>
      </Box>
      <Flex width={'70%'} gap={'4'} mx={'auto'} p={'8'}>
        <Box width={'40%'} justifySelf={'start'}>
          <Heading align={'left'} size={'6'} color="gold">
            Send Me A Message
          </Heading>
        </Box>
        <Flex width={'60%'} wrap={'wrap'} gap={'4'}>
          <Card style={{ maxWidth: '250px', maxHeight: '200px' }}>
            <Box p={'4'}>
              <IconButton>
                <CodeIcon width={'18'} height={'18'} />
              </IconButton>
              <Heading size={'3'} color="gold">
                Frontend Development
              </Heading>
              <Text size={'1'} as="p">
                Expert in React, TypeScript, and modern CSS frameworks
              </Text>
            </Box>
          </Card>
        </Flex>
      </Flex>

      {/* <Flex gap={'4'} align={'center'} mt={'8'}>
        {skills.map((skill, idx) => (
          <Skill key={idx} category={skill.category} tools={skill.tools} />
        ))}
      </Flex> */}
    </Box>
  );
}

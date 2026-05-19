import { Box, Button, Flex, Heading, IconButton, Inset, Text } from '@radix-ui/themes';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import './LandingSection.css';

export default function LandingSection() {
  return (
    <Box
      id="home"
      p={'9'}
      maxHeight={'700px'}
      maxWidth={'1224px'}
      width={'100%'}
      my={'9'}
      mx={'auto'}
    >
      <Flex gapX={'80px'} align={'center'} width={'100%'}>
        <Box maxWidth={'544px'} maxHeight={'360px'} width={'100%'} height={'100%'}>
          <Heading
            className="landingPage"
            size={'9'}
            color="gold"
            style={{ fontSize: '40px', lineHeight: 0.9 }}
            trim={'both'}
          >
            {' '}
            Hi, I am
          </Heading>
          <Heading
            className="landingPage"
            color="gold"
            trim={'both'}
            weight={'bold'}
            size={'9'}
            style={{ fontSize: '70px', lineHeight: 0.9 }}
          >
            KELECHI ORUNTA
          </Heading>
          <Text align={'left'} size={'4'}>
            An aspiring FullStack Developer based in Lagos passionate about learning and building
            scalable web and mobile applications
          </Text>

          <Flex mt={'4'} gap={'4'} align={'center'} justify={'center'}>
            <Button variant="outline">View Projects</Button>
            <Button>Download CV</Button>
          </Flex>

          <Flex gap={'2'} width={'100%'} align={'center'} mt={'4'} justify={'center'}>
            <IconButton variant="soft" title="Visit my Github">
              <GitHubLogoIcon width="18" height="18" />
            </IconButton>

            <IconButton variant="soft" title="View my LinkedIn">
              <LinkedInLogoIcon width="18" height="18" />
            </IconButton>

            <IconButton variant="soft" title="Send me a mail">
              <EnvelopeClosedIcon width="18" height="18" />
            </IconButton>
          </Flex>
        </Box>
        <Box maxWidth={'600px'} width={'100%'} maxHeight={'700px'}>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="/Me.jpg"
              alt="Bold typography"
              style={{
                backgroundAttachment: 'fixed',
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                maxWidth: '600px',
                maxHeight: '500px',
                backgroundColor: 'var(--gray-5)',
                borderRadius: '50%'
              }}
            />
          </Inset>
        </Box>
      </Flex>
    </Box>
  );
}

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  PersonIcon
} from '@radix-ui/react-icons';
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  Strong,
  Text,
  TextArea,
  TextField
} from '@radix-ui/themes';
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
      <Flex width={'80%'} gap={'4'} mx={'auto'} p={'8'} wrap={'wrap'}>
        <Card style={{ padding: 20, flexBasis: '400px', flexGrow: 1, flexShrink: 0 }}>
          <Heading align={'left'} size={'4'} color="gold">
            Send Me A Message
          </Heading>
          <form style={{ width: '100%' }}>
            <Flex gap={'2'} width={'100%'} wrap={'wrap'}>
              {/* FIRSTNAME */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'200px'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Text align={'left'} size={'1'}>
                  FirstName
                </Text>
                <TextField.Root placeholder="Enter FirstName">
                  <TextField.Slot />
                </TextField.Root>
              </Flex>
              {/* LASTNAME */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'200px'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Text align={'left'} size={'1'}>
                  LastName
                </Text>
                <TextField.Root placeholder="Enter LastName">
                  <TextField.Slot />
                </TextField.Root>
              </Flex>
              {/* EMAIL */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'200px'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Text align={'left'} size={'1'}>
                  Email
                </Text>
                <TextField.Root placeholder="Enter Email Address">
                  <TextField.Slot />
                </TextField.Root>
              </Flex>
              {/* SUBJECT */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'100%'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Text align={'left'} size={'1'}>
                  Subject
                </Text>
                <TextField.Root placeholder="Enter Subject">
                  <TextField.Slot />
                </TextField.Root>
              </Flex>
              {/* MESSAGE */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'100%'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Text align={'left'} size={'1'}>
                  Message
                </Text>
                <TextArea placeholder="Enter Message" variant="soft" rows={5}></TextArea>
              </Flex>
              {/* SEND MESSAGE */}
              <Flex
                direction={'column'}
                justify={'start'}
                // width={'100%'}
                mx={'auto'}
                py={'4'}
                gapY={'2'}
                flexBasis={'100%'}
                flexGrow={'1'}
                flexShrink={'0'}
              >
                <Button variant="soft">Send Message</Button>
              </Flex>
            </Flex>
          </form>
        </Card>
        <Flex
          direction={'column'}
          // width={'60%'}
          wrap={'wrap'}
          gap={'4'}
          flexBasis={'300px'}
          flexGrow={'1'}
          flexShrink={'0'}
        >
          <Box mb={'-6'}>
            <Heading align={'left'} size={'4'} color="gold">
              Contact Information
            </Heading>
          </Box>
          {/* <Flex
            // direction={'column'}
            // width={'60%'}
            wrap={'wrap'}
            gapX={'4'}
            flexBasis={'20%'}
            flexGrow={'1'}
            flexShrink={'0'}
          > */}
          <Card style={{ maxHeight: '100px', flexBasis: '200px', flexGrow: 1, flexShrink: 0 }}>
            <Flex align={'start'} gap={'2'} p={'4'}>
              <IconButton>
                <EnvelopeClosedIcon width={'18'} height={'18'} />
              </IconButton>
              <Box>
                <Text as="p" size={'1'} color="gold">
                  Email
                </Text>
                <Text size={'1'} as="p">
                  kelechiorunta1@gmail.com
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card
            style={{
              maxHeight: '100px',
              flexBasis: '200px',
              flexGrow: 1,
              flexShrink: 0
            }}
          >
            <Flex align={'start'} gap={'2'} p={'4'}>
              <IconButton>
                <PersonIcon width={'18'} height={'18'} />
              </IconButton>
              <Box>
                <Text as="p" size={'1'} color="gold">
                  Phone
                </Text>
                <Text size={'1'} as="p">
                  +2348065350031
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card style={{ maxHeight: '100px', flexBasis: '200px', flexGrow: 1, flexShrink: 0 }}>
            <Flex align={'start'} gap={'2'} p={'4'}>
              <IconButton>
                <HomeIcon width={'18'} height={'18'} />
              </IconButton>
              <Box>
                <Text as="p" size={'1'} color="gold">
                  Location
                </Text>
                <Text size={'1'} as="p">
                  Ago, Lagos, Nigeria.
                </Text>
              </Box>
            </Flex>
          </Card>
          {/* </Flex> */}
          <Box mt={'-4'}>
            <Heading align={'left'} size={'4'} color="gold">
              Follow Me
            </Heading>
          </Box>
          <Flex gapX={'2'} width={'100%'} align={'center'} mt={'-6'} justify={'start'}>
            <IconButton variant="soft" title="Visit my Github">
              <GitHubLogoIcon width="18" height="18" />
            </IconButton>

            <IconButton variant="soft" title="View my LinkedIn">
              <LinkedInLogoIcon width="18" height="18" />
            </IconButton>

            <IconButton variant="soft" title="Send me an mail">
              <EnvelopeClosedIcon width="18" height="18" />
            </IconButton>
          </Flex>
          <Card style={{ maxWidth: '100%', maxHeight: '200px' }}>
            <Flex align={'start'} gap={'2'} p={'4'}>
              <Box width={'100%'}>
                <Box mb={'4'}>
                  <Strong>Ready to start a project?</Strong>
                </Box>
                <Text size={'1'} as="p" mb={'4'}>
                  I'm available for freelance work and consulting. Let's bring your ideas to life!
                </Text>
                <Box width={'100%'} mx={'auto'}>
                  {' '}
                  <Button style={{ width: '100%' }}>
                    <EnvelopeClosedIcon width={18} height={18} />
                    Let's Talk
                  </Button>
                </Box>
              </Box>
            </Flex>
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

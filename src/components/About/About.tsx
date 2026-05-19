import { CodeIcon, ContainerIcon, PersonIcon, StackIcon } from '@radix-ui/react-icons';
import { Box, Card, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import './About.css';

export default function About() {
  return (
    <Box>
      <Box id="about" width={'50%'} mx={'auto'} justifySelf={'center'} mt={'9'}>
        <Heading className="about_title" size={'8'} color="gold" my={'4'}>
          About Me
        </Heading>
        <Box width={'89%'} mx={'auto'}>
          <Text size={'2'} mb={'4'}>
            I'm a passionate fullstack developer with 3+ years of experience building web
            applications. I love turning complex problems into simple, beautiful solutions.
          </Text>
        </Box>
      </Box>
      <Flex width={'70%'} gap={'4'} mx={'auto'} p={'8'}>
        <Box width={'40%'} justifySelf={'start'}>
          <Heading align={'left'} size={'6'} color="gold">
            My Journey
          </Heading>
          <Text as="p" align={'left'} size={'2'}>
            Started my journey as a software intern in AppWorld Inc. Over the years, I've worked as
            a mid-level developer, collaborated with few startups, mentored junior developers and
            helped launched products and scalable web applications.
          </Text>
          <br />
          <Text as="p" align={'left'} size={'2'}>
            I'm constantly learning new technologies and best practices. Currently exploring AI
            integration in web applications and advanced performance optimization techniques.
          </Text>{' '}
          <br />
          <Text as="p" align={'left'} size={'2'}>
            When I'm not coding, you'll find me researching online on better solutions, contributing
            to open source projects, writing technical blogs, or mentoring junior developers.
          </Text>
          <br />
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
          <Card style={{ maxWidth: '250px', maxHeight: '200px' }}>
            <Box p={'4'}>
              <IconButton>
                <ContainerIcon width={'18'} height={'18'} />
              </IconButton>
              <Heading size={'3'} color="gold">
                Backend Development
              </Heading>
              <Text size={'1'} as="p">
                Proficient in Node.js, Express.js, and system and database design
              </Text>
            </Box>
          </Card>
          <Card style={{ maxWidth: '250px', maxHeight: '200px' }}>
            <Box p={'4'}>
              <IconButton>
                <StackIcon width={'18'} height={'18'} />
              </IconButton>
              <Heading size={'3'} color="gold">
                FullStack Development
              </Heading>
              <Text size={'1'} as="p">
                End-to-end application development and deployment
              </Text>
            </Box>
          </Card>
          <Card style={{ maxWidth: '250px', maxHeight: '200px' }}>
            <Box p={'4'}>
              <IconButton>
                <PersonIcon width={'18'} height={'18'} />
              </IconButton>
              <Heading size={'3'} color="gold">
                Team Collaboration
              </Heading>
              <Text size={'1'} as="p">
                Strong communication and project management skills
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

import { Badge, Box, Button, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes';

export type projectType = {
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  skills: string[];
  imgSrc: string;
};

export default function Project({ title, description, demoLink, skills, imgSrc }: projectType) {
  return (
    <Flex mx={'auto'} maxWidth="840px" width={'100%'} mt={'8'}>
      {/* <Card style={{ display: 'flex', gap: 8, padding: 4, width: '100%' }} size="4"> */}
      <Inset clip="padding-box" side="top" style={{ position: 'relative' }}>
        <Badge color="gold" variant="surface" style={{ position: 'absolute', top: 0, left: 0 }}>
          Featured
        </Badge>
        {imgSrc ? (
          <img
            // allowTransparency
            src={imgSrc} //"https://rotating-cube-demo-app.vercel.app/"
            style={{
              display: 'block',

              objectFit: 'contain',
              width: '100%',
              maxWidth: 600,
              height: 400,
              backgroundColor: 'var(--gray-5)'
            }}
          />
        ) : (
          <Flex width={'600px'} mx={'auto'} justify={'center'} align={'center'}>
            <iframe
              // allowTransparency
              src={demoLink} //"https://rotating-cube-demo-app.vercel.app/"
              style={{
                display: 'block',
                marginLeft: '-26.5%',
                marginTop: title === 'Clock App' ? '-25%' : '',
                objectFit: 'cover',
                width: '100%',
                maxWidth: 600,
                height: title === 'Clock App' ? 500 : 300,
                backgroundColor: 'var(--gray-5)'
              }}
            />
          </Flex>
        )}
      </Inset>
      <Card style={{ width: '60%' }}>
        <Heading align={'center'} size="6" color="gold">
          {title}
        </Heading>
        <Box maxWidth={'240px'} mx={'auto'} mt={'-4'}>
          <Text size={'2'}>{description}</Text>

          <Flex gap={'4'} width={'100%'} mt={'4'} wrap={'wrap'}>
            {skills.map((skill) => (
              <Badge>{skill}</Badge>
            ))}
          </Flex>
          <Flex gap={'4'} width={'100%'} mt={'4'}>
            <Button variant="outline">View Code</Button>
            <Button variant="soft">View Demo</Button>
          </Flex>
        </Box>
      </Card>
    </Flex>
  );
}

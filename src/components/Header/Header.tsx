import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Progress,
  Separator,
  TabNav,
  Text
} from '@radix-ui/themes';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <Box
      px={'9'}
      title="header"
      position={'fixed'}
      top={'0'}
      left={'0'}
      width={'100%'}
      mb={'5'}
      style={{ border: '1px solid var(--crimson-5)', zIndex: 1 }}
    >
      {/* <Card style={{ paddingInline: 4 }}> */}
      <Flex align={'center'} justify={'between'} height={'60px'}>
        <Flex gapX={'2'} align={'center'}>
          <Avatar src="/Me.jpg" fallback="K" radius="full" />
          <Heading>KELECHI</Heading>
        </Flex>

        <TabNav.Root>
          <Flex gapX={'4'} align={'center'}>
            <TabNav.Link active={location.hash === '#home'}>
              <Link href="#home">Home</Link>
            </TabNav.Link>

            <Separator orientation="vertical" />
            <TabNav.Link active={location.hash === '#skills'}>
              <Link href="#skills">Skills</Link>
            </TabNav.Link>

            <Separator orientation="vertical" />
            <TabNav.Link active={location.hash === '#projects'}>
              <Link href="#projects">Project</Link>
            </TabNav.Link>

            <Separator orientation="vertical" />
            <TabNav.Link active={location.hash === '#about'}>
              <Link href="#about">About</Link>
            </TabNav.Link>

            <Separator orientation="vertical" />
            <TabNav.Link active={location.hash === '#contact'}>
              <Link href="#contact">Contact</Link>
            </TabNav.Link>

            <Separator orientation="vertical" />
            <Text></Text>
          </Flex>
        </TabNav.Root>
      </Flex>
      {/* </Card> */}
      <Progress max={100} />
    </Box>
  );
}

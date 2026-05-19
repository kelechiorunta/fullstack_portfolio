import { Box, Container } from '@radix-ui/themes';
import Header from '../Header/Header';
import LandingSection from '../LandingSection/LandingSection';
import ProjectSection from '../ProjectSection/ProjectSection';
import SkillsSection from '../Skills/SkillsSection';
import About from '../About/About';
import Contact from '../Contact/Contact';

export default function Layout() {
  return (
    <Container position={'relative'} align={'center'} maxWidth={'100%'} width={'100%'}>
      <Header />
      <Box>
        {' '}
        <LandingSection />
      </Box>

      <Box mt={'200px'}>
        <SkillsSection />
      </Box>
      <Box mt={'200px'}>
        <ProjectSection />
      </Box>
      <Box mt={'200px'}>
        <About />
      </Box>
      <Box mt={'200px'}>
        <Contact />
      </Box>
    </Container>
  );
}

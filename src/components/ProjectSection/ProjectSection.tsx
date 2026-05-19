import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import Project from './Project';
import { projects } from './projects';

export default function ProjectSection() {
  return (
    <Box id="projects" width={'100%'} mt={'8'}>
      <Flex align={'center'} justify={'center'}>
        <Box width={'50%'}>
          <Heading className="project_title" size={'8'} color="gold">
            Featured Projects
          </Heading>
          <Box width={'55%'} mx={'auto'}>
            <Text size={'2'} mt={'-4'} mb={'4'}>
              Here are some of the projects I've worked on recently. Each one represents a unique
              challenge and learning experience beginning as a frontend developer.
            </Text>
          </Box>
          <Flex direction={'column'} gap={'4'} width={'100%'} mx={'auto'}>
            {projects.map((project, indx) => (
              <Project
                key={indx}
                title={project.title}
                description={project.description}
                skills={project.skills}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                imgSrc={project.imgSrc}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

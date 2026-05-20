import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { skills } from './skills';
import Skill from './Skill';
import './SkillSection.css';

export default function SkillsSection() {
  return (
    <Box id="skills" width={'50%'} mx={'auto'} justifySelf={'center'} mt={'9'}>
      <Heading className="skill_title" size={'8'} color="gold" my={'4'}>
        Skills & Technologies
      </Heading>
      <Text size={'2'} mb={'4'}>
        Here are the technologies and tools I work with to bring ideas to life.
      </Text>
      <Flex gap={'4'} align={'center'} mt={'8'} wrap={'wrap'}>
        {skills.map((skill, idx) => (
          <Skill key={idx} category={skill.category} tools={skill.tools} />
        ))}
      </Flex>
    </Box>
  );
}

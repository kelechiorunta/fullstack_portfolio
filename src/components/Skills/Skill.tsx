import { Badge, Card, Flex, Heading } from '@radix-ui/themes';

export type SkillType = {
  category: string;
  tools: string[];
};

export default function Skill({ category, tools }: SkillType) {
  return (
    <Card
      style={{
        width: '100%',
        padding: 4,
        minHeight: '300px',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '200px'
      }}
    >
      <Flex direction={'column'} justify={'center'} width={'100%'} mx={'auto'}>
        <Heading className="skill_title" mx={'auto'} color="gold">
          {category}
        </Heading>
        <Flex
          wrap={'wrap'}
          gap={'2'}
          justify={'center'}
          align={'center'}
          maxHeight={'400px'}
          height={'100%'}
        >
          {tools.map((tool) => (
            <Badge>{tool}</Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

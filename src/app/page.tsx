import Card from '@/compoents/Card/Card';
import { HStack, VStack } from '@/compoents/FlexBoxGroup/styled';

export default function Page() {
  return (
    <VStack
      style={{
        backgroundColor: '#272727',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <span
        style={{ color: '#fff', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}
      >
        ARCHVING
      </span>

      <HStack gap="32px">
        <Card bg="white">안녕하세요1</Card>
        <Card bg="gray">안녕하세요2</Card>
      </HStack>
    </VStack>
  );
}

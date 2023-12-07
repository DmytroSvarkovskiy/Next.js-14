import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { HeroSection } from '@/shared/HeroSection/HeroSection';
import { Container } from '@/shared/Container/Container';

const Advice = () => {
  return (
    <>
      <HeroSection
        text="Поради по догляду за вашим улюбленцем"
        filterBar={<Container>bfgbfgb</Container>}
      />
      <PageWrapper>Advice</PageWrapper>
    </>
  );
};
export default Advice;

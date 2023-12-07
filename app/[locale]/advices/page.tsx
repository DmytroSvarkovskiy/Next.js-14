import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { HeroSection } from '@/shared/HeroSection/HeroSection';
import { Container } from '@/shared/Container/Container';
import { getI18n } from '@/locales/server';

const Advice = async () => {
  const t = await getI18n();
  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<Container>bfgbfgb</Container>} />
      <PageWrapper>Advice</PageWrapper>
    </>
  );
};
export default Advice;

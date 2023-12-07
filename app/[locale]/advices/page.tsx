import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import { getI18n } from '@/locales/server';
import { AnimalTypes } from '@/entities/AnimalTypes/AnimalTypes';

const Advice = async () => {
  const t = await getI18n();
  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />
      <PageWrapper></PageWrapper>
    </>
  );
};
export default Advice;

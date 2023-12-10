import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import { getI18n } from '@/locales/server';
import { AnimalTypes } from '@/entities/AnimalTypes/AnimalTypes';
import { ArticleList } from '@/widgets/ArticleList/ArticleList';

const Advice = async () => {
  const t = await getI18n();

  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />
      {/* <ArticleList /> */}
    </>
  );
};
export default Advice;

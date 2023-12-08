import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import { getCurrentLocale, getI18n } from '@/locales/server';
import { AnimalTypes } from '@/entities/AnimalTypes/AnimalTypes';
import { ArticleList } from '@/widgets/ArticleList/ArticleList';
import { I18nProviderClient } from '@/locales/client';

const Advice = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();
  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />
      <I18nProviderClient locale={locale}>
        <ArticleList />
      </I18nProviderClient>
    </>
  );
};
export default Advice;

import HeroSection from '@/widgets/HeroSection/HeroSection';
import { getCurrentLocale, getI18n } from '@/locales/server';
import { Metadata } from 'next';
import { I18nProviderClient } from '@/locales/client';
import dynamic from 'next/dynamic';
import ArticleList from '@/widgets/ArticleList/ArticleList';
import AnimalTypes from '@/entities/AnimalTypes/AnimalTypes';
import AdviceFilterBar from '@/widgets/AdviceFilterbar/AdviceFilterBar';

// const AdviceFilterBar = dynamic(() => import('@/widgets/AdviceFilterbar/AdviceFilterBar'), {
//   ssr: false,
// });
export const metadata: Metadata = {
  title: 'Advices',
  description: 'Top tips for handling pets',
};

const Advice = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();
  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />
      <I18nProviderClient locale={locale}>
        <AdviceFilterBar />
        <ArticleList />
      </I18nProviderClient>
    </>
  );
};
export default Advice;

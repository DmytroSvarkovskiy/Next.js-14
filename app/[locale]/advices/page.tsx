import { Metadata } from 'next';

import { getI18n } from '@/locales/server';
import HeroSection from '@/widgets/HeroSection/HeroSection';
import AnimalTypes from '@/entities/AnimalTypes/AnimalTypes';
import AdviceFilterBar from '@/widgets/AdviceFilterbar/AdviceFilterBar';
import ArticleList from '@/widgets/ArticleList/ArticleList';
import { SubscriptionForm } from '@/widgets/SubscriptionForm/SubscriptionForm';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Advices',
  description: 'Top tips for handling pets',
};

const Advice = async () => {
  const t = await getI18n();

  return (
    <Suspense fallback={null}>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />
      <AdviceFilterBar />
      <ArticleList />
      <SubscriptionForm />
    </Suspense>
  );
};
export default Advice;

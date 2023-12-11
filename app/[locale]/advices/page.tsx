'use client';
import HeroSection from '@/widgets/HeroSection/HeroSection';

import { Metadata } from 'next';
import { useI18n } from '@/locales/client';
import dynamic from 'next/dynamic';
import ArticleList from '@/widgets/ArticleList/ArticleList';
import AnimalTypes from '@/entities/AnimalTypes/AnimalTypes';

const AdviceFilterBar = dynamic(() => import('@/widgets/AdviceFilterbar/AdviceFilterBar'), {
  ssr: false,
});
export const metadata: Metadata = {
  title: 'Advices',
  description: 'Top tips for handling pets',
};

const Advice = () => {
  const t = useI18n();

  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />

      <AdviceFilterBar />
      <ArticleList />
    </>
  );
};
export default Advice;

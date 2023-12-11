'use client';
import HeroSection from '@/widgets/HeroSection/HeroSection';
import dynamic from 'next/dynamic';
import ArticleList from '@/widgets/ArticleList/ArticleList';
import AnimalTypes from '@/entities/AnimalTypes/AnimalTypes';
import { useI18n } from '@/locales/client';

const AdviceFilterBar = dynamic(() => import('@/widgets/AdviceFilterbar/AdviceFilterBar'), {
  ssr: false,
});

export const Content = () => {
  const t = useI18n();

  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />

      <AdviceFilterBar />
      <ArticleList />
    </>
  );
};

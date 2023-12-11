'use client';
import HeroSection from '@/widgets/HeroSection/HeroSection';
import dynamic from 'next/dynamic';
import ArticleList from '@/widgets/ArticleList/ArticleList';
import AnimalTypes from '@/entities/AnimalTypes/AnimalTypes';
import { getI18n } from '@/locales/server';
import { useI18n } from '@/locales/client';

const AdviceFilterBar = dynamic(() => import('@/widgets/AdviceFilterbar/AdviceFilterBar'), {
  ssr: false,
});

const Content = () => {
  const t = useI18n();

  return (
    <>
      <HeroSection text={t('petCareAdvice')} filterBar={<AnimalTypes />} />

      <AdviceFilterBar />
      <ArticleList />
    </>
  );
};
export default Content;

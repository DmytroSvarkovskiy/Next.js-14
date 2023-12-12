import HeroSection from '@/widgets/HeroSection/HeroSection';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Suspense } from 'react';

export default async function Features() {
  const locale = getCurrentLocale();
  return (
    <Suspense fallback={null}>
      <I18nProviderClient locale={locale}>
        <HeroSection text="Features" />
      </I18nProviderClient>
      <PageWrapper>Features</PageWrapper>
    </Suspense>
  );
}

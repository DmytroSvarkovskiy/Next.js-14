import HeroSection from '@/widgets/HeroSection/HeroSection';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';

export default async function Home() {
  const locale = getCurrentLocale();
  return (
    <>
      <I18nProviderClient locale={locale}>
        <HeroSection text="HOME" />
      </I18nProviderClient>
      <PageWrapper>Home</PageWrapper>
    </>
  );
}

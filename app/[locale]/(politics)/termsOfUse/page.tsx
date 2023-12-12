import { getPoliticsText } from '@/features/petСare/api/api';
import { I18nProviderClient } from '@/locales/client';
import { getI18n } from '@/locales/server';
import Container from '@/shared/Container/Container';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import HeroSection from '@/widgets/HeroSection/HeroSection';

export default async function ProtectionPolicy({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await getPoliticsText();
  const index = data?.sectionInfo.findIndex(item => item.name === 'about');
  const t = await getI18n();
  const text = data.sectionInfo[index]?.title;
  return (
    <>
      <I18nProviderClient locale={locale}>
        <HeroSection text={t('termsOfUse')} />
        <PageWrapper>
          <Container $margin="20px 0 0">
            {text ? (
              <article dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
              <p>{t('noContentAvailable')}</p>
            )}
          </Container>
        </PageWrapper>
      </I18nProviderClient>
    </>
  );
}

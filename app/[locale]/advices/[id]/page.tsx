import { getCurrentAdvice } from '@/features/petСare/api/api';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Header } from '@/widgets/Header/Header';
import { Breadcrumbs } from './_ui/Breadcrumbs/Breadcrumbs';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { ShareCard } from '@/entities/ShareCard/ShareCard';
import { BlurWrap } from './_ui/BlurWrap/BlurWrap';
import { Article } from './_ui/Article/Article';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const locale = getCurrentLocale();
  const data = await getCurrentAdvice(id);
  const indexLang =
    data?.title.findIndex(title => title.lang === locale) !== -1
      ? data?.title.findIndex(title => title.lang === locale)
      : 0;
  const indexDescLang =
    data?.description.findIndex(desc => desc.lang === locale) !== -1
      ? data?.description.findIndex(desc => desc.lang === locale)
      : 0;
  return {
    title: data.title[indexLang].value,
    description: data.description[indexDescLang].value.slice(0, 150),
  };
}

// export const metadata: Metadata = {
//   title: 'Advices',
//   description: 'Top tips for handling pets',
// };

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const data = await getCurrentAdvice(id);
  const locale = getCurrentLocale();

  const indexLang =
    data?.title.findIndex(title => title.lang === locale) !== -1
      ? data?.title.findIndex(title => title.lang === locale)
      : 0;
  return (
    <>
      <I18nProviderClient locale={locale}>
        <Header />
        <BlurWrap />
        <PageWrapper $alignItems="flex-start" $justifyContent="flex-start" $flexDirection="column">
          <Breadcrumbs title={data.title[indexLang].value} />
          <ShareCard data={data} />
          <Article data={data} />
        </PageWrapper>
      </I18nProviderClient>
    </>
  );
};
export default Page;

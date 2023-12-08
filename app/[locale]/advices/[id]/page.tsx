import { getCurrentAdvice } from '@/features/petСare/api/api';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Header } from '@/widgets/Header/Header';
import { Breadcrumbs } from './_ui/Breadcrumbs/Breadcrumbs';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { ShareCard } from '@/entities/ShareCard/ShareCard';
import { BlurWrap } from './_ui/BlurWrap/BlurWrap';
import { Article } from './_ui/Article/Article';

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
        {<Header />}
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

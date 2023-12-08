import { getCurrentAdvice } from '@/features/petСare/api/api';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Header } from '@/widgets/Header/Header';
import { Breadcrumbs } from './_ui/Breadcrumbs/Breadcrumbs';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { ShareCard } from '@/entities/ShareCard/ShareCard';

const Article = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const lang = getCurrentLocale();

  const data = await getCurrentAdvice(id);
  const locale = getCurrentLocale();

  const indexLang =
    data?.title.findIndex(title => title.lang === lang) !== -1
      ? data?.title.findIndex(title => title.lang === lang)
      : 0;
  const text = data?.description[indexLang]?.value;
  return (
    <>
      <I18nProviderClient locale={locale}>{<Header />}</I18nProviderClient>
      <PageWrapper $alignItems="flex-start" $justifyContent="flex-start" $flexDirection="column">
        <Breadcrumbs title={data.title[indexLang].value} />
        <ShareCard data={data} />
        {/* <div dangerouslySetInnerHTML={{ __html: text }} /> */}
      </PageWrapper>
    </>
  );
};
export default Article;

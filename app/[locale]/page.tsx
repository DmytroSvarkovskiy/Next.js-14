import { getI18n } from '@/locales/server';
import { Inputs } from '@/shared/Inputs';

export default async function Home() {
  const t = await getI18n();
  return <div>{t('birds')}</div>;
}

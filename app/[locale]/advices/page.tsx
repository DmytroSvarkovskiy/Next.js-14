import { Metadata } from 'next';

import { getI18n } from '@/locales/server';
import Content from './_ui/Content/Content';

export const metadata: Metadata = {
  title: 'Advices',
  description: 'Top tips for handling pets',
};

const Advice = async () => {
  const t = await getI18n();

  return (
    <>
      <Content />
    </>
  );
};
export default Advice;

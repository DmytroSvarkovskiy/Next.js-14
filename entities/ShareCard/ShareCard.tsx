'use client';
import { TOneAdvice } from '@/features/petСare/api/types';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  TelegramShareButton,
} from 'react-share';
import { CategoryName, MainImagePost, ShareWrapper, SharedButtonWrap, Wrapper } from './styled';
import { useCurrentLocale } from '@/locales/client';

export const ShareCard = ({ data }: { data: TOneAdvice }) => {
  const baseURL = process.env.NEXT_PUBLIC_URL_USER;
  const lang = useCurrentLocale();
  const url = `${baseURL}/${lang}/advices/${data._id}`;
  const indexLang = data?.subcategory?.title?.findIndex(title => title.lang === lang) ?? 0;

  return (
    <Wrapper>
      <ShareWrapper>
        <MainImagePost alt="photoPost" src={`${baseURL}/public/advice/${data.images[0]}`} />
        {data.subcategory?.title[indexLang]?.value.length && (
          <CategoryName $color={data?.subcategory?.color || '#0086BF'}>
            {data.subcategory?.title[indexLang]?.value}
          </CategoryName>
        )}
        <SharedButtonWrap>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={url}>
            <EmailIcon size={32} round />
          </EmailShareButton>
          <TelegramShareButton url={url}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </SharedButtonWrap>
      </ShareWrapper>
    </Wrapper>
  );
};

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Script from 'next/script';
import { FacebookIcon, FacebookShareButton } from 'react-share';

const name = 'Truong Nguyen';
export const siteTitle = 'Next.js Sample Website';
export interface LayoutProps {
  // children?: React.Component;
  home?: boolean;
  injectFB?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ home, children, injectFB }) => {
  const url = document.location.href;
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />

        {injectFB && (
          <Script
            src='https://connect.facebook.net/en_US/sdk.js'
            strategy='lazyOnload'
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`,
              )
            }
          />
        )}
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpeg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpeg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <>
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
          <div>
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </>
      )}
    </div>
  );
};
export default Layout;

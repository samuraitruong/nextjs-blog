import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first POST</title>
        <link rel='icon' href='/favicon.ico' />
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Post</h1>)
      <p className='title'>
        <Link href='/'>go back home</Link>

        <Image src='/images/profile.jpeg' width={200} height={200} />
      </p>
    </Layout>
  );
}

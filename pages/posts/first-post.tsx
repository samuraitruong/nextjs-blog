import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
export default function FirstPost() {
  return (
    <Layout injectFB>
      <Head>
        <title>My first POST</title>
      </Head>
      <h1>First Post</h1>)
      <p className='title'>
        <Link href='/'>go back home</Link>

        <Image src='/images/profile.jpeg' width={200} height={200} alt='' />
      </p>
    </Layout>
  );
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import buffer from '@turf/buffer';
import { point } from '@turf/helpers';

export default function Home() {
  const polygon = buffer(point([16.3738, 48.2082]), 125, {
    units: 'meters',
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SWC compiler repro of{' '}
          <a href="https://github.com/vercel/next.js/discussions/30237">
            this issue
          </a>
        </h1>

        <pre>
          <code>{JSON.stringify(polygon, null, 4)}</code>
        </pre>
      </main>
    </div>
  );
}

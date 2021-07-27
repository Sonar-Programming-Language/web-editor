import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Workspace from 'components/organisms/Workspace';
import Navbar from 'components/atoms/Navbar';

export default function Home() {
  return (
    <div className={``}>
      <Head>
        <title>{`SONAR`}</title>
        <meta name="description" content="Web-based code editor for the Sonar programming language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`h-screen flex flex-col`}>
        <Navbar />
        <Workspace />
      </div>
    </div>
  );
}

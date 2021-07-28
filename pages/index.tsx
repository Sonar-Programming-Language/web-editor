import Head from 'next/head';
import Workspace from 'components/organisms/Workspace';
import Navbar from 'components/atoms/Navbar';
import FloatingActionButton from 'components/atoms/FloatingActionButton';

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
        <FloatingActionButton />
      </div>
    </div>
  );
}

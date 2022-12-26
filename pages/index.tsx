import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Login from '../components/Login';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

export default function Home({ session }: { session: any }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main>
        <SideBar />
      </main>

      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export async function getServerSideProps(context: never) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

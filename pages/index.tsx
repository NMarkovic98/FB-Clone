import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Login from '../components/Login';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home({ session }: { session: any }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <SideBar />
        <Feed />
        {/* <Widgets /> */}
      </main>
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

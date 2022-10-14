import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = { time: new Date().toISOString() };
  return {
    props: data,
  };
}

export default function About({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>{time}</h1>
    </>
  );
}

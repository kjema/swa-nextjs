import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

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
      <h1>{time}</h1>
    </>
  );
}

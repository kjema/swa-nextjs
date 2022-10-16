import s from "@/styles/Home.module.css";
import Page from "@/ui/page/page";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import dynamic from "next/dynamic";

const UserViewLazy = dynamic(
  () => import("@/features/user/user-view").then((c) => c.UserView),
  {
    ssr: false,
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const date = new Date();
  const currentTime = new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(date);
  return {
    props: {
      currentTime,
    },
  };
};

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ currentTime }) => {
  return (
    <Page>
      <h1 className={s.title}>Next.js with Auth0 on SWA</h1>
      <p className={s.description}>
        Time from server: <code className={s.code}>{currentTime}</code>
      </p>
      <UserViewLazy />
    </Page>
  );
};

export default Home;

import Page from "@/ui/page/page";
import { withPageAuthRequired, type UserProfile } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";

export const getServerSideProps = withPageAuthRequired();

type ProfileProps = { user: UserProfile };
const Profile: NextPage<ProfileProps> = ({ user }) => {
  return (
    <Page>
      <div>
        <h1>{user.name}</h1>
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Page>
  );
};

export default Profile;

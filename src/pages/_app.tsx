import { SignedIn } from "@/components/control-components";
import Header from "@/core/header";
import "@/styles/globals.css";
import { UserProvider, type UserProfile } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps<{ user?: UserProfile }>) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <SignedIn>
        <Header />
        <Component {...pageProps} />
      </SignedIn>
    </UserProvider>
  );
}

export default MyApp;

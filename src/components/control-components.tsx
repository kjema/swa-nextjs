import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { PropsWithChildren } from "react";

export const SignedIn = withPageAuthRequired(
  ({ children }: PropsWithChildren<unknown>) => {
    return <>{children}</>;
  },
);

export const SignedOut = ({ children }: PropsWithChildren<unknown>) => {
  const { user } = useUser();
  if (user === undefined) {
    return <>{children}</>;
  }
  return null;
};

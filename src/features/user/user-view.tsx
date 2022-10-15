import s from "@/styles/Home.module.css";
import { useUser } from "./use-user";

export const UserView = () => {
  const { user, isLoading, isError } = useUser();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <pre>{JSON.stringify(isError)}</pre>;
  return (
    <p className={s.description} style={{ margin: 0 }}>
      User from API route: <code className={s.code}>{user?.name}</code>
    </p>
  );
};

import { SessionProvider } from "next-auth/react";

type DefaultProvider = {
  children: React.ReactNode;
};

export const DefaultProvider = ({ children }: DefaultProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};

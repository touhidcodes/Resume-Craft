import { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return <section className="max-w-[1170px] mx-auto py-28">{children}</section>;
};

export default Layout;

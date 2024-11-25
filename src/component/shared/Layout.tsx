import { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <section className="py-[60px] lg:py-[90px]">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">{children}</div>
    </section>
  );
};

export default Layout;

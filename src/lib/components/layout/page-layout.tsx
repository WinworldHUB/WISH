import { FC } from "react";
import PageMenu from "./page-menu";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div id="page" className="page">
      <PageMenu />
      {children}
    </div>
  );
};

export default PageLayout;

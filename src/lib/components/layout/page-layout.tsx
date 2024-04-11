import { FC } from "react";
import PageMenu from "./page-menu";
import PageFooter from "./page-footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div id="page" className="page">
      <PageMenu />
      {children}
      <PageFooter />
    </div>
  );
};

export default PageLayout;

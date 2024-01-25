import PageFooter from "./page-footer";
import PageMenu from "./page-menu";

interface PageLayoutProps {
  menu: MenuItem[];
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ menu, children }) => {
  return (
    <div>
      <PageMenu menu={menu} activePageSlug="home" onPageChange={() => {}} />
      {children}
      <PageFooter />
    </div>
  );
};

export default PageLayout;

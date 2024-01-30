import { MENU } from "../constants";
import PageFooter from "./page-footer";
import PageMenu from "./page-menu";

interface PageLayoutProps {
  activePageSlug: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  activePageSlug,
  children,
}) => {
  return (
    <div>
      <PageMenu
        menu={MENU}
        activePageSlug={activePageSlug}
        onPageChange={() => {}}
      />
      {children}
      <PageFooter />
    </div>
  );
};

export default PageLayout;

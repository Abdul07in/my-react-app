import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className='d-flex flex-column min-vh-100'>{children}</div>;
};

export default MainLayout;

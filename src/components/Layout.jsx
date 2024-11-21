import { Outlet } from 'react-router-dom';
import {Header} from './Header';
import Navbar from './Sidebar2';
import './layout.css'

 const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Header />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;



// components/layout.js

import AdminNavbar from '../common/admin/AdminNavbar';
import Sidebar from '../common/admin/SideBar';
import Footer from './FooterAdmin';

export default function AdminLayout({ children }: any) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <main className='min-h-screen'>
          {children}
        </main>
      <Footer />
      </div>
    </>
  )
}

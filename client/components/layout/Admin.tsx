// components/layout.js

import AdminNavbar from '../admin/AdminNavbar';
import Sidebar from '../admin/SideBar';
import Footer from '../admin/FooterAdmin';

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

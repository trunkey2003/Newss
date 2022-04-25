import React from 'react'
import Footer from '../admin/FooterAdmin'
import Nav from '../common/Nav'


export default function Layout({ children }: any) {
  return (
    <>
      <Nav/>
      <main className='min-h-screen'>
          {children}
        </main>
      <Footer />
    </>
  )
}

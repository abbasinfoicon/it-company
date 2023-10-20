"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();
  const validRoutes = ['/login', '/signup', '/forgot-password', '/reset-password','/upload'];

  return (
    <div className={`${validRoutes.includes(pathname) ? 'd-none' : 'copyright'}`}>© Copyrights
      <a href="#">akkhor</a> 2019. All rights reserved. Designed by
      <a href="#">PsdBosS</a>
    </div>
  )
}

export default Footer
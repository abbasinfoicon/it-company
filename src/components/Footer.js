"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();
  const validRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];

  return (
    <div className={`${validRoutes.includes(pathname) ? 'd-none' : 'copyright'}`}>© Copyrights
      <Link href="/">Infoicon</Link> 2023. All rights reserved. Designed by
      <Link href="/">Infoicon</Link>
    </div>
  )
}

export default Footer
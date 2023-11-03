import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import Authprovider from '@/components/Authprovider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AKKHOR | Home 1',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body className={inter.className}>
        <Authprovider>
          <ToastContainer />
          <Header />
          <div className="dashboard-page-one">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </Authprovider>
      </body>
    </html>
  )
}

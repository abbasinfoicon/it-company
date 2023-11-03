"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

const Header = () => {
  const session = useSession();
  const dropdownToggle = (event) => {
    const dropdown = event.currentTarget.parentNode.closest('.navbar-item.dropdown');
    const nextDiv = dropdown.querySelector('.dropdown-menu');
    const dropdowns = document.querySelectorAll('.navbar-item.dropdown .dropdown-menu');
    dropdowns.forEach((d) => {
      if (d !== nextDiv) {
        d.classList.remove('show');
      }
    });
    nextDiv.classList.toggle('show');
  };

  const router = useRouter();
  
  const toggleSidebar = () => {
    document.body.classList.toggle('sidebar-collapsed');
  }
  const showCollaps = () => {
    const navCollaps = document.querySelector('.navbar-collapse');
    navCollaps.classList.toggle('show');
  }
  const showSidebarMenu = () => {
    document.body.classList.toggle('sidebar-collapsed-mobile');
  }

  const pathname = usePathname();
  const validRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];
  return (
    <div className={`${validRoutes.includes(pathname) ? 'd-none' : 'navbar navbar-expand-md header-menu-one bg-light'}`}>
      <div className="nav-bar-header-one">
        <div className="header-logo">
          <Link href="/">
            <img src="/assets/img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="toggle-button sidebar-toggle" onClick={toggleSidebar}>
          <button type="button" className="item-link">
            <span className="btn-icon-wrap">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <div className="d-md-none mobile-nav-bar">
        <button className="navbar-toggler pulse-animation" type="button" onClick={showCollaps}>
          <i className="far fa-arrow-alt-circle-down"></i>
        </button>

        <button type="button" className="navbar-toggler sidebar-toggle-mobile" onClick={showSidebarMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="header-main-menu collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="navbar-item header-search-bar">
            <div className="input-group stylish-input-group">
              <span className="input-group-addon">
                <button type="submit">
                  <span className="flaticon-search" aria-hidden="true"></span>
                </button>
              </span>
              <input type="text" className="form-control" placeholder="Find Something . . ." />
            </div>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="navbar-item dropdown header-admin">
            <button className="navbar-nav-link dropdown-toggle" onClick={dropdownToggle}>
              <div className="admin-title">
                <h5 className="item-title">{session.status === "authenticated" ? session.data?.user?.name : "dummy name"}</h5>
                <span>Admin</span>
              </div>
              <div className="admin-img">
                <img src={session.status === "authenticated" ? session.data?.user?.image : "/assets/img/figure/admin.jpg"} alt="Admin" style={{ width: "40px", height: "auto" }} />
              </div>
            </button>

            <div className="dropdown-menu dropdown-menu-right">
              <div className="item-header">
                <h6 className="item-title">{session.data?.user?.name}</h6>
              </div>
              <div className="item-content">
                <ul className="settings-list">
                  <li><Link href="/"><i className="flaticon-user"></i>My Profile</Link></li>
                  <li><Link href="/"><i className="flaticon-list"></i>Task</Link></li>
                  <li><Link href="/"><i
                    className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</Link>
                  </li>
                  <li><Link href="/"><i className="flaticon-gear-loading"></i>Account Settings</Link></li>
                  <li><button onClick={() => signOut("google")} ><i className="flaticon-turn-off"></i>Log Out</button></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="navbar-item dropdown header-message">
            <button className="navbar-nav-link dropdown-toggle" onClick={dropdownToggle}>
              <i className="far fa-envelope"></i>
              <div className="item-title d-md-none text-16 mg-l-10">Message</div>
              <span>5</span>
            </button>

            <div className="dropdown-menu dropdown-menu-right">
              <div className="item-header">
                <h6 className="item-title">05 Message</h6>
              </div>
              <div className="item-content">
                <div className="media">
                  <div className="item-img bg-skyblue author-online">
                    <img src="/assets/img/figure/student11.png" alt="img" />
                  </div>
                  <div className="media-body space-sm">
                    <div className="item-title">
                      <Link href="/">
                        <span className="item-name">Maria Zaman</span>
                        <span className="item-time">18:30</span>
                      </Link>
                    </div>
                    <p>What is the reason of buy this item.
                      Is it usefull for me.....</p>
                  </div>
                </div>
                <div className="media">
                  <div className="item-img bg-yellow author-online">
                    <img src="/assets/img/figure/student12.png" alt="img" />
                  </div>
                  <div className="media-body space-sm">
                    <div className="item-title">
                      <Link href="/">
                        <span className="item-name">Benny Roy</span>
                        <span className="item-time">10:35</span>
                      </Link>
                    </div>
                    <p>What is the reason of buy this item.
                      Is it usefull for me.....</p>
                  </div>
                </div>
                <div className="media">
                  <div className="item-img bg-pink">
                    <img src="/assets/img/figure/student13.png" alt="img" />
                  </div>
                  <div className="media-body space-sm">
                    <div className="item-title">
                      <Link href="/">
                        <span className="item-name">Steven</span>
                        <span className="item-time">02:35</span>
                      </Link>
                    </div>
                    <p>What is the reason of buy this item.
                      Is it usefull for me.....</p>
                  </div>
                </div>
                <div className="media">
                  <div className="item-img bg-violet-blue">
                    <img src="/assets/img/figure/student11.png" alt="img" />
                  </div>
                  <div className="media-body space-sm">
                    <div className="item-title">
                      <Link href="/">
                        <span className="item-name">Joshep Joe</span>
                        <span className="item-time">12:35</span>
                      </Link>
                    </div>
                    <p>What is the reason of buy this item.
                      Is it usefull for me.....</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="navbar-item dropdown header-notification">
            <button className="navbar-nav-link dropdown-toggle" onClick={dropdownToggle}>
              <i className="far fa-bell"></i>
              <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
              <span>8</span>
            </button>

            <div className="dropdown-menu dropdown-menu-right">
              <div className="item-header">
                <h6 className="item-title">03 Notifiacations</h6>
              </div>
              <div className="item-content">
                <div className="media">
                  <div className="item-icon bg-skyblue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="media-body space-sm">
                    <div className="post-title">Complete Today Task</div>
                    <span>1 Mins ago</span>
                  </div>
                </div>
                <div className="media">
                  <div className="item-icon bg-orange">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="media-body space-sm">
                    <div className="post-title">Director Metting</div>
                    <span>20 Mins ago</span>
                  </div>
                </div>
                <div className="media">
                  <div className="item-icon bg-violet-blue">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="media-body space-sm">
                    <div className="post-title">Update Password</div>
                    <span>45 Mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="navbar-item header-language">
            <i className="fas fa-globe-americas"></i>
            <select className='form-control'>
              <option>EN</option>
              <option>FR</option>
              <option>GE</option>
              <option>IN</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
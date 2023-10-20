"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const [isActive, setIsActive] = useState('');

    const pathname = usePathname();
    const validRoutes = ['/login', '/signup', '/forgot-password', '/reset-password', '/upload'];

    const handleClick = (event) => {
        setIsActive(event.currentTarget.id);
    };

    return (
        <div className={`${validRoutes.includes(pathname) ? 'd-none' : 'sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color'}`}>
            <div className="mobile-sidebar-header d-md-none">
                <div className="header-logo">
                    <Link href="/"><img src="assets/img/logo1.png" alt="logo" /></Link>
                </div>
            </div>

            <div className="sidebar-menu-content">
                <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                    <li className={`nav-item sidebar-nav-item ${isActive === "1" ? 'active' : ''}`} id="1" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="/" className="nav-link"><i className="fas fa-angle-right"></i>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="index3" className="nav-link"><i className="fas fa-angle-right"></i>Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="index4" className="nav-link"><i className="fas fa-angle-right"></i>Parents</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="index5" className="nav-link"><i className="fas fa-angle-right"></i>Teachers</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "2" ? 'active' : ''}`} id="2" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-classmates"></i><span>Students</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-student" className="nav-link"><i className="fas fa-angle-right"></i>All
                                    Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="student-details" className="nav-link"><i className="fas fa-angle-right"></i>Student
                                    Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="admit-form" className="nav-link"><i className="fas fa-angle-right"></i>Admission
                                    Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="student-promotion" className="nav-link"><i className="fas fa-angle-right"></i>Student
                                    Promotion</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "3" ? 'active' : ''}`} id="3" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-multiple-users-silhouette"></i><span>Teachers</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-teacher" className="nav-link"><i className="fas fa-angle-right"></i>All
                                    Teachers</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="teacher-details" className="nav-link"><i className="fas fa-angle-right"></i>Teacher
                                    Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="add-teacher" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                    Teacher</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="teacher-payment" className="nav-link"><i className="fas fa-angle-right"></i>Payment</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "4" ? 'active' : ''}`} id="4" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-couple"></i><span>Parents</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-parents" className="nav-link"><i className="fas fa-angle-right"></i>All
                                    Parents</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="parents-details" className="nav-link"><i className="fas fa-angle-right"></i>Parents
                                    Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="add-parents" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                    Parent</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "5" ? 'active' : ''}`} id="5" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-books"></i><span>Library</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-book" className="nav-link"><i className="fas fa-angle-right"></i>All
                                    Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="add-book" className="nav-link"><i className="fas fa-angle-right"></i>Add New
                                    Book</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "6" ? 'active' : ''}`} id="6" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-technological"></i><span>Acconunt</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-fees" className="nav-link"><i className="fas fa-angle-right"></i>All Fees
                                    Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="all-expense" className="nav-link"><i className="fas fa-angle-right"></i>Expenses</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="add-expense" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                    Expenses</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "7" ? 'active' : ''}`} id="7" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i
                            className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="all-class" className="nav-link"><i className="fas fa-angle-right"></i>All
                                    Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="add-class" className="nav-link"><i className="fas fa-angle-right"></i>Add New
                                    Class</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="all-subject" className="nav-link"><i className="flaticon-open-book"></i><span>Subject</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="class-routine" className="nav-link"><i className="flaticon-calendar"></i><span>Class
                            Routine</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="student-attendence" className="nav-link"><i
                            className="flaticon-checklist"></i><span>Attendence</span></Link>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "8" ? 'active' : ''}`} id="8" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-shopping-list"></i><span>Exam</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="exam-schedule" className="nav-link"><i className="fas fa-angle-right"></i>Exam
                                    Schedule</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="exam-grade" className="nav-link"><i className="fas fa-angle-right"></i>Exam
                                    Grades</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="transport" className="nav-link"><i
                            className="flaticon-bus-side-view"></i><span>Transport</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="hostel" className="nav-link"><i className="flaticon-bed"></i><span>Hostel</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="notice-board" className="nav-link"><i className="flaticon-script"></i><span>Notice</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="messaging" className="nav-link"><i className="flaticon-chat"></i><span>Messeage</span></Link>
                    </li>
                    <li className={`nav-item sidebar-nav-item ${isActive === "9" ? 'active' : ''}`} id="9" onClick={handleClick}>
                        <Link href="#" className="nav-link"><i className="flaticon-menu-1"></i><span>UI Elements</span></Link>
                        <ul className="nav sub-group-menu">
                            <li className="nav-item">
                                <Link href="notification-alart" className="nav-link"><i className="fas fa-angle-right"></i>Alart</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="button" className="nav-link"><i className="fas fa-angle-right"></i>Button</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="grid" className="nav-link"><i className="fas fa-angle-right"></i>Grid</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="modal" className="nav-link"><i className="fas fa-angle-right"></i>Modal</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="progress-bar" className="nav-link"><i className="fas fa-angle-right"></i>Progress
                                    Bar</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="ui-tab" className="nav-link"><i className="fas fa-angle-right"></i>Tab</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="ui-widget" className="nav-link"><i className="fas fa-angle-right"></i>Widget</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="map" className="nav-link"><i className="flaticon-planet-earth"></i><span>Map</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="account-settings" className="nav-link"><i
                            className="flaticon-settings"></i><span>Account</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
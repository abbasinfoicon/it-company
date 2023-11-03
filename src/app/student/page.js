import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import React from 'react'

const Student = () => {
    return (
        <div className="dashboard-page-one">
            <div className="dashboard-content-one">
                <Breadcrumbs name="Students" title="All Students" />

                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>All Students Data</h3>
                            </div>
                            <div className="dropdown">
                                <Link href="/student/add-student" className='btn-fill-lmd radius-30 text-light shadow-dodger-blue bg-dodger-blue'>Add New Student</Link>
                            </div>
                        </div>

                        <form className="mg-b-20">
                            <div className="row gutters-8">
                                <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Roll ..." className="form-control" />
                                </div>
                                <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Name ..." className="form-control" />
                                </div>
                                <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Class ..." className="form-control" />
                                </div>
                                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                </div>
                            </div>
                        </form>

                        <div className="table-responsive">
                            <div id='DataTables_Table_0_wrapper' className='dataTables_wrapper no-footer'>
                                <table className="table display data-table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input checkAll" />
                                                    <label className="form-check-label">Roll</label>
                                                </div>
                                            </th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Parents</th>
                                            <th>Address</th>
                                            <th>Date Of Birth</th>
                                            <th>Phone</th>
                                            <th>E-mail</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">#0021</label>
                                                </div>
                                            </td>
                                            <td className="text-center"><img src="/assets/img/figure/student2.png" alt="student" /></td>
                                            <td>Mark Willy</td>
                                            <td>Male</td>
                                            <td>2</td>
                                            <td>A</td>
                                            <td>Jack Sparrow </td>
                                            <td>TA-107 Newyork</td>
                                            <td>02/05/2001</td>
                                            <td>+ 123 9988568</td>
                                            <td>kazifahim93@gmail.com</td>
                                            <td>
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span className="flaticon-more-button-of-three-dots"></span>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#"><i
                                                            className="fas fa-times text-orange-red"></i>Close</a>
                                                        <a className="dropdown-item" href="#"><i
                                                            className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                        <a className="dropdown-item" href="#"><i
                                                            className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student
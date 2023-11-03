import studentAction from '@/action/studentAction';
import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'

const addStudent = () => {   

    return (
        <div className="dashboard-page-one">
            <div className="dashboard-content-one">
                <Breadcrumbs name="Students" title="Add New Students" />

                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>Add New Students</h3>
                            </div>
                            <div className="dropdown">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i
                                        className="fas fa-times text-orange-red"></i>Close</a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>

                        <form className="new-added-form" action={studentAction}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>First Name *</label>
                                    <input type="text" name="fname" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Last Name *</label>
                                    <input type="text" name="lname" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Gender *</label>
                                    <select className="form-control select-control" name="gender">
                                        <option value="">Please Select Gender *</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Date Of Birth *</label>
                                    <input type="date" name="dob" placeholder="dd/mm/yyyy" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Roll</label>
                                    <input type="number" name="roll" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Blood Group *</label>
                                    <select className="form-control select-control" name="blood">
                                        <option value="">Please Select Group *</option>
                                        <option value="a+">A+</option>
                                        <option value="a-">A-</option>
                                        <option value="b+">B+</option>
                                        <option value="b-">B-</option>
                                        <option value="o+">O+</option>
                                        <option value="o-">O-</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Religion *</label>
                                    <select className="form-control select-control" name="religion">
                                        <option value="">Please Select Religion *</option>
                                        <option value="islam">Islam</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="christian">Christian</option>
                                        <option value="buddish">Buddish</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>E-Mail *</label>
                                    <input type="email" name="email" placeholder="" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class *</label>
                                    <select className="form-control select-control" name="clas">
                                        <option value="">Please Select Class *</option>
                                        <option value="play">Play</option>
                                        <option value="nursery">Nursery</option>
                                        <option value="one">One</option>
                                        <option value="two">Two</option>
                                        <option value="three">Three</option>
                                        <option value="four">Four</option>
                                        <option value="five">Five</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Section *</label>
                                    <select className="form-control select-control" name="section">
                                        <option value="">Please Select Section *</option>
                                        <option value="Pink">Pink</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Bird">Bird</option>
                                        <option value="Rose">Rose</option>
                                        <option value="Red">Red</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Admission ID</label>
                                    <input type="text" name="admission" placeholder="Enter Admission ID" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Phone *</label>
                                    <input type="text" name="phone" placeholder="Enter Phone" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father Name</label>
                                    <input type="text" name="father" placeholder="Enter Father Name" className="form-control" />
                                </div>
                                <div className="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Mother Name</label>
                                    <input type="text" name="mother" placeholder="Enter Mother Name" className="form-control" />
                                </div>
                                <div className="col-lg-6 col-12 form-group">
                                    <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                    <input type="file" name="img" className="form-control-file" />
                                </div>
                                <div className="col-lg-6 col-12 form-group">
                                    <label>Short BIO</label>
                                    <textarea className="textarea form-control" name="bio" id="form-message" cols="10"
                                        rows="9"></textarea>
                                </div>
                                <div className="col-lg-6 col-12 form-group">
                                    <label>Address</label>
                                    <textarea className="textarea form-control" name="address" id="form-address" cols="10"
                                        rows="9"></textarea>
                                </div>

                                <div className="col-12 form-group mg-t-8">
                                    <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addStudent
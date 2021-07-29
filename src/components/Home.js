import React from "react";
import Header from "./Header";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
            <div>
                <div className="page-wrapper">
                    <div className="page-content">
                        {/*breadcrumb*/}
                        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div className="breadcrumb-title pe-3">Widget</div>
                            <div className="ps-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0 p-0">
                                        <li className="breadcrumb-item"><a href="javascript:;"><i
                                            className="bx bx-home-alt"/></a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Widgets</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="ms-auto">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-light">Settings</button>
                                    <button type="button"
                                            className="btn btn-light dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"><span
                                        className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"><a
                                        className="dropdown-item" href="javascript:;">Action</a>
                                        <a className="dropdown-item" href="javascript:;">Another action</a>
                                        <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" href="javascript:;">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end breadcrumb*/}
                        <h6 className="mb-0 text-uppercase">Data Widgets</h6>
                        <hr/>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                            <div className="col">
                                <div className="card radius-10 ">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Users</p>
                                                <h5 className="mb-0">85,028</h5>
                                            </div>
                                            <div className="dropdown ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                     data-bs-toggle="dropdown"><i
                                                    className="bx bx-dots-horizontal-rounded font-22"/>
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another
                                                        action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else
                                                        here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className id="w-chart1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Page Views</p>
                                                <h5 className="mb-0">42,892</h5>
                                            </div>
                                            <div className="dropdown ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                     data-bs-toggle="dropdown"><i
                                                    className="bx bx-dots-horizontal-rounded font-22"/>
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another
                                                        action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else
                                                        here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className id="w-chart2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Avg. Session Duration</p>
                                                <h5 className="mb-0">00:03:20</h5>
                                            </div>
                                            <div className="dropdown ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                     data-bs-toggle="dropdown"><i
                                                    className="bx bx-dots-horizontal-rounded font-22"/>
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another
                                                        action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else
                                                        here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className id="w-chart3"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Bounce Rate</p>
                                                <h5 className="mb-0">51.46%</h5>
                                            </div>
                                            <div className="dropdown ms-auto">
                                                <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                     data-bs-toggle="dropdown"><i
                                                    className="bx bx-dots-horizontal-rounded font-22"/>
                                                </div>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Another
                                                        action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <li><a className="dropdown-item" href="javascript:;">Something else
                                                        here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className id="w-chart4"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Orders</p>
                                                <h5 className="mb-0">867</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-cart font-30"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className id="w-chart5"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Income</p>
                                                <h5 className="mb-0">$52,945</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-wallet font-30"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className id="w-chart6"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Users</p>
                                                <h5 className="mb-0">24.5K</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-bulb font-30"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className id="w-chart7"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Comments</p>
                                                <h5 className="mb-0">869</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-chat font-30"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className id="w-chart8"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Orders</p>
                                                <h5 className="mb-0">867</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-cart font-30"/>
                                            </div>
                                        </div>
                                        <div className="progress radius-10 mt-4" style={{height: '4.5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '46%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Income</p>
                                                <h5 className="mb-0">$52,945</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-wallet font-30"/>
                                            </div>
                                        </div>
                                        <div className="progress radius-10 mt-4" style={{height: '4.5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '72%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Users</p>
                                                <h5 className="mb-0">24.5K</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-bulb font-30"/>
                                            </div>
                                        </div>
                                        <div className="progress radius-10 mt-4" style={{height: '4.5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '68%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 overflow-hidden">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Comments</p>
                                                <h5 className="mb-0">869</h5>
                                            </div>
                                            <div className="ms-auto text-white"><i className="bx bx-chat font-30"/>
                                            </div>
                                        </div>
                                        <div className="progress radius-10 mt-4" style={{height: '4.5px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '66%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <h6 className="mb-0 text-uppercase">Static Widgets</h6>
                        <hr/>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Revenue</p>
                                                <h4 className="my-1">$4805</h4>
                                                <p className="mb-0 font-13"><i
                                                    className="bx bxs-up-arrow align-middle"/>$34 from last week</p>
                                            </div>
                                            <div className="widgets-icons ms-auto"><i className="bx bxs-wallet"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Total Customers</p>
                                                <h4 className="my-1">8.4K</h4>
                                                <p className="mb-0 font-13"><i
                                                    className="bx bxs-up-arrow align-middle"/>$24 from last week</p>
                                            </div>
                                            <div className="widgets-icons ms-auto"><i className="bx bxs-group"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-secondary">Store Visitors</p>
                                                <h4 className="my-1">59K</h4>
                                                <p className="mb-0 font-13"><i
                                                    className="bx bxs-down-arrow align-middle"/>$34 from last week</p>
                                            </div>
                                            <div className="widgets-icons ms-auto"><i className="bx bxs-binoculars"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Bounce Rate</p>
                                                <h4 className="my-1">34.46%</h4>
                                                <p className="mb-0 font-13"><i
                                                    className="bx bxs-down-arrow align-middle"/>12.2% from last week</p>
                                            </div>
                                            <div className="widgets-icons ms-auto"><i
                                                className="bx bx-line-chart-down"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Chrome Users</p>
                                                <h4 className="my-1">42K</h4>
                                            </div>
                                            <div className="ms-auto font-35 text-white"><i className="bx bxl-chrome"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Github Users</p>
                                                <h4 className="my-1">56M</h4>
                                            </div>
                                            <div className="ms-auto font-35 text-white"><i className="bx bxl-github"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Firefox Users</p>
                                                <h4 className="my-1">42M</h4>
                                            </div>
                                            <div className="ms-auto font-35 text-white"><i className="bx bxl-firefox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0">Shopify Users</p>
                                                <h4 className="my-1">85M</h4>
                                            </div>
                                            <div className="ms-auto font-35 text-white"><i className="bx bxl-shopify"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5">
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="widgets-icons rounded-circle mx-auto mb-3"><i
                                                className="bx bxl-facebook-square"/>
                                            </div>
                                            <h4 className="my-1">84K</h4>
                                            <p className="mb-0">Facebook Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="widgets-icons rounded-circle mx-auto mb-3"><i
                                                className="bx bxl-twitter"/>
                                            </div>
                                            <h4 className="my-1">34M</h4>
                                            <p className="mb-0">Twitter Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="widgets-icons rounded-circle mx-auto mb-3"><i
                                                className="bx bxl-linkedin-square"/>
                                            </div>
                                            <h4 className="my-1">56K</h4>
                                            <p className="mb-0">Linkedin Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="widgets-icons rounded-circle mx-auto mb-3"><i
                                                className="bx bxl-youtube"/>
                                            </div>
                                            <h4 className="my-1">38M</h4>
                                            <p className="mb-0">YouTube Subscribers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="widgets-icons rounded-circle mx-auto mb-3"><i
                                                className="bx bxl-dropbox"/>
                                            </div>
                                            <h4 className="my-1">28K</h4>
                                            <p className="mb-0">Dropbox Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <h6 className="mb-0 text-uppercase">Color Static Widgets</h6>
                        <hr/>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                            <div className="col">
                                <div className="card radius-10 bg-primary bg-gradient">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-white">Total Orders</p>
                                                <h4 className="my-1 text-white">845</h4>
                                            </div>
                                            <div className="text-white ms-auto font-35"><i className="bx bx-cart-alt"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-danger bg-gradient">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-white">Total Income</p>
                                                <h4 className="my-1 text-white">$89,245</h4>
                                            </div>
                                            <div className="text-white ms-auto font-35"><i className="bx bx-dollar"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-warning bg-gradient">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-dark">Total Users</p>
                                                <h4 className="text-dark my-1">24.5K</h4>
                                            </div>
                                            <div className="text-dark ms-auto font-35"><i className="bx bx-user-pin"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-success bg-gradient">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-white">Comments</p>
                                                <h4 className="my-1 text-white">8569</h4>
                                            </div>
                                            <div className="text-white ms-auto font-35"><i
                                                className="bx bx-comment-detail"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-success">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-white">Revenue</p>
                                                <h4 className="my-1 text-white">$4805</h4>
                                                <p className="mb-0 font-13 text-white"><i
                                                    className="bx bxs-up-arrow align-middle"/>$34 from last week</p>
                                            </div>
                                            <div className="widgets-icons bg-white text-success ms-auto"><i
                                                className="bx bxs-wallet"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-info">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-dark">Total Customers</p>
                                                <h4 className="my-1 text-dark">8.4K</h4>
                                                <p className="mb-0 font-13 text-dark"><i
                                                    className="bx bxs-up-arrow align-middle"/>$24 from last week</p>
                                            </div>
                                            <div className="widgets-icons bg-white text-dark ms-auto"><i
                                                className="bx bxs-group"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-danger">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-white">Store Visitors</p>
                                                <h4 className="my-1 text-white">59K</h4>
                                                <p className="mb-0 font-13 text-white"><i
                                                    className="bx bxs-down-arrow align-middle"/>$34 from last week</p>
                                            </div>
                                            <div className="widgets-icons bg-white text-danger ms-auto"><i
                                                className="bx bxs-binoculars"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card radius-10 bg-warning">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <p className="mb-0 text-dark">Bounce Rate</p>
                                                <h4 className="my-1 text-dark">34.46%</h4>
                                                <p className="mb-0 font-13 text-dark"><i
                                                    className="bx bxs-down-arrow align-middle"/>12.2% from last week</p>
                                            </div>
                                            <div className="widgets-icons bg-white text-dark ms-auto"><i
                                                className="bx bx-line-chart-down"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
                {/*end page wrapper */}
                {/*start overlay*/}
                <div className="overlay toggle-icon"/>
                {/*end overlay*/}
                {/*Start Back To Top Button*/} <a href="javaScript:;" className="back-to-top"><i
                className="bx bxs-up-arrow-alt"/></a>
            </div>
            </div>
        )
    }
}
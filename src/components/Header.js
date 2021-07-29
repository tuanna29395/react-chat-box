import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return(
            <div className="topbar d-flex align-items-center">
                <nav className="navbar navbar-expand">
                    <div className="mobile-toggle-menu"><i className="bx bx-menu"/>
                    </div>
                    <div className="search-bar flex-grow-1">
                        <div className="position-relative search-bar-box">
                            <input type="text" className="form-control search-control" placeholder="Type to search..."/>
                            <span className="position-absolute top-50 search-show translate-middle-y"><i
                                className="bx bx-search"/></span>
                            <span className="position-absolute top-50 search-close translate-middle-y"><i
                                className="bx bx-x"/></span>
                        </div>
                    </div>
                    <div className="top-menu ms-auto">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-white"
                                      aria-current="page"
                                ><i className='bx bx-home me-1'></i>Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link text-white"
                                      aria-current="page"
                                ><i className='bx bx-log-in me-1'></i>Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link text-white" aria-current="page"
                                ><i className='bx bx-log-out me-1'></i>Register
                                </Link>
                            </li>
                            <li className="nav-item mobile-search-icon">
                                <Link className="nav-link" href="#"> <i className="bx bx-search"/>
                                </Link>
                            </li>
                            <li className="nav-item dropdown dropdown-large">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false"> <i className="bx bx-category"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div className="row row-cols-3 g-3 p-3">
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-cosmic text-white"><i
                                                className="bx bx-group"/>
                                            </div>
                                            <div className="app-title">Teams</div>
                                        </div>
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-burning text-white"><i
                                                className="bx bx-atom"/>
                                            </div>
                                            <div className="app-title">Projects</div>
                                        </div>
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-lush text-white"><i
                                                className="bx bx-shield"/>
                                            </div>
                                            <div className="app-title">Tasks</div>
                                        </div>
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-kyoto text-dark"><i
                                                className="bx bx-notification"/>
                                            </div>
                                            <div className="app-title">Feeds</div>
                                        </div>
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-blues text-dark"><i
                                                className="bx bx-file"/>
                                            </div>
                                            <div className="app-title">Files</div>
                                        </div>
                                        <div className="col text-center">
                                            <div className="app-box mx-auto bg-gradient-moonlit text-white"><i
                                                className="bx bx-filter-alt"/>
                                            </div>
                                            <div className="app-title">Alerts</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown dropdown-large">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                   href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                    className="alert-count">7</span>
                                    <i className="bx bx-bell"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:;">
                                        <div className="msg-header">
                                            <p className="msg-header-title">Notifications</p>
                                            <p className="msg-header-clear ms-auto">Marks all as read</p>
                                        </div>
                                    </a>
                                    <div className="header-notifications-list">
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-primary text-primary"><i
                                                    className="bx bx-group"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">New Customers<span
                                                        className="msg-time float-end">14 Sec
                                ago</span></h6>
                                                    <p className="msg-info">5 new user registered</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-danger text-danger"><i
                                                    className="bx bx-cart-alt"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">New Orders <span
                                                        className="msg-time float-end">2 min
                                ago</span></h6>
                                                    <p className="msg-info">You have recived new orders</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-success text-success"><i
                                                    className="bx bx-file"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">24 PDF File<span
                                                        className="msg-time float-end">19 min
                                ago</span></h6>
                                                    <p className="msg-info">The pdf files generated</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-warning text-warning"><i
                                                    className="bx bx-send"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Time Response <span
                                                        className="msg-time float-end">28 min
                                ago</span></h6>
                                                    <p className="msg-info">5.1 min avarage time response</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-info text-info"><i
                                                    className="bx bx-home-circle"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">New Product Approved <span
                                                        className="msg-time float-end">2 hrs ago</span></h6>
                                                    <p className="msg-info">Your new product has approved</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-danger text-danger"><i
                                                    className="bx bx-message-detail"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">New Comments <span
                                                        className="msg-time float-end">4 hrs
                                ago</span></h6>
                                                    <p className="msg-info">New customer comments recived</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-success text-success"><i
                                                    className="bx bx-check-square"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Your item is shipped <span
                                                        className="msg-time float-end">5 hrs
                                ago</span></h6>
                                                    <p className="msg-info">Successfully shipped your item</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-primary text-primary"><i
                                                    className="bx bx-user-pin"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">New 24 authors<span
                                                        className="msg-time float-end">1 day
                                ago</span></h6>
                                                    <p className="msg-info">24 new authors joined last week</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-warning text-warning"><i
                                                    className="bx bx-door-open"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Defense Alerts <span
                                                        className="msg-time float-end">2 weeks
                                ago</span></h6>
                                                    <p className="msg-info">45% less alerts last 4 weeks</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a href="javascript:;">
                                        <div className="text-center msg-footer">View All Notifications</div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown dropdown-large">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                   href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                    className="alert-count">8</span>
                                    <i className="bx bx-comment"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:;">
                                        <div className="msg-header">
                                            <p className="msg-header-title">Messages</p>
                                            <p className="msg-header-clear ms-auto">Marks all as read</p>
                                        </div>
                                    </a>
                                    <div className="header-message-list">
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Daisy Anderson <span
                                                        className="msg-time float-end">5 sec
                                ago</span></h6>
                                                    <p className="msg-info">The standard chunk of lorem</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Althea Cabardo <span
                                                        className="msg-time float-end">14
                                sec ago</span></h6>
                                                    <p className="msg-info">Many desktop publishing packages</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Oscar Garner <span
                                                        className="msg-time float-end">8 min
                                ago</span></h6>
                                                    <p className="msg-info">Various versions have evolved over</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Katherine Pechon <span
                                                        className="msg-time float-end">15
                                min ago</span></h6>
                                                    <p className="msg-info">Making this the first true generator</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Amelia Doe <span
                                                        className="msg-time float-end">22 min
                                ago</span></h6>
                                                    <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Cristina Jhons <span
                                                        className="msg-time float-end">2 hrs
                                ago</span></h6>
                                                    <p className="msg-info">The passage is attributed to an unknown</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">James Caviness <span
                                                        className="msg-time float-end">4 hrs
                                ago</span></h6>
                                                    <p className="msg-info">The point of using Lorem</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Peter Costanzo <span
                                                        className="msg-time float-end">6 hrs
                                ago</span></h6>
                                                    <p className="msg-info">It was popularised in the 1960s</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">David Buckley <span
                                                        className="msg-time float-end">2 hrs
                                ago</span></h6>
                                                    <p className="msg-info">Various versions have evolved over</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Thomas Wheeler <span
                                                        className="msg-time float-end">2 days
                                ago</span></h6>
                                                    <p className="msg-info">If you are going to use a passage</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="javascript:;">
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img src="https://via.placeholder.com/110x110"
                                                         className="msg-avatar" alt="user avatar"/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">Johnny Seitz <span
                                                        className="msg-time float-end">5 days
                                ago</span></h6>
                                                    <p className="msg-info">All the Lorem Ipsum generators</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a href="javascript:;">
                                        <div className="text-center msg-footer">View All Messages</div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="user-box dropdown">
                        <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                           href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://via.placeholder.com/110x110" className="user-img" alt="user avatar"/>
                            <div className="user-info ps-3">
                                <p className="user-name mb-0">Pauline Seitz</p>
                                <p className="designattion mb-0">Web Designer</p>
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-user"/><span>Profile</span></a>
                            </li>
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-cog"/><span>Settings</span></a>
                            </li>
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-home-circle"/><span>Dashboard</span></a>
                            </li>
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-dollar-circle"/><span>Earnings</span></a>
                            </li>
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-download"/><span>Downloads</span></a>
                            </li>
                            <li>
                                <div className="dropdown-divider mb-0"/>
                            </li>
                            <li><a className="dropdown-item" href="javascript:;"><i
                                className="bx bx-log-out-circle"/><span>Logout</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'

export default class sidebar extends Component {
    render() {
        return (
            <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{border: 0}}>
            <a href="index.html" className="site_title"><i className="fa fa-paw" /> <span>Gentelella Alela!</span></a>
          </div>
          <div className="clearfix" />
          {/* menu profile quick info */}
          <div className="profile clearfix">
            <div className="profile_pic">
              <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>John Doe</h2>
            </div>
          </div>
          {/* /menu profile quick info */}
          <br />
          {/* sidebar menu */}
          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                <li><a><i className="fa fa-home" /> Home <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a >Dashboard</a></li>
                    <li><a>Dashboard2</a></li>
                    <li><a>Dashboard3</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-edit" /> Forms <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>General Form</a></li>
                    <li><a>Advanced Components</a></li>
                    <li><a>Form Validation</a></li>
                    <li><a>Form Wizard</a></li>
                    <li><a>Form Upload</a></li>
                    <li><a>Form Buttons</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-desktop" /> UI Elements <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>General Elements</a></li>
                    <li><a>Media Gallery</a></li>
                    <li><a>Typography</a></li>
                    <li><a>Icons</a></li>
                    <li><a>Glyphicons</a></li>
                    <li><a>Widgets</a></li>
                    <li><a>Invoice</a></li>
                    <li><a>Inbox</a></li>
                    <li><a>Calendar</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-table" /> Tables <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>Tables</a></li>
                    <li><a>Table Dynamic</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-bar-chart-o" /> Data Presentation <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>Chart JS</a></li>
                    <li><a>Chart JS2</a></li>
                    <li><a>Moris JS</a></li>
                    <li><a>ECharts</a></li>
                    <li><a>Other Charts</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-clone" />Layouts <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>Fixed Sidebar</a></li>
                    <li><a>Fixed Footer</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu_section">
              <h3>Live On</h3>
              <ul className="nav side-menu">
                <li><a><i className="fa fa-bug" /> Additional Pages <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>E-commerce</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Project Detail</a></li>
                    <li><a>Contacts</a></li>
                    <li><a>Profile</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-windows" /> Extras <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a>403 Error</a></li>
                    <li><a>404 Error</a></li>
                    <li><a>500 Error</a></li>
                    <li><a>Plain Page</a></li>
                    <li><a>Login Page</a></li>
                    <li><a>Pricing Tables</a></li>
                  </ul>
                </li>
                <li><a><i className="fa fa-sitemap" /> Multilevel Menu <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li><a >Level One</a>
                    </li><li><a>Level One<span className="fa fa-chevron-down" /></a>
                      <ul className="nav child_menu">
                        <li className="sub_menu"><a>Level Two</a>
                        </li>
                        <li><a >Level Two</a>
                        </li>
                        <li><a >Level Two</a>
                        </li>
                      </ul>
                    </li>
                    <li><a >Level One</a>
                    </li>
                  </ul>
                </li>                  
                <li><a><i className="fa fa-laptop" /> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
              </ul>
            </div>
          </div>
          {/* /sidebar menu */}
          {/* /menu footer buttons */}
          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true" />
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" >
              <span className="glyphicon glyphicon-off" aria-hidden="true" />
            </a>
          </div>
          {/* /menu footer buttons */}
        </div>
      </div>
        )
    }
}

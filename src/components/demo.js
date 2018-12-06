import React, { Component } from 'react';
import axios from 'axios';
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'


export default class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: []};
    }

    handleChange = (key) => {
        return function (e) {
            var state = {};

            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);

    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     }).bind(this);
    // }


    handleSubmit = (event) => {
        console.log(this.state);

        var data = {
            name: this.state.name,
            description: this.state.description,
        }
        axios.post(`http://localhost:3333/tests`, { data })
            .then(res => {
                console.log(res);
                console.log(res.data, 'asdsadasda');
                // const item = res.data;
                // this.setState({item:item})
            })
        this.setState(prev => (this.state.user.push(data)))

        // this.setState({item:data})
        event.preventDefault();
    }
    componentDidMount() {
        axios.get(`http://localhost:3333/tests`)
            .then(res => {
                // console.log(res,'tabve');

                const user = res.data;
                this.setState({ user });

            })

    }




    // onChange  = event => {
    //     this.setState({ id: event.target.value });
    //   }
    onDelete = (id) => {
        // console.log('state: ',this.state.id);
        // console.log('refs: ',this.refs.user.value);
        console.log('props: ', id);

        axios.delete(`http://localhost:3333/tests/${id}`)
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                if (res.data) {
                    const user = this.state.user.filter(item => item.id !== res.data.id);
                    this.setState({ user })
                }

            })
        // event.preventDefault();

    }


    render() {
        return (

            <div className="container body">
                <div className="main_container">
                    <Sidebar />
                    {/* top navigation */}
                    <div className="top_nav">
                        <div className="nav_menu">
                            <nav>
                                <div className="nav toggle">
                                    <a id="menu_toggle"><i className="fa fa-bars" /></a>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className>
                                        <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            <img src="images/img.jpg" />John Doe
                          <span className=" fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-usermenu pull-right">
                                            <li><a href="javascript:;"> Profile</a></li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="badge bg-red pull-right">50%</span>
                                                    <span>Settings</span>
                                                </a>
                                            </li>
                                            <li><a href="javascript:;">Help</a></li>
                                            <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a></li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="dropdown">
                                        <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-envelope-o" />
                                            <span className="badge bg-green">6</span>
                                        </a>
                                        <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                            <li>
                                                <a>
                                                    <span className="image"><img src="images/img.jpg" /></span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="image"><img src="images/img.jpg" /></span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="image"><img src="images/img.jpg" /></span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="image"><img src="images/img.jpg" /></span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                              </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="text-center">
                                                    <a>
                                                        <strong>See All Alerts</strong>
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>





                    {/* /top navigation */}
                    {/* page content */}
                    <div className="right_col" role="main">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Default Example <small>Users</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Settings 1</a>
                                            </li>
                                            <li><a href="#">Settings 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Control</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        {this.state.user.map(user =>
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.description}</td>
                                                <td><button >sửa</button> -- <button onClick={() => this.onDelete(user.id)}>Xóa</button>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>




                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Form Design <small>different form elements</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Settings 1</a>
                                            </li>
                                            <li><a href="#">Settings 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="close-link"><i className="fa fa-close" /></a>
                                    </li>
                                </ul>
                                <div className="clearfix" />
                            </div>
                            <div className="x_content">
                                <br />
                                <form  onSubmit={this.handleSubmit} className="form-horizontal form-label-left">
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Name <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" value={this.state.name} onChange={this.handleChange('name')} required="required" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Description <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" value={this.state.description} onChange={this.handleChange('description')} required="required" className="form-control col-md-7 col-xs-12" />
                                        </div>
                                    </div>
                                
                                    <div className="ln_solid" />
                                    <div className="form-group">
                                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                            <button className="btn btn-primary" type="button">Cancel</button>
                                            <button className="btn btn-primary" type="reset">Reset</button>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    {/* /page content */}
                    {/* footer content */}
                    <footer>
                        <div className="pull-right">
                            Gentelella - Bootstrap Admin Template by <a >Colorlib</a>
                        </div>
                        <div className="clearfix" />
                    </footer>
                    {/* /footer content */}
                </div>
            </div>



        );
    }
}

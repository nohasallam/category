import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import "tachyons";
import Category from "./category/index";


class Nav extends Component {

  constructor(props){
      super(props);
  } 
  
  logout(e){
       e.preventDefault();  
       axios.post('api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push('/');

  }
  render() {

    if (this.props.link) {
      return (
        <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#" onClick={this.handleClick.bind(this)}>Basic Authentication</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                 <a className="navbar-brand" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a>  
              </ul>
          </div>
        </nav>
        )
    }
    return (
        <div>
        <nav className="navbar navbar-default navbar-dark bg-dark-blue">
          <div className=" navbar-collapse">
              <div className="navbar-header">
                <a className="navbar-brand" href="#" onClick ={this.handleClick.bind(this)}>Basic Authentication</a>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register">Register</Link>
                </li>
                  <li className="nav-item active">
                      <Link className="nav-link" to="">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="">About Us</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/category">Categories</Link>
                  </li>
                </ul>
          </div>

            <div className='row'>
                <div className='col-md-8'>
                    <Switch>
                        <Route exact path='/category' component={Category}/>
                        <Route exact path="/category/add" component={Category} />
                        <Route exact path="/category/edit/:id" component={Category} />
                    </Switch>
                </div>
            </div>
        </nav>
        </div>
    )

  }

}

export default  withRouter(Nav)

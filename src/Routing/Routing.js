/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../Images/logo.jpg';
/* Importing neccesary components for Routing */
import Dashboard from '../Components/Dashboard'
import Album from '../Components/Albums/ListAlbum';
import NotFound from '../Components/Common/404'
import ListPhoto from "../Components/Photos/ListPhoto";
import Photos from "../Components/Photos/ListPhoto";


export default class Routing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        <img className="brand" src={logo} alt="photoGallery logo" />
      </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/Album">Albums</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Photos">Photos</Link></li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-default"
              aria-labelledby="navbarDropdownMenuLink-333">
              <Link className="dropdown-item" to="/Login">Login</Link>
              <Link className="dropdown-item" to="/SignUp">SignUp</Link>
            </div>
            </li>
          </ul>
        </div>
      </nav>
  
    <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Album" exact component={Album} />
    <Route path="/Photos" exact component={Photos} />
    <Route path="/photos/:id" component={ListPhoto} />
    <Route component={NotFound} />
    </Switch>
  </div>
    )
  }
}

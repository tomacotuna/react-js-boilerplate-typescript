import * as React from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component<any, any> {
  render () {
    return (
      <div className="web-page">
        <p className="title"> Error 404: This page does not exist </p>

        <p className="title" style={{ fontSize: '18px', padding: '15px'}}> Page Routing: </p>
        <ul className="page-list"> 
          <li> <Link to={'/'}> Landing Page </Link> </li>
          <li> <Link to={'/login'}> Login Page </Link> </li>
          <li> <Link to={'/input'}> Input Page </Link> </li>
          <li> <Link to={'/result'}> Result Page </Link> </li>
        </ul>
      </div>
    );
  }
}

export default NoMatch;

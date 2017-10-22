import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  render () {
    return (
      <div className="web-page">
        <p className="title"> Landing Page </p>

        <p className="title" style={{ fontSize: '18px', padding: '15px'}}> Page Routing: </p>
        <ul className="page-list"> 
          <li> <Link to={'/login'}> Login Page </Link> </li>
          <li> <Link to={'/input'}> Input Page </Link> </li>
          <li> <Link to={'/result'}> Result Page </Link> </li>
          <li> <Link to={'/something'}> Not Found Pgae </Link> </li>
        </ul>
      </div>
    );
  }
}

export default Home;

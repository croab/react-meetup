import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div>
        <p className={classes.logo}>Logo here</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/events/">All Events</Link></li>
          <li><Link to="/events/new">New Event</Link></li>
          <li><Link to="/events/top">Top Events</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
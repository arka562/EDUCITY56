import React from "react";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <img src={assets.dp} alt="" />
        <div className="cont">
          <h1>
            Welcome, <div className="name">Arkaprava Ghosh</div>
          </h1>
          <p>You are the next big thing</p>
        </div>
      </div>
      <div className="courses">
        <ul>
          <li>
            <Link to="/ mycourses">My Courses</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
          <li>
            <Link to="/mysubscriptions">My Subscription</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
          <li>
            <Link to="/mydailyupdates">My Daily Updates</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
          <li>
            <Link to="/review">Review Us</Link>
          </li>
          <hr style={{ border: "2px solid brown" }} />
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

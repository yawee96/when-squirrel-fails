import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {

  const navLinkStyle = {
    color: "white",
    listStyle: "none",
    textDecoration: "none",
    display: "inline-block",
    marginRight: "20px",
  }
  
  const navStyle = {
    float: "right",
    height: "4vh",
    marginTop: "2px",
    marginBottom: "0",
    marginRight: "30px"
  }

  return (
    <div>
      <nav>
        <ul style={navStyle}>
        <Link style={navLinkStyle} to="/">
          <li>Home</li>
          </Link>
          <Link style={navLinkStyle} to="/bar">
          <li>Bar Station</li>
          </Link>
          <Link style={navLinkStyle} to="/bagel">
          <li>Bagel Station</li>
          </Link>
          <Link style={navLinkStyle} to="/view-checks">
          <li>View Checks</li>
          </Link>
        </ul>

        {/* <ul>
          <li onClick={() => props.history.push("/")}>Home</li>
          <li onClick={() => props.history.push("/bar")}>Bar Station</li>
          <li onClick={() => props.history.push("/bagel")}>Bagel Station</li>
        </ul> */}
      </nav>
    </div>
  )
}

export default Nav;
// export default withRouter(Nav);
import { NavLink } from "react-router-dom";

function SecondaryRoutes() {
  return (
    <div className="secondary-route">
      <ul className="sec-route-ul">
        <li>
          <NavLink className="link-style sec-route-link" to="report">Smoke Test Report</NavLink>
        </li>
        <li>
          <NavLink className="link-style sec-route-link" to="execute">Execute Smoke Test</NavLink>
        </li>
        <li>
          <NavLink className="link-style sec-route-link" to="upload">Upload Smoke Test</NavLink>
        </li>
      </ul>
      
    </div>
  );
}

export default SecondaryRoutes;

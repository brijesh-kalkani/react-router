import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="myapps" element={<Navigate replace to="learn" />} />
        <Route path="learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<CoursesId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home router</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn router</h1>
      <Link className="btn btn-success" to="/learn/courses">
        Courses
      </Link>
      <br></br>
      <Link className="btn btn-primary" to="/learn/bundles">
        bundles
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>

      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        tests
      </NavLink>
      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles router</h1>
    </div>
  );
}

function CoursesId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>CoursesId : {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: "399" });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Dashboard</h1>
      <h4>{location.state}</h4>
    </div>
  );
}

reportWebVitals();

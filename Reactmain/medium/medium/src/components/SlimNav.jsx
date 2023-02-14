import { Dropdown } from "bootstrap";
import logoSmall from "../images/logoSmall.svg";
import DropDown from "./DropDown";
import MainButton from "./MainButton";
import Search from "./Search";

import Write from "./WriteIcon";

export default function SlimNav() {
  return (
    <div className="d-flex justify-content-between py-2 px-4 slim-nav">
      <div>
        <div className="d-flex">
          <img src={logoSmall} alt="" className="me-3"></img>
          <form className="position-relative">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Medium"
            />
            <button className="btn search-button">
              <Search />
            </button>
          </form>
        </div>
      </div>
      <ul className="d-flex align-items-center slim-nav-menu">
        <li>
          <a href="#" className="slim-nav-link">
            <Write />
            Write
          </a>
        </li>
        <li>
          <MainButton>Sign Up</MainButton>
        </li>
        <li>
          <a href="#" className="slim-nav-link">
            Sign In
          </a>
        </li>
        <li>
          <DropDown />
        </li>
      </ul>
    </div>
  );
}

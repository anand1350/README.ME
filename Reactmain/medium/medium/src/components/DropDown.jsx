import React, { useState } from "react";
import Star from "../images/Star";

export default function DropDown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className="dropdown text-end">
        <a
          onClick={toggleDropdown}
          href=""
          className="d-block link-secondary text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img src="" alt="" className="rounded-circle" />
        </a>

        <div class="dropdown">
          <ul class="dropdown-menu bg-white border-0 align-items-center justify-content-center">
            <li>
              <a class="dropdown-item" href="#">
                Get started on Medium
              </a>
            </li>
            <li>
              <button className="button w-100 width-100% rounded-5 border-0">
                {" "}
                Sign up
              </button>
            </li>
            <li>
              <button className="w-100 rounded-5 border-0 mt-3">
                {" "}
                Sign in
              </button>
            </li>
            <hr />
            <ul>
              <li className="become">
                Become a member
                <Star />
              </li>
              <li>Become a member</li>
              <li>Become a member</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

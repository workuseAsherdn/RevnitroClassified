import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(logout);
  };

  const [isVisiblesdfdsf, setIsVisttibleswe234] = useState(false);

  const toggleVisibility2323edrfe = () => {
    setIsVisttibleswe234(!isVisiblesdfdsf);
  };
  const [isVisibldfesdfdsfdsadff, setIsdssdVdsddisttibleswe234] =
    useState(false);

  const toggleVfsdfsf2323edrfe = () => {
    setIsdssdVdsddisttibleswe234(!isVisibldfesdfdsfdsadff);
  };

  const [isVisiblefOthemaninnavbar, setIsVisiblefo3244rthwsmainfiv] =
    useState(false);

  const toggleVisibility = () => {
    setIsVisiblefo3244rthwsmainfiv(!isVisiblefOthemaninnavbar);
  };

  return (
    <div>
      <div className="Navbardivareawodth">
        <div className="Navbardicfelxsecirer">
          <div>
            {/* <!------------------------------------------------Desktop Verison--------------------------------------------> */}
            <div className="newNavbarswidthflex">
              <div className="firstnavbarwidthdiv">
                <div className="fordesktop">
                  {/* <!----------------------------------First Navbar-------------------------------> */}
                  <div className="NavbARDIV">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                      <i className="fas fa-bars"></i>
                    </label>
                    <Link
                      style={{ background: "none", cursor: "pointer" }}
                      // to={"/login"}
                      to={"/"}
                    >
                      <label
                        className="NavbarLOGO"
                        style={{ background: "none", cursor: "pointer" }}
                      >
                        <img src="/images/logo.png" alt="no image" />
                      </label>
                    </Link>
                    <ul>
                      <li>
                        <a href="#">Book Service</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Blogs</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Course</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Forum</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Team</a>
                      </li>

                      <li>
                        <a href="#">Bike Resale</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>

                      <li>
                        {isAuthenticated ? (
                          <Dropdown className="d-inline">
                            <Dropdown.Toggle
                              variant="default text-white pr-5"
                              id="dropdown-basic"
                            >
                              <span>{user.name}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {user.role === "admin" && (
                                <Dropdown.Item
                                  style={{
                                    padding: "0px",
                                    margin: "0px",
                                    lineHeight: "40px",
                                    paddingLeft: "25px",
                                    color: "#000",
                                  }}
                                  onClick={() => {
                                    navigate("admin/dashboard");
                                  }}
                                  className="text-dark"
                                >
                                  Dashboard
                                </Dropdown.Item>
                              )}

                              {/* <Dropdown.Item
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  lineHeight: "40px",
                                  paddingLeft: "25px",
                                  color: "#000",
                                }}
                                onClick={() => {
                                  navigate("/myprofile");
                                }}
                                className="text-dark"
                              >
                                Profile
                              </Dropdown.Item> */}

                              {/* <Dropdown.Item
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  lineHeight: "40px",
                                  paddingLeft: "25px",
                                  color: "#000",
                                }}
                                onClick={() => {
                                  navigate("/orders");
                                }}
                                className="text-dark"
                              >
                                Orders
                              </Dropdown.Item> */}

                              <Dropdown.Item
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  lineHeight: "40px",
                                  paddingLeft: "25px",
                                }}
                                onClick={LogoutHandler}
                                className="text-danger"
                              >
                                Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        ) : (
                          <Link to={"/login"}>Login</Link>
                        )}
                      </li>
                    </ul>
                  </div>
                  {/* <!------------------------------First Navbar--------------------------->
        <!------------------------------Second Navbar---------------------------> */}
                  <div className="secondnavbar">
                    <div className="secondnavbarflexcontents">
                      <div>
                        <Link to="/about" className="itemsinsecond" href="">
                          About
                        </Link>
                      </div>
                      <div>
                        <Link to="/sellbike" className="itemsinsecond" href="">
                          Sell your bike
                        </Link>
                      </div>
                      <div>
                        <Link to="/" className="itemsinsecond" href="">
                          Buy used bike
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/mywishlists"
                          className="itemsinsecond"
                          href=""
                        >
                          My Wishlist
                        </Link>
                      </div>
                      <div>
                        <Link to="/myprofile" className="itemsinsecond" href="">
                          My Account
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!------------------------------Second Navbar---------------------------> */}
                </div>
              </div>
            </div>
            {/* <!------------------------------------------------Desktop Verison-------------------------------------------->

  <!------------------------------------------------Mobile Verison-------------------------------------------->
  <!------------------------------------------First Navbar----------------------------------------------------> */}
            <div className="mobilefelesvccdwidth">
              <div className="mobilevsesiosdnwidthhdiv">
                <div className="formobile">
                  <div className="mobilef54cdwidth">
                    <div className="navbarDi24243ervsa">
                      <div className="dropdo344wn4234">
                        <div className="dr34324opdownflexconcept">
                          <div>
                            <button
                              className="dro434pbtn4342"
                              onClick={toggleVisibility}
                            >
                              <span className="namechangingsection">Home</span>{" "}
                              &nbsp;
                              <i className="fa fa-caret-down"></i>
                            </button>
                          </div>
                          <div>
                            <Link to="/">
                              <img src="/images/Group64.png" alt="" />
                            </Link>
                          </div>
                        </div>

                        {isVisiblefOthemaninnavbar && (
                          <div>
                            <div className="drop234downwn-content">
                              <Link>Blog</Link>
                              <Link>Forum</Link>
                              <Link>Course</Link>
                              <Link>Classified</Link>
                              <Link>Shop</Link>
                              <Link>Team</Link>

                              {isAuthenticated ? (
                                <Link>
                                  <span>
                                    {user.name} &nbsp; &nbsp;
                                    <span
                                      style={{ color: "red" }}
                                      onClick={LogoutHandler}
                                    >
                                      Logout
                                    </span>
                                  </span>
                                </Link>
                              ) : (
                                <Link to={"/login"}>Login</Link>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <!------------------------------------------First Navbar----------------------------------------------------> */}

                  {/* <!------------------------------------------Second Navbar----------------------------------------------------> */}
                  {/* <!-- Simulate a smartphone / tablet --> */}
                  <div className="mobile-container">
                    <div className="mobile-container">
                      {/* <!-- Top Navigation Menu --> */}
                      <div className="topnav">
                        <Link href="#home" className="active">
                          &nbsp;
                        </Link>

                        {isVisibldfesdfdsfdsadff && (
                          <div className="IdLInkshdDIvbboxshASAWDUHJ">
                            <div id="myLinks">
                              <Link
                                to="/about"
                                className="borrderbottomline"
                                href="#news"
                              >
                                About
                              </Link>
                              <Link
                                to="/sellbike"
                                className="borrderbottomline"
                                href="#contact"
                              >
                                Sell your bike
                              </Link>
                              <Link
                                to="/"
                                className="borrderbottomline"
                                href="#about"
                              >
                                Buy used bike
                              </Link>
                              <Link
                                to="/mywishlists"
                                className="borrderbottomline"
                                href="#news"
                              >
                                My Wishlist
                              </Link>
                              <Link
                                to="/myprofile"
                                id="myCAOiunsdfgghfssgbdfiofn"
                                className="borrderbottomline"
                                href="#contact"
                              >
                                My Account
                              </Link>
                            </div>
                          </div>
                        )}

                        <Link
                          href=""
                          className="icon"
                          onClick={toggleVfsdfsf2323edrfe}
                        >
                          <i className="fa fa-bars"></i>
                        </Link>
                      </div>

                      {/* <!-- End smartphone / tablet look --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

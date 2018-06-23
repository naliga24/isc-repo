import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import zoo from "./../../pics/zoo.jpg";
import bat from "./../../pics/bat.png";
import lion from "./../../pics/lion.png";
import monkey from "./../../pics/monkey.jpg";
class NavBar extends Component {
  render() {
    return (


      <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group" >
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <button type="submit" class="btn btn-default"><span class="submit">Submit</span></button>
            </form>
            <div class="container">
              <ul class="headerButtons">
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">PORN</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">XXX</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">ขืนใจ</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">คลิปโป็นักศึกษา</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">หนังAV</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">หนังโป็ฝรั่ง</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">หนังโป็ไทย</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เปิดซิงหี</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เลสเบี่ยน</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">แอบถ่าย</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เกย์</p></Link></li>
                <li className="navButton"><Link to="/Korean_1" style={linkStyle}><p class="nav_hover">หนังโป็เกาหลี</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เปิดซิงหี</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เลสเบี่ยน</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">แอบถ่าย</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">เกย์</p></Link></li>
                <li className="navButton"><Link to="/Korean_1" style={linkStyle}><p class="nav_hover">หนังโป็เกาหลี</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">PORN</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">XXX</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">ขืนใจ</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">คลิปโป็นักศึกษา</p></Link></li>
                <li className="navButton"><Link to="" style={linkStyle}><p class="nav_hover">AV</p></Link></li>
              </ul>
            </div>
          </div>
        </div>

      </nav>

    )
  }

}
var linkStyle = {
  color: "#777",
  fontWeight: "bold",
  textDecorationLine: "none",
  letterSpacing: 0.25,

};




export default NavBar; 
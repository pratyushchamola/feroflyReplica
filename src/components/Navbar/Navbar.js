import React from 'react';
import {Link} from 'react-scroll';

import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">

                {/* <Link smooth={true} to='home'  className="navbar-brand" href="#">Home</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to='home' offset={-110} className="nav-link" href="#">HOME</Link>
                    </li>
                    <li className="nav-item active">
                        <Link smooth={true} to='about' offset={-110} className="nav-link" href="#">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='rooms' offset={-110} className="nav-link" href="#">ROOMS</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to='services' offset={-110} className="nav-link" href="#">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to='gallery' offset={-110} className="nav-link" href="#">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to='seeAndDo' offset={-110} className="nav-link" href="#">SEE & DO</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to='contact' offset={-110} className="nav-link" href="#">CONTACT</Link>
                    </li>
                    <li className="nav-item active">
                        <Link smooth={true} to='about' offset={-110} className="nav-link roombutton" href="#">BOOK A ROOM</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>


//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
    );
}

export default Navbar

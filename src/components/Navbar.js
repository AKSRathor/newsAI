import React, { useState } from 'react'
import "./Navbar.css"

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';



const Navbar = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='navbar'>
      <div className="navContainerLayer1">
        <div className="leftSideLogo">NewsAI.</div>
        <div className="middleNavUpperText"><ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>LIVE NEWS</li>
        </ul></div>
        <div className="rightSideTextUpperNav">
          <ul>
            <li>Monday, July 21  1969</li>
            <li>|</li>
            <li>London 17^C</li>
          </ul>
        </div>
      </div>
      <div className="navContainerLayer2">
        <div className="searchInputNavBottomLayer">

          <div class="searchBoxNav">

            <input class="searchInputNav" type="text" name="" placeholder="Search something" />
            <button class="searchButton" href="#"> <SearchIcon /> </button>
          </div>
        </div>
        <div className="navAllContents"> <ul>
          <Link to="/science"><li>Science</li></Link>
          <Link to="/general"><li>General</li></Link>
          <Link to="/sports"><li>Sports</li></Link>
          <Link to="/entertainment"><li>Entertainment</li></Link>
          <Link to="/technology"><li>Technology</li></Link>
          <Link to="/health"><li>Health</li></Link>
          <Link to="/business"><li>Business</li></Link>
        </ul></div>
        <div className="navShowMore">
          <div className='navShowMoreInsideDiv'>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              More
              <div className="showMoreNavIcons">
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Language and Region</MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
import React from 'react';

function SideNav(props) {
  return (
    <div id="sidenav">
      {props.children}
    </div>
  )
}

export default SideNav;

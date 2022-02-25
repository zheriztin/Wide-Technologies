import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div >
      <h1 className="logo">Mahasiswa</h1>
      <div className="navigation">
          <ul>
            <Link to={`/`}><li><a  className="active">MANAGE</a></li></Link>
            <Link to={`/add`}><li><a>ADD</a></li></Link>
            <Link to={`/report`}><li><a>REPORT</a></li></Link>

          </ul>
      </div>
    </div>
  )
}

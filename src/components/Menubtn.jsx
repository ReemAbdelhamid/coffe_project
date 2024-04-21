import React from 'react'
import {Link} from 'react-router-dom';
export default function Menubtn() {
  return (
    <Link to='/Menu'>
    <button type="button" className='btn btn-success btn-lg'>Our Menu</button>
    </Link>
  )
}

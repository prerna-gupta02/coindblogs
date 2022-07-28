import { Button } from 'reactstrap'
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <h1>Coin'd</h1>
        <Button>Login</Button>
    </div>
  )
}

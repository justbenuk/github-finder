import React from 'react'
import Link from 'next/link'

export default function Navbar( { title, } ) {
  return (
    <nav className='flex flex-row items-center justify-between px-6 py-2'>
      <h1>{ title }</h1>
      <ul className='flex flex-row gap-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

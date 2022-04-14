/* esint-disable @next/next/no-img-element */
import React from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header>
      <div className='flex flex-row items-center space-x-2 md:space-x-10'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
          alt={'netflix_logo'} />
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />
        {/* <Link href="/account"> */}
        <img
          onClick={() => null}
          src='https://rb.gy/g1pwyx'
          alt=''
          className='cursor-pointer rounded'
        />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
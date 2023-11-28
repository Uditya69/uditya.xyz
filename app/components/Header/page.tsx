import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Header() {
  return (
    <>{/*
    <div id='avatar'>
      <img src='https://drive.google.com/file/d/1ExkOwbT6pHk-26G8YklbWYPScT4coRfg/view?usp=drive_link' height={40} width={40} alt='qwerty' />
    </div>*/}

    <div className='flex justify-end gap-4 mr-10 ' >
      <Link href={'./'}><button className='hover:text-orange-200'>About</button></Link>
      <Link href={'./'}><button className='hover:text-orange-200'>Work</button></Link>
      <Link href={'./'}><button className='hover:text-orange-200'>Blog</button></Link>
      
    </div>
    
    </>
  )
}

export default Header
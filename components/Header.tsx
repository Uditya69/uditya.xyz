
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className=' flex flex-row  gap-4  font-mono text-2xl text-gray-300 pt-10'>
      <div className='flex flex-wrap  mr-56'>
        <Link href={'/Home'}><button className={'hover:text-blue-300'}>Uditya Mandal</button></Link>
      </div>
      <div className='flex justify-end gap-4 ml-32 text-xl'>
        <Link href={'./projects'}><button className='hover:text-orange-200'>Work</button></Link>
        <Link href={'./'}><button className='hover:text-orange-200'>Blog</button></Link>
        <Link href={'./'}><button className='hover:text-orange-200'>GuestBook</button></Link>

      </div>

    </div>
  );
}


import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex flex-row justify-between  font-mono text-2xl text-gray-300 pt-5'>
      <div className='flex'>
        <Link href={'/Home'}><button className={'hover:text-blue-300'}> Uditya Mandal</button></Link>
      </div>
      <div className='flex  gap-4  text-xl'>
        <Link href={'./projects'}><button className='hover:text-orange-200'>Work</button></Link>
        <Link href={'./posts'}><button className='hover:text-orange-200'>Posts</button></Link>
        <Link href={'./guestbook'}><button className='hover:text-orange-200'>GuestBook</button></Link>

      </div>

    </div>
  );
}

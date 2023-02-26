import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function UserItem( { user: { login, avatar_url } } ) {
  return (
    <div className='bg-gray-800 shadow-2xl rounded-sm'>
      <div className='rounded-full overflow-hidden relative m-4'>
        <Image src={ avatar_url } width={ 200 } height={ 200 } alt='avatar pic' className='mx-auto' />
      </div>
      <div className='flex flex-row justify-between'>
        <p className='pl-4 pb-2'>{ login }</p>
        <Link href={ `/user/${login}` } className='pr-4'>More</Link>
      </div>
    </div>
  )
}

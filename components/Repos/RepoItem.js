import React from 'react'
import Link from 'next/link'
export default function RepoItem( { repo } ) {
  return (
    <Link href={ repo.html_url } target='_blank' className='bg-gray-800 shadow-2xl py-10 text-center rounded'>
      { repo.name }
    </Link>
  )
}

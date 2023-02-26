import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import githubContext from '@/content/github/githubContext';
import Image from 'next/image';
import Repos from '@/components/Repos/Repos';
// components
import Layout from '@/layouts/Layout';
export default function UserSingle() {

  // initialise rounter
  const router = useRouter()

  const username = router.query.username


  // get global state
  const GithubContext = useContext( githubContext )

  // destructure the details
  const { getUser, loading, user, repos, getUserRepos } = GithubContext
  // load the user
  useEffect( () => {
    getUser( username )
    getUserRepos( username )
  }, [] )

  if ( loading ) {
    return 'Loading'
  }

  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-12 gap-12 text-xl'>
        <div className='md:col-span-2 lg:col-span-1'>
          <Image src={ user.avatar_url } width={ 200 } height={ 200 } alt='profile pic' className='w-full h-[300px] overflow-hidden' />
        </div>
        <div className='md:col-span-2 lg:col-span-3'>
          <div>
            <h1 className='font-bold text-3xl'>{ user.name }</h1>
            <p className='py-2 lg:w-2/3'><span className='font-bold'>Bio:</span> { user.bio }</p>
            <div className='flex flex-row flex-wrap gap-4 items-center justify-start text-xl'>
              <p><span className='font-bold'>Followers:</span> { user.followers }</p>
              <p><span className='font-bold'>Following: </span>{ user.following }</p>
              <p><span className='font-bold'>Location: </span>{ user.location }</p>
              <p><span className='font-bold'>Company: </span>{ user.company }</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <Repos repos={ repos } />
      </div>
    </Layout>
  )
}

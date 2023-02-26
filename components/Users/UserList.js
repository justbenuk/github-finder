import React, { useContext } from 'react'


// components
import UserItem from './UserItem'
// data
import githubContext from '@/content/github/githubContext'

export default function UserList() {

  //get global state
  const GithubContext = useContext( githubContext )

  const { users, loading } = GithubContext

  if ( loading ) {
    return 'loading'
  }
  return (
    <div className='flex flex-row gap-6 flex-wrap mt-12 items-center justify-center'>
      { users.map( ( user ) => (
        <UserItem key={ user.id } user={ user } />
      ) ) }
    </div>
  )
}

import React, { useState, useContext } from 'react'

// data

import githubContext from '@/content/github/githubContext'

export default function Search() {

  //bring in the context
  const GithubContext = useContext( githubContext )

  //set local state
  const [ text, setText ] = useState( '' )

  function handleSubmit( e ) {
    e.preventDefault()

    if ( text === '' ) {
      console.log( 'user not found' )
    } else {
      GithubContext.searchUsers( text )
      setText( '' )
    }
  }

  function handleChange( e ) {
    setText( e.target.value )
  }
  return (
    <div className='w-2/3 mx-auto mt-12'>
      <form onSubmit={ handleSubmit } className='flex flex-row gap-4'>
        <input type='text' name='text' placeholder='Search users' value={ text } onChange={ handleChange } className='w-full bg-gray-800 p-2 rounded' />
        <div className='flex flex-row gap-4'>
          <input
            type='submit'
            value='Search'
            className='bg-green-500 text-white px-8 py-2'
          />
          { GithubContext.users.length > 0 && (
            <button onClick={ GithubContext.clearUsers } className='bg-gray-800 text-white px-8 py-2'>Clear</button>
          ) }
        </div>
      </form>

    </div>
  )
}

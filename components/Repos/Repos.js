import React from 'react'
//componemts
import RepoItem from './RepoItem'
export default function Repos( { repos } ) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>{ repos.map( ( repo ) => (
      <RepoItem key={ repo.id } repo={ repo } />
    ) ) }</div>
  )
}

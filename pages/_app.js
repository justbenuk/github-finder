import '@/styles/globals.css'

import GithubState from '@/content/github/GithubState'

export default function App( { Component, pageProps } ) {
  return (
    <GithubState>
      <Component { ...pageProps } />
    </GithubState>
  )
}

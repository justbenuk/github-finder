import Head from "next/head"
import { Fragment } from "react"

// components
import Navbar from '@/components/Navbar/Navbar'
export default function Layout( { children, title, description } ) {
  return (
    <Fragment>
      <Head>
        <title>{ title ? title : 'Github Finder' }</title>
        <meta name="description" content={ description ? description : 'Find any user on Github and display their repositories' } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col justify-between min-h-full  text-gray-300'>
        <Navbar title='Github Finder' />
        <main className='px-6 container mx-auto h-[100%]'>{ children }</main>
      </div>
    </Fragment >
  )
}

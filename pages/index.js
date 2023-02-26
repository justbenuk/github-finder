
//components
import Layout from '@/layouts/Layout'
import Search from '@/components/Search/Search'
import UserList from '@/components/Users/UserList'

export default function Home() {
  return (
    <Layout title='Github Finder'>
      <Search />
      <UserList />
    </Layout>
  )
}

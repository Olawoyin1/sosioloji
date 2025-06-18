
import Cards from '../components/Cards'
import { PageWrapper } from '../components/PageWrapper'

const Home = () => {
  return (
    <PageWrapper>
        <div className="container">

      <div className="p-6">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to the Blog</h1> */}
        <Cards />
      </div>
        </div>
    </PageWrapper>
  )
}

export default Home

import FancyLinkButton from "../components/Button"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { PageWrapper } from "../components/PageWrapper"


const NotFound = () => {
  return (
    <PageWrapper>
      <div className="bg">

      <Navbar />
      <div className="p-6 text-center min-h-[40vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">page build in progress</h1>
        <FancyLinkButton
              label="home page"
              to='/'
              bgColor="#FEBDD0"
              />
      </div>
      <Footer />
              </div>
    </PageWrapper>
  )
}

export default NotFound

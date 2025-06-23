// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import './App.css'
import SharedLayout from './layouts/SharedLayout'
import Blog from './pages/Blog'
import NotFound from './utils/NotFound'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryList from './MainTag/CategoryList'
// import Survey from './pages/Survey'
import CreateBlogPostForm from './pages/CreateBlogForm'
// import TestUploader from './pages/Test'
// import CreateBlogPostForm from './pages/CreateBlog'


function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="test" element={<TestUploader />} /> */}
          <Route path="create" element={<CreateBlogPostForm />} />
          <Route path="/tag/:categoryName" element={<CategoryList />} />

          {/* <Route path=":slug" element={<Survey />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

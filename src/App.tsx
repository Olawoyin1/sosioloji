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
import FormSurvey from './components/SurveyForm'
import CategoryList from './MainTag/CategoryList'


function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tag/:categoryName" element={<CategoryList />} />

          <Route path=":slug" element={<FormSurvey />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import './App.css'
import SharedLayout from './layouts/SharedLayout'
import Blog from './pages/Blog'
import NotFound from './utils/NotFound'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

// src/pages/Blog.tsx
// import React from 'react'
import { useParams } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'
// import { PageWrapper } from '../utils/motionWrapper'

const Blog = () => {
  const { id } = useParams()

  return (
    <PageWrapper>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Blog Post: {id}</h1>
        <p className="mt-4 text-gray-600">Full content for blog ID: {id} goes here...</p>
      </div>
    </PageWrapper>
  )
}

export default Blog

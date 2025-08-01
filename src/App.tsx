// src/App.tsx
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetails";
import './App.css'
import TagPage from "./pages/TagPage";
import AuthorPage from "./pages/AuthorPage";
import Home from "./pages/Home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NotFound from "./utils/NotFound";
import Dashboard from "./admin/Dashboard";
import CreateEditPostPage from "./pages/CreateEditPostPage";
import { Toaster } from 'sonner';
import Author from "./pages/Author";
import Survey from "./pages/Survey";
import SurveyFormPage from "./pages/SurveyFormPage";

const App = () => {
  return (
    <>
    <Toaster richColors position="top-right" />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<BlogDetail />} />
      <Route path="/editor" element={<Author />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/survey/:slug" element={<SurveyFormPage />} />
      <Route path="/tag/:tag" element={<TagPage />} />
      <Route path="/author/:author" element={<AuthorPage />} />
      <Route path="*" element={<NotFound />} />


      {/* Dashboard List */}
      <Route path="dashboard" element={<Dashboard />} />

        {/* Create Post */}
        <Route path="/create" element={<CreateEditPostPage />} />

        {/* Edit Post (by ID) */}
        <Route path="/edit/:slug" element={<CreateEditPostPage />} />

        

    </Routes>
    </>
  );
};

export default App;

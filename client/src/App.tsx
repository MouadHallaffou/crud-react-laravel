import { Route, Routes } from "react-router-dom"
import PostLists from "./pages/PostLists"
import PostCreate from "./pages/PostCreate"
import PostEdit from "./pages/PostEdit"
import ShowPost from "./pages/ShowPost"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostLists/>} />
        <Route path="/create" element={<PostCreate/>} />
        <Route path="/edit/:id" element={<PostEdit/>} />
        <Route path="/show/:id" element={<ShowPost/>} />
        <Route path="/delete/:id" element={<PostLists/>} />
      </Routes>
    </>
  )
}

export default App

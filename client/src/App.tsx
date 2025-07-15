import { Route, Routes } from "react-router-dom"
import PostLists from "./pages/PostLists"
import PostCreate from "./pages/PostCreate"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostLists/>} />
        <Route path="/create" element={<PostCreate/>} />
      </Routes>
    </>
  )
}

export default App

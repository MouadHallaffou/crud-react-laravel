import { Route, Routes } from "react-router-dom"
import PostLists from "./pages/PostLists"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostLists/>} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Navigation from "./components/Navigation"
import Gallery from "./pages/Gallery"
import Project from "./pages/Project"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="">
        <Navigation />
        <div className="p-3 min-h-dvh sm:p-8 py-10 xl:pb-24 xl:px-24 font-[roboto] ">
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App

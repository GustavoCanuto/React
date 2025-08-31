import Titulo from "./pages/Titulo"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <div>
      {/* <Titulo nome="A" p={true}/>
      <Titulo nome="B"/>
      <Titulo nome="C"/>
      <Titulo /> */}

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/titulo" element={<Titulo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
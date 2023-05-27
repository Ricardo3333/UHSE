import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import Contatos from "./pages/Contatos"
import Produtos from "./pages/Produtos"
import Header from "./components/header/Header"







function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sobre" element={<Sobre/>}/>
    <Route path="/Contatos" element={< Contatos/>}/>
    <Route path="/Produtos" element={< Produtos/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

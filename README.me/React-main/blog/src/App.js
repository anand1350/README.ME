import Home from "./pages/Home";
import Header from './components/Header'
import { Route, Routes } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import Articles from "./components/Articles";
import Products from "./pages/Products";


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path="/articles/:id" element={<Articles/>} />git

        <Route path='/ChatScreen' element={<ChatScreen/>}/>

        <Route path="/products" element={<Products/>}/>

      </Routes>

    </>
  )
}

export default App;

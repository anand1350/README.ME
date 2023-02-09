import './styles/bootstrap.css'
import './styles/style.css'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import MenuPositions from './pages/MenuPositions';
import Menus from './pages/Menus';
import axios from 'axios';
import { ModalProvider } from './contexts/ModalContext';



function App() {
  const [menuShow, setMenuShow] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/menus')
    .then((res)=>{
      setMenus(res.data)
    })
  },[])


  // const [me, setMe] = useState(undefined)
  

  // useEffect(()=>{
  //   const myData = localStorage.getItem('me');
  //   if(myData !== "undefined"){
  //     setMe(JSON.parse(myData));
  //   }
  // }, []);
 
  // if(!me){
  //   return (
  //     <>
  //       <Routes>
  //       <Route path="/signin" element={<Signin/>} />
  //       <Route path="/signin/success" element={<SigninSuccess setMe={setMe}/>} />
  //       <Route path="/signup" element={<Signup/>}/>
  //       <Route path="*" element={<SignInError/>}/>
  //     </Routes>
  //     </>
  //   );
  // }

  return (
    <ModalProvider>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>
          <ul>

          {menus.map((menu) => {
            return (
              <li key={menu.id}>
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            );
          })}
          </ul>
        </div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu-positions" element={<MenuPositions />} />
            <Route path="/menu-positions/:id" element={<Menus />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            {/* <Route path="/signout" element={<Signout setMe={setMe} />} /> */}
          </Routes>
        </div>
      </div>
    </ModalProvider>
  )
}

export default App;

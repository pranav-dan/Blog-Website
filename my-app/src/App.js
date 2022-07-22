
import './App.css';
import {Box} from "@material-ui/core"
import { Header } from './components/Header';
import { Home } from './components/Home/Home';
import { DetailPostInfo } from './components/post/DetailPostInfo';
import ReactDOM from "react-dom";
import{BrowserRouter, Routes, Route, Link} from "react-router-dom"   // switches changes to Routes
import { CreateBlog } from './components/Home/CreateBlog';
import { EditPost } from './components/post/EditPost';
import {About} from './components/Home/About'
//import AppWithRouterAccess from './AppWithRouterAccess';
function App() {
  return (
    
   <BrowserRouter>
   {/* <AppWithRouterAccess/> */}
    <Header/>
    <Box>
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/detail/:id" element={<DetailPostInfo/>}/>
        <Route exact path="/create" element={<CreateBlog/>}/>
        <Route exact path="/update/:id" element={<EditPost/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>   
    </Box>
    </BrowserRouter>
  ); 
}

export default App;
  



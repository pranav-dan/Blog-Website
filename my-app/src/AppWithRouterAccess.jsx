
// import './App.css';
// import {Box} from "@material-ui/core"
// import { Header } from './components/Header';
// import { Home } from './components/Home/Home';
// import { DetailPostInfo } from './components/post/DetailPostInfo';
// import ReactDOM from "react-dom";
// import{BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"   // switches changes to Routes
// import { CreateBlog } from './components/Home/CreateBlog';
// import { EditPost } from './components/post/EditPost';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
// import Login from './Login';
// import config from './config';

// const oktaAuth = new OktaAuth(config.oidc);

// function AppWithRouterAccess() {

//     const navigate=useNavigate()
//     const customAuthHandler = () => {
//         navigate('/login');
//       };
      
//       const restoreOriginalUri = async (_oktaAuth, originalUri) => {
//         history.replace(toRelativeUrl(originalUri || '', window.location.origin));
//       };
//   return (
//     <Security
//     oktaAuth={oktaAuth}
//     onAuthRequired={customAuthHandler}
//     restoreOriginalUri={restoreOriginalUri}
//   >
//    {/* <AppWithRouterAccess/> */}
//     <SecureRoute path="/" component={Header}/>
//     <Box>
//       <Routes>
//         <Route exact path="/" element={<Home/>} /> 
//         <Route path="/login" render={() => <Login />} />
//         <Route path="/login/callback" component={LoginCallback} />
//         <Route exact path="/detail/:id" element={<DetailPostInfo/>}/>
//         <Route exact path="/create" element={<CreateBlog/>}/>
//         <Route exact path="/update/:id" element={<EditPost/>}/>
//       </Routes>   
//     </Box>
//     </Security>
//   ); 
// }

 //export default AppWithRouterAccess;
  




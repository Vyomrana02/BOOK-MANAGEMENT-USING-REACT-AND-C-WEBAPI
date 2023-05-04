import logo from './logo.svg';
import './App.css';
import './Components/UserComponent'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserComponent from './Components/UserComponent.js';
import BookComponent from './Components/BookComponent';
import TempComponent from './Components/TempComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import CartComponent from './Components/CartComponent';
import OrderComponent from './Components/OrderComponent';
import OrderItemsComponent from './Components/OrderItemsComponent';
import UserAddComponent from './Components/UserAddComponent';
import BookAddComponent from './Components/BookAddComponent';
import Layout from './Layout';
import HomePageComponent from './Components/HomePageComponent';
import LoginComponent from './LoginComponent.js';
import { UserContext } from './UserCOntext/UserContext'
import MyOrdersComponent from './Components/MyOrdersComponet'
import { useState } from 'react';
import ShopComponent from './Components/ShopComponent';
import RegisterComponent from './RegisterComponent';
import UpdateProfileComponent from './Components/UpdateProfileComponent';
function App() {
  const [context, setContext] = useState([]);
  const logOut = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    localStorage.removeItem("type");
    localStorage.removeItem("usersID");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    window.location.replace('http://localhost:3000/login');
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <UserContext.Provider value={[context, setContext]}>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><Link to="/"><img src="book-shop.png" height='30px' width='30px'/></Link></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            {(localStorage.getItem("type") == "ADMIN") ?
            <>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><Link to="/Users">All Users</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/Books">Books</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/Orders">Orders</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/BookAdd">Add Book</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={(e) => logOut(e)}>Logout</a>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
              <li style={{padding: "7px"}}>
                <h4>Hello {localStorage.getItem("firstName")}</h4>
              </li>
              
              </ul>
              </>
              :
              <div>

                {localStorage.getItem("Email") == null ?
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/home">HomePage</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/Login">login</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/Register">Register</Link></a>
                    </li>
                  </ul> 
                  :
                  <>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/home">HomePage</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/Shop">Shop</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><Link to="/UpdateProfile">Update Profile</Link></a>
                    </li>
                    <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/Orders">Orders</Link></a>
                </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" onClick={(e) => logOut(e)}>Logout</a>
                    </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                      <li style={{padding: "7px"}}>
                        <h4>Hello {localStorage.getItem("firstName")}</h4>
                      </li>
                      <li style={{padding: "7px"}}>
                        <a href=''> <Link to="/Cart"><i class="fa fa-lg float-right">&#xf07a;</i></Link></a>
                      </li>
                    </ul>
                  </>
                }


                {/* <ul class="nav navbar-nav navbar-right">
            <li>
              <a href=''> <Link to="/Cart"><i class="fa fa-lg float-right">&#xf07a;</i></Link></a>
            </li>
          </ul> */}
              </div>
            }

          </div>
        </nav>
        <Routes>
        <Route exact path='/temp' element={<TempComponent/>}></Route>
          <Route exact path='/' element={< Layout />}></Route>
          <Route exact path='/Users' element={< UserComponent />}></Route>
          <Route exact path='/Shop' element={< ShopComponent />}></Route>
          <Route exact path='/Register' element={< RegisterComponent />}></Route>
          <Route exact path='/UpdateProfile' element={< UpdateProfileComponent />}></Route>
          {/* <Route exact path='/MyOrders' element={< MyOrdersComponent />}></Route> */}
          <Route exact path='/Cart' element={< CartComponent />}></Route>
          <Route exact path='/Orders' element={< OrderComponent />}></Route>
          <Route exact path='/Books' element={< BookComponent />}></Route>
          <Route exact path='/home' element={< HomePageComponent />}></Route>
          <Route exact path='/BookAdd' element={< BookAddComponent />}></Route>
          <Route exact path='/Cart' element={<CartComponent />}></Route>
          <Route exact path='/Login' element={<LoginComponent />}></Route>
          {/* added thsi neext line */}
          {/* <Route path='*' element={<div>Page not Found</div>}></Route> */}

        </Routes>
        {/* </div> */}
      </Router>
    </UserContext.Provider>
    // <React.StrictMode>
    //    {/* <UserComponent/> */}
    //    {/* <BookComponent/> */}
    //    <OrderComponent/>
    //    {/* <CartComponent/> */}
    //   {/*<OrderItemsComponent/>  */}
    //   {/* <UserAddComponent/> */}
    //   {/* <BookAddComponent/> */}
    // </React.StrictMode>

  );
}

export default App;

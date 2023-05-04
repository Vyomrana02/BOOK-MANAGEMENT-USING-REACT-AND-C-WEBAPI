import React,{ useContext } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import {UserData} from './MockDatabase';
import { UserContext } from './UserCOntext/UserContext';
import setContext from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginComponent() {
  // const [context, setContext] = useContext(UserContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const url = "https://localhost:7118";
  const difftoast = () => {
    toast.error("Email or Password incorrect",
      {
        position: "top-center",
        autoClose: 2000
      });
    }
  // const handlelogin = (e) =>{
  //   // console.log(UserData());
  //   const data = UserData();
  //   const roles = data[0];
  //   const Users = data[1];
  //   for(var x in Users){
  //     if(Email == Users[x].email && Password == Users[x].password){
  //       // setContext(Users[x]);
  //       console.log("Login Success");
  //       // setContext([Users[x].email,Users[x].password,Users[x].Role]) 
  //       var role = (Email=="User")?"USER":"ADMIN";
  //       // setContext([Email,Password,role])
  //       localStorage.setItem("Email",Email);
  //       localStorage.setItem("Password",Password);
  //       localStorage.setItem("Role",role);
  //       window.location.replace('http://localhost:3000/home');
  //     }
  //   }
  const handlelogin = (e) => {
    axios.get(`${url}/api/Users`)
        .then(res => res.data)
        .then((data) => {
          console.log(data)
          for(var i in data){
            // console.log(data[i]);
            if(data[i].email === Email && data[i].password === Password){
              localStorage.setItem("usersID",data[i].usersID);
              localStorage.setItem("firstName",data[i].firstName)
              localStorage.setItem("lastName",data[i].lastName)
              localStorage.setItem("Password",Password);
              localStorage.setItem("Email",Email);
              if(data[i].type == 1)
                localStorage.setItem("type","ADMIN");
              else
                localStorage.setItem("type","USER");
              window.location.replace('http://localhost:3000/home');
            }
          }
          setTimeout(()=>{
            difftoast()
          },1000)
          e.preventDefault()

        })
        .catch((error) => {
          console.log(error);
        })
  }
    // console.log(context)
    // console.log(data[1])
  // }
  return (
    <div class="container">
    <MDBContainer fluid className="p-3 my-5 h-custom">
    <ToastContainer/>
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          {/* <div className="d-flex flex-row align-items-center justify-content-center">
          
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}
          <label className="form__label" for="Name">Email Address</label>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setEmail(e.target.value)} id='formControlLg1' type='email' size="lg"/>
          <label className="form__label" for="Name">Password</label>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setPassword(e.target.value)} id='formControlLg2' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <button className="btn btn-primary" onClick={(e)=>handlelogin(e)} >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div> */}

    </MDBContainer>
    </div>
  );
}

export default LoginComponent;
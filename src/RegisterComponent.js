import React, { useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { UserData } from './MockDatabase';
import { UserContext } from './UserCOntext/UserContext';
import setContext from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegisterComponent() {
  const [fname, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [myObj, setMyObj] = useState([]);
  const url = "https://localhost:7118";
  const deltoast = () => {
    toast.error("User Already Exists",
      {
        position: "top-center",
        autoClose: 2000
      });
  }
  const handleRegister = (e) => {
    // axios.get(`${url}/api/Users`)
    //     .then(res => res.data)
    //     .then((data) => {
    //       console.log(data)
    //       for(var i in data){
    //         // console.log(data[i]);
    //         if(data[i].email === Email && data[i].password === Password){
    //           localStorage.setItem("usersID",data[i].usersID);
    //           localStorage.setItem("firstName",data[i].firstName)
    //           localStorage.setItem("lastName",data[i].lastName)
    //           localStorage.setItem("Password",Password);
    //           localStorage.setItem("Email",Email);
    //           if(data[i].type == 1)
    //             localStorage.setItem("type","ADMIN");
    //           else
    //             localStorage.setItem("type","USER");
    //           window.location.replace('http://localhost:3000/home');
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    if(fname=="" || lName=="" || Email=="" || Password=="") 
      return;
    var xyy = 0;
    axios.get(`${url}/api/users`)
      .then(res => res.data)
      .then((data) => {
        setMyObj(data);
        console.log(data);
        for (var i in data) {
          if (data[i].email == Email) {
            deltoast()
            e.preventDefault()
            setTimeout(() => {
              window.location.reload(true);
            }, 2000);
            xyy = 1;
            break;
          }

        }
      })
      .then(()=>{
        if (xyy == 0) {
          var currentdate = new Date();
          const data1 = {
            FirstName: fname,
            lastName: lName,
            Email: Email,
            Password: Password,
            Type: "0",
            Status: 1,
            // CreatedOn: "1800-01-01T00:00:00",
            CreatedOn: currentdate,
          }
    
    
          axios.post(`${url}/api/Users`, data1)
            // .then((json => json.data)
            .then((json) => {
              // alert(JSON.stringify(json))
              console.log(JSON.stringify(json.data))
              var tempObj = JSON.stringify(json.data);
              tempObj = JSON.parse(tempObj);
              var usersID = tempObj.usersID;
              console.log(tempObj);
              console.log(usersID)
              localStorage.setItem("usersID", usersID);
              localStorage.setItem("firstName", fname)
              localStorage.setItem("lastName", lName)
              localStorage.setItem("Password", Password);
              localStorage.setItem("Email", Email);
              localStorage.setItem("type", "USER");
              window.location.replace('http://localhost:3000/home');
            }).catch((error) => {
              console.log(error)
            })
    
    
        }
    
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
        <form>
        <ToastContainer />
        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>
            <label className="form__label" for="fName">First Name</label>
            <MDBInput wrapperClass='mb-4' onChange={(e) => setfName(e.target.value)} id='formControlLg1' type='text' size="lg" required/>
            <label className="form__label" for="lName">Last Name</label>
            <MDBInput wrapperClass='mb-4' onChange={(e) => setlName(e.target.value)} id='formControlLg1' type='text' size="lg" required/>

            <label className="form__label" for="Name">Email Address</label>
            <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} id='formControlLg1' type='email' size="lg" required/>
            <label className="form__label" for="Name">Password</label>
            <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} id='formControlLg2' type='password' size="lg" required/>

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
            <button className="btn btn-primary" type="submit" onClick={(e)=>handleRegister(e)} >Register</button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/login" className="link-danger">Login</a></p>
            </div>

          </MDBCol>

        </MDBRow>
        </form>

      </MDBContainer>
    </div>
  );
}

export default RegisterComponent;
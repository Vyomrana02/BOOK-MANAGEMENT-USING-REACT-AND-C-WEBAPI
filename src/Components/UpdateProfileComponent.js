import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
var userId = localStorage.getItem("usersID");
function UpdateProfileComponent(){
    const [fname, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [Email, setEmail] = useState("");
    const [myObj, setMyObj] = useState({});
    const [type,settype] = useState("");
    const [status,setStatus] = useState(0);
    const [createdOn,setcreatedOn] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const url = "https://localhost:7118";
    function getdata() {
       
      setIsLoading(true);
      axios.get(`${url}/api/users/${userId}`)
        .then(res => res.data)
        .then((data) => {
          setMyObj(prevState => ({
            ...prevState,
            data
        }))
          console.log(myObj)
          setfName(data.firstName)
          setlName(data.lastName)
          setEmail(data.email)
          setPassword(data.password)
          settype(data.type)
          setStatus(data.status)
          setcreatedOn(data.createdOn)
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    useEffect(() => {
      getdata();
    }, []);

    const handleUpdate = (e) => {
        const data1 = {
            usersID: userId,
            FirstName: fname,
            lastName: lName,
            Email: Email,
            Password: Password,
            Type: "0",
            Status: 1,
            // CreatedOn: "1800-01-01T00:00:00",
            CreatedOn: createdOn,
        }

        axios.put(`${url}/api/users/${userId}`,data1)
        .then((json)=>{
            // alert(JSON.stringify(json))
            difftoast();
            setTimeout(()=>{
              window.location.replace("http://localhost:3000/home")
              
            },2000);
        })
        e.preventDefault();
    }
    const difftoast = () => {
    toast.success("Update Profile Successfully",
      {
        position: "top-center",
        autoClose: 2000
      });
    }
    return (
        <div class="container">
      <MDBContainer fluid className="p-3 my-5 h-custom">
      <ToastContainer />
        <MDBRow>
          <MDBCol col='4' md='6'>
            <label className="form__label" for="fName">First Name</label>
            <MDBInput wrapperClass='mb-4' value = {fname} onChange={(e) => setfName(e.target.value)} id='formControlLg1' type='email' size="lg" />
            <label className="form__label" for="lName">Last Name</label>
            <MDBInput wrapperClass='mb-4' value = {lName} onChange={(e) => setlName(e.target.value)} id='formControlLg1' type='email' size="lg" />

            <label className="form__label" for="Name">Email Address</label>
            <MDBInput wrapperClass='mb-4' value = {Email} onChange={(e) => setEmail(e.target.value)} id='formControlLg1' type='email' size="lg" />
            <label className="form__label" for="Name">Password</label>
            <MDBInput wrapperClass='mb-4' value = {Password} onChange={(e) => setPassword(e.target.value)} id='formControlLg2' type='password' size="lg" />
            <div className='text-center text-md-start mt-4 pt-2'>
            <button className="btn btn-primary" onClick={(e) => handleUpdate(e)} >Update</button>
            </div>
            

          </MDBCol>

        </MDBRow>


      </MDBContainer>
    </div>
    );
}
export default UpdateProfileComponent;
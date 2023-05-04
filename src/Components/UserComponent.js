
import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAddComponent from './UserAddComponent';

// function UserComponent(){
//   const url = "https://localhost:7118";
//   var users = {}
//   const [posting,setPosting] = useState(null);
//   const [myObj,setmyObj] = useState([]);
//   useEffect(()=>{
//     axios.get(`${url}/api/users`)
//     .then((json)=>{
//       users = JSON.stringify(json);
//       var x = JSON.parse(users);
//       setPosting(x);
//       setmyObj(x);
//       console.log(typeof(users));
//       console.log(typeof(x));
//     });
//   },[myObj,posting])
//   const handleDelete = (e) => {
//     console.log(e);
//     }
//     // fetch("https://localhost:7118/api/Users")
//     // .then(res => res.json())
//     // .then(
//     //   (result) => {
//     //     console.log(result);
//     //     this.setState({
//     //         users: result
//     //     });
//     //   }
//     // );
//     // useEffect(()=>{
//           // },[]);

//       // const data = {
//       //     name: Name,
//       //     publisher: Publisher,
//       //     unitPrice: UnitPrice,
//       //     discount: Discount,
//       //     quantity: Quantity,
//       //     publishedDate:PublishedDate,
//       //     imageUrl: ImageUrl,
//       //     Status: 1,
//       // }
//       // axios.post(`${url}/api/books`,data)
//       // .then((json)=>{
//       //     alert(JSON.stringify(json))
//       // }).catch((error)=>{
//       //     console.log(error)
//       // })

//               return (
//                 <div>
//                   {posting !== null ? (

// <div class="container">
// <div class="table-wrapper">
//   <div class="table-title">
//     <div class="row">
//       <div class="col-sm-6">
//         <h2>Manage <b>Users</b></h2>
//       </div>
//       <div class="col-sm-6">
//         <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i
//             class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
//         <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i
//             class="material-icons">&#xE15C;</i> <span>Delete</span></a>
//       </div>
//     </div>
//   </div>
//   <table class="table table-striped table-hover">
//     <thead>
//       <tr>
//         <th>UserId</th>
//         <th>FirstName</th>
//         <th>LastName</th>
//         <th>Password</th>
//         <th>Email</th>
//         <th>Type</th>
//         <th>Status</th>
//         <th>Created On</th>
//       </tr>
//     </thead>
//     <tbody>
//       <td>{myObj.data}</td>
//     {myObj.map(user => (
//          <tr key = {user.usersID}>
//               <td>{user.usersID}</td>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.password}</td>
//               <td>{user.email}</td>
//               <td>{user.type}</td>
//               <td>{user.status}</td>
//               <td>{user.createdOn}</td>
//               <td>
//                 <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
//                     data-toggle="tooltip" title="Edit">&#xE254;</i></a>
//                 <button onClick={(e) => handleDelete(e)} class="delete" ></button>
//                 {/* <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
//                     data-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
//               </td>
//          </tr> 
//       ))}
//     </tbody>
//   </table>
// </div>
// </div>
//                   ) :(<div> loading post </div>)}
//                 </div>

//             );
//   }

// export default UserComponent;


//Edit Modal HTML
// <div id="addEmployeeModal" class="modal fade">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <form>
//         <div class="modal-header">
//           <h4 class="modal-title">Add Employee</h4>
//           <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//         </div>
//         <div class="modal-body">
//           <div class="form-group">
//             <label>Name</label>
//             <input type="text" class="form-control" required>
//           </div>
//           <div class="form-group">
//             <label>Email</label>
//             <input type="email" class="form-control" required>
//           </div>
//           <div class="form-group">
//             <label>Address</label>
//             <textarea class="form-control" required></textarea>
//           </div>
//           <div class="form-group">
//             <label>Phone</label>
//             <input type="text" class="form-control" required>
//           </div>
//         </div>
//         <div class="modal-footer">
//           <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
//           <input type="submit" class="btn btn-success" value="Add">
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// <!-- Edit Modal HTML -->
// <div id="editEmployeeModal" class="modal fade">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <form>
//         <div class="modal-header">
//           <h4 class="modal-title">Edit Employee</h4>
//           <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//         </div>
//         <div class="modal-body">
//           <div class="form-group">
//             <label>Name</label>
//             <input type="text" class="form-control" required>
//           </div>
//           <div class="form-group">
//             <label>Email</label>
//             <input type="email" class="form-control" required>
//           </div>
//           <div class="form-group">
//             <label>Address</label>
//             <textarea class="form-control" required></textarea>
//           </div>
//           <div class="form-group">
//             <label>Phone</label>
//             <input type="text" class="form-control" required>
//           </div>
//         </div>
//         <div class="modal-footer">
//           <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
//           <input type="submit" class="btn btn-info" value="Save">
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// <!-- Delete Modal HTML -->
// <div id="deleteEmployeeModal" class="modal fade">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <form>
//         <div class="modal-header">
//           <h4 class="modal-title">Delete Employee</h4>
//           <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//         </div>
//         <div class="modal-body">
//           <p>Are you sure you want to delete these Records?</p>
//           <p class="text-warning"><small>This action cannot be undone.</small></p>
//         </div>
//         <div class="modal-footer">
//           <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
//           <input type="submit" class="btn btn-danger" value="Delete">
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// <div>
// <h2>Employees Data...</h2>
// <table>
//   <thead>
//     <tr>
//       <th>UserId</th>
//       <th>FirstName</th>
//       <th>LastName</th>
//       <th>Password</th>
//       <th>Email</th>
//       <th>Type</th>
//       <th>Status</th>
//       <th>Created On</th>
//     </tr>
//   </thead>
//   <tbody>    
//     {this.state.users.map(user => (
//        <tr key = {user.usersID}>
//             <td>{user.usersID}</td>
//             <td>{user.firstName}</td>
//             <td>{user.lastName}</td>
//             <td>{user.password}</td>
//             <td>{user.email}</td>
//             <td>{user.type}</td>
//             <td>{user.status}</td>
//             <td>{user.createdOn}</td>
//        </tr> 
//     ))}
//   </tbody>
// </table>
// </div>
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [myObj, setMyObj] = useState([]);
  const handleDelete = (e) => {
    console.log(e);

  }
  const url = "https://localhost:7118";
  function getdata() {
    setIsLoading(true);
    axios.get(`${url}/api/users`)
      .then(res => res.data)
      .then((data) => {
        setMyObj(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const[firstName,setFirstName] = useState("ME");
  const[LastName,setLastName] = useState("ME");
  const[email,setEmail] = useState("ME");
  const[password,setPassword] = useState("ME");
  useEffect(() => {
    getdata();
  }, []);
  const difftoast = () => {
    toast.success("User Update successully",
      {
        position: "top-center",
        autoClose: 2000
      });
    }

   const handleSubmit = (e,user) => {
       const data = {
            usersID:user.usersID,
            firstName: firstName,
            lastName: LastName,
            password: password,
            email: email,
            type: "1",
            status: 1,
            createdOn: "1800-01-01T00:00:00",
       }

       
       axios.put(`${url}/api/Users/${user.usersID}`,data)
       .then((json)=>{
          //  alert(JSON.stringify(json))
          difftoast()
          setTimeout(()=>{
            window.location.reload(true);
          },2000);
       }).catch((error)=>{
           console.log(error)
       }) 
       e.preventDefault();    
       
   }

   const handleUpdate = (e,user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPassword(user.password);
      console.log(user);
   }

  return (
    <>
      {/* {!isLoading ? (<h1>{myObj[0].usersID}</h1>) :(<h1>Loading</h1>)} */}
      {!isLoading ? (
        <div>
        {(localStorage.getItem("type")=="ADMIN") ? 
        // myObj.map(user => (
          <div class="container">
          <ToastContainer />
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Manage <b>Users</b></h2>
                </div>
                {/* <div class="col-sm-6">
                  <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i
                    class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                  <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i
                    class="material-icons">&#xE15C;</i> <span>Delete</span></a>
                </div> */}
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>UserId</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                <td>{myObj.data}</td>
                {myObj.map(user => (
                  <tr key={user.usersID}>
                    <td>{user.usersID}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                    <td>{user.status}</td>
                    <td>{user.createdOn}</td>
                    <td>
                      <a href="#editEmployeeModal" onClick={(e)=>handleUpdate(e,user)} class="edit" data-target="#exampleModal" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                      &nbsp;&nbsp;
                      {/* <button onClick={(e) => handleDelete(e)} class="delete" ><i class="material-icons"
                        data-toggle="tooltip" title="Delete">&#xE872;</i></button> */}
                      {/* <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                              data-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                    </td>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                          <div className="form-body">
                <div className="firstName form-group">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input form-control" type="text" id="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder=""/>
                </div>
                <div className="lastname form-group">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input form-control" onChange={(e)=>setLastName(e.target.value)} value = {LastName} placeholder="LastName"/>
                </div>
                <div className="email form-group">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input form-control" onChange={(e)=>setEmail(e.target.value)} value = {email} placeholder="Email"/>
                </div>
                <div className="password form-group">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input form-control" type="password"  id="password" onChange={(e)=>setPassword(e.target.value)} value = {password} placeholder="Password"/>
                </div>
            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e,user)}>Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        :
        <div>
            {window.location.replace("http://localhost:3000/home")};
        </div>
    }
    </div>
        // ))

      ) : (<h1>Loading</h1>)}
    </>);
}
export default UserComponent;


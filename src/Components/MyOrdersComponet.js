import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAddComponent from './UserAddComponent';
var userId = localStorage.getItem("usersID");;

function UserComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [myObj, setMyObj] = useState([]);
  const [Status, setStatus] = useState("");
  const [myObj2,setMyObj2] = useState([]);
  const handleDelete = (e) => {
    console.log(e);

  }
    const url = "https://localhost:7118";
    function getdata() {
      setIsLoading(true);
      axios.get(`${url}/api/orders/${userId}`)
        .then(res => res.data)
        .then((data) => {
          setMyObj(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    useEffect(() => {
      getdata();
    }, []);


  //  const handleSubmit = (e,user) => {
  //      const data = {
  //           usersID:user.usersID,
  //           firstName: firstName,
  //           lastName: LastName,
  //           password: password,
  //           email: email,
  //           type: "1",
  //           status: 1,
  //           createdOn: "1800-01-01T00:00:00",
  //      }


  //      axios.put(`${url}/api/Users/${user.usersID}`,data)
  //      .then((json)=>{
  //          alert(JSON.stringify(json))
  //          window.location.reload(true)
  //      }).catch((error)=>{
  //          console.log(error)
  //      })     

  //  }

  const handleUpdate = (e, user) => {
    // setFirstName(user.firstName);
    // setLastName(user.lastName);
    // setEmail(user.email);
    // setPassword(user.password);
    // console.log(user);
  }
  const handleitems = (e, order) => {
    axios.get(`${url}/api/orderItems/${order.orderID}`)
      .then(res => res.data)
      .then((data) => {
        console.log("OrderId:" , order.orderID)
        setMyObj2(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  const handleStatus = (e, order) => {
    const data = {
      // orderID: order.orderID,
      // orderNo:order.orderNo,
      // ordertotal: order.ordertotal,
      // orderStatus: "Delivered",
      // usersID:order.usersID,
      // users: order.users,
      orderID: order.orderID,
      orderNo: order.orderNo,
      ordertotal: order.ordertotal.toFixed(2),
      orderStatus: "Delivered",
      UsersID: order.usersID,
      users: {
        usersID: order.users.usersID,
        firstName: order.users.firstName,
        lastName: order.users.lastName,
        password: order.users.password,
        email: order.users.email,
        type: order.users.type,
        status: 1,
        createdOn: order.users.createdOn,

      }
    }

    axios.put(`${url}/api/Orders/${order.orderID}`, data)
      .then((json) => {
        alert(JSON.stringify(json))
        window.location.reload(true)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {/* {!isLoading ? (<h1>{myObj[0].usersID}</h1>) :(<h1>Loading</h1>)} */}
      {!isLoading ? (
        // myObj.map(user => (
        <div class="container">

          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Manage <b>Orders</b></h2>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>OrderNo</th>
                  <th>Order Total</th>
                  <th>Order Status</th>
                  <th>UserId</th>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>
                <td>{myObj.data}</td>
                {myObj.map(order => (
                  <tr key={order.orderID}>
                    <td>{order.orderNo}</td>
                    <td>{order.ordertotal}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.usersID}</td>
                    {/* <td>{order.users}</td> */}
                    <td>{order.users.firstName + " " + order.users.lastName}</td>
                    {order.orderStatus == 'Delivered' ?
                      <td>
                        <a href="#deleteEmployeeModal" class="fa 	fa fa-check-circle fa-lg" data-toggle="modal"></a>
                      </td>
                      :
                      <td>
                        <a href="#deleteEmployeeModal" onClick={(e) => handleStatus(e, order)} class="Update" data-toggle="modal"><i class="material-icons"
                          data-toggle="Update" title="Update">&#xe923;</i></a>
                      </td>
                    }
                    
                     <td>
                      <a href="#deleteEmployeeModal" onClick={(e) => handleitems(e,order)} data-target="#exampleModal" class="ITEMS" data-toggle="modal"> <i class="fa fa-eye" aria-hidden="true"></i></a>
                    </td> 

                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Order Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>

                          <div class="modal-body">
                            <table class="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>UnitPrice</th>
                                  <th>Discount</th>
                                  <th>Quantity</th>
                                  <th>Total Price</th>
                                  <th>Book Name</th>
                                </tr>
                              </thead>
                              <tbody>
                                <td>{myObj2.data}</td>
                                {myObj2.map(orderitem => (
                                  <tr key={orderitem.orderItemsID}>
                                    <td>{orderitem.unitPrice}</td>
                                    <td>{orderitem.discount}</td>
                                    <td>{orderitem.quantity}</td>
                                    <td>{orderitem.totalPrice}</td>
                                    <td>{orderitem.books.name}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
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
        // ))

      ) : (<h1>Loading</h1>)}
    </>);
}
export default UserComponent;


// <div class="modal-body">
//                           <div className="form-body">
//                 <div className="firstName">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" id="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder=""/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName"  className="form__input" onChange={(e)=>setLastName(e.target.value)} value = {LastName} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" onChange={(e)=>setEmail(e.target.value)} value = {email} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" onChange={(e)=>setPassword(e.target.value)} value = {password} placeholder="Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <button type="submit" class="btn" onClick={(e) => handleSubmit(e,user)}>Register</button>
//             </div>
//                           </div>











//https://www.c-sharpcorner.com/article/jwt-token-creation-authentication-and-authorization-in-asp-net-core-6-0-with-po/


//NEW PAGE FOR ADDTOCART AND CART
//PLACE ORDER ORDERITEMS


//USER TYPE
// ADDRESS OF DELIVERYH

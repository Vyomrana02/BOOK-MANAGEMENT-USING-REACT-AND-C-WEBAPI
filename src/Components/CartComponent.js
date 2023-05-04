// import * as ReactDOM from 'react-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import toast, { Toaster } from 'react-hot-toast';
// import { useContext } from 'react';
// import { UserContext } from '../UserCOntext/UserContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// var xyzz = 0;
// function generate(xyz) {
//   let length = xyz;
//   let result = ' ';
//   for (let i = 0; i < length; i++) {
//     result +=
//       String.fromCharCode(97 + Math.floor(Math.random() * 26));
//   }
//   return result
//   // document.getElementById("target").innerHTML = result
// }
// function BookComponent() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [myObj, setMyObj] = useState([]);
//   const [Name, setName] = useState("ME");
//   const [Publisher, setPublisher] = useState("ME");
//   const [UnitPrice, setUnitPrice] = useState(0.0);
//   const [Discount, setDiscount] = useState(0.0);
//   const [Quantity, setQuantity] = useState(0);
//   const [PublishedDate, setPublishedDate] = useState("");
//   const [ImageUrl, setImageUrl] = useState("");
//   const [Status, setStatus] = useState(0);
//   const [OrderTotal, setOrderTotal] = useState(0);
//   const [user, setUser] = useState({});
//   const [address,setAddress] = useState("");
//   const [context, setContext] = useContext(UserContext);


//   var userId = localStorage.getItem("usersID");
//   const url = "https://localhost:7118";
//   const handleDelete = (e) => {
//     // setIsLoading(true);

//     axios.delete(`${url}/api/carts/${userId}`)
//       .then(res => {
//         console.log(res.data);
//         deltoast()
//         e.preventDefault()
//         setTimeout(()=>{
//           window.location.reload(true);
//         },2000);
//       })
//       e.preventDefault();

//   }
//   function getdata() {
//     setIsLoading(true);
//     axios.get(`${url}/api/Carts/${userId}`)
//       .then(res => res.data)
//       .then((data) => {
//         setMyObj(data);
//         console.log(data);
//         // window.location.reload(true)
//         setIsLoading(false);
//       })
//     axios.get(`${url}/api/users/${userId}`)
//       .then(res => res.data)
//       .then((data) => {
//         setUser(data);
//         console.log(data);
//         // window.location.reload(true)
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//   useEffect(() => {
//     getdata();
//   }, []);

//   // const handleSubmit = (e, book) => {
//   //   console.log(book);
//   //   const temp1 = book.discount
//   //   let x = temp1.toFixed(2);
//   //   console.log(x)
//   //   const data = {
//   //     booksID: book.booksID,
//   //     name: book.name,
//   //     publisher: book.publisher,
//   //     unitPrice: book.unitPrice.toFixed(2),
//   //     discount: book.discount.toFixed(2),
//   //     quantity: book.quantity,
//   //     publishedDate: book.publishedDate,
//   //     imageUrl: book.imageUrl,
//   //     status: book.status,
//   //   }


//   //   axios.put(`${url}/api/Books/${book.booksID}`, data)
//   //     .then((json) => {
//   //       // alert(JSON.stringify(json))
//   //       // window.location.reload(true)
//   //     }).catch((error) => {
//   //       console.log(error)
//   //     })

//   // }
//   // const handleUpdate = (e, book) => {
//   //   setName(book.name);
//   //   setPublisher(book.publisher);
//   //   setUnitPrice(book.unitPrice);
//   //   setDiscount(book.discount);
//   //   setQuantity(book.quantity);
//   //   setPublishedDate("01-01-1800 00:00:00");
//   //   setImageUrl(book.imageUrl);
//   //   setStatus(book.status);
//   // }
//   const difftoast = () => {
//     toast.success("Place Order SuccessFully",
//       {
//         position: "top-center",
//         autoClose: 2000
//       });
//     }
//     const deltoast = () => {
//       toast.error("Removed from Cart",
//         {
//           position: "top-center",
//           autoClose: 2000
//         });
//       }
//     const handlePlaceOrder = (e) => {
//       //orderitems
//       var x = generate(10)
//       const data = {
//         orderNo: x,
//         // ordertotal: OrderTotal.toFixed(2),
//         ordertotal: (xyzz.toFixed(2)/2),
//         orderStatus: "Not Delivered",
//         Address: address,
//         UsersID: userId,
//         users: {
//           usersID: user.usersID,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           password: user.password,
//           email: user.email,
//           type: user.type,
//           status: 1,
//           createdOn: user.createdOn,
//         }
//       }
//       axios.post(`${url}/api/orders`, data)
//         .then(json => json.data)
//         .then((json) => {
//           // alert(JSON.stringify(json))
//           //to get orderID
//           console.log(JSON.stringify(json))
//           var tempObj = JSON.stringify(json);
//           tempObj = JSON.parse(tempObj);
//           var orderid = tempObj.orderID;
//           console.log(orderid)

//           //to get orfder
//           axios.get(`${url}/api/orders/${orderid}`)
//             .then(res => res.data)
//             .then((data4) => {
//               // alert(JSON.stringify(data4))
//               var data3 = {}
//               myObj.map((data2) => (
//                 console.log(data2.books.booksID),
//                 data3 = {
//                   unitPrice: data2.unitPrice,
//                   discount: data2.discount,
//                   quantity: 1,
//                   totalPrice: data2.unitPrice - .01*data2.unitPrice*data2.discount,
//                   orderID: orderid,
//                   booksID: data2.books.booksID,
//                   order: data4,
//                   books: data2.books,
//                 },
//                 // console.log("GGS"),
//                 // console.log(data3),
//                 axios.post(`${url}/api/orderItems`, data3)
//                   .then((json) => {
//                     console.log("orderItems")
//                     // alert(JSON.stringify(json))
//                     // toast.success('Added to Cart Successfully')

//                   }).catch((error) => {
//                     console.log(error)
//                   })
//               ))
//             }).then((data5) => {
//               axios.delete(`${url}/api/carts/${userId}`)
//               .then(res => {
//                 console.log(res.data);
//                 difftoast()
//                 setTimeout(()=>{
//                   window.location.reload(true);
//                 },2000);
//                   // window.location.reload(true)
//                 })

//             })

//         }).catch((error) => {
//           console.log(error)
//         })
//       e.preventDefault();

//     }

//     return (
//       <>
//         {!isLoading ? (
//           // myObj.map(user => (
//           <div class="container">
//             <ToastContainer />
//             <div class="table-wrapper">
//               <div class="table-title">
//                 <div class="row">
//                   <div class="col-sm-8">
//                     <h2>Manage <b>Cart</b></h2>
//                   </div>
//                   <div class="col-sm-2">
//                     <button onClick={(e) => handleDelete(e)} class="delete" ><i class="material-icons"
//                       data-toggle="tooltip" title="Delete">&#xE872;</i></button>
//                   </div>
//                   <div class="col-sm-2">
//                     {/* <a href="#addEmployeeModal" class="btn btn-success " onClick={(e) => handlePlaceOrder(e)} data-toggle="modal"><span>Place Order</span></a> */}
//                     <a href="#addEmployeeModal" class="btn btn-success " data-target="#exampleModal" data-toggle="modal"><span>Place Order</span></a>
//                   </div>
//                 </div>
//               </div>
//               <table class="table table-striped table-hover">
//                 <thead>
//                   <tr>
//                     {/* <th>cartID</th> */}


//                     <th>Discount</th>
//                     <th>Publisher</th>
//                     <th>Published Date</th>
//                     <th>UnitPrice</th>
//                     <th>Book Image</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <td>{myObj.data}</td>
//                   {myObj.map(cart => (
//                     <tr key={cart.booksID}>
//                       <td>{cart.discount}</td>
//                       <td>{cart.books.publisher}</td>
//                       <td>{cart.books.publishedDate}</td>
//                       <td>{cart.unitPrice}</td>
//                       {/* <td><img src={book.imageUrl} height='50' width='50' style="border:4px solid #1b6b6f; padding:15px;"></img></td> */}
//                       <td><img src={cart.books.imageUrl} height='50' width='50'   ></img></td>
//                       <td>
//                         {/* <a href="#editEmployeeModal" class="edit" onClick={(e)=>handleUpdate(e,book)} data-target="#exampleModal" data-toggle="modal"><i class="material-icons"
//                         data-toggle="tooltip" title="Edit">&#xE254;</i></a>&nbsp;&nbsp;*/}
//                         {/* <button onClick={(e) => handleDelete(cart.cartID, e)} class="delete" ><i class="material-icons"
//                         data-toggle="tooltip" title="Delete">&#xE872;</i></button>  */}
//                         {/* <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
//                               data-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
//                       </td>
//                       <div style={{ display: "none" }}>
//                         {xyzz += (cart.unitPrice - cart.unitPrice*(0.01*cart.discount))}

//                       </div>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div class="col-sm-3">
//                 <h4>Total <b>Cart Value</b>  &#8377;{xyzz}</h4>
//                 {/* <h4></h4> */}
//               </div>

//             </div>
            

//             <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                           <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                               <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">Shipping Details</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                   <span aria-hidden="true">&times;</span>
//                                 </button>
//                               </div>

//                               <div class="modal-body">
//                                 <table class="table table-striped table-hover">
//                                   <thead>
//                                     <tr>
//                                       <th>Address</th>
//                                     </tr>
//                                   </thead>
//                                   <br></br>
//                                   <tbody>
//                                     <tr><input type="text" onChange={(e)=>setAddress(e.target.value)}></input></tr>
//                                   </tbody>
//                                 </table>

//                               </div>
//                               <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 <button type="button" class="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//           </div>
//           // ))

//         ) : (<h1>Loadings</h1>)}
//       </>);
//   }
//   export default BookComponent;

import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../UserCOntext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var xyzz = 0;
function generate(xyz) {
  let length = xyz;
  let result = ' ';
  for (let i = 0; i < length; i++) {
    result +=
      String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  return result
  // document.getElementById("target").innerHTML = result
}
function BookComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [myObj, setMyObj] = useState([]);
  const [Name, setName] = useState("ME");
  const [Publisher, setPublisher] = useState("ME");
  const [UnitPrice, setUnitPrice] = useState(0.0);
  const [Discount, setDiscount] = useState(0.0);
  const [Quantity, setQuantity] = useState(0);
  const [PublishedDate, setPublishedDate] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Status, setStatus] = useState(0);
  const [OrderTotal, setOrderTotal] = useState(0);
  const [user, setUser] = useState({});
  const [address,setAddress] = useState("");
  const [context, setContext] = useContext(UserContext);


  var userId = localStorage.getItem("usersID");
  const url = "https://localhost:7118";
  const handleDelete = (e) => {
    // setIsLoading(true);

    axios.delete(`${url}/api/carts/${userId}`)
      .then(res => {
        console.log(res.data);
        deltoast()
        e.preventDefault()
        setTimeout(()=>{
          window.location.reload(true);
        },2000);
      })
      e.preventDefault();

  }
  function getdata() {
    setIsLoading(true);
    localStorage.setItem("totPrice",0);
    axios.get(`${url}/api/Carts/${userId}`)
      .then(res => res.data)
      .then((data) => {
        setMyObj(data);
        console.log(data);
        // window.location.reload(true)
        setIsLoading(false);
      })
    axios.get(`${url}/api/users/${userId}`)
      .then(res => res.data)
      .then((data) => {
        setUser(data);
        console.log(data);
        // window.location.reload(true)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    getdata();
  }, []);

  // const handleSubmit = (e, book) => {
  //   console.log(book);
  //   const temp1 = book.discount
  //   let x = temp1.toFixed(2);
  //   console.log(x)
  //   const data = {
  //     booksID: book.booksID,
  //     name: book.name,
  //     publisher: book.publisher,
  //     unitPrice: book.unitPrice.toFixed(2),
  //     discount: book.discount.toFixed(2),
  //     quantity: book.quantity,
  //     publishedDate: book.publishedDate,
  //     imageUrl: book.imageUrl,
  //     status: book.status,
  //   }


  //   axios.put(`${url}/api/Books/${book.booksID}`, data)
  //     .then((json) => {
  //       // alert(JSON.stringify(json))
  //       // window.location.reload(true)
  //     }).catch((error) => {
  //       console.log(error)
  //     })

  // }
  // const handleUpdate = (e, book) => {
  //   setName(book.name);
  //   setPublisher(book.publisher);
  //   setUnitPrice(book.unitPrice);
  //   setDiscount(book.discount);
  //   setQuantity(book.quantity);
  //   setPublishedDate("01-01-1800 00:00:00");
  //   setImageUrl(book.imageUrl);
  //   setStatus(book.status);
  // }
  const difftoast = () => {
    toast.success("Place Order SuccessFully",
      {
        position: "top-center",
        autoClose: 2000
      });
    }
    const deltoast = () => {
      toast.error("Removed from Cart",
        {
          position: "top-center",
          autoClose: 2000
        });
      }
    const handlePlaceOrder = (e) => {
      //orderitems
      var x = generate(10)
      const data = {
        orderNo: x,
        // ordertotal: OrderTotal.toFixed(2),
        // ordertotal: (xyzz.toFixed(2)/2),
        OrderTotal: localStorage.getItem("totPrice"),
        orderStatus: "Not Delivered",
        Address: address,
        UsersID: userId,
        users: {
          usersID: user.usersID,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          email: user.email,
          type: user.type,
          status: 1,
          createdOn: user.createdOn,
        }
      }
      axios.post(`${url}/api/orders`, data)
        .then(json => json.data)
        .then((json) => {
          // alert(JSON.stringify(json))
          //to get orderID
          console.log(JSON.stringify(json))
          var tempObj = JSON.stringify(json);
          tempObj = JSON.parse(tempObj);
          var orderid = tempObj.orderID;
          console.log(orderid)

          //to get orfder
          axios.get(`${url}/api/orders/${orderid}`)
            .then(res => res.data)
            .then((data4) => {
              // alert(JSON.stringify(data4))
              var data3 = {}
              myObj.map((data2) => (
                console.log(data2.books.booksID),
                data3 = {
                  unitPrice: data2.unitPrice,
                  discount: data2.discount,
                  quantity: 1,
                  totalPrice: data2.unitPrice - .01*data2.unitPrice*data2.discount,
                  orderID: orderid,
                  booksID: data2.books.booksID,
                  order: data4,
                  books: data2.books,
                },
                // console.log("GGS"),
                // console.log(data3),
                axios.post(`${url}/api/orderItems`, data3)
                  .then((json) => {
                    console.log("orderItems")
                    // alert(JSON.stringify(json))
                    // toast.success('Added to Cart Successfully')

                  }).catch((error) => {
                    console.log(error)
                  })
              ))
            }).then((data5) => {
              axios.delete(`${url}/api/carts/${userId}`)
              .then(res => {
                console.log(res.data);
                difftoast()
                setTimeout(()=>{
                  window.location.reload(true);
                },2000);
                  // window.location.reload(true)
                })

            })

        }).catch((error) => {
          console.log(error)
        })
      e.preventDefault();

    }

    return (
      <>
        {!isLoading ? (
          // myObj.map(user => (
          <div class="container">
            <ToastContainer />
            <div class="table-wrapper">
              <div class="table-title">
                <div class="row">
                  <div class="col-sm-8">
                    <h2>Manage <b>Cart</b></h2>
                  </div>
                  <div class="col-sm-2">
                    <button onClick={(e) => handleDelete(e)} class="delete" ><i class="material-icons"
                      data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                  </div>
                  <div class="col-sm-2">
                    {/* <a href="#addEmployeeModal" class="btn btn-success " onClick={(e) => handlePlaceOrder(e)} data-toggle="modal"><span>Place Order</span></a> */}
                    <a href="#addEmployeeModal" class="btn btn-success " data-target="#exampleModal" data-toggle="modal"><span>Place Order</span></a>
                  </div>
                </div>
              </div>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    {/* <th>cartID</th> */}


                    <th>Discount</th>
                    <th>Publisher</th>
                    <th>Published Date</th>
                    <th>UnitPrice</th>
                    <th>Book Image</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{myObj.data}</td>
                  {myObj.map(cart => (
                    <tr key={cart.booksID}>
                      <td>{cart.discount}</td>
                      <td>{cart.books.publisher}</td>
                      <td>{cart.books.publishedDate}</td>
                      <td>{cart.unitPrice}</td>
                      {/* <td><img src={book.imageUrl} height='50' width='50' style="border:4px solid #1b6b6f; padding:15px;"></img></td> */}
                      <td><img src={cart.books.imageUrl} height='50' width='50'   ></img></td>
                      <td>
                        {/* <a href="#editEmployeeModal" class="edit" onClick={(e)=>handleUpdate(e,book)} data-target="#exampleModal" data-toggle="modal"><i class="material-icons"
                        data-toggle="tooltip" title="Edit">&#xE254;</i></a>&nbsp;&nbsp;*/}
                        {/* <button onClick={(e) => handleDelete(cart.cartID, e)} class="delete" ><i class="material-icons"
                        data-toggle="tooltip" title="Delete">&#xE872;</i></button>  */}
                        {/* <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                              data-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                      </td>
                      <div style={{ display: "none" }}>
                        {localStorage.setItem("totPrice",parseInt(localStorage.getItem("totPrice")) + (cart.unitPrice - cart.unitPrice*(0.01*cart.discount)))}

                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div class="col-sm-3">
                <h4>Total <b>Cart Value</b>  &#8377;{localStorage.getItem("totPrice")}</h4>
                {/* <h4></h4> */}
              </div>

            </div>
            

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Shipping Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>

                              <div class="modal-body">
                                <table class="table table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th>Address</th>
                                    </tr>
                                  </thead>
                                  <br></br>
                                  <tbody>
                                    <tr><input type="text" onChange={(e)=>setAddress(e.target.value)}></input></tr>
                                  </tbody>
                                </table>

                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
                              </div>
                            </div>
                          </div>
                        </div>

          </div>
          // ))

        ) : (<h1>Loadings</h1>)}
      </>);
  }
  export default BookComponent;

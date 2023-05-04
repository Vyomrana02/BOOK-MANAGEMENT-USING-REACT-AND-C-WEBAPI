// import * as ReactDOM from 'react-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import UserAddComponent from './UserAddComponent';
// var userId = localStorage.getItem("usersID");
// function ShopComponent(){
//     const [isLoading, setIsLoading] = useState(false);
//     const [myObj, setMyObj] = useState([]);

//     const url = "https://localhost:7118";
//     function getdata() {
//       // setIsLoading(true);
//       axios.get(`${url}/api/Books`)
//         .then(res => res.data)
//         .then((data) => {
//           setMyObj(data);
//           // setIsLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//         })
//     }
//     useEffect(() => {

//       getdata();
//     });

//   //   const handleAddCart = (e,book) => {
//   //     console.log(book);
//   //     axios.get(`${url}/api/Users/${userId}`)
//   //       .then(res => res.data)
//   //       .then((data) => {
//   //         window.alert("YES");
//   //         setMyObj(data);
//   //         console.log(data);
//   //         const data2 = {
//   //           unitPrice: book.unitPrice,
//   //           discount: book.discount,
//   //           quantity: book.quantity,
//   //           totalPrice: book.quantity* book.unitPrice,
//   //           usersID: userId,
//   //           users: data,
//   //           booksID: book.booksID,
//   //           books: book
//   //           // users:
//   //         }
//   //         axios.post(`${url}/api/Carts`,data2)
//   //         .then((json)=>{
//   //             alert(JSON.stringify(json))
//   //             toast.success('Added to Cart Successfully');
//   //         }).catch((error)=>{
//     //             console.log(error)
//     //         })
//     //         window.alert("YES");
//     //         // setIsLoading(false);
//   //       })
//   //       .catch((error) => {
//     //         window.alert("NO");
//     //         console.log(error);
//     //       })


//     // }
//     const calltoast = () =>{
//       toast("gg");
//     }
//     const notify = () => toast('Here is your toast.');
//   const handleAddCart = (e,book) => {
//         console.log(book);
//         axios.get(`${url}/api/Users/${userId}`)
//           .then(res => res.data)
//           .then((data) => {
//             // window.alert("YES");
//             // setMyObj(data);
//             console.log(data);
//             const data2 = {
//               unitPrice: book.unitPrice,
//               discount: book.discount,
//               quantity: book.quantity,
//               totalPrice: book.quantity* book.unitPrice,
//               usersID: userId,
//               users: data,
//               booksID: book.booksID,
//               books: book
//               // users:
//             }
//             // window.alert("YES");
//             axios.post(`${url}/api/Carts`,data2)
//             .then((json)=>{
//                 // if(json.status === 200)
//                   notify()

//                 // history.push('/Shop')
//                 // window.alert(JSON.stringify(json))
//               }).catch((error)=>{
//                 console.log(error)
//               })
//             // setIsLoading(false);
//           })
//           .catch((error) => {
//             window.alert("NO");
//             console.log(error);
//           })


//     }

//     return (
//         <>
//       {/* {!isLoading ? (<h1>{myObj[0].usersID}</h1>) :(<h1>Loading</h1>)} */}
//       {!isLoading ? (
//         <div>
//         {(localStorage.getItem("type")=="USER") ? 

//     //     <div>
//     //       <div className="container">
//     //         <div className="row">
//     //           <div className='col'>
//     //     {myObj.map(book => (
//     //       // <div>{book.imageUrl}</div>
//     //       <img src={myObj.imageUrl} class="card-img-top" alt="medsfsadsfda" height="100" width="100" />
//     //     //   {/* <div class="col-lg-3 col-md-6 col-sm-6 d-flex"> */}
//     //     //     {/* <td><img src={book.imageUrl} style="aspect-ratio: 1 / 1"  ></img></td> */}
//     //     // {/* <div class="card w-100 my-2 shadow-2-strong"> */}
//     //     //     {/* <img src={book.imageUrl} class="card-img-top" style="aspect-ratio: 1 / 1"/> */}
//     //     //     {/* <td><img src={book.imageUrl} height='50' width='50'   ></img></td> */}
//     // //             {/* <div class="card-body d-flex flex-column">
//     // //                 <h5 class="card-title">{book.name}</h5>
//     // //                 <p class="card-text">{book.unitPrice}</p>
//     // //                 <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
//     // //                     <a href="#!" class="btn btn-primary shadow-0 me-1">Add to cart</a>
//     // //                     {/* <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a> */}
//     // //                 {/* </div> */}
//     // //             {/* </div>  */}
//     // //     {/* </div>
//     // // </div> */}

//     // ))}
//     // </div>
//     // </div>
//     // </div>
//     //   </div>

//     <div class="container">
//           <div class="table-wrapper">
//           <div>
//       {/* <button onClick={notify}>Make me a toast</button> */}
//       <Toaster />
//     </div>
//             {/* <div class="table-title">
//               <div class="row">
//                 <div class="col-sm-6">
//                   <h2>Manage <b>Books</b></h2>
//                 </div>
//                 <div class="col-sm-6">
//                   <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i
//                     class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
//                   <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i
//                     class="material-icons">&#xE15C;</i> <span>Delete</span></a>
//                 </div>
//               </div>
//             </div> */}
//             {myObj.map(book => (
//             <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
//             <div class="card w-100 my-2 shadow-2-strong"> 
//               {/* <img src={book.imageUrl} class="card-img-top" style="aspect-ratio: 1 / 1"/>  */}
//                <td><img src={book.imageUrl} class="card-img-top" style={{height:"22rem"}} ></img></td> 
//                    <div class="card-body d-flex flex-column">
//                     <h5 class="card-title">{book.name}</h5>
//                     <p class="card-text">&#8377; {book.unitPrice}</p>
//                     <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
//                         <a href="" class="btn btn-primary shadow-0 me-1" onClick={(e)=>handleAddCart(e,book)}>Add to cart</a>
//                          {/* <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>  */}
//                       </div> 
//                   </div>  
//           </div>
//           </div>
//           ))}
//           </div>
//         </div>
//  : 
//  <div>
//      {window.location.replace("http://localhost:3000/home")};
//  </div>

// }
// </div>
//       ) : (
//         <h1>Loading</h1>
//       )}
//         </>

//     );
// }
// export default ShopComponent;

import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var userId = localStorage.getItem("usersID");
function ShopComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [myObj, setMyObj] = useState([]);
  const difftoast = () => {
    toast.success("Added To Cart Successfully",
      {
        position: "top-center",
        autoClose: 2000
      });
  }
  const url = "https://localhost:7118";
  function getdata() {
    // setIsLoading(true);
    axios.get(`${url}/api/Books`)
      .then(res => res.data)
      .then((data) => {
        setMyObj(data);
        // setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {

    getdata();
  }, []);

  const calltoast = () => {
    toast("gg");
  }
  const handleAddCart = (e, book) => {
    console.log(book);
    const data4 = {
      booksID: book.booksID,
      name: book.name,
      publisher: book.publisher,
      unitPrice: book.unitPrice,
      discount: book.discount.toFixed(2),
      quantity: (book.quantity - 1),
      // publishedDate: book.publishedDate,
      publishedDate: book.publishedDate,
      imageUrl: book.imageUrl,
      status: book.status,
    }
    axios.put(`${url}/api/Books/${book.booksID}`, data4)
      .then((json) => {
        axios.get(`${url}/api/Users/${userId}`)
          .then(res => res.data)
          .then((data) => {
            // window.alert("YES");
            // setMyObj(data);
            console.log(data);

            const data2 = {
              unitPrice: book.unitPrice,
              discount: book.discount,
              quantity: book.quantity,
              totalPrice: book.quantity * book.unitPrice,
              usersID: userId,
              users: data,
              booksID: book.booksID,
              books: book
              // users:
            }
            // window.alert("YES");
            axios.post(`${url}/api/Carts`, data2)
              .then((json) => {
                // if(json.status === 200)
                // notify()
                difftoast()

                // history.push('/Shop')
                // window.alert(JSON.stringify(json))
              }).catch((error) => {
                console.log(error)
              })
            // setIsLoading(false);
          })
          .catch((error) => {
            window.alert("NO");
            console.log(error);
          })

      })
    e.preventDefault()
    setTimeout(()=>{
      window.location.reload();
    },2000)
  }

  return (
    <>

      {/* {!isLoading ? ( */}
      <div>
        {(localStorage.getItem("type") == "USER") ?

          <div class="container">
            <div class="table-wrapper">
              <div>
                <ToastContainer />
              </div>
              {myObj.map(book => (
                (book.quantity <= 0) ? <></> :
                  <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <td><img src={book.imageUrl} class="card-img-top" style={{ height: "22rem" }} ></img></td>
                      <div class="card-body d-flex flex-column">
                        <h4 class="card-title">{book.name}</h4>
                        <p class="card-text"><s style={{ color: "red" }}>&#8377; {book.unitPrice}</s>     &#8377; {book.unitPrice - 0.01 * book.discount * book.unitPrice}</p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="" class="btn btn-primary shadow-0 me-1" onClick={(e) => handleAddCart(e, book)}>Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>

              ))}
            </div>
          </div>
          :
          <div>
            {window.location.replace("http://localhost:3000/home")};
          </div>

        }
      </div>
      {/*  ) : (
         <h1>Loading</h1>
       )} */}
    </>

  );
}
export default ShopComponent;
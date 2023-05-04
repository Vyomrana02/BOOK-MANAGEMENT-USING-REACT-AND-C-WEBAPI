// import * as ReactDOM from 'react-dom';
// import React from 'react';
// export default class BookComponent extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             Books: []
//         }
//     }
//     componentDidMount(){
//         fetch("https://localhost:7118/api/Books")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log(result);
//             this.setState({
//                 Books: result
//             });
//           }
//         );
//     }
//     render(){
//         return (<div>
//             <h2>Book Data...</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>BooksID</th>
//                   <th>Name</th>
//                   <th>Publisher</th>
//                   <th>UnitPrice</th>
//                   <th>Discount</th>
//                   <th>Quantity</th>
//                   <th>PublishedDate</th>
//                   <th>Image </th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>    
//                 {this.state.Books.map(book => (
//                    <tr key = {book.booksID}>
//                         <td>{book.booksID}</td>
//                         <td>{book.name}</td>
//                         <td>{book.publisher}</td>
//                         <td>{book.unitPrice}</td>
//                         <td>{book.discount}</td>
//                         <td>{book.quantity}</td>
//                         <td>{book.publishedDate}</td>
//                         <img src={book.imageUrl} height='50' width='50'></img>
//                         <td>{book.status}</td>
//                    </tr> 
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           );
//     }
// }

// const element = <BookComponent></BookComponent>;
// ReactDOM.render(element,document.getElementById("root"));



import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import toast, { Toaster } from "react-hot-toast";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TempComponent() {
    
    const difftoast = () => {
        toast("Called");
    }
      const difftoast1 = () =>{
        difftoast();
        window.location.reload();
      }
  return (
    <>
<div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={difftoast1}>HELLO</button>
    </div>
    <ToastContainer/>

    </>
  );
}
export default TempComponent;


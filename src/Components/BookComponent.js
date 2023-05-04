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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
const [bookid,setbookID] = useState(0);
  const handleDelete = (id, e) => {
    // setIsLoading(true);
    console.log(e);
    axios.delete(`${url}/api/Books/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // setIsLoading(false);
        deltoast();
        setTimeout(()=>{
          window.location.reload(true)
        },2000);
      })
      e.preventDefault();
      
  }
  const url = "https://localhost:7118";
  function getdata() {
    setIsLoading(true);
    axios.get(`${url}/api/Books`)
      .then(res => res.data)
      .then((data) => {
        setMyObj(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // const updataBook = (id,e) =>  {
  //   axios.put(`${url}/api/Books/${id}`)
  //   .then(res=>{
  //     console.log(res);
  //     console.log(res.data);
  //     // setIsLoading(false);
  //     window.location.reload(true)
  //   })
  // }
  useEffect(() => {
    getdata();
  }, []);
  const deltoast = () => {
    toast.error("Removed Successfully",
      {
        position: "top-center",
        autoClose: 2000
      });
    }
  const difftoast = () => {
    toast.success("Update Book SuccessFully",
      {
        position: "top-center",
        autoClose: 2000
      });
    }
  const handleSubmit = (e,book) => {
    console.log(book);
    const temp1 = book.discount
    let x = temp1.toFixed(2);
    console.log(x)
    const data = {
      // booksID:book.booksID,
      booksID: bookid,
      name: Name,
      publisher: Publisher,
      unitPrice: UnitPrice.toFixed(2),
      discount:Discount.toFixed(2),
      quantity:Quantity,
      // publishedDate: book.publishedDate,
      publishedDate: PublishedDate,
      imageUrl: ImageUrl,
      status: Status,

      // booksID: 9,
      // name: "avds",
      // publisher: "sd",
      // unitPrice: 10.0,
      // discount:11.0,
      // quantity:2,
      // // publishedDate: book.publishedDate,
      // publishedDate: "1800-01-01T00:00:00",
      // imageUrl: "",
      // status: 1
    }
    // console.log(PublishedDate);

    
    axios.put(`${url}/api/Books/${bookid}`,data)
    .then((json)=>{
      difftoast()
                  setTimeout(()=>{
                    window.location.reload(true);
                  },2000);
    }).catch((error)=>{
        console.log(error)
    })     
    
}
const handleUpdate = (e,book) => {
  console.log(book);
  setbookID(book.booksID);
  setName(book.name);
  setPublisher(book.publisher);
  setUnitPrice(book.unitPrice);
  setDiscount(book.discount);
  setQuantity(book.quantity);
  setPublishedDate(book.publishedDate);
  // setPublishedDate("01-01-1800 00:00:00");
  setImageUrl(book.imageUrl);
  setStatus(book.status);
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
                  <h2>Manage <b>Books</b></h2>
                  
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>BooksID</th>
                  <th>Name</th>
                  <th>Publisher</th>
                  <th>UnitPrice</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                  <th>PublishedDate</th>
                  <th>Image</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <td>{myObj.data}</td>
                {myObj.map(book => (
                  <tr key={book.booksID}>
                    <td>{book.booksID}</td>
                    <td>{book.name}</td>
                    <td>{book.publisher}</td>
                    <td>{book.unitPrice}</td>
                    <td>{book.discount}</td>
                    <td>{book.quantity}</td>
                    <td>{book.publishedDate}</td>
                    {/* <td><img src={book.imageUrl} height='50' width='50' style="border:4px solid #1b6b6f; padding:15px;"></img></td> */}
                    <td><img src={book.imageUrl} height='50' width='50'   ></img></td>
                    <td>{(book.status==1) ? "Available" : "Not Available"}</td>
                    <td>
                      <a href="#editEmployeeModal" class="edit" onClick={(e)=>handleUpdate(e,book)} data-target="#exampleModal" data-toggle="modal"><i class="material-icons"
                        data-toggle="tooltip" title="Edit">&#xE254;</i></a>&nbsp;&nbsp;
                      <button onClick={(e) => handleDelete(book.booksID, e)} class="delete" ><i class="material-icons"
                        data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                      {/* <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                              data-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                    </td>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Book</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>

                          <div class="modal-body">
                            <div className="form-body form-group">
                            <div className="Name">
                              <label className="form__label" for="Name">Book Name </label>
                              <input className="form__input form-control" type="text" id="Name" VALUE = {Name} onChange={(e)=>setName(e.target.value)} placeholder="First Name"/>
                          </div>
                          <div className="Publisher">
                              <label className="form__label" for="Publisher">Publisher Name </label>
                              <input  type="text" name="" id="Publisher"  className="form__input form-control" value={Publisher} onChange={(e)=>setPublisher(e.target.value)} placeholder="LastName"/>
                          </div>
                          <div className="UnitPrice">
                              <label className="form__label" for="UnitPrice">UnitPrice </label>
                              <input  type="number" id="email" className="form__input form-control" value={UnitPrice} onChange={(e)=>setUnitPrice(e.target.value)} placeholder="Email"/>
                          </div>
                          <div className="discount">
                              <label className="form__label" for="discount"> Discount </label>
                              <input className="form__input form-control" type="number" value={Discount} id="discount" onChange={(e)=>setDiscount(e.target.value)} placeholder="Discount"/>
                          </div>
                          <div className="Quantity">
                              <label className="form__label" for="Quantity"> Quantity </label>
                              <input className="form__input form-control" type="number" value={Quantity} id="Quantity" onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity"/>
                          </div>
                          <div className="PublishedDate">
                              <label className="form__label" for="PublishedDate"> PublishedDate </label>
                              <input className="form__input form-control" type="date" value={PublishedDate}  id="PublishedDate" onChange={(e)=>setPublishedDate(e.target.value)}/>
                          </div>
                          <div className="ImageUrl">
                              <label className="form__label" for="ImageUrl"> ImageUrl </label>
                              <input className="form__input form-control" type="text" value={ImageUrl}  id="ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} placeholder="ImageURL"/>
                          </div>
                              <div className="Status">
                                <label className="form__label" for="Status">Status</label>
                                <input type="number" name="" id="Status" value={Status} className="form__input form-control" onChange={(e) => setStatus(e.target.value)} placeholder="LastName" />
                              </div>
                            </div>
                            {/* <div class="footer">
                              <button type="submit" class="btn" onClick={(e) => handleSubmit(e, book)}>Register</button>
                            </div> */}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e, book)}>Save changes</button>
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
        : 
        <div>
            {window.location.replace("http://localhost:3000/home")};
        </div>
    
   }
   </div>
   

      ) : (<h1>Loading</h1>)}
    </>);
}
export default BookComponent;


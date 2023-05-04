import * as ReactDOM from 'react-dom';
import React, { useState } from 'react';
import axios from 'axios';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookAddComponent(){
   const[Name,setName] = useState("ME");
   const[Publisher,setPublisher] = useState("ME");
   const[UnitPrice,setUnitPrice] = useState(0.0);
   const[Discount,setDiscount] = useState(0.0);
   const[Quantity,setQuantity] = useState(0);
   const[PublishedDate,setPublishedDate] = useState("");
   const[ImageUrl,setImageUrl] = useState("");
   const url = "https://localhost:7118";
    const handleSubmit = (e) => {
        const data = {
            name: Name,
            publisher: Publisher,
            unitPrice: UnitPrice,
            discount: Discount,
            quantity: Quantity,
            publishedDate:PublishedDate,
            imageUrl: ImageUrl,
            Status: 1,
        }
        axios.post(`${url}/api/books`,data)
        .then((json)=>{
            // alert(JSON.stringify(json))
            difftoast()
                  setTimeout(()=>{
                    // window.location.reload(true);
                    window.location.replace('http://localhost:3000/Books');
                  },2000);
        }).catch((error)=>{
            console.log(error)
        })
    }
    const difftoast = () => {
        toast.success("Book Add SuccessFully",
          {
            position: "top-center",
            autoClose: 2000
          });
        }
   return (
    <div>
    {(localStorage.getItem("type")=="ADMIN") ? 
    <div className='container'>
        <ToastContainer/>
    <div className="form-body form-group">
        <div className="Name">
            <label className="form__label" for="Name">Book Name </label>
            <input className="form__input form-control" type="text" id="Name" onChange={(e)=>setName(e.target.value)} placeholder="Book Name"/>
        </div>
        <div className="Publisher">
            <label className="form__label" for="Publisher">Publisher Name </label>
            <input  type="text" name="" id="Publisher"  className="form__input form-control" onChange={(e)=>setPublisher(e.target.value)} placeholder="PublisherName"/>
        </div>
        <div className="UnitPrice">
            <label className="form__label" for="UnitPrice">UnitPrice </label>
            <input  type="number" id="email" className="form__input form-control" onChange={(e)=>setUnitPrice(e.target.value)} placeholder="UnitPrice"/>
        </div>
        <div className="discount">
            <label className="form__label" for="discount"> Discount </label>
            <input className="form__input form-control" type="number"  id="discount" onChange={(e)=>setDiscount(e.target.value)} placeholder="Discount"/>
        </div>
        <div className="Quantity">
            <label className="form__label" for="Quantity"> Quantity </label>
            <input className="form__input form-control" type="number"  id="Quantity" onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity"/>
        </div>
        <div className="PublishedDate">
            <label className="form__label" for="PublishedDate"> PublishedDate </label>
            <input className="form__input form-control" type="date"  id="PublishedDate" onChange={(e)=>setPublishedDate(e.target.value)}/>
        </div>
        <div className="ImageUrl">
            <label className="form__label" for="ImageUrl"> ImageUrl </label>
            <input className="form__input form-control" type="text"  id="ImageUrl" onChange={(e)=>setImageUrl(e.target.value)} placeholder="ImageURL"/>
        </div>
    </div>
    <div class="footer">
        <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Register</button>
    </div>
</div>
    : 
        <div>
            {window.location.replace("http://localhost:3000/home")};
        </div>
    
   }
   </div>
   );
    
}
export default BookAddComponent;
// export default class UserAddComponent extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             Books: []
//         }
//     }
//     componentDidMount(){
//         fetch("https://localhost:7118/api/Users", 
//             method:'POST',
//             body: JSON.stringify({
//                 usersID : ,
//                 firstName:,
//                 lastName:,
//                 password:,
//                 email:,
//                 type:0,
//                 status: 1,
//                 createdOn: "1800-01-01T00:00:00"
//             })
//         )
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log(result);
//             this.setState({
//                 Carts: result
//             });
//           }
//         );
//     }
    
//     render(){
//         return (
//         <div>
//             <div className="form-body">
//               <div className="firstName">
//                   <label className="form__label" for="firstName">First Name </label>
//                   <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
//               </div>
//               <div className="lastname">
//                   <label className="form__label" for="lastName">Last Name </label>
//                   <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
//               </div>
//               <div className="email">
//                   <label className="form__label" for="email">Email </label>
//                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
//               </div>
//               <div className="password">
//                   <label className="form__label" for="password">Password </label>
//                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
//               </div>
//           </div>
//           <div class="footer">
//               <button type="submit" class="btn">Register</button>
//           </div>
//         </div>
//       );
//     }
// }

// const element = <UserAddComponent></UserAddComponent>;
// ReactDOM.render(element,document.getElementById("root"));
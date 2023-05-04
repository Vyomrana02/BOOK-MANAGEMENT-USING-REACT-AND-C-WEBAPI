import * as ReactDOM from 'react-dom';
import React, { useState } from 'react';
import axios from 'axios';  
function UserAddComponent(){
   const[firstName,setFirstName] = useState("ME");
   const[LastName,setLastName] = useState("ME");
   const[email,setEmail] = useState("ME");
   const[password,setPassword] = useState("ME");
   const url = "https://localhost:7118";
    const handleSubmit = (e) => {
        const data = {
            FirstName: firstName,
            lastName: LastName,
            Email: email,
            Password: password,
            Type: "1",
            Status: 1,
            CreatedOn: "1800-01-01T00:00:00",
        }

        
        axios.post(`${url}/api/Users`,data)
        .then((json)=>{
            alert(JSON.stringify(json))
        }).catch((error)=>{
            console.log(error)
        })
        var data3 = {}
        var data2 = {}
        axios.get(`${url}/api/Users/1`).then((json)=>{
            data3 = JSON.stringify(json);
            console.log(data3)
            const myObj = JSON.parse(data3);
            console.log(myObj)
            data2 = {
                UnitPrice:1.0,
                Discount:0.0,
                Quantity:0,
                totalPrice:0.0,
                UsersID: myObj.data.usersID,
                users: myObj.data
            }
            axios.post(`${url}/api/carts`,data2)
            .then((json)=>{
                alert(JSON.stringify(json))
            }).catch((error)=>{
                console.log(error)
            })
        }).
        catch((error)=>{
            console.log(error)
        })
        
        
    }

   return (
        <div>
            <div className="form-body">
                <div className="OrderNo">
                    <label className="form__label" for="OrderNo">OrderNo </label>
                    <input className="form__input" type="text" id="OrderNo" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="OrderTotal ">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input" onChange={(e)=>setLastName(e.target.value)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Register</button>
            </div>
        </div>
        );
    
}
export default UserAddComponent;
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
import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAddComponent from './UserAddComponent';
// import x from ''
var userId = localStorage.getItem("usersID");;
function HomePageComponent(){
    const [isLoading, setIsLoading] = useState(false);
    const [myObj, setMyObj] = useState([]);

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
    useEffect(() => {
      getdata();
    }, []);

    const handleAddCart = (e,book) => {
      console.log(book);
      axios.get(`${url}/api/Users/${userId}`)
        .then(res => res.data)
        .then((data) => {
          window.alert("YES");
          setMyObj(data);
          console.log(data);
          const data2 = {
            unitPrice: book.unitPrice,
            discount: book.discount,
            quantity: book.quantity,
            totalPrice: book.quantity* book.unitPrice,
            usersID: userId,
            users: data,
            booksID: book.booksID,
            books: book
            // users:
          }
          axios.post(`${url}/api/Carts`,data2)
          .then((json)=>{
              alert(JSON.stringify(json))
          }).catch((error)=>{
              console.log(error)
          })
          window.alert("YES");
          setIsLoading(false);
        })
        .catch((error) => {
          window.alert("NO");
          console.log(error);
        })
      
      
  }

    return (
        <>
      {/* {!isLoading ? (<h1>{myObj[0].usersID}</h1>) :(<h1>Loading</h1>)} */}
      {!isLoading ? (
    //     <div>
    //       <div className="container">
    //         <div className="row">
    //           <div className='col'>
    //     {myObj.map(book => (
    //       // <div>{book.imageUrl}</div>
    //       <img src={myObj.imageUrl} class="card-img-top" alt="medsfsadsfda" height="100" width="100" />
    //     //   {/* <div class="col-lg-3 col-md-6 col-sm-6 d-flex"> */}
    //     //     {/* <td><img src={book.imageUrl} style="aspect-ratio: 1 / 1"  ></img></td> */}
    //     // {/* <div class="card w-100 my-2 shadow-2-strong"> */}
    //     //     {/* <img src={book.imageUrl} class="card-img-top" style="aspect-ratio: 1 / 1"/> */}
    //     //     {/* <td><img src={book.imageUrl} height='50' width='50'   ></img></td> */}
    // //             {/* <div class="card-body d-flex flex-column">
    // //                 <h5 class="card-title">{book.name}</h5>
    // //                 <p class="card-text">{book.unitPrice}</p>
    // //                 <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
    // //                     <a href="#!" class="btn btn-primary shadow-0 me-1">Add to cart</a>
    // //                     {/* <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a> */}
    // //                 {/* </div> */}
    // //             {/* </div>  */}
    // //     {/* </div>
    // // </div> */}

    // ))}
    // </div>
    // </div>
    // </div>
    //   </div>
    <>
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
      <div class="col-10">
   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img class="d-block w-100" src="/1.jpg" height='400px' width='500px' alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/2.jpg" height='400px' width='500px' alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/3.jpg" height='400px' width='500px' alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div class="col-1"></div>
</div>
        </div>
        <br></br>
        <br></br>
        <div class="container">
        Humans’ best companions are books because books and their knowledge never leave someone at any phase of their lives. Books are the world’s largest repository of knowledge and information. Books have the solutions to every problem and are best friends who will never leave anyone. Reading books from various genres helps us think and analyse in various ways. At times when we are disturbed or demotivated, books can be the best solution. When we are alone, we can pick up any book to read and motivate our minds. Biographies and autobiographies are inspirational books that speak about life-changing experiences. Books are written by experienced people who primarily write about their own experiences and the lessons they have gotten from life. Reading various books helps us increase our creativity as well as our vocabulary. Since it is not visual, readers develop strong imagination skills.
        </div>
        <br></br>
        <br></br>
        <div class="container">
        Books are often known as the “Big Ocean of Knowledge”. They are a huge repository of knowledge from all around the world. Books have been a part of our lives since childhood. They help us stay on track and focused on our objectives. A person must always choose a book based on their personal preference and interest. People who enjoy reading acquire books and set up a little library in their homes. Books are ideal companions for human beings because books and their knowledge never leave someone at any point in their lives. Books can aid mental development by imparting new and fascinating information about the world. Novels, storybooks, poetry, drama, autobiographies, etc., are among the many types of content found in books. Numerous motivating and inspirational books that can inspire people and alter their lives are available. Reading a lot of books can help us shift our perspective on the world and build a positive attitude. Biographies and autobiographies are motivational books that can make a difference in a person’s life. Reading a range of books can help us develop our creativity and vocabulary. When reading, the reader’s imagination has to work because reading isn’t directly visual. Most books are written by seasoned authors who, for the most part, write about their own personal life experiences and lessons learnt. So, there is a lot to learn from books.
        </div>
        <br></br>
        <br></br>
        <div class="footer-1" >&copy;<span id="year">2023</span><span> All rights reserved.</span></div>
        </>

      ) : (
        <h1>Loading</h1>
      )}
        </>
        
    );
}
export default HomePageComponent;
import * as ReactDOM from 'react-dom';
import React from 'react';
export default class OrderItemsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orderItems: []
        }
    }
    componentDidMount(){
        fetch("https://localhost:7118/api/orderItems")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
                orderItems: result
            });
          }
        );
    }
    render(){
        return (<div>
            <h2>orderItems Data...</h2>
            <table>
              <thead>
                <tr>
                  <th>Ordersitems Id</th>
                  <th>Unit Price</th>
                  <th>discount</th>
                  <th>Quantity</th>
                  <th>totalPrice</th>
                  <th>OrderId</th>
                  <th>BooksId</th>
                </tr>
              </thead>
              <tbody>    
                {this.state.orderItems?.map(orderitem => (
                   <tr key = {orderitem.orderItemsID}>
                        <td>{orderitem.orderItemsID}</td>
                        <td>{orderitem.unitPrice}</td>
                        <td>{orderitem.discount}</td>
                        <td>{orderitem.quantity}</td>
                        <td>{orderitem.totalPrice}</td>                      
                        <td>{orderitem.orderID}</td>   
                        <td>{orderitem.booksID}</td>                                         
                   </tr> 
                ))}
              </tbody>
            </table>
          </div>
          );
    }
}

const element = <OrderItemsComponent></OrderItemsComponent>;
ReactDOM.render(element,document.getElementById("root"));
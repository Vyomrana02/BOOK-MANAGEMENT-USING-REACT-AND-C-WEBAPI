using System.ComponentModel.DataAnnotations.Schema;
namespace PROJ1.Models
{
    public class OrderItems
    {
        public int OrderItemsID { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quantity { get; set; }
        public decimal totalPrice { get; set; }
        [ForeignKey("Order")]
        public int OrderID { get; set; }
        [ForeignKey("Books")]
        public int BooksID { get; set; }
        [ForeignKey("OrderID")]
        public Order order { get; set; }
        [ForeignKey("BooksID")]
        public Books books { get; set; }
        //1+ books 1 orderitemsid


    }
}
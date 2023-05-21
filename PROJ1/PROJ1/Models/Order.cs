using System.ComponentModel.DataAnnotations.Schema;
namespace PROJ1.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public string OrderNo { get; set; }
        public decimal Ordertotal { get; set; }
        public string orderStatus { get; set; }

        //added 1 line
        public string Address { get; set; }

        //public ICollection<OrderItems> orderItems { get; set; }
        [ForeignKey("Users")]
        public int UsersID { get; set; }
        [ForeignKey("UsersID")]
        public Users users { get; set; }
        //1 users has many orders

    }
}
using System.ComponentModel.DataAnnotations.Schema;

namespace PROJ1.Models
{
    public class Cart
    {
        //[ForeignKey("Users")]
        public int CartID { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quantity { get; set; }
        public decimal totalPrice { get; set; }
        [ForeignKey("Users")]
        public int UsersID { get; set; }
        [ForeignKey("UsersID")]
        public Users users { get; set; }

        [ForeignKey("Books")]
        public int BooksID { get; set; }
        [ForeignKey("BooksID")]
        public Books books { get; set; }
        // 1 users to 1 cart



    }
}
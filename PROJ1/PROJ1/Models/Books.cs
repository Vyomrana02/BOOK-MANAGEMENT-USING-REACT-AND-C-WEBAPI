using System;

namespace PROJ1.Models
{
    public class Books
    {
        public int BooksID { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quantity { get; set; }
        public DateTime PublishedDate { get; set; }
        public string ImageUrl { get; set; }
        public int status { get; set; }

        //public OrderItems orderItems { get; set; }  

    }
}
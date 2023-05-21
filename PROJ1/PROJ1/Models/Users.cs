namespace PROJ1.Models
{
    public class Users
    {
        public int UsersID { get; set; }
        public string FirstName { get; set; }
        public string lastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Type { get; set; }
        public int Status { get; set; }
        public DateTime CreatedOn { get; set; }

        //public ICollection<Order> Order { get; set; }
        //public Cart cart { get; set; }  

    }
}
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PROJ1.Models
{
    public class BookAppContext : DbContext
    {
        public BookAppContext(DbContextOptions<BookAppContext> options) : base(options)
        {

        }
        public DbSet<Users> Users { get; set; } = null!;
        public DbSet<Books> Books { get; set; } = null!;
        public DbSet<Cart> Cart { get; set; } = null!;
        public DbSet<Order> order { get; set; } = null!;
        public DbSet<OrderItems> orderItems { get; set; } = null!;
    }
}



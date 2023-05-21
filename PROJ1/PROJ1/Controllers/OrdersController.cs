using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PROJ1.Models;
using System.Diagnostics;

//CR
namespace PROJ1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly BookAppContext _context;

        public OrdersController(BookAppContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Getorder()
        {
            List<Order> orders = new List<Order>();
            orders = await _context.order.ToListAsync();
            foreach(var order in orders)
            {
                var user = await _context.Users.FindAsync(order.UsersID);
                order.users = user;
            }
            return orders;
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.order.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(order.UsersID);
            order.users = user;

            return order;

            //var GetMyOrders = from c in _context.order where (c.UsersID == id) select c;

            //var orders = await GetMyOrders.ToListAsync().ConfigureAwait(false);
            //foreach (var order in orders)
            //{
            //    var user = await _context.Users.FindAsync(order.UsersID);
            //   // var books = await _context.Books.FindAsync(cart.BooksID);
            //    order.users = user;
            //    //cart.books = books;
            //}
            //return Ok(orders);
        }

        //// PUT: api/Orders/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            Debug.WriteLine(order);

            if (id != order.OrderID)
            {
                return BadRequest();
            }

          _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            var tempOrder = new Order();

            //added 1 line
            tempOrder.Address = order.Address;


            tempOrder.Ordertotal = order.Ordertotal;
            tempOrder.orderStatus = order.orderStatus;
            tempOrder.OrderNo = order.OrderNo;
            tempOrder.UsersID= order.UsersID;
            var user = await _context.Users.FindAsync(order.UsersID);
            tempOrder.users = user;
            _context.order.Add(tempOrder);
            await _context.SaveChangesAsync();
            //_context.Entry(tempOrder).GetDatabaseValues();
            //int id = tempOrder.OrderID;
            //tempOrder.OrderID = id;
            return tempOrder;
        }

        // DELETE: api/Orders/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteOrder(int id)
        //{
        //    var order = await _context.order.FindAsync(id);
        //    if (order == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.order.Remove(order);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool OrderExists(int id)
        {
            return _context.order.Any(e => e.OrderID == id);
        }
    }
}

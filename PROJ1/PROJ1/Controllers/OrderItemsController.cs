using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PROJ1.Models;
//CR
namespace PROJ1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemsController : ControllerBase
    {
        private readonly BookAppContext _context;

        public OrderItemsController(BookAppContext context)
        {
            _context = context;
        }

        // GET: api/OrderItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderItems>>> GetorderItems()
        {
            List<OrderItems> orderItems = new List<OrderItems>();
            orderItems = await _context.orderItems.ToListAsync();
            foreach (var orderitem in orderItems)
            {
                var order = await _context.order.FindAsync(orderitem.OrderID);
                orderitem.order = order;
                var book = await _context.Books.FindAsync(orderitem.BooksID);
                orderitem.books = book;

            }
            return orderItems;
        }

        // GET: api/OrderItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<OrderItems>>> GetOrderItems(int id)
        {
            //geting with order id

            //var orderitems = await _context.orderItems.FindAsync(id);

            //if (orderitems == null)
            //{
            //    return NotFound();
            //}
            //var order = await _context.order.FindAsync(orderitems.OrderID);
            //orderitems.order = order;
            //var book = await _context.Books.FindAsync(orderitems.BooksID);
            //orderitems.books = book;

            //return orderitems;
            var orderitemquery = from oi in _context.orderItems
                                 where (oi.OrderID == id)
                                 select oi;

            // FirstOrDefault so that if there is no match, the result is null
            var orderitems = await orderitemquery.ToListAsync().ConfigureAwait(false);
            foreach(var orderitem in orderitems)
            {
                var order = await _context.order.FindAsync(orderitem.OrderID);
                var book = await _context.Books.FindAsync(orderitem.BooksID);
                orderitem.order = order;
                orderitem.books = book;

            }
            return orderitems;
        }

        // PUT: api/OrderItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutOrderItems(int id, OrderItems orderItems)
        //{
        //    if (id != orderItems.OrderItemsID)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(orderItems).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OrderItemsExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/OrderItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderItems>> PostOrderItems([FromBody]OrderItems orderItems)
        {
            var tempOrderitem = new OrderItems();

            tempOrderitem.totalPrice = orderItems.totalPrice;
            tempOrderitem.UnitPrice = orderItems.UnitPrice;
            tempOrderitem.Quantity = orderItems.Quantity;
            tempOrderitem.Discount = orderItems.Discount;
            tempOrderitem.BooksID = orderItems.BooksID;
            tempOrderitem.OrderID = orderItems.OrderID;
            var order = await _context.order.FindAsync(tempOrderitem.OrderID);
            tempOrderitem.order = order;
            var book = await _context.Books.FindAsync(tempOrderitem.BooksID);
            tempOrderitem.books = book;
            _context.orderItems.Add(tempOrderitem);
            await _context.SaveChangesAsync();
            return tempOrderitem;
        }

        // DELETE: api/OrderItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderItems(int id)
        {
            var orderItems = await _context.orderItems.FindAsync(id);
            if (orderItems == null)
            {
                return NotFound();
            }

            _context.orderItems.Remove(orderItems);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderItemsExists(int id)
        {
            return _context.orderItems.Any(e => e.OrderItemsID == id);
        }
    }
}

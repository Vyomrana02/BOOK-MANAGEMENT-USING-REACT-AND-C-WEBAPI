using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PROJ1.Models;

//CRUD
namespace PROJ1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly BookAppContext _context;

        public CartsController(BookAppContext context)
        {
            _context = context;
        }

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCart()
        {
            List<Cart> carts = new List<Cart>();
            carts = await _context.Cart.ToListAsync();
            foreach (var cart in carts)
            {
                var user = await _context.Users.FindAsync(cart.UsersID);
                cart.users = user;
                var book = await _context.Books.FindAsync(cart.BooksID);
                cart.books = book;
            }
            return carts;
        }

        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            //var cart = OrderIDawait _context.Cart.FindAsync(id);
            ////var tempcart = cart;;
            //Cart tempCart = new Cart();
            //if (cart != null)
            //{
            //    tempCart.CartID = cart.CartID;
            //    tempCart.Quantity = cart.Quantity;
            //    tempCart.totalPrice = cart.totalPrice;
            //    tempCart.UnitPrice = cart.UnitPrice;
            //    tempCart.Discount = cart.Discount;
            //    //Users user = new Users();
            //    //user.
            //    //int userid = u.UsersID;
            //    tempCart.users = await _context.Users.FindAsync(cart.UsersID);
            //}


            //return tempCart;
            //var cart = await _context.Cart.FindAsync(id); ;
            //if (cart == null)
            //{
            //    return NotFound();
            //}
            //var user = await _context.Users.FindAsync(cart.UsersID);
            //cart.users = user;
            //var book = await _context.Books.FindAsync(cart.BooksID);
            //cart.books = book;

            


            var cartQuery = from c in _context.Cart where (c.UsersID == id) select c;

            var carts = await cartQuery.ToListAsync().ConfigureAwait(false);
            foreach(var cart in carts)
            {
                var user = await _context.Users.FindAsync(cart.UsersID);
                var books = await _context.Books.FindAsync(cart.BooksID);
                cart.users = user;
                cart.books = books;
            }
            return Ok(carts);    
        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(int id, Cart cart)
        {
            if (id != cart.CartID)
            {
                return BadRequest();
            }
            var tempcart = _context.Cart.FirstOrDefault(item => item.CartID == id);
            if(tempcart == null)
            {
                return BadRequest();
            }
            tempcart.Quantity = cart.Quantity;
            tempcart.totalPrice = cart.totalPrice;
            tempcart.UnitPrice = cart.UnitPrice;
            tempcart.Discount = cart.Discount;
            tempcart.UsersID = cart.UsersID;
            var user = await _context.Users.FindAsync(cart.UsersID);
            tempcart.users = user;
            var book = await _context.Books.FindAsync(cart.BooksID);
            tempcart.books = book;

            _context.Entry(tempcart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
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

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            //Cart tempCart = new Cart();
            //tempCart.CartID = cart.CartID;
            //tempCart.Quantity = cart.Quantity;
            //tempCart.totalPrice = cart.totalPrice;
            //tempCart.UnitPrice = cart.UnitPrice;
            //tempCart.Discount = cart.Discount;
            //int userId = cart.users.UsersID;
            //tempCart.users = await _context.Users.FindAsync(userId);
            //_context.Cart.Add(tempCart);
            //await _context.SaveChangesAsync();


            //return CreatedAtAction("GetCart", new { id = tempCart.CartID }, tempCart);



            var tempcart = new Cart();
            
            tempcart.Quantity = cart.Quantity;
            tempcart.totalPrice = cart.totalPrice;
            tempcart.UnitPrice = cart.UnitPrice;
            tempcart.Discount = cart.Discount;
            tempcart.UsersID = cart.UsersID;
            var user = await _context.Users.FindAsync(cart.UsersID);
            tempcart.users = user;
            _context.Cart.Add(tempcart);
            var book = await _context.Books.FindAsync(cart.BooksID);
            tempcart.books = book;
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCart", new { id = tempcart.CartID }, tempcart);
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            //var cart = await _context.Cart.FindAsync(id);
            //if (cart == null)
            //{
            //    return NotFound();
            //}
        
            //_context.Cart.Remove(cart);
            //await _context.SaveChangesAsync();
            //  return NoContent();
            //var cart = await _context.Cart.Where(x => x.UsersId == id).ToListAsync();

            var cartQuery = from c in _context.Cart where (c.UsersID == id) select c;
            var carts = await cartQuery.ToListAsync().ConfigureAwait(false);
            foreach (var cart in carts)
            {
                _context.Cart.Remove(cart);
            }
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool CartExists(int id)
        {
            return _context.Cart.Any(e => e.CartID == id);
        }
    }
}

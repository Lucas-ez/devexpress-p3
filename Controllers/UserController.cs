using DevExtreme.AspNet.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Pruebas.Model;

namespace Pruebas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly UserDbContext _context;

        public UserController(UserDbContext context)
        {
            _context = context;
        }

        //[HttpGet("action")]
        [HttpGet]
        public object GetAll(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(_context.Users, loadOptions);
        }

        [HttpDelete("{key:int}")]
        public IActionResult Delete(int key)
        {
            var userToDelete = _context.Users.Find(key);

            if (userToDelete == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userToDelete);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Add(user);
            _context.SaveChanges();
            return Created("User", user);
        }

        [HttpPut("{key:int}")]
        public IActionResult Put(int key, [FromBody] JsonPatchDocument<User> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userToUpdate = _context.Users.Find(key);

            if (userToUpdate == null)
            {
                return NotFound();
            }

            patch.ApplyTo(userToUpdate);

            _context.Update(userToUpdate);
            _context.SaveChanges();

            return NoContent();
        }

    }
}

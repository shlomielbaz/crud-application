using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EA.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EA.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;

        #region CTOR

        public UsersController(IUserService service)
        {
            _service = service;
        }

        #endregion

        // GET: api/Users
        [HttpGet]
        public IEnumerable<UserViewModel> Get()
        {
            return _service.GetAll();
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public UserViewModel Get(int id)
        {
            return _service.Get(id);
        }

        // POST: api/Users
        [HttpPost]
        public void Post([FromBody] UserViewModel model)
        {
            _service.Add(model);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] UserViewModel model)
        {
            _service.Update(id, model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using EA.Domain;

namespace LA.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _db;

        #region CTORS
        public UserService(IUserRepository repository)
        {
            _db = repository;
        }
        #endregion

        public void Add(UserViewModel model)
        {
            IQueryable<User> query = _db.GetList<User>();

            _db.Add<User>(new User()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password,
                Address = model.Address,
                City = model.City,
                State = model.State,
                Zip = model.Zip
            });

        _db.Save();
        }

        public UserViewModel Get(int id)
        {
            var user = _db.Get<User>(x => x.ID == id);
            if (user != null)
            {
                return new UserViewModel()
                {
                    ID = user.ID,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                };
            }

            return null;            
        }

        public IEnumerable<UserViewModel> GetAll()
        {
            IList<UserViewModel> list = new List<UserViewModel>();

            foreach (User item in _db.GetList<User>())
            {
                list.Add(new UserViewModel()
                {
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    Email = item.Email,
                    Address = item.Address,
                    City = item.City,
                    ID = item.ID,
                    State = item.State,
                    Zip = item.Zip,
                });
            }
            return list;
        }

        public void Update(int id, UserViewModel model)
        {
            _db.Update<User>(new User()
            {
                ID = id,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Address = model.Address,
                City = model.City,
                State = model.State,
                Zip = model.Zip
            });

            _db.Save();
        }


        public void Delete(int id)
        {
            User user = _db.Get<User>(x => x.ID == id);
            _db.Delete(user);

            _db.Save();
        }
    }
}

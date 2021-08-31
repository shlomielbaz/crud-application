using System;
using EA.Domain;

namespace EA.Data
{
    public class UserRepository : Repository<AppContext>, IUserRepository
    {
        public UserRepository()
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace EA.Domain
{
    public interface IService<T> where T : class, new()
    {
        IEnumerable<T>  GetAll();

        // T Get(Expression<Func<T, bool>> predicate);

        T Get(int id);

        void Add(T entity);

        void Update(int id, T entity);

        void Delete(int id);
    }
}

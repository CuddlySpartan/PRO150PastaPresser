using System.Data.Entity;
using UserService.Models;

namespace UserService.Services
{
    class UserService : DbContext
    {
        public DbSet<UserModel> Users { get; set; }
        public UserService() : base("Server=73.20.98.246;Database=PastaPresser;User Id=PastaMaster;Password=PizzaTim3;MultipleActiveResultSets=true;")
        {
        }
    }
}

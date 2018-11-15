using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserService.Models
{
    public class UserListModel
    {
        public List<UserModel> Users { get; set; }

        public UserListModel()
        {
            Users = new List<UserModel>();
        }

    }
}

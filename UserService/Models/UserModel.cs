using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserService.Models
{
    public class UserModel
    {
        public int ID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int Lira { get; set; }
        public int CheeseCount { get; set; }
        public int SauceCount { get; set; }
        public int MeatCount { get; set; }
        public int PastaCount { get; set; }
        public int ClickUpgrade { get; set; }
        public Nullable<DateTime> LastLogin { get; set; }
        public int LPS { get; set; }

    }
}

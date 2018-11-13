using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PRO150PastaPresser.Models
{
    public class Italian
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public int Lira { get; set; }
        public int CheeseCount { get; set; }
        public int SauceCount { get; set; }
        public int MeatCount { get; set; }
        public int PastaCount { get; set; }
        public int ClickUpgrade { get; set; }
        public DateTime LastLogin { get; set; }
    }
}
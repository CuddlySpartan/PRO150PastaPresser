using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PRO150PastaPresser.Models
{
    public class Italian
    {
        int lps = 0;
        public string Username { get; set; }
        public string Password { get; set; }
        public int Lira { get; set; }
        public int CheeseCount { get; set; }
        public int SauceCount { get; set; }
        public int MeatCount { get; set; }
        public int PastaCount { get; set; }
        public int ClickUpgrade { get; set; }
        public DateTime LastLogin { get; set; }
        public int TierLevel { get; set; }
        public int LPS {
            get
            {
                return lps;
            }
            set
            {
                lps = ItalianHelper.GetLPS(this);
            }
        }
    }
}
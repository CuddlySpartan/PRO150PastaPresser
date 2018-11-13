using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PRO150PastaPresser.Models
{
    public class ItalianHelper
    {
        public static int GetLPS(Italian italian)
        {
            int lps = 0;

            //numbers subject to change
            lps += (italian.CheeseCount * 2);
            lps += (italian.SauceCount * 3);
            lps += (italian.PastaCount * 5);
            lps += (italian.MeatCount * 10);

            return lps;
        }
    }
}
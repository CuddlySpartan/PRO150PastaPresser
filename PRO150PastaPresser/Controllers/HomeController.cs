using PRO150PastaPresser.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PRO150PastaPresser.Controllers
{
    public class HomeController : Controller
    {
        Italian BigItalian = new Italian();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Click(Italian italian)
        {
            if (italian != null) {
                BigItalian = italian;
            }
            BigItalian.Lira++;
            return View(BigItalian);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
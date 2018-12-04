using PRO150PastaPresser.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UserService.Models;
using UserService.Services;

namespace PRO150PastaPresser.Controllers
{
    public class HomeController : Controller
    {
        Italian BigItalian = new Italian();
        public ActionResult Index()
        {
            if(User.Identity.IsAuthenticated)
            {
                var goodBoi = UserHelper.GetUserByUserName(User.Identity.Name);
                return View(goodBoi);
            }

            var italian = new UserModel();
            return View(italian);
        }

        public ActionResult Click(UserModel italian)
        {
            italian = new UserModel();
            return View(italian);
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
        [HttpPost]
        public ActionResult Save(int id)
        {
            var model = UserHelper.GetUserById(id);

            UserHelper.EditUser(model.ID, model.Password, model.Lira, model.CheeseCount, model.SauceCount, model.MeatCount, model.PastaCount, model.ClickUpgrade, DateTime.Now, model.LPS);

            var newBoi = UserHelper.GetUserById(model.ID);

            return View("Index", newBoi);
        }
    }
}
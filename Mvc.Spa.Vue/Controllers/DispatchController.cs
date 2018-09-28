using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Spa.Vue.Controllers
{
    public class DispatchController : Controller
    {
        // GET: Dispatch
        public ActionResult PlanSchedule()
        {
            return View("Index");
        }
    }
}

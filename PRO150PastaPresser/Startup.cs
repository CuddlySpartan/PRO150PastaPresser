using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PRO150PastaPresser.Startup))]
namespace PRO150PastaPresser
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

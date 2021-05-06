using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web_Api_Sistema_Ventas.Models;

namespace Web_Api_Sistema_Ventas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly BD_Sistema_VentasContext _dbContext ;

        public UsuarioController(BD_Sistema_VentasContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult> GetUsuario()
        {
            try
            {
                var listUsuario = await _dbContext.Usuarios.ToListAsync();/*from usuario in context.Usuarios
                               join */

                return Ok(listUsuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }


        }
    }
}

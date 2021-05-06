using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Usuario
    {
        [Key]
        public string Usuario1 { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Celular { get; set; }
        public string Direccion { get; set; }
        public string Email { get; set; }
        public string NroDoc { get; set; }
        public int SnActivo { get; set; }
        public int SnBloqueado { get; set; }
        public string Password { get; set; }
        public DateTime FecCreacion { get; set; }
        public int IdRol { get; set; }
        public int IdTipoDoc { get; set; }

        public virtual Rol IdRolNavigation { get; set; }
        public virtual TipoDocumento IdTipoDocNavigation { get; set; }
    }
}

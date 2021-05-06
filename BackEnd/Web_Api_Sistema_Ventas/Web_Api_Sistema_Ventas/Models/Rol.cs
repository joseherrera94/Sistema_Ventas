using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Rol
    {
        public Rol()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdRol { get; set; }
        public string NombreRol { get; set; }
        public int SnActivo { get; set; }
        public DateTime FecCreacion { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}

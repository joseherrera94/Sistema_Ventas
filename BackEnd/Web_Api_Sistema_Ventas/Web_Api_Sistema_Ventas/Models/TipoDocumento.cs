using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class TipoDocumento
    {
        public TipoDocumento()
        {
            Usuarios = new HashSet<Usuario>();
        }
        [Key]
        public int IdTipoDoc { get; set; }
        public string NombreTipoDoc { get; set; }
        public DateTime FecCreacion { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}

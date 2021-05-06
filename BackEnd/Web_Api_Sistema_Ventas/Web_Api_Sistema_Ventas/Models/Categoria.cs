using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Categoria
    {
        public Categoria()
        {
            Productos = new HashSet<Producto>();
        }

        [Key]
        public int IdCateg { get; set; }
        public string NombreCateg { get; set; }
        public int SnActivo { get; set; }
        public string Usuario { get; set; }
        public DateTime FecCreacion { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}

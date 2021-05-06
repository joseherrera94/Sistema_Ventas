using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Producto
    {
        public Producto()
        {
            Pedidos = new HashSet<Pedido>();
        }

        public int IdProducto { get; set; }
        public string NombreProduc { get; set; }
        public int SnActivo { get; set; }
        public string Usuario { get; set; }
        public string UrlImagen { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUni { get; set; }
        public DateTime FecCreacion { get; set; }
        public int IdCateg { get; set; }

        public virtual Categoria IdCategNavigation { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}

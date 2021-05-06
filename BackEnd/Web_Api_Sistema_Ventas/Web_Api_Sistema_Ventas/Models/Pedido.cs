using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Pedido
    {
        public Pedido()
        {
            Venta = new HashSet<Venta>();
        }

        [Key] 
        public int IdPedido { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUni { get; set; }
        public decimal Descuento { get; set; }
        public decimal TotalPedido { get; set; }
        public int CodEstado { get; set; }
        public DateTime FecPedido { get; set; }
        public int EstadoPed { get; set; }
        public string Usuario { get; set; }
        public int IdProducto { get; set; }

        public virtual Producto IdProductoNavigation { get; set; }
        public virtual ICollection<Venta> Venta { get; set; }
    }
}

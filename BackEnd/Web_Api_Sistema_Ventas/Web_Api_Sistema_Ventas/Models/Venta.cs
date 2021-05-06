using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class Venta
    {
        [Key]
        public int IdVenta { get; set; }
        public decimal Iva { get; set; }
        public decimal Total { get; set; }
        public DateTime FechaVenta { get; set; }
        public int EstadoVent { get; set; }
        public string Usuario { get; set; }
        public int IdPedido { get; set; }

        public virtual Pedido IdPedidoNavigation { get; set; }
    }
}

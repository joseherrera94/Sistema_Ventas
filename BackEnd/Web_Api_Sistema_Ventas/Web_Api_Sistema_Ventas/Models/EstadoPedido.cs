using System;
using System.Collections.Generic;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class EstadoPedido
    {
        public int IdEstadoPed { get; set; }
        public string NombreEstado { get; set; }
        public int SnActivo { get; set; }
        public string Usuario { get; set; }
        public DateTime FecCreacion { get; set; }
    }
}

using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Web_Api_Sistema_Ventas.Models
{
    public partial class BD_Sistema_VentasContext : DbContext
    {
        public BD_Sistema_VentasContext()
        {
        }

        public BD_Sistema_VentasContext(DbContextOptions<BD_Sistema_VentasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<EstadoPedido> EstadoPedidos { get; set; }
        public virtual DbSet<Pedido> Pedidos { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<Rol> Rols { get; set; }
        public virtual DbSet<TipoDocumento> TipoDocumentos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Venta> Venta { get; set; }

       /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-12GBQPR;Database=BD_Sistema_Ventas;User=usuario;Password=usuario");
            }
        }*/
       /*
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.HasKey(e => e.IdCateg)
                    .HasName("PK__CATEGORI__6FCDAAF33D05614E");

                entity.ToTable("CATEGORIA");

                entity.HasIndex(e => e.NombreCateg, "IDX_CATEG");

                entity.Property(e => e.IdCateg)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_CATEG");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.NombreCateg)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_CATEG");

                entity.Property(e => e.SnActivo).HasColumnName("SN_ACTIVO");

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");
            });

            modelBuilder.Entity<EstadoPedido>(entity =>
            {
                entity.HasKey(e => e.IdEstadoPed)
                    .HasName("PK__ESTADO_P__AC3B62F0B7708B48");

                entity.ToTable("ESTADO_PEDIDO");

                entity.HasIndex(e => e.IdEstadoPed, "IDX_ESTADO_PED");

                entity.Property(e => e.IdEstadoPed).HasColumnName("ID_ESTADO_PED");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.NombreEstado)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_ESTADO");

                entity.Property(e => e.SnActivo).HasColumnName("SN_ACTIVO");

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");
            });

            modelBuilder.Entity<Pedido>(entity =>
            {
                entity.HasKey(e => e.IdPedido)
                    .HasName("PK__PEDIDO__A05C2F2AA9BE25C7");

                entity.ToTable("PEDIDO");

                entity.HasIndex(e => e.IdPedido, "IDX_PEDIDO");

                entity.Property(e => e.IdPedido).HasColumnName("ID_PEDIDO");

                entity.Property(e => e.Cantidad).HasColumnName("CANTIDAD");

                entity.Property(e => e.CodEstado).HasColumnName("COD_ESTADO");

                entity.Property(e => e.Descuento)
                    .HasColumnType("numeric(6, 2)")
                    .HasColumnName("DESCUENTO");

                entity.Property(e => e.EstadoPed).HasColumnName("ESTADO_PED");

                entity.Property(e => e.FecPedido)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_PEDIDO");

                entity.Property(e => e.IdProducto).HasColumnName("ID_PRODUCTO");

                entity.Property(e => e.PrecioUni)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("PRECIO_UNI");

                entity.Property(e => e.TotalPedido)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("TOTAL_PEDIDO");

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.Pedidos)
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ID_PRODUCTO");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("PK__PRODUCTO__88BD03577979E023");

                entity.ToTable("PRODUCTO");

                entity.HasIndex(e => e.NombreProduc, "IDX_PRODUCT");

                entity.Property(e => e.IdProducto).HasColumnName("ID_PRODUCTO");

                entity.Property(e => e.Cantidad).HasColumnName("CANTIDAD");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.IdCateg).HasColumnName("ID_CATEG");

                entity.Property(e => e.NombreProduc)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_PRODUC");

                entity.Property(e => e.PrecioUni)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("PRECIO_UNI");

                entity.Property(e => e.SnActivo).HasColumnName("SN_ACTIVO");

                entity.Property(e => e.UrlImagen)
                    .HasMaxLength(2000)
                    .IsUnicode(false)
                    .HasColumnName("URL_IMAGEN");

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");

                entity.HasOne(d => d.IdCategNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.IdCateg)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ID_CATEG");
            });

            modelBuilder.Entity<Rol>(entity =>
            {
                entity.HasKey(e => e.IdRol)
                    .HasName("PK__ROL__203B0F687D3E6B04");

                entity.ToTable("ROL");

                entity.HasIndex(e => e.NombreRol, "IDX_ROL");

                entity.Property(e => e.IdRol)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_ROL");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.NombreRol)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_ROL");

                entity.Property(e => e.SnActivo).HasColumnName("SN_ACTIVO");
            });

            modelBuilder.Entity<TipoDocumento>(entity =>
            {
                entity.HasKey(e => e.IdTipoDoc)
                    .HasName("PK__TIPO_DOC__49C835151F8BA0F8");

                entity.ToTable("TIPO_DOCUMENTO");

                entity.HasIndex(e => e.NombreTipoDoc, "IDX_TIPO_DOC");

                entity.Property(e => e.IdTipoDoc)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_TIPO_DOC");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.NombreTipoDoc)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_TIPO_DOC");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Usuario1)
                    .HasName("PK__USUARIO__E251F485995B0AEF");

                entity.ToTable("USUARIO");

                entity.HasIndex(e => new { e.Email, e.Password }, "IDX_LOGIN1");

                entity.HasIndex(e => new { e.Usuario1, e.Password }, "IDX_LOGIN2");

                entity.HasIndex(e => e.Usuario1, "IDX_USUARIO");

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");

                entity.Property(e => e.Apellido)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("APELLIDO");

                entity.Property(e => e.Celular)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("CELULAR");

                entity.Property(e => e.Direccion)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("DIRECCION");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FecCreacion)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FEC_CREACION");

                entity.Property(e => e.IdRol).HasColumnName("ID_ROL");

                entity.Property(e => e.IdTipoDoc).HasColumnName("ID_TIPO_DOC");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE");

                entity.Property(e => e.NroDoc)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("NRO_DOC");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.SnActivo).HasColumnName("SN_ACTIVO");

                entity.Property(e => e.SnBloqueado).HasColumnName("SN_BLOQUEADO");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ID_ROL");

                entity.HasOne(d => d.IdTipoDocNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoDoc)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ID_TIPO_DOC");
            });

            modelBuilder.Entity<Venta>(entity =>
            {
                entity.HasKey(e => e.IdVenta)
                    .HasName("PK__VENTA__F3B6C1B49BCB4741");

                entity.ToTable("VENTA");

                entity.HasIndex(e => e.IdVenta, "IDX_VENTA");

                entity.Property(e => e.IdVenta).HasColumnName("ID_VENTA");

                entity.Property(e => e.EstadoVent).HasColumnName("ESTADO_VENT");

                entity.Property(e => e.FechaVenta)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("FECHA_VENTA");

                entity.Property(e => e.IdPedido).HasColumnName("ID_PEDIDO");

                entity.Property(e => e.Iva)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("IVA");

                entity.Property(e => e.Total)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("TOTAL");

                entity.Property(e => e.Usuario)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");

                entity.HasOne(d => d.IdPedidoNavigation)
                    .WithMany(p => p.Venta)
                    .HasForeignKey(d => d.IdPedido)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ID_PEDIDO");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);*/
    }
}

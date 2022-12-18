using System.ComponentModel.DataAnnotations;

namespace VentasAPI.Modelos
{
    public class Producto
    {
        [Key]
        public string CodigoQR { get; set; }
        public string NombreProducto { get; set; }
        public string Descripcion { get; set; }
        public float Precio { get; set; }
        public int Cantidad { get; set; }
        public int CantidadMinima { get; set; }
        public string PathImagen { get; set; }
        public int CodigoDetalleMarca { get; set; }
    }
}

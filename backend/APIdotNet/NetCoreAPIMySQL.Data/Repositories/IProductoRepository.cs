using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VentasAPI.Modelos;

namespace NetCoreAPIMySQL.Data.Repositories
{
    public interface IProductoRepository
    {
        Task<IEnumerable<Producto>> GetAllProducts();
        Task<Producto> GetProductoDetails(Producto producto);
        Task<bool> InsertProducto(Producto producto);
        Task<bool> UpdateProducto(Producto producto);
        Task<bool> DeleteProducto(Producto producto);

    }
}

using Dapper;
using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Esf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VentasAPI.Modelos;

namespace NetCoreAPIMySQL.Data.Repositories
{
    public class ProductoRepository : IProductoRepository
    {
        private MySQLConfiguration _connectionString;
        public ProductoRepository(MySQLConfiguration connectionString) 
        {
            _connectionString = connectionString;
        }
        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(_connectionString.ConnectionString);
        }
        public async Task<bool> DeleteProducto(Producto producto)
        {
            var db = dbConnection();
            var sql = @"DELETE FROM Producto WHERE CodigoQR = @CodigoQR;";
            var result = await db.ExecuteAsync(sql, new {CodigoQR = producto.CodigoQR});
            return result > 0;
        }

        public async Task<IEnumerable<Producto>> GetAllProducts()
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM Producto;";
            return await db.QueryAsync<Producto>(sql, new { });
        }

        public async Task<Producto> GetProductoDetails(Producto producto)
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM Producto WHERE CodigoQR = @CodigoQR;";
            return await db.QueryFirstOrDefaultAsync<Producto>(sql, new { CodigoQR = producto.CodigoQR });
        }

        public async Task<bool> InsertProducto(Producto producto)
        {
            var db = dbConnection();
            var sql = @"INSERT INTO Producto(CodigoQR, NombreProducto, Descripcion, Precio, Cantidad, CantidadMinima, PathImagen, CodigoDetalleMarca)
                           VALUES(@CodigoQR, @NombreProducto, @Descripcion, @Precio, @Cantidad, @CantidadMinima, @PathImagen, @CodigoDetalleMarca);";
            var result =  await db.ExecuteAsync(sql, new { producto.CodigoQR, producto.NombreProducto, producto.Descripcion, producto.Precio, producto.Cantidad, producto.CantidadMinima, producto.PathImagen, producto.CodigoDetalleMarca });
            return result > 0;
        }

        public async Task<bool> UpdateProducto(Producto producto)
        {
            var db = dbConnection();
            var sql = @"UPDATE Producto SET = (NombreProducto = @NombreProducto, Descripcion = @Descripcion, Precio = @Precio, Cantidad = @Cantidad, CantidadMinima = @CantidadMinima, PathImagen = @PathImagen, CodigoDetalleMarca = @CodigoDetalleMarca) WHERE CodigoQR = @CodigoQR;";
            var result = await db.ExecuteAsync(sql, new { producto.CodigoQR, producto.NombreProducto, producto.Descripcion, producto.Precio, producto.Cantidad, producto.CantidadMinima, producto.PathImagen, producto.CodigoDetalleMarca });
            return result > 0;
        }
    }
}

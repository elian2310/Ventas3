using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetCoreAPIMySQL.Data.Repositories;
using System.Threading.Tasks;
using VentasAPI.Modelos;

namespace VentasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoRepository _productoRepository;
        public ProductoController(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducto()
        {
            return Ok(await _productoRepository.GetAllProducts());
        }

        [HttpGet("{CodigoQR}")]
        public async Task<IActionResult> GetProductDetails(string CodigoQR)
        {
            return Ok(await _productoRepository.GetProductoDetails(new Producto { CodigoQR = CodigoQR }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProducto([FromBody] Producto producto)
        {
            if(producto == null)
            {
                return BadRequest();
            }
            if(ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var created = await _productoRepository.InsertProducto(producto);
            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProducto([FromBody] Producto producto)
        {
            if (producto == null)
            {
                return BadRequest();
            }
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _productoRepository.UpdateProducto(producto);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteProducto(string CodigoQR)
        {
            await _productoRepository.DeleteProducto(new Producto { CodigoQR = CodigoQR});
            return NoContent();
        }
    }
}

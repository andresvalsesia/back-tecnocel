const Product = require("../model/products");

const productController = {

  createProduct: async (req, res) => {
    console.log(req.body)
    let product;
    let { name, description, price, brand, color, sizeTv, RAM, images, category, stock, system, disc, processor } = req.body.data
    let error = null;
    if(name==''){
      res.status(400).json('')
      return
    } 
    try {

      product = await new Product({
        name: name,
        description: description,
        price: price,
        brand: brand,
        color: color,
        sizeTv: sizeTv,
        RAM: RAM,
        images: images,
        category: category,
        stock: stock,
        system: system,
        disc: disc,
        processor: processor

      }).save()

      res.json({ success: true, message: "PRODUCTO CREADO EXITOSAMENTE" })

    }

    catch (err) {

      error = err

      res.json({

        success: false,
        message: "Ocurrio un problema intente nuevamente",
      });

    }


  },

  modifyProduct: async (req, res) => {
    let id = req.params.id;
    let product = req.body.data
    let productdb;
    console.log(id)
    try {
      productdb = await Product.findOneAndUpdate({ _id: id }, product, { new: true });
      res.json({ success: true, message: "PRODUCTO MODIFICADO EXITOSAMENTE" })
    }
    catch (err) {
      console.log(err)
      res.json({

        success: false,
        message: "Ocurrio un problema intente nuevamente",
      });

    }

  },

  deleteProduct: async (req, res) => {
    let id = req.params.id
    let product;
    try {
      product = await Product.findOneAndDelete({ _id: id });

      res.json({ success: true, message: "PRODUCTO ELIMINADO EXITOSAMENTE" })

    }
    catch {
      res.json({
        success: false,
        message: "Ocurrio un problema intente nuevamente",
      })
    }

  },

  getAllproducts: async (req, res) => {
    let products;
    let error = null;

    try {
      products = await Product.find();
    }
    catch (err) { error = err }


    res.json({
      response: error ? 'ERROR' : { products },
      success: error ? false : true,
      error: error
    })
  },

  getOneproduct: async (req, res) => {
    let id = req.params.id;
    let product;
    let error = null;

    try {
      product = await Product.findById(id);

    }
    catch (err) { error = err }

    res.json({
      response: error ? 'ERROR' : { product },
      success: error ? false : true,
      error: error
    })
  }
}

module.exports = productController;


import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category") // aca el populate me sirve para darme info mas completa en el get o sea en el llamado
        if (products.length === 0) {
            return res.status(204).json({message: "No products found"})
        }
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: "Internal server Error", error })
        
    }
}


export const createProduct = async (req, res) => {
    try {
        const productData = req.body

        console.log(productData)
        
        const { name } = productData
        
        const productExist = await Product.findOne ({ name })
        if(productExist){
            console.log({productExist})
            return res.status(400).json({ message: `Product with name ${name} already exists` });
        }
        const newProduct = new Product(productData)
        console.log({newProduct})
        const savedProduct = await newProduct.save()
        console.log({savedProduct})
        return res.status(201).json(savedProduct)
    } catch (error) {
        return res.status(500).json({message: "Internal server Error", error })
    }
}

//

export const deleteProduct = async (req, res) => {
    try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;

    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = categoryId || product.category;

    const updatedProduct = await product.save();

    return res.status(200).json(updatedProduct); 
    
    } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
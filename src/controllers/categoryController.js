import Category from "../models/categoryModel.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        if(categories.length === 0){
            return res.status(204)
        }
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({ message: "Internal server Error", error })
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name} = req.body
        const categoryExist = await Category.findOne ({name })
        if(categoryExist){
            return res.status(400).json({ message: "Category already exists" });
        }
        const newCategory = new Category(req.body)
        const response = await newCategory.save()
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server Error", error })
    }
}


export const deleteCategory = async (req, res) => {
    try {
    const { id } = req.params; 

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json({ message: "Category deleted successfully" });  
    } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
    const { id } = req.params;  
    const { name, description } = req.body;  


    const category = await Category.findById(id);
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }
    category.name = name || category.name;
    category.description = description || category.description;

    const updatedCategory = await category.save();

    return res.status(200).json(updatedCategory);  
    } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
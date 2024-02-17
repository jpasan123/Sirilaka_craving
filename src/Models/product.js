class Product {

    constructor(id, name, description, category,image,price) {

 
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.image = image;
        this.price=price;

    }

    ToJson() {
        return {
            'name': this.name,
            'description': this.description,
            'category': this.category,
            'image': this.image,
            'price': this.price

        }
    }
}

export default Product;
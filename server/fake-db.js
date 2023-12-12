const Product = require('./model/product')

class FakeDb {
    constructor() {
        this.products = [
            {
                id: 0,
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingText1: 'サンプルテキスト',
                headingText2: 'サンプルテキスト',
                headingText3: 'サンプルテキスト',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                id: 1,
                name: 'Phone mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingText1: 'サンプルテキスト',
                headingText2: 'サンプルテキスト',
                headingText3: 'サンプルテキスト',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                id: 2,
                name: 'Phone standard',
                price: 299,
                description: 'A standard phone.',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingText1: 'サンプルテキスト',
                headingText2: 'サンプルテキスト',
                headingText3: 'サンプルテキスト',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                id: 3,
                name: 'Phone special',
                price: 999,
                description: 'A special phone with one of the best cameras',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingText1: 'サンプルテキスト',
                headingText2: 'サンプルテキスト',
                headingText3: 'サンプルテキスト',
                coverImage: './assets/img/phone-cover.jpg'
            },
        ]
    }

    async initDb() {
        await this.cleanDb();
        this.pushProductsToDb();
    }

    async cleanDb() {
        await Product.deleteMany({});
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }
}

module.exports = FakeDb;
const Product = require('./model/product')

class FakeDb {
    constructor() {
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample text1',
                heading2: 'sample text2',
                heading3: 'sample text3',
                headingText1: 'サンプルテキスト1',
                headingText2: 'サンプルテキスト2',
                headingText3: 'サンプルテキスト3',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                name: 'Phone mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sample text1',
                heading2: 'sample text2',
                heading3: 'sample text3',
                headingText1: 'サンプルテキスト1',
                headingText2: 'サンプルテキスト2',
                headingText3: 'サンプルテキスト3',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                name: 'Phone standard',
                price: 299,
                description: 'A standard phone.',
                heading1: 'sample text1',
                heading2: 'sample text2',
                heading3: 'sample text3',
                headingText1: 'サンプルテキスト1',
                headingText2: 'サンプルテキスト2',
                headingText3: 'サンプルテキスト3',
                coverImage: './assets/img/phone-cover.jpg'
            },
            {
                name: 'Phone special',
                price: 999,
                description: 'A special phone with one of the best cameras',
                heading1: 'sample text1',
                heading2: 'sample text2',
                heading3: 'sample text3',
                headingText1: 'サンプルテキスト1',
                headingText2: 'サンプルテキスト2',
                headingText3: 'サンプルテキスト3',
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
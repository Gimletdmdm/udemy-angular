export interface Product {
    _id: string
    name: string;
    price: number;
    description: string;
    heading1: string;
    heading2: string;
    heading3: string;
    headingText1: string;
    headingText2: string;
    headingText3: string;
    coverImage: string;
  }

export const products = [
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
];
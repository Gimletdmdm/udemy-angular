export interface Product {
    id: number;
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
];
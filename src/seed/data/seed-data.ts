import * as bcrypt from 'bcrypt';

interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    types: ValidTypes;
}

type ValidSizes = '1kg'|'2kg'|'3kg'|'4kg'|'5kg'|'6kg'|'7kg'|'10cm';
type ValidTypes = 'tortas'|'tartas'|'masas'|'cafe';

interface SeedUser {
    email:    string;
    fullName: string;
    password: string;
    roles:     string[];
}

interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}


export const initialData: SeedData = {
    users: [
        {
            email: 'test1@google.com',
            fullName: 'Test One',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['admin']
        },
        {
            email: 'test2@google.com',
            fullName: 'Test Two',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['user','super']
        }
    ],
    products: [
        {
            description: "Torta matilda de chocolate dos rellenos.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            stock: 7,
            price: 75,
            sizes: ['1kg','2kg','3kg','4kg','5kg','6kg'],
            slug: "torta_matilda",
            types: 'tortas',
            tags: ['tortamatilda'],
            title: "Torta Chocolate Matilda"
        },
        {
            description: "Torta de coco con base dulce de leche.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            stock: 7,
            price: 75,
            sizes: ['10cm'],
            slug: "torta_coco",
            types: 'tartas',
            tags: ['tortacoco'],
            title: "Torta de Coco"
        },

    ]
}
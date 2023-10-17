import { Product } from "../productReducer";

export const SAMPLE_DATA: Array<Product> = [
    {
        id: '11',
        description: 'Product 1',
        canExpire: true,
        category: 'cat1',
        price: 100,
        isSpecial: true,
        expiryDate: '16-Oct-2023'
    },
    {
        id: '12',
        description: 'Product 2',
        canExpire: true,
        category: 'cat2',
        price: 200,
        isSpecial: false,
        expiryDate: '16-Oct-2023'
    },
    {
        id: '13',
        description: 'Product 3',
        canExpire: true,
        category: 'cat3',
        price: 300,
        isSpecial: true,
        expiryDate: '16-Oct-2023'
    },
    {
        id: '14',
        description: 'Product 4',
        canExpire: false,
        category: 'cat1',
        price: 100,
        isSpecial: true,
        expiryDate: 'NA'
    },
    {
        id: '15',
        description: 'Product 5',
        canExpire: true,
        category: 'cat2',
        price: 200,
        isSpecial: false,
        expiryDate: '16-Oct-2023'
    },
    {
        id: '16',
        description: 'Product 6',
        canExpire: false,
        category: 'cat3',
        price: 300,
        isSpecial: true,
        expiryDate: 'NA'
    },
];

export const TABLE_COLUMNS = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'category',
        header: 'Category',
    }
];

export const DEFAULT_STATE = {
    id: '',
    description: '',
    canExpire: false,
    expiryDate: '',
    category: '',
    price: 0,
    isSpecial: false,
};

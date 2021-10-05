export interface Product {
    id: string;
    name: string;
    price: number;
    pictureUrl: string;
}

export type ProductSearchCategory = 'technology' | 'sports';
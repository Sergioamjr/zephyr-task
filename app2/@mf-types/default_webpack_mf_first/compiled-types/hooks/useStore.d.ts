export declare const useProducts: () => {
    all: {
        id: string;
        price: number;
        title: string;
        description: string;
        imageAlt: string;
        imageUrl: string;
    }[];
    getById: (id: string) => {
        id: string;
        price: number;
        title: string;
        description: string;
        imageAlt: string;
        imageUrl: string;
    } | undefined;
};

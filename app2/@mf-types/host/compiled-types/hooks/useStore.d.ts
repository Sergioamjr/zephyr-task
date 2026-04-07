export declare const useProducts: () => {
    all: {
        photo: string;
        price: number;
        title: string;
        description: string;
        imageAlt: string;
        imageUrl: string;
    }[];
    getById: (id: string) => {
        photo: string;
        price: number;
        title: string;
        description: string;
        imageAlt: string;
        imageUrl: string;
    } | undefined;
};

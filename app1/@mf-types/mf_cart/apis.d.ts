
    export type RemoteKeys = 'mf_cart/App';
    type PackageType<T> = T extends 'mf_cart/App' ? typeof import('mf_cart/App') :any;
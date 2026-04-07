
    export type RemoteKeys = 'mf_order/App';
    type PackageType<T> = T extends 'mf_order/App' ? typeof import('mf_order/App') :any;
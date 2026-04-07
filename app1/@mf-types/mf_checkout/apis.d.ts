
    export type RemoteKeys = 'mf_checkout/App';
    type PackageType<T> = T extends 'mf_checkout/App' ? typeof import('mf_checkout/App') :any;
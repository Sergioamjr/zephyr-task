
    export type RemoteKeys = 'default_webpack_mf_first/store';
    type PackageType<T> = T extends 'default_webpack_mf_first/store' ? typeof import('default_webpack_mf_first/store') :any;
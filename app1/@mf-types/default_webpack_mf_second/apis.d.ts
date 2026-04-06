
    export type RemoteKeys = 'default_webpack_mf_second/App';
    type PackageType<T> = T extends 'default_webpack_mf_second/App' ? typeof import('default_webpack_mf_second/App') :any;
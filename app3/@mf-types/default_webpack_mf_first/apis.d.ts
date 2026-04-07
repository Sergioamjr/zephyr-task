
    export type RemoteKeys = 'default_webpack_mf_first/hooks' | 'default_webpack_mf_first/utils';
    type PackageType<T> = T extends 'default_webpack_mf_first/utils' ? typeof import('default_webpack_mf_first/utils') :T extends 'default_webpack_mf_first/hooks' ? typeof import('default_webpack_mf_first/hooks') :any;
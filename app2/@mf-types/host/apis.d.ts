
    export type RemoteKeys = 'host/store';
    type PackageType<T> = T extends 'host/store' ? typeof import('host/store') :any;
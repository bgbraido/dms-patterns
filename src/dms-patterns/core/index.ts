/*
All Rights Reserved.
*/

// export * from './serverless';
export * from './table-mappings';


export enum ReplicationTypes {
  FULL_LOAD = 'full-load',
  CDC = 'cdc',
  FULL_LOAD_AND_CDC = 'full-load-and-cdc',
}

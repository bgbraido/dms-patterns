/*
All Rights Reserved.
*/

export * from './schema';
export * from './serverless';
export * from './sources';
export * from './targets';


export enum ReplicationTypes {
  FULL_LOAD = 'full-load',
  CDC = 'cdc',
  FULL_LOAD_AND_CDC = 'full-load-and-cdc',
}


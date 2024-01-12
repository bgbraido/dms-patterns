/*
All Rights Reserved.
*/

// export * from './serverless';
export * from './dms-role-stack';
export * from './table-mappings';

export enum ReplicationTypes {
  FULL_LOAD = 'full-load',
  CDC = 'cdc',
  FULL_LOAD_AND_CDC = 'full-load-and-cdc',
}

export enum CapacityUnits {
  _1 = 1,
  _2 = 2,
  _4 = 4,
  _8 = 8,
  _16 = 16,
  _32 = 32,
  _64 = 64,
  _128 = 128,
  _192 = 192,
  _256 = 256,
  _384 = 384,
}
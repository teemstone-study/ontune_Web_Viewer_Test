import { writable } from 'svelte/store';

export const Mosaic_Arr = writable([]);
export const Data_Infos = writable({
  // DATAKEY_CODE:null,
  HOST_CODE:null,
  LASTPERF_CODE:null,
  BASIC_CODE:null,
  CPU_CODE:null,
  MEM_CODE:null,
  NET_CODE:null,
  DISK_CODE:null
});
export const ReceivedCode = writable();
export const ReceivedData = writable();
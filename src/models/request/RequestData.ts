import { Dispatch, SetStateAction } from 'react';
import { Method } from 'axios';
import { ResponseEntity } from 'models/response/ResponseEntity';

export type ResponseTypeData =
  | 'text'
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'stream'
  | undefined;

export interface RequestData {
  url: string;
  method: Method;
  headers?: Record<string, string>;
  data?: any;
  setResponsEntityErrorData?: Dispatch<SetStateAction<ResponseEntity>>;
  responseType?: ResponseTypeData;
}

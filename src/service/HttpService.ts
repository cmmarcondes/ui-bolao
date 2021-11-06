/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable operator-linebreak */
import { Dispatch, SetStateAction } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { ResponseEntity } from 'models/response/ResponseEntity';
import { RequestData, ResponseTypeData } from 'models/request/RequestData';

export abstract class HttpService {
  public static async doPost(
    url: string,
    headers: Record<string, string>,
    data?: any,
    setResponsEntityErrorData?: Dispatch<SetStateAction<ResponseEntity>>,
  ): Promise<ResponseEntity> {
    return this.doRequest({
      url,
      method: 'POST',
      headers,
      data,
      setResponsEntityErrorData,
    });
  }

  public static async doGet(
    url: string,
    headers: Record<string, string>,
    responseType?: ResponseTypeData,
    setResponsEntityErrorData?: Dispatch<SetStateAction<ResponseEntity>>,
  ): Promise<ResponseEntity> {
    return this.doRequest({
      url,
      method: 'GET',
      headers,
      setResponsEntityErrorData,
      responseType,
    });
  }

  public static async doGetOnThirdPartyService<T>(
    url: string,
    headers?: Record<string, string>,
    responseType?: ResponseTypeData,
    setResponsEntityErrorData?: Dispatch<SetStateAction<ResponseEntity>>,
  ): Promise<T> {
    return axios
      .get(url, {
        headers,
        responseType: responseType || 'text',
      })
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        this.intercept(error, setResponsEntityErrorData);
      });
  }

  private static async doRequest({
    url,
    method,
    headers,
    data,
    setResponsEntityErrorData,
    responseType,
  }: RequestData): Promise<ResponseEntity> {
    let response: ResponseEntity = {} as ResponseEntity;
    await axios({
      method,
      url,
      headers,
      data,
      responseType: responseType || 'text',
    })
      .then((res: AxiosResponse<ResponseEntity>) => {
        response = res.data;
      })
      .catch((error: AxiosError) => {
        this.intercept(error, setResponsEntityErrorData);
      });

    return response;
  }

  private static intercept(
    error: AxiosError,
    setResponsEntityErrorData?: React.Dispatch<
      React.SetStateAction<ResponseEntity>
    >,
  ): void {
    if (!error.response) {
      throw error;
    }

    if (setResponsEntityErrorData) {
      setResponsEntityErrorData(error.response.data);
    }

    throw error;
  }
}

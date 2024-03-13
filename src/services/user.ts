import axiosRequest from './axiosRequest';

export function me (): Promise<any> {
  return new Promise((resolve, reject) => {
    axiosRequest({ method: 'GET', url:'/users/me' })
    .then(response => {
        resolve(response)
    })
    .catch((error: any) => {
        reject(error);
    });
  })
}
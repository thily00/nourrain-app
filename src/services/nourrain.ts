import axiosRequest from './axiosRequest';

export function loadNourrain (id: number): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      axiosRequest({ method: 'GET', url:`/nourrain?id=${id}`})
        .then(response => {
          resolve(response)
        })
        .catch((error: any) => {
          reject(error);
        });
    } catch (error) {
        reject(error);
    }
  })
}
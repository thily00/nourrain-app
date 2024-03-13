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

export function addNourrain (name: string, description: string){
  const data = { name, description }
  return axiosRequest({ method: 'POST', url: '/nourrain/new', data: data })
}

export function joinNourrain (code: string){
  return axiosRequest({ method: 'PATCH', url: `/nourrain/join`, data: { code: code } })
}
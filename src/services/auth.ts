import axiosRequest from './axiosRequest';

export function login (email: string, password: string): Promise<any> {
  const data = { email, password}
  return new Promise((resolve, reject) => {
    try {
      axiosRequest({ method: 'POST', url:'/users/login', data: data })
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

export function register (firstname: string, lastname: string, email: string, password: string): Promise<any> {
  const body = { email, password, firstname, lastname }
  return new Promise((resolve, reject) => {
    try {
       axiosRequest({ method: 'POST', url:'/users/register', data: body })
        .then(response => {
          resolve(response)
        })
        .catch((error: any) => {
          reject(error);
        });
    }catch (error) {
        reject(error);
    }
  })
}

export function login (email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            const token = "token1234"
            resolve(token);
        }, 30);
    } catch (error) {
        reject(error);
    }
  })
}
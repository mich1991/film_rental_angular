export const BASE_URL = 'http://localhost:8080/api';
export const NET_URL = 'http://localhost:5230';

export enum Route {
  Actors = '/actors',
}

export const API = {
  actors: {
    getAll: `${BASE_URL}/actors`,
    getOne: (id: string) => `${BASE_URL}/actors/${id}`,
    create: `${BASE_URL}/actors`,
    update: (id: string) => `${BASE_URL}/actors/${id}`,
    delete: (id: string) => `${BASE_URL}/actors/${id}`,
  },
};

export const NET_API = {
  customers: {
    getAll: `${NET_URL}/customers/filter`,
    getOne: (id: string) => `${NET_URL}/customers/${id}`,
    create: `${NET_URL}/customers`,
    update: (id: string) => `${NET_URL}/customers/${id}`,
    delete: (id: string) => `${NET_URL}/customers/${id}`,
  },
};

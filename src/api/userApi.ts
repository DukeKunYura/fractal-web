import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://${host}:${port}/api/`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            const authToken = localStorage.getItem('access_token');
            if (authToken !== '') {
                headers.set('Authorization', `Bearer ${authToken}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        // получение всех пользователей
        getAllUsers: build.query({
            query: () => ({
                url: 'users/',
            }),
        }),
    }),
});
export const { useGetAllUsersQuery } = userApi;

import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const api = {
    getUsers(per_page: number = 12, total: number = 12) {
        return instance.get<UsersResponseType>(`/users`, {
            params: {
                per_page,
                total,
                'b&a': 'b&a'
            }
        })
    }
}

export type EmployeeType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}
export type UsersResponseType = {
    data: EmployeeType[]
    page: number;
    per_page: number;
    support: {
        text: string;
        url: string;
    };
    total: number;
    total_pages: number;
}

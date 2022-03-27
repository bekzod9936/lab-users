import { IFormProps } from 'services/types';
import axiosInterceptor from 'services/interceptor';

export const fetchUser = async (id: number | null | string | undefined) => {
  const response = await axiosInterceptor.get(`/api/users/${id}`);
  return response;
};

export const fetchUsers = async (page: number) => {
  const response = await axiosInterceptor.get(`/api/users?page=${page}`);
  return response;
};

export const regesterUser = async (data: IFormProps) => {
  const response = await axiosInterceptor.post('/api/register', data);
  return response;
};

export const loginUser = async (data: IFormProps) => {
  const response = await axiosInterceptor.post('/api/login', data);
  return response;
};

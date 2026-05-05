import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { loginUser, type LoginCredentials, type LoginResponse } from '../api/login';
import { registerUser, type RegisterCredentials, type RegisterResponse } from '../api/register';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser,
    onSuccess: (res) => {
      localStorage.setItem('token', res.access_token);
      navigate({ to: '/randomJokes' });
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, RegisterCredentials>({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });
};
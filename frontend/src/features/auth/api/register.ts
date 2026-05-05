const BASE_URL = 'http://localhost:3000';

export type RegisterCredentials = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  id: number;
  email: string;
};

export const registerUser = async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};
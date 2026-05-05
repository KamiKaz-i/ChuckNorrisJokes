const BASE_URL = 'http://localhost:3000';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
};

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    localStorage.clear();
    throw new Error('Unauthorized');
  }

  return response.json();
};
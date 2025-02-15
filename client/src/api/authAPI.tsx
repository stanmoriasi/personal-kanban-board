import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Cannot retrieve user information. Please check your information and try again!');
    }

    return data;
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
}



export { login };

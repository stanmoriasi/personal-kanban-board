import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    return !!this.getToken() && !this.isTokenExpired(this.getToken());
  }
  
  isTokenExpired(token: string): boolean {
    // TODO: return a value that indicates if the token is expired
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp) {
      return decoded.exp < Date.now() / 1000;
    }
    return false;
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();

import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class Authentication {

  private token = signal<string>('');

  private apiBaseUrl = '/api';

  // Variable to handle Authentication Responses
  authResp: AuthResponse = new AuthResponse();

// Setup our storage and service access
constructor(
  @Inject(BROWSER_STORAGE) private storage: Storage,
  private http: HttpClient
) { 
  this.token.set(this.storage.getItem('AR-token') || '');
}


  // GET our token from our storage provider.
  // NOTE: For this application we have decided that we will name
  // the key for our token 'AR-token'
  public getToken(): string {
    return this.token();
  }

  // Save our token to our storage provider
  // NOTE: For this application we have decided that we will name
  // the key for our token 'AR-token'
  public saveToken(token: string): void {
    this.storage.setItem('AR-token', token);
    this.token.set(token);
  }

  // Logout of our application and remove the JWT from storage
  public logout(): void {
    this.storage.removeItem('AR-token');
    this.token.set('');
  }

  // Boolean to determine if we are logged in and the token is
  // still valid. Even if we have a token we will still have to
  // reauthenticate if the token has expired
  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  // Retrieve the current user. this function should only be called
  // after the calling method has checked to make sure that the user
  // isLoggedIn
  public getCurrentUser(): User {
    const token = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Send login credentials to Express API
  public login(
    user: User,
    passwd: string
    ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
        `${this.apiBaseUrl}/login`,
        {
            email: user.email,
            password: passwd
        }
        );
 } 
   
  // Send registration information to Express API
  public register(
    user: User,
    passwd: string
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiBaseUrl}/register`,
      {
        name: user.name,
        email: user.email,
        password: passwd
      }
    );
  }
}

  
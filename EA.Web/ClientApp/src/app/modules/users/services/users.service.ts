import { Injectable, Inject } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { User } from '../models/user.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  private _states: any[] = [
    { name: 'Israel', code: 'IL' },
    { name: 'England', code: 'GB-ENG' },
    { name: 'United States', code: 'US' },
    { name: 'Poland', code: 'PL' },
    { name: 'Morroco', value: 'MA' }
  ];

  get States() {
    return this._states
  }

  title = new BehaviorSubject<string>('Users');

  // get Title() {
  //   return this._title
  // }

  set Title(v: string) {
    this.title.next(v);
  }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

  load(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  post(user: User): Observable<User> {
    return this.http.post<User>('/api/users', JSON.stringify(user), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  put(user: User): Observable<User> {
    return this.http.put<User>(`/api/users/${user.id}`, JSON.stringify(user), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`/api/users/${id}`);
  }
}
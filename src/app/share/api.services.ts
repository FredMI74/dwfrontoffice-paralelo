import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '@app/share/models/user';


@Injectable({ providedIn: 'root' })
export class AuthService {
     
    constructor(private http: HttpClient) {
    }
      
    login(email:string, password:string ) {

        var _headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        
        const dados: string = `${btoa(email)};${btoa(password)}`;

        const body = new HttpParams()
              .set('dados', dados)
              .set('token', environment.anonToken);

    return this.http.post<User>(`${environment.apiUrl}/api/login_usuario`, body.toString(), { headers: _headers});
    }
}
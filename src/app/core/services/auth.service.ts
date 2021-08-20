import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

/**
 * This service use for any authenticating function such as login , ....
 */
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(environment.root + "/login", {
      email,
      password,
    });
  }
}

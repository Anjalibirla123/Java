import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  Base_Url = "http://localhost:3000/allfriends";
  constructor(private http: HttpClient) {}
 
  makeRequest(): Observable<any> {
    return this.http.get("http://localhost:3000/allfriends");
  }
 getData(userData) {
    return this.http.post<any>(this.Base_Url, userData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pony } from '../../model/pony/pony';
@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url = "http://www.ludivinecrepin.fr/api"

  httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllPonies(): Observable<Pony[]>{
    return this.http.get<Pony[]>(`${this.url}/pony-get.php`, this.httpOption)
  }

  getPonyById(id: number): Observable<Pony[]>{
    return this.http.get<Pony[]>(`${this.url}/pony-get-id.php/${id}`, this.httpOption)
  }

  addPony(p: Pony): void{
     this.http.post<Pony>(`${this.url}/pony-add.php`, p, this.httpOption).subscribe();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/model/race/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  url = "http://www.ludivinecrepin.fr/api"

  httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllRaces(): Observable<Race[]>{
    return this.http.get<Race[]>(`${this.url}/race-get.php`, this.httpOption)
  }

  getRaceById(id: number): Observable<Race[]>{
    return this.http.get<Race[]>(`${this.url}/race-get-id.php/${id}`, this.httpOption)
  }

  addRace(r: Race): void{
    this.http.post<Race>(`${this.url}/race-add.php`, r, this.httpOption).subscribe();
 }
}

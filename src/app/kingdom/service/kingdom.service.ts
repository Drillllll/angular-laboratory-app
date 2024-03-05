import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Kingdom} from "../model/kingdom.model";

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class KingdomService {
  private readonly kingdomUrl = '/api/kingdom';
  private readonly kingdomIdUrl = 'api/kingdom/{id}';

  constructor(private httpClient: HttpClient) {
  }

  getKingdoms(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.kingdomUrl);
  }

  deleteKingdom(id: string): Observable<any> {
    const url = this.kingdomIdUrl.replace('{id}', id);
    return this.httpClient.delete(url);
  }

  addKingdom(kingdom: Kingdom): Observable<any> {
    kingdom.id = uuidv4();
    return this.httpClient.put<any>(`${this.kingdomUrl}/${kingdom.id}`, kingdom);

  }

  getKingdomById(id: string): Observable<Kingdom> {
    const url = this.kingdomIdUrl.replace('{id}', id);
    return this.httpClient.get<Kingdom>(url);

  }

  updateKingdom(kingdom: Kingdom): Observable<any> {
    return this.httpClient.put<any>(`${this.kingdomUrl}/${kingdom.id}`, kingdom);

  }
}

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Species} from "../model/species.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpeciesService{
  private speciesUrl = '/api/species';
  private speciesIdUrl = '/api/species/{id}';
  private kingdomSpeciesUrl :string = 'api/species/kingdom/{id}'

  constructor(private httpClient: HttpClient) {
  }


  getSpeciesByKingdomId(kingdomId: string) : Observable<any[]> {
    const url = this.kingdomSpeciesUrl.replace('{id}', kingdomId);
    return this.httpClient.get<any[]>(url);

  }

  deleteSpecies(id: string) {
    const url :string = this.speciesIdUrl.replace('{id}', id);
    return this.httpClient.delete<Species>(url);

  }
}

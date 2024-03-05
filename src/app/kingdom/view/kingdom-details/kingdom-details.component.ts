import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KingdomService} from "../../service/kingdom.service";
import {ActivatedRoute} from "@angular/router";
import {Kingdom} from "../../model/kingdom.model";
import {Species} from "../../../species/model/species.model";
import {SpeciesService} from "../../../species/service/species.service";

@Component({
  selector: 'app-kingdom-details',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './kingdom-details.component.html',
  styleUrl: './kingdom-details.component.css'
})
export class KingdomDetailsComponent implements OnInit{
  kingdomId!: string;
  kingdom: Kingdom | undefined;
  species: Species[] = [];

  constructor(
    private kingdomService: KingdomService,
    private speciesService: SpeciesService,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {

    this.kingdomId = this.route.snapshot.params['id'];

    if (this.kingdomId) {
      this.kingdomService.getKingdomById(this.kingdomId).subscribe((kingdom:Kingdom) => {
        this.kingdom = kingdom;

        this.getSpeciesByKingdomId(this.kingdomId);

      });
    }
  }

  deleteSpecies(id: string) {
    this.speciesService.deleteSpecies(id).subscribe((response: any) =>{
      this.getSpeciesByKingdomId(this.kingdomId);
    })
  }

  private getSpeciesByKingdomId(kingdomId: string) {
    this.speciesService.getSpeciesByKingdomId(kingdomId).subscribe((response: any) => {
      this.species = response.species;
      console.log(this.species);
    });
  }
}

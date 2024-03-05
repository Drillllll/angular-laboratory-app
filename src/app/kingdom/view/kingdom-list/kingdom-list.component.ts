import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Kingdom} from "../../model/kingdom.model";
import {KingdomService} from "../../service/kingdom.service";

@Component({
  selector: 'app-kingdom-list',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './kingdom-list.component.html',
  styleUrls: ['./kingdom-list.component.css']
})
export class KingdomListComponent implements OnInit {
  kingdoms: Kingdom[] | undefined;

  constructor(private kingdomService: KingdomService) {
  }

  ngOnInit(): void {
    this.loadKingdoms();

  }

  loadKingdoms(): void {
    this.kingdomService.getKingdoms().subscribe((data: any) =>{
        this.kingdoms = data.kingdoms = data.kingdoms.map((kingdom: any) => {
          return new Kingdom(
            kingdom.id,
            kingdom.name,
            kingdom.taxonomyYear
          );
        });
    });
  }

  deleteKingdom(id: string): void {
    this.kingdomService.deleteKingdom(id).subscribe(() => {
      this.loadKingdoms();
    });
  }




}

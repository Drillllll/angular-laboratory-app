import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Kingdom} from "../../model/kingdom.model";
import {ActivatedRoute, Router} from "@angular/router";
import {KingdomService} from "../../service/kingdom.service";

@Component({
  selector: 'app-kingdom-edit',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './kingdom-edit.component.html',
  styleUrl: './kingdom-edit.component.css'
})
export class KingdomEditComponent implements OnInit{
  kingdomForm!: FormGroup;
  kingdomId!: string;
  kingdom!: Kingdom;


  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private kingdomService: KingdomService
  ) {}

  ngOnInit(): void {
    this.kingdomId = this.route.snapshot.params['id'];

    this.kingdomService.getKingdomById(this.kingdomId).subscribe((kingdom: Kingdom) => {
      this.kingdom = kingdom;

      this.kingdomForm = this.formBuilder.group({
        id: [this.kingdom ? this.kingdom.id : '', Validators.required],
        name: [this.kingdom ? this.kingdom.name : '', Validators.required],
        taxonomyYear: [this.kingdom ? this.kingdom.taxonomyYear : '', [Validators.required, Validators.min(0)]],
      });
    });
  }
  updateKingdom() {
    if (this.kingdomForm.valid) {
      const updatedKingdom: Kingdom = {
        id: this.kingdomForm.value.id,
        name: this.kingdomForm.value.name,
        taxonomyYear: this.kingdomForm.value.taxonomyYear,
      };

      this.kingdomService.updateKingdom(updatedKingdom).subscribe(response => {
        this.router.navigate(['/kingdom']);
      });
    }
  }

}

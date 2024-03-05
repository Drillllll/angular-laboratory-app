import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KingdomService} from "../../service/kingdom.service";
import {Kingdom} from "../../model/kingdom.model";

@Component({
  selector: 'app-kingdom-add-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kingdom-add-form.component.html',
  styleUrl: './kingdom-add-form.component.css'
})
export class KingdomAddFormComponent {
  kingdomForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private kingdomService: KingdomService) {
    this.kingdomForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      taxonomyYear: ['', [Validators.required, Validators.min(0)]],
    })
  }


    addKingdom() {
        if (this.kingdomForm.valid) {
            const newKingdom: Kingdom = {
                id: '',
                name: this.kingdomForm.value.name,
                taxonomyYear: this.kingdomForm.value.taxonomyYear,
            };

            this.kingdomService.addKingdom(newKingdom).subscribe(response => {
                this.router.navigate(['/kingdom']);
            });
        }
    }


}

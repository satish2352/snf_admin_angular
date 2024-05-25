import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {
  Home_4_Cards_Form: FormGroup | any;
  Home_4_Cards_Data: any;
  selectedItem: any = { _id: '', name4: '', para4: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchHome_4_Cards_Data();
  }

  initializeForm(): void {
    this.Home_4_Cards_Form = this.fb.group({
      name4: ['', Validators.required],
      para4: ['', Validators.required],
      image: [null]
    });
  }

  fetchHome_4_Cards_Data(): void {
    this.service.get_Home_4_Cards().subscribe(
      (response) => {
        console.log(response);
        this.Home_4_Cards_Data = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.Home_4_Cards_Form.patchValue({ image: file });
  }

  toggleAddForm(): void {
    this.showAddForm = true;
    this.showEditForm = false;
    this.resetForm();
  }

  toggleEditForm(item: any): void {
    this.selectedItem = { ...item };
    this.showEditForm = true;
    this.showAddForm = false;
  }

  resetForm(): void {
    this.Home_4_Cards_Form.reset();
    this.Home_4_Cards_Form.markAsUntouched();
    this.Home_4_Cards_Form.markAsPristine();
  }

  add_Home_4_Cards(event: Event): void {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name4', this.Home_4_Cards_Form.value.name4);
    formData.append('para4', this.Home_4_Cards_Form.value.para4);
    formData.append('image', this.Home_4_Cards_Form.value.image);

    this.service.add_Home_4_Cards(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchHome_4_Cards_Data();
        this.showAddForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  update_Home_4_Cards(id: number, event: Event): void {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name4', this.Home_4_Cards_Form.value.name4);
    formData.append('para4', this.Home_4_Cards_Form.value.para4);
    formData.append('image', this.Home_4_Cards_Form.value.image);

    this.service.update_Home_4_Cards(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchHome_4_Cards_Data();
        this.showEditForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete_Home_4_Cards(id: number): void {
    this.service.delete_Home_4_Cards(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchHome_4_Cards_Data();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

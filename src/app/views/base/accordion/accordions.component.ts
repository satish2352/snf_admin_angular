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
  selectedItem: any = { _id: '', name: '', para: '', imageUrl: '' };
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
      name: ['', Validators.required],
      para: ['', Validators.required],
      imageUrl: [null]
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
    this.Home_4_Cards_Form.patchValue({ imageUrl: file });
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

    this.Home_4_Cards_Form.patchValue({
      name: item.name,
      para: item.para,
      imageUrl: item.imageUrl // Assuming you handle the image display separately
    });
  }

  resetForm(): void {
    this.Home_4_Cards_Form.reset();
    this.Home_4_Cards_Form.markAsUntouched();
    this.Home_4_Cards_Form.markAsPristine();
  }

  add_Home_4_Cards(event: Event): void {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', this.Home_4_Cards_Form.value.name);
    formData.append('para', this.Home_4_Cards_Form.value.para);
    formData.append('imageUrl', this.Home_4_Cards_Form.value.imageUrl);

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
    formData.append('name', this.Home_4_Cards_Form.value.name);
    formData.append('para', this.Home_4_Cards_Form.value.para);
    if (this.Home_4_Cards_Form.value.imageUrl) {
      formData.append('imageUrl', this.Home_4_Cards_Form.value.imageUrl);
    }

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
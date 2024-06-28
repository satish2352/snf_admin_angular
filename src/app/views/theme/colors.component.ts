import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  templateUrl: 'colors.component.html'
})

export class ColorsComponent implements OnInit {
  carrosalForm!: FormGroup;
  carrosalData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchCarrosalData();
  }

  initializeForm(): void {
    this.carrosalForm = this.fb.group({
      name: ['', Validators.required],
      image: [null]
    });
  }

  fetchCarrosalData() {
    this.service.getCarrosalData().subscribe(
      (response) => {
        console.log(response);
        this.carrosalData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.carrosalForm.patchValue({ image: file });
  }

  toggleAddForm(): void {
    this.showAddForm = true;
    this.showEditForm = false;
    this.resetForm();
  }

  toggleEditForm(id: any): void {
    this.selectedItem = id;
    this.showEditForm = true;
    this.showAddForm = false;
  }

  resetForm(): void {
    this.carrosalForm.reset();
    this.carrosalForm.markAsUntouched();
    this.carrosalForm.markAsPristine();
  }

  addCarrosalItem(): void {
    const formData = new FormData();
    formData.append('name', this.carrosalForm.value.name);
    formData.append('image', this.carrosalForm.value.image);

    this.service.addCarrosalItem(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchCarrosalData();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateCarrosalItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.carrosalForm.value.name);
    formData.append('image', this.carrosalForm.value.image);

    this.service.updateCarrosalItem(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchCarrosalData();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCarrosalItem(id: number): void {
    this.service.deleteCarrosalItem(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchCarrosalData();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

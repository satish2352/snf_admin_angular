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
    private fb: FormBuilder,
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
    if (file) {
      this.carrosalForm.patchValue({ image: file });
      this.carrosalForm.get('image')?.updateValueAndValidity();
    }
  }

  toggleAddForm(): void {
    this.showAddForm = true;
    this.showEditForm = false;
    this.carrosalForm.get('image')?.setValidators([Validators.required]); // Add validator
    this.resetForm();
  }

  toggleEditForm(item: any): void {
    this.selectedItem = { ...item };
    this.showEditForm = true;
    this.showAddForm = false;

    this.carrosalForm.get('image')?.clearValidators(); // Remove validator for edit form

    this.carrosalForm.setValue({
      name: item.name,
      image: null // Clear the file input
    });
  }

  resetForm(): void {
    this.carrosalForm.reset();
    this.carrosalForm.markAsUntouched();
    this.carrosalForm.markAsPristine();
  }

  addCarrosalItem(): void {
    if (this.carrosalForm.invalid) {
      this.carrosalForm.markAllAsTouched(); 
      return;
    }

    const formData = new FormData();

    const nameControl = this.carrosalForm.get('name');
    const imageControl = this.carrosalForm.get('image');

    if (nameControl && imageControl) {
      formData.append('name', nameControl.value);

      const file = imageControl.value;
      if (file) {
        formData.append('imageUrl', file);
      } else {
        console.error('Image file is not selected');
        return;
      }

      this.service.addCarrosalItem(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchCarrosalData();
          this.showAddForm = false;
          this.showEditForm = false;
          this.resetForm();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Form controls are not properly initialized');
    }
  }

  updateCarrosalItem(id: number): void {
    if (this.carrosalForm.invalid) {
      this.carrosalForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
      return;
    }

    const formData = new FormData();
    const nameControl = this.carrosalForm.get('name');
    const imageControl = this.carrosalForm.get('image');

    if (nameControl) {
      formData.append('name', nameControl.value);
    }

    const file = imageControl?.value;
    if (file) {
      formData.append('imageUrl', file);
    } else {
      
    }

    this.service.updateCarrosalItem(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchCarrosalData();
        this.showEditForm = false;
        this.showAddForm = false; // Ensure the form is closed
        this.resetForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCarrosalItem(id: number | undefined): void {
    if (!id || id <= 0) {
      console.error('Invalid ID for delete operation:', id);
      return;
    }

    console.log('Deleting item with ID:', id);

    this.service.deleteCarrosalItem(id).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.carrosalData = this.carrosalData.filter((item: any) => item.id !== id);
        console.log('Item deleted successfully');
        this.showAddForm = false;
        this.showEditForm = false;
        this.resetForm();
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }


  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }



}
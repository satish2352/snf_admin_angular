import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
})

export class DropdownsComponent implements OnInit {
  awards_recognation_Form!: FormGroup;
  awards_recognation_Data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchawards_recognation_Data();
  }

  initializeForm(): void {
    this.awards_recognation_Form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }

  fetchawards_recognation_Data() {
    this.service.getawards_recognation().subscribe(
      (response) => {
        console.log(response);
        this.awards_recognation_Data = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.awards_recognation_Form.patchValue({
      imageUrl: file // Store the file object in the form
    });
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
    this.awards_recognation_Form.patchValue({
     name:item.name,
     imageUrl:item.imageUrl

});

  }

  resetForm(): void {
    this.awards_recognation_Form.reset();
    this.awards_recognation_Form.markAsUntouched();
    this.awards_recognation_Form.markAsPristine();
    this.selectedItem = { _id: '', name: '', imageUrl: '' }; 
  }

  addawards_recognation(): void {
    if (this.awards_recognation_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.awards_recognation_Form.value.name);
      const file = this.awards_recognation_Form.value.imageUrl;
   
      if (!file) {
        console.error('Image file is not selected');
        return;
      }

      formData.append('imageUrl', file);

      this.service.addawards_recognation(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchawards_recognation_Data();
          this.toggleAddForm();
          this.showAddForm = false;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  } 

  updateawards_recognation(id: number): void {
    if (this.awards_recognation_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.awards_recognation_Form.value.name);
      const file = this.awards_recognation_Form.value.imageUrl;
  
      // Check if an image file is selected
      if (file instanceof File) {
        formData.append('imageUrl', file);
      }
  
      this.service.updateawards_recognation(id, formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchawards_recognation_Data(); // Refresh data after update
          this.showEditForm = false;
          this.resetForm(); // Reset form after successful update
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  deleteawards_recognation(id: number): void {
    this.service.deleteawards_recognation(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchawards_recognation_Data();
        this.selectedItem = { _id: '', name: '', imageUrl: '' };
        this.awards_recognation_Form.reset();
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


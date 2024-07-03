import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  Project_Birthday_Celebrations_Form!: FormGroup;
  Project_Birthday_Celebrations_Data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchProject_Birthday_Celebrations_Data();
  }

 
  initializeForm(): void {
    this.Project_Birthday_Celebrations_Form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null] // Initialize imageUrl as null
    });
  }


  
  fetchProject_Birthday_Celebrations_Data() {
    this.service.getarticle_on_snf().subscribe(
      (response) => {
        console.log(response);
        this.Project_Birthday_Celebrations_Data = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.Project_Birthday_Celebrations_Form.patchValue({
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
  }

  resetForm(): void {
    this.Project_Birthday_Celebrations_Form.reset();
    this.Project_Birthday_Celebrations_Form.markAsUntouched();
    this.Project_Birthday_Celebrations_Form.markAsPristine();
    this.selectedItem = { _id: '', name: '', imageUrl: '' }; 
  }

  addarticle_on_snf(): void {
    if (this.Project_Birthday_Celebrations_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.Project_Birthday_Celebrations_Form.value.name);
      const file = this.Project_Birthday_Celebrations_Form.value.imageUrl;
   
      if (!file) {
        console.error('Image file is not selected');
        return;
      }

      formData.append('imageUrl', file);

      this.service.addarticle_on_snf(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchProject_Birthday_Celebrations_Data();
          this.toggleAddForm();
          this.showAddForm = false;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  updatearticle_on_snf(id: number): void {
    if (this.Project_Birthday_Celebrations_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.Project_Birthday_Celebrations_Form.value.name);
      const file = this.Project_Birthday_Celebrations_Form.value.imageUrl;
  
      // Check if an image file is selected
      if (file instanceof File) {
        formData.append('imageUrl', file);
      }
  
      this.service.updatearticle_on_snf(id, formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchProject_Birthday_Celebrations_Data(); // Refresh data after update
          this.showEditForm = false;
          this.resetForm(); // Reset form after successful update
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  
  
  

  deletearticle_on_snf(id: number | undefined): void {
    if (!id || id <= 0) {
      console.error('Invalid ID for delete operation:', id);
      return;
    }
  
    this.service.deletearticle_on_snf(id).subscribe(
      () => {
        console.log('article deleted successfully');
  
        
        this.Project_Birthday_Celebrations_Data = this.Project_Birthday_Celebrations_Data.filter((item: any) => item.id !== id);
  
        
        this.selectedItem = { _id: '', name: '', imageUrl: '' };
        this.Project_Birthday_Celebrations_Form.reset();
        this.showAddForm = false;
      },
      (error) => {
        console.error('Error deleting supporter:', error);
      }
    );
  }
  
}

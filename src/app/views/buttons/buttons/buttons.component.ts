import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  Newsartical_Form!: FormGroup;
  Newsartical_Form_Data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchNewsartical_Form_Data();
  }

 
  initializeForm(): void {
    this.Newsartical_Form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null] // Initialize imageUrl as null
    });
  }


  
  fetchNewsartical_Form_Data() {
    this.service.getarticle_on_snf().subscribe(
      (response) => {
        console.log(response);
        this.Newsartical_Form_Data = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.Newsartical_Form.patchValue({
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
    this.Newsartical_Form.patchValue({
      name: item.name,
      imageurl :item.imageUrl
    });
  }
 


  resetForm(): void {
    this.Newsartical_Form.reset();
    this.Newsartical_Form.markAsUntouched();
    this.Newsartical_Form.markAsPristine();
    this.selectedItem = { _id: '', name: '', imageUrl: '' }; 
  }

  addarticle_on_snf(): void {
    if (this.Newsartical_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.Newsartical_Form.value.name);
      const file = this.Newsartical_Form.value.imageUrl;
   
      if (!file) {
        console.error('Image file is not selected');
        return;
      }

      formData.append('imageUrl', file);

      this.service.addarticle_on_snf(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchNewsartical_Form_Data();
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
    if (this.Newsartical_Form.valid) {
      const formData = new FormData();
      formData.append('name', this.Newsartical_Form.value.name);
      const file = this.Newsartical_Form.value.imageUrl;
  
      // Check if an image file is selected
      if (file instanceof File) {
        formData.append('imageUrl', file);
      }
  
      this.service.updatearticle_on_snf(id, formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchNewsartical_Form_Data(); // Refresh data after update
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
  
        
        this.Newsartical_Form_Data = this.Newsartical_Form_Data.filter((item: any) => item.id !== id);
  
        
        this.selectedItem = { _id: '', name: '', imageUrl: '' };
        this.Newsartical_Form.reset();
        this.showAddForm = false;
      },
      (error) => {
        console.error('Error deleting supporter:', error);
      }
    );
  }
  
}

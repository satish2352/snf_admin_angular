import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit {

  supporterForm!: FormGroup;
  support_data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  fileError: string = '';

  constructor(private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchsupporterData();
  }

  initForm(): void {
    this.supporterForm = this.formBuilder.group({
      name: [''],
      imageUrl: [null] // This is where the file will be stored temporarily
    });
  }

  fetchsupporterData(): void {
    this.service.getSupporters().subscribe(
      (response) => {
        console.log(response);
        this.support_data = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.supporterForm.patchValue({
      imageUrl: file // Store the file object in the form
    });
    this.fileError = ''; 
  }

  addSupporter(): void {
    if (this.supporterForm.valid) {
      const formData = new FormData();
      formData.append('name', this.supporterForm.value.name);
      
      const file = this.supporterForm.value.imageUrl;
      if (!file) {
       
        this.fileError = 'Image file is required.';
        return;
      }

      formData.append('imageUrl', file);

      this.service.addSupporter(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchsupporterData();
          alert('recRecord Added successfully!');
          this.initForm();
          this.toggleAddForm(); // Hide the form after adding supporter
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  onSelect(item: any): void {
    this.selectedItem = { ...item }; // Copy the item to avoid reference issues

    console.log(item.name);
    console.log(item.imageUrl);
    this.supporterForm.patchValue({
      name: item.name,
      imageUrl: null // Reset imageUrl in the form temporarily
    });
    this.showAddForm = true;
  }

  updateSupporter(id: number): void {
    if (this.supporterForm.valid) {
      const formData = new FormData();
      formData.append('name', this.supporterForm.value.name);

    

      const file = this.supporterForm.value.imageUrl;

      if (file && typeof file === 'object') { // Assuming 'file' is a File object when a new image is selected
        // If a new file is selected, append it to formData
        formData.append('imageUrl', file);
      } else {
      }

      this.service.updateSupporter(id, formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchsupporterData(); // Refresh the data to reflect the update
          alert('recRecord Updated successfully!');
          this.initForm();
          this.showAddForm = false;
          this.selectedItem = { _id: '', name: '', imageUrl: '' }; // Reset selectedItem after update
        },
        (error) => {
          console.error('Error updating supporter:', error);
        }
      );
    }
  }

  
  

 
  deleteSupporter(id: number | undefined): void {
    if (!id || id <= 0) {
      console.error('Invalid ID for delete operation:', id);
      return;
    }
  
    // Ask for confirmation before deleting
    const confirmed = confirm('Are you sure you want to delete this Clients?');
  
    if (confirmed) {
      this.service.deleteSupporter(id).subscribe(
        () => {
          console.log('Clients deleted successfully');
  
          // Remove the deleted item from support_data
          this.support_data = this.support_data.filter((item: any) => item.id !== id);
  
          // Optionally, reset selectedItem and form if necessary
          this.selectedItem = { _id: '', name: '', imageUrl: '' };
          this.supporterForm.reset();
          this.showAddForm = false;
  
          // Show success alert
          alert('Clients deleted successfully!');
        },
        (error) => {
          console.error('Error deleting supporter:', error);
        }
      );
    }
  }
  
  



  resetForm(): void {
    this.supporterForm.reset();
    this.supporterForm.markAsUntouched();
    this.supporterForm.markAsPristine();
  }

  
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.resetForm();
  }



  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }


}
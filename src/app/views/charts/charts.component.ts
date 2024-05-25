import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Service/contact.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  [x: string]: any;
  form!: FormGroup;
  formDataList!: any[]; // Array to store retrieved form data

  constructor(private fb: FormBuilder, private apiService: ContactService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      subject: ['', Validators.required],
      // enquiryType: ['agronomy', Validators.required],
      message: ['', Validators.required]
    });

    // Load existing form data on component initialization
    this.loadFormData();
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.apiService.createFormData(formData).subscribe(
        response => {
          console.log('Data created successfully:', response);
          this.loadFormData(); // Reload form data after successful submission
        },
        error => {
          console.error('Error creating data:', error);
        }
      );
    }
  }

  loadFormData() {
    // Call the API service to get all form data
    this.apiService.getAllFormData().subscribe(
      response => {
        this.formDataList = response;
        console.log('Form data retrieved successfully:', this.formDataList);

      },
      error => {
        console.error('Error retrieving form data:', error);
      }
    );
  }
  // deleteFormData(id: any) {
  //   // Call the API service to delete the specific form data
  //   this.apiService.deleteContactData(id).subscribe(
  //     response => {
  //       console.log('Data deleted successfully:', response);
  //       this.loadFormData(); // Reload form data after successful deletion
  //     },
  //     error => {
  //       console.error('Error deleting data:', error);
  //       console.log('Full error:', error);
  //     }
  //   );
  // }
  onDelete(id: number): void {
    this.apiService.deletedata(id).subscribe(
      (response) => {
        console.log(response);
        this.loadFormData();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

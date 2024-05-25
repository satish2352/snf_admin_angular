// typography.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit {

  supporterForm!: FormGroup;
  support_data: any;
  selectedItem: any = { _id: '', namesup: '', imageUrl: '' };
  showAddForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchsupporterData();
  }

  initForm(): void {
    this.supporterForm = this.formBuilder.group({
      namesup: [''],
      image: [null]
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
      image: file
    });
  }

  addSupporter(): void {
    if (this.supporterForm.valid) {
      const formData = new FormData();
      formData.append('namesup', this.supporterForm.value.namesup);
      if (this.supporterForm.value.image) {
        formData.append('image', this.supporterForm.value.image);
      }

      this.service.addSupporter(formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchsupporterData();
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
    this.selectedItem = { ...item };
    this.showAddForm = true;
  }

  updateSupporter(id: number): void {
    if (this.supporterForm.valid) {
      const formData = new FormData();
      formData.append('name', this.supporterForm.value.namesup);
      if (this.supporterForm.value.image) {
        formData.append('image', this.supporterForm.value.image);
      }

      this.service.updateSupporter(id, formData).subscribe(
        (response) => {
          console.log(response);
          this.fetchsupporterData();
          this.initForm();
          this.showAddForm = false;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  deleteSupporter(id: number): void {
    this.service.deleteSupporter(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchsupporterData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }
}

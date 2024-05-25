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
      image: [null]
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
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.awards_recognation_Form.patchValue({ image: file });
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
    this.awards_recognation_Form.reset();
    this.awards_recognation_Form.markAsUntouched();
    this.awards_recognation_Form.markAsPristine();
  }

  addawards_recognation(): void {
    const formData = new FormData();
    formData.append('name', this.awards_recognation_Form.value.name);
    formData.append('image', this.awards_recognation_Form.value.image);

    this.service.addawards_recognation(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchawards_recognation_Data();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateawards_recognation(id: number): void {
    const formData = new FormData();
    formData.append('name', this.awards_recognation_Form.value.name);
    formData.append('image', this.awards_recognation_Form.value.image);

    this.service.updateawards_recognation(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchawards_recognation_Data();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteawards_recognation(id: number): void {
    this.service.deleteawards_recognation(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchawards_recognation_Data();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


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
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchProject_Birthday_Celebrations_Data();
  }

  initializeForm(): void {
    this.Project_Birthday_Celebrations_Form = this.fb.group({
      name: ['', Validators.required],
      image: [null]
    });
  }

  fetchProject_Birthday_Celebrations_Data() {
    this.service.getarticle_on_snf().subscribe(
      (response) => {
        console.log(response);
        this.Project_Birthday_Celebrations_Data = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.Project_Birthday_Celebrations_Form.patchValue({ image: file });
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
  }

  addarticle_on_snf(): void {
    const formData = new FormData();
    formData.append('name', this.Project_Birthday_Celebrations_Form.value.name);
    formData.append('image', this.Project_Birthday_Celebrations_Form.value.image);

    this.service.addarticle_on_snf(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Birthday_Celebrations_Data();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updatearticle_on_snf(id: number): void {
    const formData = new FormData();
    formData.append('name', this.Project_Birthday_Celebrations_Form.value.name);
    formData.append('image', this.Project_Birthday_Celebrations_Form.value.image);

    this.service.updatearticle_on_snf(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Birthday_Celebrations_Data();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deletearticle_on_snf(id: number): void {
    this.service.deletearticle_on_snf(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Birthday_Celebrations_Data();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


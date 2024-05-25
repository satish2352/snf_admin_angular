import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})

export class CarouselsComponent implements OnInit {
  Project_Clean_Water_Project_Form!: FormGroup;
  Project_Clean_Water_Project_Data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchProject_Clean_Water_Project_Data();
  }

  initializeForm(): void {
    this.Project_Clean_Water_Project_Form = this.fb.group({
      name: ['', Validators.required],
      image: [null]
    });
  }

  fetchProject_Clean_Water_Project_Data() {
    this.service.getOnGoingProject_Clean_Water_Project().subscribe(
      (response) => {
        console.log(response);
        this.Project_Clean_Water_Project_Data = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.Project_Clean_Water_Project_Form.patchValue({ image: file });
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
    this.Project_Clean_Water_Project_Form.reset();
    this.Project_Clean_Water_Project_Form.markAsUntouched();
    this.Project_Clean_Water_Project_Form.markAsPristine();
  }

  addOnGoingProject_Clean_Water_Project(): void {
    const formData = new FormData();
    formData.append('name', this.Project_Clean_Water_Project_Form.value.name);
    formData.append('image', this.Project_Clean_Water_Project_Form.value.image);

    this.service.addOnGoingProject_Clean_Water_Project(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Clean_Water_Project_Data();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateOnGoingProject_Clean_Water_Project(id: number): void {
    const formData = new FormData();
    formData.append('name', this.Project_Clean_Water_Project_Form.value.name);
    formData.append('image', this.Project_Clean_Water_Project_Form.value.image);

    this.service.updateOnGoingProject_Clean_Water_Project(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Clean_Water_Project_Data();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteOnGoingProject_Clean_Water_Project(id: number): void {
    this.service.deleteOnGoingProject_Clean_Water_Project(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchProject_Clean_Water_Project_Data();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-project-category',
  templateUrl: './projectcategory.component.html',
})
export class ProjectComponent implements OnInit {
  Project_Form!: FormGroup;
  Project_Data: any[] = [];
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  selectedItem: any = { _id: '', name: '' };

  constructor(private service: ServiceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchProjectsData();
  }

  initializeForm(): void {
    this.Project_Form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  toggleAddForm(): void {
    this.showAddForm = true;
    this.showEditForm = false;
    this.resetForm();
  }

  toggleEditForm(item: any): void {
    this.selectedItem = item;
    this.showEditForm = true;
    this.showAddForm = false;
    this.Project_Form.patchValue({
      name: item.name,
    });
  }

  resetForm(): void {
    this.Project_Form.reset();
    this.Project_Form.markAsUntouched();
    this.Project_Form.markAsPristine();
   // this.selectedItem = { _id: '', name: '' };
  }

  fetchProjectsData(): void {
    this.service.getProject().subscribe(
      (response: any) => {
        this.Project_Data = response;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }

  addProject(): void {
    if (this.Project_Form.valid) {
      const projectData = {
        name: this.Project_Form.value.name
      };

      this.service.addProject(projectData).subscribe(
        (response: any) => {
          console.log('API Call Success', response);
          this.Project_Data.push(response.result);
          this.showAddForm = false;
        },
        (error) => {
          console.error('Error adding project', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

 updateProject(id: number): void {
    if (this.Project_Form.valid) {
        const projectData = {
            name: this.Project_Form.value.name
        };

        this.service.updateProject(id, projectData).subscribe(
            (response: any) => {
                const index = this.Project_Data.findIndex((item: { id: number }) => item.id === id);
                if (index !== -1) {
                    this.Project_Data[index] = { ...this.Project_Data[index], ...response.result };
                }
                this.fetchProjectsData();
                this.showEditForm = false;
                this.resetForm();
            },
            (error) => {
                console.error('Error updating project', error);
            }
        );
    }
}


  deleteProject(id: number): void {
    this.service.deleteProject(id).subscribe(
      () => {
        this.Project_Data = this.Project_Data.filter((item: { id: number }) => item.id !== id);
      },
      (error) => {
        console.error('Error deleting project', error);
      }
    );
  }
}

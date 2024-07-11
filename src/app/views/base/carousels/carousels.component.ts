import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent implements OnInit {
  upcomingproject_Form!: FormGroup;
  upcomingProject_Data: any;
  filteredProjects: any;
  selectedItem: any = { id: '', ProjectTitle: '', Paragraph: '', category: '', imageUrl: '' };
  categories: any[] = [];
  selectedCategory: string = '';
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  fileError: string = '';

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchupcomingProject_Data();
    this.fetchCategories();
  }

  initializeForm(): void {
    this.upcomingproject_Form = this.fb.group({
      ProjectTitle: ['', Validators.required],
      Paragraph: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: [null]
    });
  }

  fetchupcomingProject_Data(): void {
    this.service.getupcomingproject().subscribe(
      (response) => {
        console.log(response);
        this.upcomingProject_Data = response;
        this.filterProjects();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchCategories(): void {
    this.service.getProject().subscribe(
      (response) => {
        console.log(response);
        this.categories = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.upcomingproject_Form.patchValue({
        imageUrl: file
      });
      this.fileError = '';
    } else {
      this.fileError = 'Image file is required.';
    }
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedCategory) {
      this.filteredProjects = this.upcomingProject_Data.filter(
        (project: any) => project.categoryId === this.selectedCategory
      );
    } else {
      this.filteredProjects = this.upcomingProject_Data;
    }
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

    this.upcomingproject_Form.patchValue({
      ProjectTitle: item.ProjectTitle,
      Paragraph: item.Paragraph,
      category: item.category,
      imageUrl: null
    });
  }

  resetForm(): void {
    this.upcomingproject_Form.reset();
    this.upcomingproject_Form.markAsUntouched();
    this.upcomingproject_Form.markAsPristine();
    this.fileError = '';
  }

  addupcomingproject(event: Event): void {
    event.preventDefault();
    if (this.upcomingproject_Form.invalid) {
      this.upcomingproject_Form.markAllAsTouched();
      this.fileError = this.upcomingproject_Form.get('imageUrl')?.value ? '' : 'Image file is required.';
      return;
    }

    const formData = new FormData();
    formData.append('ProjectTitle', this.upcomingproject_Form.value.ProjectTitle);
    formData.append('Paragraph', this.upcomingproject_Form.value.Paragraph);
    formData.append('category', this.upcomingproject_Form.value.category);
    formData.append('imageUrl', this.upcomingproject_Form.value.imageUrl);

    this.service.addupcomingproject(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchupcomingProject_Data();
        alert('recRecord Added successfully!');
        this.showAddForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateUpcomingProject(id: number, event: Event): void {
    event.preventDefault();
    if (this.upcomingproject_Form.invalid) {
      this.upcomingproject_Form.markAllAsTouched();
      this.fileError = this.upcomingproject_Form.get('imageUrl')?.value ? '' : 'Image file is required.';
      return;
    }

    const formData = new FormData();
    formData.append('ProjectTitle', this.upcomingproject_Form.value.ProjectTitle);
    formData.append('Paragraph', this.upcomingproject_Form.value.Paragraph);
    formData.append('category', this.upcomingproject_Form.value.category);

    if (this.upcomingproject_Form.value.imageUrl) {
      formData.append('imageUrl', this.upcomingproject_Form.value.imageUrl);
    } else {
    }

    this.service.updateupcomingproject(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchupcomingProject_Data();
        alert('recRecord Updated successfully!');
        this.showEditForm = false;
        this.resetForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteupcomingproject(id: number): void {
    // Ask for confirmation before deleting
    const confirmed = confirm('Are you sure you want to delete this upcoming project?');
  
    if (confirmed) {
      this.service.deleteupcomingproject(id).subscribe(
        (response) => {
          console.log(response);
          this.fetchupcomingProject_Data();
          this.upcomingproject_Form.reset();
          // Show success alert
          alert('Upcoming project deleted successfully!');
        },
        (error) => {
          console.error('Error deleting upcoming project:', error);
        }
      );
    }
  }
  

  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }
}
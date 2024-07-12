import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  mentorForm!: FormGroup;
  mentorData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  fileError: string = '';

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchMentorData();
  }

  initializeForm(): void {
    this.mentorForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }

  fetchMentorData() {
    this.service.getMentors().subscribe(
      (response) => {
        console.log(response);
        this.mentorData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.mentorForm.patchValue({ imageUrl: file });
      this.fileError = '';
    } else {
      this.fileError = 'Image file is required.';
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
    this.mentorForm.patchValue({
      name: item.name,
      imageUrl: null
    });
  }

  resetForm(): void {
    this.mentorForm.reset();
    this.mentorForm.markAsUntouched();
    this.mentorForm.markAsPristine();
  }

  addMentorItem(): void {
    if (this.mentorForm.invalid) {
      this.mentorForm.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('name', this.mentorForm.value.name);
    const file = this.mentorForm.value.imageUrl;

    if (!file) {
      this.fileError = 'Image file is required.';
      return;
    }

    formData.append('imageUrl', file);
    this.service.addMentors(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchMentorData();
        alert('Record added successfully!');
        this.showAddForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateMentorItem(id: number,event:Event): void {
    event.preventDefault();
  if (this.mentorForm.invalid) {
    this.mentorForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();
  formData.append('name', this.mentorForm.value.name);

if (this.mentorForm.value.imageUrl instanceof File) {
    formData.append('imageUrl', this.mentorForm.value.imageUrl);
  } else {
  }

  this.service.updateMentors(id, formData).subscribe(
    (response) => {
      console.log('Update response:', response);
      this.fetchMentorData();
      alert('Record updated successfully!');
      this.showEditForm = false;
      this.resetForm();
    },
    (error) => {
      console.error('Update error:', error);
    }
  );
}

  deleteMentorsItem(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this mentor?');

    if (confirmed) {
      this.service.deleteMentors(id).subscribe(
        (response) => {
          console.log(response);
          this.fetchMentorData();
          alert('Mentor deleted successfully!');
        },
        (error) => {
          console.error('Error deleting mentor:', error);
        }
      );
    }
  }

  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }
}

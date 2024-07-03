import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent {
  mentorForm!: FormGroup;
  mentorData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

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
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.mentorForm.patchValue({ imageUrl: file });
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
      name:item.name,
      imageUrl:item.imageUrl
    })

  
  }

  resetForm(): void {
    this.mentorForm.reset();
    this.mentorForm.markAsUntouched();
    this.mentorForm.markAsPristine();
  }

  addMentorItem(): void {
    const formData = new FormData();
    formData.append('name', this.mentorForm.value.name);
    formData.append('imageUrl', this.mentorForm.value.imageUrl);

    this.service.addMentors(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchMentorData();
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateMentorItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.mentorForm.value.name);
    formData.append('imageUrl', this.mentorForm.value.imageUrl);

    this.service.updateMentors(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchMentorData();
        this.showEditForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteMentorsItem(id: number): void {
    this.service.deleteMentors(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchMentorData();
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
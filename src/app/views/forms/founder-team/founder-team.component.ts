import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-founder-team',
  templateUrl: './founder-team.component.html',
  styleUrl: './founder-team.component.scss'
})
export class FounderTeamComponent {
  FounderForm!: FormGroup;
  FounderData: any;
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
    this.fetchFounderData();
  }


  initializeForm(): void {
    this.FounderForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null, Validators.required]
    });
  }
  fetchFounderData() {
    this.service.getFounderParticipants().subscribe(
      (response) => {
        console.log(response);
        this.FounderData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.FounderForm.patchValue({ imageUrl: file });
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
    this.FounderForm.patchValue({
      name:item.name,
      imageurl:item.imageUrl
    })
  }

  resetForm(): void {
    this.FounderForm.reset();
    this.FounderForm.markAsUntouched();
    this.FounderForm.markAsPristine();
  }

  addFounderItem(): void {
    const formData = new FormData();
    formData.append('name', this.FounderForm.value.name);
    formData.append('imageUrl', this.FounderForm.value.imageUrl);

    this.service.addFounderParticipant(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchFounderData();
        alert('recRecord Added successfully!');   
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateFounderItem(id: number,event:Event): void {
    event.preventDefault();
    if (this.FounderForm.invalid) {
    this.FounderForm.markAllAsTouched();
    return;
  }
  const formData = new FormData();
  formData.append('name', this.FounderForm.value.name);
  if (this.FounderForm.value.imageUrl instanceof File) {
    formData.append('imageUrl', this.FounderForm.value.imageUrl);
  } else {
  }

  this.service.updateFounderParticipant(id, formData).subscribe(
    (response) => {
      console.log(response);
      this.fetchFounderData();
      alert('recRecord Updated successfully!');
      this.showEditForm = false;
     // location.reload();
    },
    (error) => {
      console.error(error);
    }
  );
}

  deleteFounderItem(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this Founder?');
    if (confirmed) {
    this.service.deleteFounderParticipant(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchFounderData();
        alert('Fonder deleted successfully!');
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  }
  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }

}

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
      imageUrl: [null]
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
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateFounderItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.FounderForm.value.name);
    formData.append('imageUrl', this.FounderForm.value.imageUrl);

    this.service.updateFounderParticipant(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchFounderData();
        this.showEditForm = false;
       // location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteFounderItem(id: number): void {
    this.service.deleteFounderParticipant(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchFounderData();
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }


}

import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nri-participants',
  templateUrl: './nri-participants.component.html',
  styleUrl: './nri-participants.component.scss'
})
export class NriParticipantsComponent {
  NriForm!: FormGroup;
  NriData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initializeForm();
    this.fetchNriData();
  }


  initializeForm(): void {
    this.NriForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }
  fetchNriData() {
    this.service.getNRI_Participants().subscribe(
      (response) => {
        console.log(response);
        this.NriData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.NriForm.patchValue({ imageUrl: file });
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
    this.NriForm.reset();
    this.NriForm.markAsUntouched();
    this.NriForm.markAsPristine();
  }

  addNriTeamItem(): void {
    const formData = new FormData();
    formData.append('name', this.NriForm.value.name);
    formData.append('imageUrl', this.NriForm.value.imageUrl);

    this.service.addNRI_Participants(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNriData();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateNriItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.NriForm.value.name);
    formData.append('imageUrl', this.NriForm.value.imageUrl);

    this.service.updateNRI_Participants(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNriData();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteNriItem(id: number): void {
    this.service.deleteNRI_Participants(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchNriData();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

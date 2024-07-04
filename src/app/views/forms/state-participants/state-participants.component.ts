import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-state-participants',
  templateUrl: './state-participants.component.html',
  styleUrl: './state-participants.component.scss'
})
export class StateParticipantsComponent {
  StateForm!: FormGroup;
  StateData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initializeForm();
    this.fetchStateData();
  }


  initializeForm(): void {
    this.StateForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }
  fetchStateData() {
    this.service.getState_Participants().subscribe(
      (response) => {
        console.log(response);
        this.StateData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.StateForm.patchValue({ imageUrl: file });
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
    this.StateForm.patchValue({
   name:item.name,
   imageUrl:item.imageUrl
    });
  }

  resetForm(): void {
    this.StateForm.reset();
    this.StateForm.markAsUntouched();
    this.StateForm.markAsPristine();
  }

  addStateTeamItem(): void {
    const formData = new FormData();
    formData.append('name', this.StateForm.value.name);
    formData.append('imageUrl', this.StateForm.value.imageUrl);

    this.service.addState_Participants(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchStateData();
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  updateStateItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.StateForm.value.name);
    formData.append('imageUrl', this.StateForm.value.imageUrl);

    this.service.updateState_Participants(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchStateData();
        this.showEditForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteStateItem(id: number): void {
    this.service.deleteState_Participants(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchStateData();
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

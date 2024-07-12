import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-state-participants',
  templateUrl: './state-participants.component.html',
  styleUrls: ['./state-participants.component.scss']
})
export class StateParticipantsComponent implements OnInit {
  StateForm!: FormGroup;
  StateData: any;
  selectedItem: any = { _id: 0, name: '', imageUrl: '' };
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

  fetchStateData(): void {
    this.service.getState_Participants().subscribe(
      (response) => {
        console.log(response);
        this.StateData = response;
      },
      (error) => {
        console.error(error);
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
      name: item.name,
      imageUrl: null  // Reset image file input when editing
    });
  }

  resetForm(): void {
    this.StateForm.reset();
    this.StateForm.markAsUntouched();
    this.StateForm.markAsPristine();
  }

  addStateTeamItem(): void {
    if (this.StateForm.invalid) {
      this.StateForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.StateForm.value.name);
    if (this.StateForm.value.imageUrl) {
      formData.append('imageUrl', this.StateForm.value.imageUrl);
    } else {
      this.StateForm.controls['imageUrl'].setErrors({ required: true });
      return;
    }

    this.service.addState_Participants(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchStateData();
        alert('recRecord Added successfully!');
        this.showAddForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateStateItem(id: number,event:Event): void {
    if (this.StateForm.invalid) {
      this.StateForm.markAllAsTouched();
      return;
    }
    debugger
    const formData = new FormData();
    formData.append('name', this.StateForm.value.name);
    if (this.StateForm.value.imageUrl) {
      formData.append('imageUrl', this.StateForm.value.imageUrl);
    } else {
    }

    this.service.updateState_Participants(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchStateData();
        alert('recRecord Updated successfully!');
        this.showEditForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteStateItem(id: number): void { // ID type changed to number
    const confirmed = confirm('Are you sure you want to delete this state-participants?');
    if (confirmed) {
    this.service.deleteState_Participants(id).subscribe(
      (response) => {
        console.log(response);
        alert('state-participants deleted successfully!');
        this.fetchStateData();
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
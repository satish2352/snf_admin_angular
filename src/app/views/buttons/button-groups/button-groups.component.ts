import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss']
})

export class ButtonGroupsComponent implements OnInit {
  snf_in_news_papers_Form!: FormGroup;
  snf_in_news_papers_Data: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchsnf_in_news_papers_Data();
  }

  initializeForm(): void {
    this.snf_in_news_papers_Form = this.fb.group({
      name: ['', Validators.required],
      image: [null]
    });
  }

  fetchsnf_in_news_papers_Data() {
    this.service.getsnf_in_news_papers().subscribe(
      (response) => {
        console.log(response);
        this.snf_in_news_papers_Data = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.snf_in_news_papers_Form.patchValue({ image: file });
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
    this.snf_in_news_papers_Form.reset();
    this.snf_in_news_papers_Form.markAsUntouched();
    this.snf_in_news_papers_Form.markAsPristine();
  }

  addsnf_in_news_papers(): void {
    const formData = new FormData();
    formData.append('name', this.snf_in_news_papers_Form.value.name);
    formData.append('imageUrl', this.snf_in_news_papers_Form.value.imageUrl);

    this.service.addsnf_in_news_papers(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchsnf_in_news_papers_Data();
        this.showAddForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updatesnf_in_news_papers(id: number): void {
    const formData = new FormData();
    formData.append('name', this.snf_in_news_papers_Form.value.name);
    formData.append('imageUrl', this.snf_in_news_papers_Form.value.imageUrl);

    this.service.updatesnf_in_news_papers(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchsnf_in_news_papers_Data();
        this.showEditForm = false;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deletesnf_in_news_papers(id: number): void {
    this.service.deletesnf_in_news_papers(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchsnf_in_news_papers_Data();
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


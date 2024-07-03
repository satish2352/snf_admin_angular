import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.scss'
})
export class NewsArticlesComponent implements OnInit{
  newsForm!: FormGroup;
  newsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  showAddForm: boolean = false;
  showEditForm: boolean = false;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initializeForm();
    this.fetchNewsData();
  }


  initializeForm(): void {
    this.newsForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }
  fetchNewsData() {
    this.service.getHome_Media().subscribe(
      (response) => {
        console.log(response);
        this.newsData = response;
      }
    );
  }

  onFileChange(event: any): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.newsForm.patchValue({ imageUrl: file });
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

    this.newsForm.patchValue({
      name: item.name,
       imageUrl: item.imageUrl // Assuming you handle the image display separately
    });
  }


  resetForm(): void {
    this.newsForm.reset();
    this.newsForm.markAsUntouched();
    this.newsForm.markAsPristine();
  }

  addNewsItem(): void {
    const formData = new FormData();
    formData.append('name', this.newsForm.value.name);
    formData.append('imageUrl', this.newsForm.value.imageUrl);

    this.service.postHome_Media(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        this.showAddForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateNewsItem(id: number): void {
    const formData = new FormData();
    formData.append('name', this.newsForm.value.name);
    formData.append('imageUrl', this.newsForm.value.imageUrl);

    this.service.updateHome_Media(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        this.showEditForm = false;
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deletenewsItem(id: number): void {
    this.service.deleteHome_Media(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        //location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
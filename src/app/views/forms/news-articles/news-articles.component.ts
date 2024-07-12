import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent implements OnInit {
  newsForm!: FormGroup;
  newsData: any;
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
    this.fetchNewsData();
  }

  initializeForm(): void {
    this.newsForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [null]
    });
  }

  fetchNewsData(): void {
    this.service.getHome_Media().subscribe(
      (response) => {
        console.log(response);
        this.newsData = response;
      },
      (error) => {
        console.error(error);
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
      imageUrl: null  // Reset image file input when editing
    });
  }

  resetForm(): void {
    this.newsForm.reset();
    this.newsForm.markAsUntouched();
    this.newsForm.markAsPristine();
  }

  addNewsItem(): void {
    if (this.newsForm.invalid) {
      this.newsForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.newsForm.value.name);
    formData.append('imageUrl', this.newsForm.value.imageUrl);

    this.service.postHome_Media(formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        alert('recRecord Added successfully!');  
        this.showAddForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateNewsItem(id: number, event: Event): void {
    event.preventDefault();
    if (this.newsForm.invalid) {
      this.newsForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.newsForm.value.name);

    // Check if a new image file is selected
    if (this.newsForm.value.imageUrl instanceof File) {
      formData.append('imageUrl', this.newsForm.value.imageUrl);
    } else {
    }

    this.service.updateHome_Media(id, formData).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        alert('recRecord Updated successfully!');
        this.showEditForm = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deletenewsItem(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this News-Articles?');
    if (confirmed) {
    this.service.deleteHome_Media(id).subscribe(
      (response) => {
        console.log(response);
        this.fetchNewsData();
        alert('News-Articles deleted successfully!');
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
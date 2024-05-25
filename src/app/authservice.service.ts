// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthserviceService {
//   private isLoggedIn = false;
//   constructor() { }
//   login(username: string, password: string): Observable<any> {
//     console.log('Attempting to log in with username:', username, 'and password:', password);
//     if (username === 'test@gmail.com' && password === 'test') {
//       this.isLoggedIn = true;
//       console.log('Login successful');
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('username', username);
//       localStorage.setItem('password', password);
//       return of(true); // Returning an Observable of true if login is successful
//     } else {
//       console.log('Login failed');
//       return of(false); // Returning an Observable of false if login fails
//     }
//   }
//   logout(): void {
//     console.log('Logging out...');
//     this.isLoggedIn = false;
//     localStorage.removeItem('isLoggedIn');
//   }

//   isAuthenticated(): boolean {
//     console.log('Checking authentication status...');
//     return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
//   }



// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,  Observable,  of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  public Url = 'https://snfbackendfinal.sumagodemo.com/login/login'; ///live
  // private apiUrl = 'https://trainingapi.sumagotest.in/public/api/'; ////test
  // private apiUrl = 'http://trainingadmin.sumagotest.in/public/api/'; 
  
  // private apiUrl = 'https://admin.sumagotraining.in/public/api/';
   token:any;
  private loggedIn = new BehaviorSubject<boolean>(false);
  access_token: any;
  


  constructor(private router:Router,private http:HttpClient) { }

  // login(email:string,password: string):Observable<any>{
  //   if(email=='mohini@gmail.com' && password =='12345678'){
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({name:'mohini',email:'admin@gmail.com'});

  //   }
  //   return throwError("Failed")
  // }
  
  setToken(token:any):void{
   this.token = localStorage.setItem('access_token',token);
  }

  getToken():string | null {
  return  localStorage.getItem('access_token')
  }
 

  isLoggedIn(){
     return this.getToken()!==null
  }
  // logout(): Observable<any> {
  //   const url = ${this.apiUrl}logout;
  //   const headers = new HttpHeaders().set('Authorization', Bearer ${localStorage.getItem('access_token')});
  
  //   return this.http.post(url, null, { headers }).pipe(
  //     tap(() => {
  //       this.clearToken();
  //       // this.clearUser();
  //       localStorage.removeItem('access_token');
  //       localStorage.removeItem('email');
  //       localStorage.removeItem('id');
  //       this.router.navigate(['login']);
  //       console.log("login here");
        
  //     })
  //   );
  // }
  clearToken() {
    this.token = null;
  }
  
  // logout() {
    
  //   localStorage.removeItem('access_token');
  //   this.router.navigate(['login']);
  // }
  login(email: any, password: any): Observable<any> {
    // const url = ${this.Url}login;
  

    return this.http.post(this.Url, { email, password }).pipe(
      tap((response: any) => {
        this.setToken(response.access_token);
        // this.setUser(response.id,response.username,response.email)
        // localStorage.setItem('access_token', response.token);
        localStorage.setItem('username',response.username)
        localStorage.setItem('id',response.id)
        return response.access_token;
      })
    );
  }
 
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const BASE_URL="http://localhost:3000/users"
const BOOK_URL="http://localhost:8081/"

const USER_URL="http://localhost:8082/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

    getUsers(){
      return this.http.get(USER_URL)
    }

    getBooks(){
      return this.http.get(BOOK_URL+"allBook")
    }

    deleteUser(user:any)
    {
      return this.http.delete(BOOK_URL+"/",user.id)
    }

    createUser(user:{
      firstname:string;
      lastname:string;
      age:number;
      Gender:string;
    }){
      return this.http.post(BOOK_URL,user);
    }

    saveBook(book:{
        logo:string;
        title:string;
        category:string;
        price:string;
        author:string;
        publisher:string;
        published_date:string;
        chaptersOrContent:string;
        active:string;
    }){
      return this.http.post(BOOK_URL+"saveBook",book);
    }

    saveUser(user:{
      name:string;
      emailId:string;
      phone:string;
      password:string;
      type:string;
  }){
    return this.http.post(USER_URL+"saveUser",user);
  }
  constructor(public http :HttpClient) { }


}

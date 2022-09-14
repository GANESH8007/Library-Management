import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/book';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  book: Book =new Book();
  
  books: Book[]=[];
 

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise =this.userService.getBooks();
    promise.subscribe((response)=>{
      console.log(response);
      this.books=response as Book[]; 
    })
    }

    // deleteRow(student, index){
    //   const observable =this.userService.deleteUser(student);
    //   observable.subscribe((response:any)=>{
    //     console.log(response);
    //     this.students.splice(index,1)
    //   })
    //    }


     //  modify(stud: Student) {
        // this.stud = new FormGroup({
        //   id: new FormControl(stud.id),
        //   firstName: new FormControl(stud.firstName),
        //   lastName: new FormControl(stud.lastName),
        //   dob: new FormControl(stud.dob),
        //   email: new FormControl(stud.email),
        //   phoneNumber: new FormControl(stud.phoneNumber),
        //   studClass: new FormControl(stud.studClass),
        //   division: new FormControl(stud.division),
        //   rollNo: new FormControl(stud.rollNo)
       // });
     // }
  
      // cancel() {
      //   this.stud = null;
      // }
}

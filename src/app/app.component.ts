import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudApp';
  data:{}={
    name:'',
    email:'',
    mobile:'',
    date:''
  };
  onSubmit(val:any){
    this.data = val;
    console.log(this.data);
  }
}

import { Component } from '@angular/core';
import { User, Action} from './user.model';
import { UserService } from './user.service';
//import { Address } from '../common/common.model'
import { Router } from '@angular/router';

@Component({
  selector: 'user-app',
  templateUrl: './user.view.html'
})
export class UserComponent {
  message = '';
  model = new User();
  //errorMsg: string;
  action: Action;
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    //this.model.address = new Address();
    //this.errorMsg = '';
    this.action = new Action();
  }

  
  async getOneUser() {
    await this.userService.getUser(this.model).subscribe((data: User) => {
    this.model = data;
    });
  }

  async onSubmit() {
    if (this.action.method == "Delete") {
      this.model.obsolete = '1';
    } 
    this.submitted = true; 
    console.log(JSON.stringify(this.model));
    //await this.userService.createUser(this.model).then(result => this.model=result, error => this.errorMsg="Error occured"); 
    await this.userService.createUser(this.model).then(result => this.model=result); 
    this.message = "Record saved successfully......";
    //this.model=null;
    //this.router.navigate(['/signup']);
  }

  async onActionGet() {
    this.submitted = true; 
    this.getOneUser();
    this.message = "Record retrieved......";
    this.action.submethod = 'View';
    this.action.readonly = "readonly";
    this.action.disabled = "disabled";
  }
  
} 
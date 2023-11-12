import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
  users: User[] = [];
  isUsersLoading: boolean = true;

  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((users: User[]) => {
          this.users = users;
          this.isUsersLoading = false;
      })
  }
}

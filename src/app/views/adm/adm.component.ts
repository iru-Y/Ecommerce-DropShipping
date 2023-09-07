import { UserServices } from './../../domain/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {
  profileImageUrl?: string;
  profileName?: string;
  login: string = 'yuri';

  constructor (private userServices: UserServices) {}
  ngOnInit(): void {
    this.getProfileInfo(this.login);
  }

  private getProfileInfo(login: string): void {
     this.userServices.getByProfile(login).subscribe(data => {
      this.profileImageUrl = data.profileImage;
      this.profileName = data.login;
      
    });
  }
}

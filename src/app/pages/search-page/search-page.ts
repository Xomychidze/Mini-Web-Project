import { Component, inject, signal } from '@angular/core';
import { ProfileService } from '../../data/services/profile-service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCard } from "../../common-ui/profile-card/profile-card";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {

  profileService: ProfileService = inject(ProfileService);
  profiles = signal<Profile[]>([]);


  constructor() {
    this.profileService.getTestAccounts()
      .subscribe((data) => {
        console.log(data);
        this.profiles.set(data);
      });
  }
}


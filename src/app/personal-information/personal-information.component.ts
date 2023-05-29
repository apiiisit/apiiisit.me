import { Component } from '@angular/core';
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {

  data: any = {};
  cv: string[] = [];
  year: number = 2023;

  constructor(private personalInformationService: PersonalInformationService) {}

  ngOnInit(): void {

    this.year = new Date().getFullYear();

    this.personalInformationService.getData().subscribe(res => {
      this.data = res.data;
      this.cv = Object.keys(res.data.cv);
    });

  }

}

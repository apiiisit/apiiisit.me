import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(environment.API_ENDPOINT + '/personal-info');
  }
  
}

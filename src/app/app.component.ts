import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/api.service';
import { responseStatus } from 'src/utilities/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {

    // DUMMY PAYLOAD
    const payload = {
      email: "mohsin@gmail.com",
      password: 'pass2word',
    }

    // API CALL TO LOGIN USING DUMMY DATA
    this._apiService.post('users/login', payload).subscribe(
      response => {

        // THIS WILL CHECK FOR SUCCESSFUL RESPONSES
        if (response.status == responseStatus.SUCCESS) {
          console.log(response.data)
        }

        // THIS WILL CHECK FOR CUSTOM ERRORS
        else if (response.status == responseStatus.ERROR) {
          console.log(response.message)
        }
      },
      error => {
        // THIS WILL CHECK FOR FATAL ERRORS
        console.log('Error is', error.error);
      })
  }
}

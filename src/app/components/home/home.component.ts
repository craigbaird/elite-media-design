import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.instagram.com/goblue42agency/?__a=1').subscribe(data => {
      this.apiData = data;
      console.log('Data From API ', this.apiData);
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  title: string = 'Person Details';
  handleAlert(msg: string) {
    alert('welcome' + msg);
  }
  constructor() {}

  ngOnInit() {}
}

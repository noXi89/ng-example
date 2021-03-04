import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test = 'dummycontent';
  @Output() btn = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string>('https://google.com').subscribe((data) => {
      this.test = data;
    });
  }
}

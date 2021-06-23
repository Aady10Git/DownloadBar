import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Component, Injectable, VERSION } from '@angular/core';
import { ConfigServiceService } from './config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  progressValue = 0;

  constructor(private config: ConfigServiceService) { }

  onButtonClick() {
    this.config.getData().subscribe((event: HttpEvent<any>) => {

      if (event.type === HttpEventType.DownloadProgress) {
        console.log("download progress", event, event.total);
        this.progressValue = Math.round(event.loaded / event.total * 100)
      }
      if (event.type === HttpEventType.Response) {
        console.log("donwload completed", event);
      }
    }, err => console.log('err', err))
  }
}

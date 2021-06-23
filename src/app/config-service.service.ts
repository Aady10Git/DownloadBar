import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {



  constructor(private http: HttpClient) { }
  // url = 'http://hel.icmp.hetzner.com/100MB.bin';
  // url = 'http://placekitten.com/200/400';
  // url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';
  // url = 'https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json';
  // url = 'https://randomuser.me/api/';
  // url = 'https://jsonplaceholder.typicode.com/posts';
  url = 'https://sites.google.com/view/avengers-age-of-ultron-2015-go#h.e8zk2zrnyhf1';
  getData() {
    // console.log('get data');
     const req = new HttpRequest('GET', this.url, {
      reportProgress: true,
       observe: 'events',
       responseType: 'blob'
    });
    return this.http.request(req);
  }
}
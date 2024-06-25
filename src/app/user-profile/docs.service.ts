import { Injectable } from '@angular/core';
import { HttpClient, HttpHandlerFn } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/docs';

export type Doc = {
  id: string;
  title: string;
  author: string;
  description: string;
  publish_date: Date;
};

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}
  getDocs() {
    return this.http.get<Doc>(BASE_URL);
  }
}

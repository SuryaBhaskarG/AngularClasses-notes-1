import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayDataService {

  constructor() { } 

  postService:Array<any> = [
    {
      id: 1,
      name: 'John Doe',
      age: 25
    }
    ,
    {
      id: 2,
      name: 'Jane Smith',
      age: 30
    }
  ];
}

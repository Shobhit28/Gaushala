import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css'],
})
export class CowsComponent implements OnInit {

  constructor() { }

  nameSearch:string=''
  selectedCows:string=''

  cowsarr:any[]=[
  { name:'a'},
  {name:'b'},
  {name:'c'},
  { name:'d'},
  {name:'e'},
  {name:'f'},
  {name:'g'},
  {name:'h'},
]
onClickEntry(name){
  this.selectedCows=name;
}
ngOnInit() {
}
}
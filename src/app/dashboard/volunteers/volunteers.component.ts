import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  constructor() { }

  nameSearch: string = ''
  selectedVolunteeer: string=''
  volunteersArr:any[] = [
    { name: 'Shikhar'  },
    { name: 'Vanshika' },
    { name: 'Vasu' },
    { name: 'Tanvi' },
    { name: 'Shashank' },
    { name: 'Rishabh' },
    { name: 'Rashi' },
    { name: 'Ayushi' },
    { name: 'Tushar' },
    { name: 'Shivam' },
    { name: 'Yuvraj' },
    { name: 'Tarang' },
    { name: 'Sanmukh' },
  ]

  onClickEntry(name) {
    this.selectedVolunteeer = name;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheds',
  templateUrl: './sheds.component.html',
  styleUrls: ['./sheds.component.css']
})
export class ShedsComponent implements OnInit {

  constructor() { }

  
  
  nameSearch:string =''
  selectedShed: string=''
  shedArr:any[] =[
    {
      name:'Milk Shed 1',
    },
    {
      name:'Milk Shed 2',
    },
    {
      name:'Milk Shed 3',

    },
    {
      name:'Tin Shed',

    },
    {
      name:'Heifer Bara',

    },
    {
      name:'Maternity Shed',

    },
    {
      name:'Gate Shed',

    },
    {
      name:'Bhoosa Shed',

    }


  ]

  onClickEntry(name)
  {
    this.selectedShed = name;


  }

  ngOnInit(){

  }

}

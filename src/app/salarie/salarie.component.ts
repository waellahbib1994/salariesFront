import { Component, OnInit } from '@angular/core';
import {Salarie} from "../model/salarie";
import {SalarieService} from "../services/salarie.service";

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {
  salarie = new Salarie();
  message : string ='';
  salaries: Salarie [];
  cols:any[];
  constructor(private salarieService : SalarieService) { }

  ngOnInit() {
    this.salarieService.findAll().subscribe(res=>{
      this.salaries = res;
      console.log(this.salaries);
      this.cols = [
        { field: 'cin', header: 'cin' },
        { field: 'name', header: 'Name' },
        { field: 'salary', header: 'Salary' }
      ];
    })

  }

  public addSalarie(){
    this.salarieService.getSalarieById(this.salarie.cin).subscribe(res=>{
      console.log(res)
      if(res == null){
        this.salarieService.addSalarie(this.salarie).subscribe(res =>{
          console.log(res);
          this.message='';
          this.salaries.push(this.salarie);
        }, error1 => {
          console.log(error1);
        })
      }else {
        this.message="already exist :";
        console.log("already exist ! ");
      }
    })

  }

}

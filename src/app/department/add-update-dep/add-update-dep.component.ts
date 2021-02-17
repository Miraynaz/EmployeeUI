import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-update-dep',
  templateUrl: './add-update-dep.component.html',
  styleUrls: ['./add-update-dep.component.css']
})
export class AddUpdateDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any;
  DepartmentId: string="";
  DepartmentName: string="";

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }
  addDepartment() {
    var val = { DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName };
    this.service.addDepartment(val).subscribe(res=>{alert(res.toString())})
  }
  editDepartment() {
    var val = { DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName };
    this.service.updateDepartment(val).subscribe(res=>{alert(res.toString())})
  }



}

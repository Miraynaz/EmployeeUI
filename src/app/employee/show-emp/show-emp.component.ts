import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  EmployeeList: any = [];
  ngOnInit(): void {
    this.refreshEmpList();
  }

  ModalTitle: string="";
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  deleteClick(item: any) {
    if (confirm('Are you sure delete this Employee?')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  editClick(item:any) {
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      DepartmentName: "",
      DateOfJoining: "",
      PhotoFileName:"anonymous.jpg"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;

  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }
  refreshEmpList() {
    this.service.getEmpList().subscribe(data => { this.EmployeeList = data; });
}
}

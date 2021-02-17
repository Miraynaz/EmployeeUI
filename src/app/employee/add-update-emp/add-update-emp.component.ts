import { Component, OnInit,Input  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-update-emp',
  templateUrl: './add-update-emp.component.html',
  styleUrls: ['./add-update-emp.component.css']
})
export class AddUpdateEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  EmployeeId: string="";
  EmployeeName: string = "";
  DepartmentName: string = "";
  DateOfJoining: string = "";
  PhotoFileName: string = "anonymous.jpg";
  DepartmentList: any=[];
  PhotoFilePath: string = "";


  ngOnInit(): void {


  }
  loadDepartmentList() {
    this.service.getDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.DepartmentName = this.emp.DepartmentName;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }
  addEmployee() {
    var val = { EmployeeId: this.EmployeeId, EmployeeName: this.EmployeeName,DepartmentName:this.DepartmentName, DateOfJoining:this. DateOfJoining,PhotoFileName:this.PhotoFileName };
    this.service.addEmployee(val).subscribe(res=>{alert(res.toString())})
  }
  editEmployee() {
    var val = { EmployeeId: this.EmployeeId, EmployeeName: this.EmployeeName ,DepartmentName:this.DepartmentName, DateOfJoining:this. DateOfJoining,PhotoFileName:this.PhotoFileName  };
    this.service.updateEmployee(val).subscribe(res=>{alert(res.toString())})
  }
  uploadPhoto(event:any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }
}

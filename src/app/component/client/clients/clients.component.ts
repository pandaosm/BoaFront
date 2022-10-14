import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/entites/client';
import { ClientService } from 'src/app/services/client.service';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientComponent } from '../client/client.component';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort ;
  clt!: Client;


  id!: number;
  dataSourceWithObjectColumn: any;



  
  ngOnInit(): void {
    this.clientService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<Client>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })    
  }
  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = ['customerId','customerName','branchCode', 'Action'];
  dataSource!: MatTableDataSource<Client>;

  
  constructor(private clientService : ClientService, 
              private fb : FormBuilder,
              public dialog: MatDialog,
              private router : Router) { 
    
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort;

    this.sort.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.dataSource;
    this.dataSourceWithObjectColumn.sortingDataAccessor = (row:Client,columnName:string) : string => {
      console.log(row,columnName);
      if(columnName=="customerId") 
        return row.customerId;
      var columnValue = row[columnName as keyof Client] as string;
      return columnValue;
  }
}


search(id : number ){
  this.clientService.findByCritaria(id).subscribe(data => {
    this.dataSource = new MatTableDataSource<Client>(data);
    console.log('data');
    console.log(data);

  });
}
   load(){
    this.data();
  }
  // tslint:disable-next-line: typedef
  data(){
    this.clientService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<Client>(data);
      console.log('data');
      console.log(data);

    })    
  }

add(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.disableClose=true;
  this.dialog.open(ClientFormComponent,dialogConfig);
}
  
viewClient(data: Client){

  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.disableClose=true;
  dialogConfig.data = data ;
  this.dialog.open(ClientComponent,dialogConfig);
}





  deleteClient(id : number) {
    console.log(id);
  if(window.confirm('Are you sure you went o delete this line')) {
    debugger;
    this.clientService.delete(id).subscribe(data => {
      console.log('data');
      console.log(data);

    }) ; 
        
    console.log('OK' );
    this.data();
}
}

editClient(Client : Client){
  this.clientService.update(Client).subscribe(data =>
    {
       return this.router.navigate(['addClient']);
    }
  )
}



}




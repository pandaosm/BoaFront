import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
})
export class ClientFormComponent implements OnInit {

  candidatForm : FormGroup = this.formBuilder.group({
    customerId : ['',Validators.required],
    customerName : ['' , Validators.required],
    branchCode : ['' , Validators.required]
    });

  constructor(private formBuilder : FormBuilder,
    private clientService : ClientService,
    public dialogRef: MatDialogRef<ClientFormComponent>,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  enregistrer(){
    debugger;
    this.clientService.save(this.candidatForm.value).subscribe(data => {
      console.log('data');
      console.log(data);

    }) ;
    this.router.navigate(['clients']);  
  }

  onClear(){
    this.candidatForm.setValue({ 
                                                                                                                                                 
      customerId : '',
      customerName : '',
      branchCode : ''
    });
  }

  close():void{
    this.dialogRef.close("ok close") ;
    this.dialogRef.afterClosed().subscribe(value => {
                        console.log('Dialog sent:'); 
   });
   }
   onNoClick():void
   {

   }
}




import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Client } from 'src/app/entites/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Client,
  public dialogRef: MatDialogRef<ClientComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



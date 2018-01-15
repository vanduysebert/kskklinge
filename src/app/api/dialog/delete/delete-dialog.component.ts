import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MatDialogRef<DeleteDialog>) {

    }

    delete() {
      return true;
    }
}

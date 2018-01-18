import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {DeleteDialog} from './delete/delete-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class DeleteDialogService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<string> {

        let dialogRef: MatDialogRef<DeleteDialog>;

        dialogRef = this.dialog.open(DeleteDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }


}

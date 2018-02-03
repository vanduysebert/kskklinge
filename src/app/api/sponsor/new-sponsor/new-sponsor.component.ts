import { Component, OnInit } from '@angular/core';
import {SponsorService} from './../sponsor.service';
import { Sponsor }           from './../sponsor';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import { FileUploader } from 'ng2-file-upload';
import {FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-sponsor',
  templateUrl: './new-sponsor.component.html',
  styleUrls: ['./new-sponsor.component.scss']
})
export class NewSponsorComponent implements OnInit {
  sponsor: Sponsor = new Sponsor(0, "", "", "", "", "", "", "");
  time: string;
  photoUrl: string;
  uploader:FileUploader;
  uploaderOptions: FileUploaderOptions;
  response: string;
  birthDate: Date;
  imgSync: boolean = true;
  src: string = "";
  sizeLimit = 5;
  constructor(private router: Router, private sponsorService: SponsorService, private snackBar: MatSnackBar) {
    this.uploader = new FileUploader({
      url: AppSettings.API_ENDPOINT + 'sponsors/upload'
    });

    this.uploaderOptions =  {
      allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
      removeAfterUpload: true
    };

    this.uploader.onSuccessItem = (item:FileItem, response:string, status:number,
      headers:ParsedResponseHeaders) =>
      {
        if(status == 200) {
          response = response.replace(/\"/g, "");
          this.src = "assets/uploads/images/sponsors/" + response;
          this.sponsor.fotoUrl = this.src;
          this.sponsorService.addNewSponsor(this.sponsor).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("Sponsor " + this.sponsor.naam + " succesvol aangemaakt.","", {
                duration: 2000
              });
              this.router.navigateByUrl('/api/sponsor');
            }
          });
        }

      };
      this.uploader.onErrorItem = (item:FileItem, response:string, status:number,
        headers:ParsedResponseHeaders) =>
        {
          console.log("error");
          this.src = "";
          this.sponsorService.addNewSponsor(this.sponsor).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("Sponsor " + this.sponsor.naam + " succesvol aangemaakt.","", {
                duration: 2000
              });
              this.router.navigateByUrl('/api/sponsor');
            }
          });
        };

   }

   resizeOptions: ResizeOptions = {
        resizeMaxHeight: 200,
        resizeMaxWidth: 200
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        if (this.imgSync == false) {
          this.src = "";
        }
    }

    checkImage() {
      this.imgSync = true;
      if (this.uploader.queue.length != 1) {
        alert("geen foto toegevoegd");
        this.imgSync = false;
      }
      for (let img of this.uploader.queue) {
        if (img.file.size/1024/1024 > this.sizeLimit) {
          alert("File te groot");
          this.imgSync = false;
          this.uploader.clearQueue();
        } else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
          alert("Geen afbeelding");
          this.uploader.clearQueue();
          this.imgSync = false;
        }
      }
    }

   onSubmit() {
     if (this.uploader.getNotUploadedItems().length) {
       this.uploader.uploadAll();
       console.log("uploaded");
     } else {
       this.sponsorService.addNewSponsor(this.sponsor).subscribe(res => {
         if (res == "OK") {
           this.snackBar.open("Sponsor " + this.sponsor.naam + " succesvol aangemaakt.","", {
             duration: 2000
           });
           this.router.navigateByUrl('/api/sponsor').then(()=>{
             location.reload();
            }
           );
         }
       });
     }
   }


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}

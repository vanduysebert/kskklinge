import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SponsorService} from './../sponsor.service';
import { Sponsor }           from './../sponsor';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import { FileUploader } from 'ng2-file-upload';
import {FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from './../../../user/authentication.service';
@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.scss']
})
export class EditSponsorComponent implements OnInit {
  sponsor: Sponsor;
  param: number;
  time: string;
  src: string = "";
  photoUrl: string;
  uploader:FileUploader;
  uploaderOptions: FileUploaderOptions;
  response: string;
  imgSync: boolean = true;
  sizeLimit = 5;
  constructor(location: Location, private authenticationService: AuthenticationService, private route: ActivatedRoute, private router:Router, private sponsorService: SponsorService, private snackBar: MatSnackBar) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });

    this.uploader = new FileUploader({
      url: AppSettings.API_ENDPOINT + 'sponsors/upload',
      authToken: 'Bearer ' + this.authenticationService.token
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
          this.sponsorService.editSponsor(this.sponsor).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("sponsor " +  this.sponsor.naam + " succesvol aangepast.","", {
                duration: 2000
              });
            }
          });
        }

      }
      this.uploader.onErrorItem = (item:FileItem, response:string, status:number,
        headers:ParsedResponseHeaders) =>
        {
          this.src = "";
          this.sponsorService.editSponsor(this.sponsor).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("sponsor " + this.sponsor.naam + " succesvol aangepast.","", {
                duration: 2000
              });
            }
          });
        }
   }

   resizeOptions: ResizeOptions = {
        resizeMaxHeight: 200,
        resizeMaxWidth: 200
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        console.log(this.src);
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

     } else {
       this.sponsorService.editSponsor(this.sponsor).subscribe(res => {
         if (res == "OK") {
           this.snackBar.open("sponsor " + this.sponsor.naam + " succesvol aangepast.","", {
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

  loadSponsor() {
    this.sponsorService.getSponsor(this.param).subscribe(
      sponsor => {
        this.sponsor = sponsor;
        this.src = this.sponsor.fotoUrl;
      },
      err => {
        console.log(err);
      });
  }


  ngOnInit() {
    this.loadSponsor();
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

  }


}

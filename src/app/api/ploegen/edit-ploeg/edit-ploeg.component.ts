import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PloegenService} from './../ploegen.service';
import { Ploeg }           from './../ploeg';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import { FileUploader } from 'ng2-file-upload';
import {FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-edit-ploeg',
  templateUrl: './edit-ploeg.component.html',
  styleUrls: ['./edit-ploeg.component.scss']
})
export class EditPloegComponent implements OnInit {
  @Output() edited = new EventEmitter<boolean>();
  team: Ploeg;
  route: ActivatedRoute;
  param: number;
  time: Date;
  uploader:FileUploader;
  uploaderOptions: FileUploaderOptions;
  response: string;
  birthDate: Date;
  imgSync: boolean = true;
  src: string = "";
  sizeLimit = 5;
  newPick: boolean = false;
  constructor(location: Location, private router: Router, private activeRoute: ActivatedRoute, private ploegService: PloegenService, private snackBar: MatSnackBar) {
    activeRoute.params.subscribe( p => {
      this.param = p['id'];
    });
    this.uploader = new FileUploader({
      url: AppSettings.API_ENDPOINT + 'ploegen/upload'
    });

    this.uploaderOptions =  {
      allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
      removeAfterUpload: true
    };

    this.uploader.onSuccessItem = (item:FileItem, response:string, status:number,
      headers:ParsedResponseHeaders) =>
      {
        if(status == 200) {
          console.log("success");
          response = response.replace(/\"/g, "");
          this.src = "assets/uploads/images/ploegen/" + response;
          this.team.fotoUrl = this.src;
          this.ploegService.editTeam(this.team).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("Ploeg " + this.team.naam + "succesvol aangepast.","", {
                duration: 2000
              });
              this.router.navigateByUrl('/api/ploegen');

            }
          });
        }

      };
      this.uploader.onErrorItem = (item:FileItem, response:string, status:number,
        headers:ParsedResponseHeaders) =>
        {
          console.log("error");
          this.src = "";
          this.ploegService.editTeam(this.team).subscribe(res => {
            if (res == "OK") {
              this.snackBar.open("Ploeg " + this.team.naam + "succesvol aangepast.","", {
                duration: 2000
              });
              this.router.navigateByUrl('/api/ploegen');

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
      this.newPick = true;
      this.imgSync = true;
      if (this.uploader.queue.length != 1) {
        alert("geen foto toegevoegd");
        this.imgSync = false;
        this.newPick = false;
      }
      for (let img of this.uploader.queue) {
        if (img.file.size/1024/1024 > this.sizeLimit) {
          alert("File te groot");
          this.imgSync = false;
          this.newPick = false;
          this.uploader.clearQueue();
        } else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
          alert("Geen afbeelding");
          this.uploader.clearQueue();
          this.imgSync = false;
          this.newPick = false;
        }
      }
    }


   onSubmit() {
     this.team.trainingsuur = this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
     console.log(this.team);
     if (this.uploader.getNotUploadedItems().length) {
       this.uploader.uploadAll();
       console.log("uploaded");
     } else {


     this.ploegService.editTeam(this.team).subscribe(res => {
       console.log("no upload");
       if (res == "OK") {

         this.snackBar.open("Ploeg " + this.team.naam + "succesvol aangepast.","", {
           duration: 2000
         });
         this.router.navigateByUrl('/api/ploegen').then(()=>{
           location.reload();
          }
         );

       }
     });
   }
 }

  loadPloeg() {
    this.ploegService.getPloeg(this.param).subscribe(
      ploeg => {
        let t: string;
        let s : string;
        let d: Date;

        this.team = ploeg;
        this.src = ploeg.fotoUrl;
        t = ploeg.trainingsuur;
        if (t) {

          d= new Date();
          s = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear() + " " + t;
          this.time = new Date(s);
        }
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadPloeg();
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}

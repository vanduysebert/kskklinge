import { Component, OnInit } from '@angular/core';
import {SpelersService} from './../spelers.service';
import {PloegenService} from '../../ploegen/ploegen.service';
import { Speler }           from './../speler';
import {Ploeg} from '../../ploegen/ploeg';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import { FileUploader } from 'ng2-file-upload';
import {FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import * as moment from 'moment';

@Component({
  selector: 'app-speler-nieuw',
  templateUrl: './speler-nieuw.component.html',
  styleUrls: ['./speler-nieuw.component.scss']
})
export class SpelerNieuwComponent implements OnInit {
  player: Speler = new Speler(0, "", "", null, "", "", "", false, 0, "", "", 0);
  param: number;
  time: string;
  photoUrl: string;
  ploegen: Ploeg[];
  uploader:FileUploader;
  uploaderOptions: FileUploaderOptions;
  response: string;
  birthDate: Date;
  imgSync: boolean = true;
  src: string = "";
  sizeLimit = 5;
  constructor(location: Location, private router: Router, private ploegenService : PloegenService, private spelerService: SpelersService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
    });

    this.uploader = new FileUploader({
      url: AppSettings.API_ENDPOINT + 'spelers/upload'
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
          this.src = "assets/uploads/images/spelers/" + response;
          this.player.fotoUrl = this.src;
          this.spelerService.addNewPlayer(this.player).subscribe(res => {
            if (res == "OK") {
              /*this.snackBar.open("Speler " + this.player.voornaam + ' ' + this.player.naam + " succesvol aangemaakt.","", {
                duration: 2000
              });*/
              this.router.navigateByUrl('/api/spelers');
            }
          });
        }

      };
      this.uploader.onErrorItem = (item:FileItem, response:string, status:number,
        headers:ParsedResponseHeaders) =>
        {
          console.log("error");
          this.src = "";
          this.spelerService.addNewPlayer(this.player).subscribe(res => {
            if (res == "OK") {
              // this.snackBar.open("Speler " + this.player.voornaam + ' ' + this.player.naam + " succesvol aangemaakt.","", {
              //   duration: 2000
              // });
              this.router.navigateByUrl('/api/spelers');
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
     this.birthDate = new Date(this.player.geboortedatum);
     this.player.geboortedatum = moment(this.birthDate).format('YYYY-MM-DD HH-mm-ss');
     if (this.uploader.getNotUploadedItems().length) {
       this.uploader.uploadAll();
       console.log("uploaded");
     } else {
       this.spelerService.addNewPlayer(this.player).subscribe(res => {
         if (res == "OK") {
           console.log("not uploaded");
           // this.snackBar.open("Speler " + this.player.voornaam + ' ' + this.player.naam + " succesvol aangemaakt.","", {
           //   duration: 2000
           // });
           this.router.navigateByUrl('/api/spelers').then(()=>{
             location.reload();
            }
           );
         }
       });
     }
   }

  loadPloegen() {
    this.ploegenService.getPloegen().subscribe(
      ploegen => {
        this.ploegen = ploegen;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadPloegen();
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}

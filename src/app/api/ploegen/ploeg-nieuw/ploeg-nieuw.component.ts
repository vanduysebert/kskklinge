import { Component, OnInit, EventEmitter } from '@angular/core';
import {Ploeg} from './../ploeg';
import {PloegenService} from './../ploegen.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AppSettings} from '../../../app-settings';
import { FileUploader } from 'ng2-file-upload';
import {FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-ploeg-nieuw',
  templateUrl: './ploeg-nieuw.component.html',
  styleUrls: ['./ploeg-nieuw.component.scss']
})
export class PloegNieuwComponent implements OnInit {
  submitted: boolean = false;
  team:Ploeg = new Ploeg(0,"",0,"","","","","","","");
  uploader:FileUploader;
  uploaderOptions: FileUploaderOptions;
  response: string;
  birthDate: Date;
  imgSync: boolean = true;
  src: string = "";
  sizeLimit = 5;
  constructor(private ploegService: PloegenService, private router: Router) {
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
          this.ploegService.addNewTeam(this.team).subscribe(res => {
            if (res == "OK") {
              // this.snackBar.open("Nieuwe ploeg " + this.team.naam + "succesvol aangemaakt.","", {
              //   duration: 2000
              // });
            }
          });
        }

      };
      this.uploader.onErrorItem = (item:FileItem, response:string, status:number,
        headers:ParsedResponseHeaders) =>
        {
          console.log("error");
          this.src = "";
          this.ploegService.addNewTeam(this.team).subscribe(res => {
            if (res == "OK") {
              // this.snackBar.open("Nieuwe ploeg " + this.team.naam + "succesvol aangemaakt.","", {
              //   duration: 2000
              // });
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
    let newTeam: any;
    newTeam = {
      naam: this.team.naam,
      trainer_1: this.team.trainer_1,
      telTrainer_1: this.team.telTrainer_1,
      trainer_2: this.team.trainer_2,
      telTrainer_2: this.team.telTrainer_2,
      trainingsuur: this.team.trainingsuur,
      trainingsdagen: this.team.trainingsdagen
    }
    this.ploegService.addNewTeam(newTeam).subscribe(res => {
      if (res == "OK") {
        // this.snackBar.open("Nieuwe ploeg " + this.team.naam + "succesvol aangemaakt.","", {
        //   duration: 2000
        // });
        this.router.navigateByUrl('/api/ploegen').then(()=>{
          location.reload();
        });
      }

    });
  }
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }

}

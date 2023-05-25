import { Component } from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper'
@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent {
  imgChangeEvt: any =""
  cropImgPreview:any=""
  onFileChange(event:any){
    this.imgChangeEvt=  event;
  }
  cropImg(e:ImageCroppedEvent){
    this.cropImgPreview= e.base64
  }

  imgLoad(){}

  initCropper(){}

  imgFailed(){}
}

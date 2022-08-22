import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service'

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  photoUrl: string = ''

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhoto()
  }

  getPhoto() {
    this.photoService.getPhotos().subscribe(res => {
      this. photoUrl = res.urls.regular
    })
  }

  onClick() {
    this.getPhoto()
  }

}

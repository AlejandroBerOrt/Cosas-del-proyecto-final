import { Component } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {

  public base64Image1: string | ArrayBuffer | null = null;
  public base64Image2: string | ArrayBuffer | null = null;
  public base64Image3: string | ArrayBuffer | null = null;
  public base64Image4: string | ArrayBuffer | null = null;
  public base64Image5: string | ArrayBuffer | null = null;
  public base64Image6: string | ArrayBuffer | null = null;
  public files: NgxFileDropEntry[] = [];

    constructor() {}
 
  public dropped(files: NgxFileDropEntry[], number: any) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          const reader = new FileReader();
            reader.onload = (e) => {
              switch(number){
                case 1:
                  this.base64Image1 = reader.result;
                  break;
                case 2:
                  this.base64Image2 = reader.result;
                  break;
                case 3:
                  this.base64Image3 = reader.result;
                  break;
                case 4:
                  this.base64Image4 = reader.result;
                  break;
                case 5:
                  this.base64Image5 = reader.result;
                  break;
                case 6:
                  this.base64Image6 = reader.result;
                  break;
              }
              
            };
          reader.readAsDataURL(file as Blob);
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event: any){
    console.log(event);
  }
 
  public fileLeave(event: any){
    console.log(event);
  }

  public deleteImage(number: any){
    switch(number){
      case 1:
        this.base64Image1 = "";
        break;
      case 2:
        this.base64Image2 = "";
        break;
      case 3:
        this.base64Image3 = "";
        break;
      case 4:
        this.base64Image4 = "";
        break;
      case 5:
        this.base64Image5 = "";
        break;
    }
  }

}

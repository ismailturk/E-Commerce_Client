import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) {
   }

   message(message:string,title:string,toastOptions:ToastOptions){
    this.toastr[toastOptions.toastMessageType](message,title,
    {
      positionClass:toastOptions.toastPosition
    });

   }


}

export enum ToastMessageType{
Success="success",
Info="info",
Warning="warning",
Error="error"
}

export enum ToastPosition{
TopRight='toast-top-right',
BottomRight='toast-bottom-right',
BottomLeft='toast-bottom-left',
TopLeft='toast-top-left',
TopFullWidth='toast-top-full-width',
BottomFullWidth="toast-bottom-full-width",
TopCenter='toast-top-center',
BottomCenter='toast-bottom-center'
}

export class ToastOptions{
  toastMessageType:ToastMessageType;
  toastPosition:ToastPosition
}
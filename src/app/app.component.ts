import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageTypes } from './services/admin/alertify.service';
import { CustomToastrService, ToastMessageType, ToastPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
 
  constructor(private customToastrService: CustomToastrService) {
    
    customToastrService.message("Hello","İsmail",
    {toastMessageType:ToastMessageType.Info,
      toastPosition:ToastPosition.BottomRight
    })
   
  }

 
}

//$.get("https://localhost:7225/api/products",data=>console.log(data));
import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageTypes, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify:AlertifyService) { }

  ngOnInit(): void {
    //this.alertify.message("Naber",MessageTypes.Error,Position.TopLeft,3,true);

    this.alertify.message("selamun aleykum",{
      messageTypes:MessageTypes.Success,
      delay:4,
      position:Position.TopCenter,


    });
    

  }

}

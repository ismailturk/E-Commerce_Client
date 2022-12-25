import { Injectable } from '@angular/core';
declare var alertify : any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  // message(message:string,messageTypes : MessageTypes,position:Position,delay:number=3,dismissOther:boolean=false)
  message(message : string, options:Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
   const msj= alertify[options.messageTypes](message);

    if(options.dismissOthers){
      msj.dismissOther();
    }

  }

}

export enum MessageTypes {
  Error ="error",
  Success="success",
  Notify="notify",
  Warning ="warning",
  Message ="message"
}
export enum Position{
TopCenter ="top-center",
TopRight ="top-right",
TopLeft ="top-left",
BottomRight="bottom-right",
BottomLeft ="bottom-left",
BottomCenter ="bottom-center"
}

export class AlertifyOptions{
  messageTypes : MessageTypes =MessageTypes.Message;
  position:Position = Position.TopLeft;
  delay: number=3;
  dismissOthers:boolean =false;
}

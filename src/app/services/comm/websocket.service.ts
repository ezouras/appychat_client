import { Injectable } from "@angular/core";
import { Subject, Observable, Observer } from "rxjs";

@Injectable()
export class WebsocketService {
  websocketConnected: boolean = true;
  constructor() { }
  private websocketConnectedStateSubj: Subject<boolean> = new Subject<boolean>();
  websocketConnectedState$ = this.websocketConnectedStateSubj.asObservable();

  private subject: Subject<MessageEvent>;

  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = this.websocketError(obs);//obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
      error: (err: any) => console.log("error connecting with websocket")
    };
    return Subject.create(observer, observable);
  }

  websocketError(obs: Observer<MessageEvent>): any {
    this.websocketConnected = false;
    this.websocketConnectedStateSubj.next(false);
    const error: any = obs.error.bind(obs);
    return error;
  }

  getWebsocketState$(): Observable<boolean> {
    return this.websocketConnectedState$;
  }


}

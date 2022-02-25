import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebsocketService } from "../../../services/comm/websocket.service";
import { ChatService, Message } from "../../../services/comm/chat.service";
import { FriendStateService } from '../../../services/friendState.service';
import { Friend } from '../../../shared/models/shared-models';
import { iif, pipe, Subject, Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { FormBuilder } from '@angular/forms';

export interface ChatMessage {
  message: string,
  isYou: boolean
}
@Component({
  selector: 'app-ac-friend-chat',
  templateUrl: './ac-friend-chat.component.html',
  styleUrls: ['./ac-friend-chat.component.scss'],
  providers: [ChatService]
})
export class AcFriendChatComponent implements OnInit {
  @ViewChild('chatScroll') private chatScroll: ElementRef;
  chatService$: Observable<Message>;
  websocketState$: Observable<boolean>;
  friend: Friend;
  friendPicSrc: string;
  searchForm = this.formBuilder.group({
    searchInput: ''
  });
  messageString: string = '';
  messagePackage = {
    author: "unknown",
    message: ""
  };


  messages: ChatMessage[] = [];

  constructor(
    private websocketService: WebsocketService,
    private friendStateService: FriendStateService,
    private formBuilder: FormBuilder,
    private chatService: ChatService) {

    this.websocketState$ = websocketService.getWebsocketState$();
    this.chatService$ = chatService.messages as Observable<Message>;
    this.websocketState$.pipe(
      switchMap((value: boolean, index: number) =>
        iif(() => value, this.chatService$, this.websocketState$)
      )
    ).subscribe((result: any) => {
      console.log(result)
    });




    this.friendStateService.getSelectedFriend$().subscribe(
      (response) => {
        this.friend = response;
        this.friendPicSrc = `assets/${this.friend.pic}`

      },
      (error) => console.log("error getting selectedFriend")
    )
  }



  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe(res => {
      this.messageString = res.searchInput;
    })
    this.chatService$.subscribe((msg: Message) => {
      console.log("Response from websocket: ", msg.message);
      const chatMessage: ChatMessage = {
        message: msg.message,
        isYou: true
      };
      this.messages.push(chatMessage)

    });

  }

  sendMsg(el: ElementRef) {
    this.sendMessageToServer();
    this.scrollToElement(el)
  }

  sendMessageToServer() {
    this.messagePackage.message = this.messageString;
    this.messagePackage.author = this.friend.first_name;
    const chatMessage: ChatMessage = {
      message: this.messageString,
      isYou: false
    };
    this.messages.push(chatMessage)
    console.log("sending message to server: ", this.messagePackage)
    this.chatService.messages.next(this.messagePackage);
  }

  scrollToElement(el: ElementRef): void {
    const contentHeight = this.chatScroll.nativeElement.offsetHeight;
    this.chatScroll.nativeElement.scroll({
      top: this.chatScroll.nativeElement.scrollHeight,
      behavior: 'smooth'
    });
  }

}

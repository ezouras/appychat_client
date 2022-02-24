import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//*** libraries ***/
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
//*** components ***/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcHomeComponent } from './ac-home/ac-home.component';
import { AcHeaderComponent } from './ac-home/ac-header/ac-header.component';
import { AcMainChatComponent } from './ac-home/ac-main-chat/ac-main-chat.component';
import { WelcomeIntroComponent } from './welcome-intro/welcome-intro.component';
import { AcFriendsComponent } from './ac-home/ac-main-chat/ac-friends/ac-friends.component';
import { AcFriendChatComponent } from './ac-home/ac-main-chat/ac-friend-chat/ac-friend-chat.component';
import { AcFriendDetailsComponent } from './ac-home/ac-main-chat/ac-friend-details/ac-friend-details.component';
import { AcFooterComponent } from './ac-home/ac-footer/ac-footer.component';
import { PersonCardComponent } from './shared/components/person-card/person-card.component';
import { AcSettingsComponent } from './ac-features/ac-settings/ac-settings.component';
import { AcFriendProfileComponent } from './ac-features/ac-friend-profile/ac-friend-profile.component';
import { UserLoginDialogComponent } from './shared/components/user-login-dialog/user-login-dialog.component';
import { WebsocketService } from './services/comm/websocket.service';
import { RemoveAutocompleteDirective } from './shared/directives/remove-autocomplete.directive';



@NgModule({
  declarations: [
    AppComponent,
    AcHomeComponent,
    AcHeaderComponent,
    AcMainChatComponent,
    WelcomeIntroComponent,
    AcFriendsComponent,
    AcFriendChatComponent,
    AcFriendDetailsComponent,
    AcFooterComponent,
    PersonCardComponent,
    AcSettingsComponent,
    AcFriendProfileComponent,
    UserLoginDialogComponent,
    RemoveAutocompleteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

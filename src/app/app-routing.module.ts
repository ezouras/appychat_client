import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AcHomeComponent } from './ac-home/ac-home.component';
import { AcHeaderComponent } from './ac-home/ac-header/ac-header.component';
import { AcMainChatComponent } from './ac-home/ac-main-chat/ac-main-chat.component';
import { WelcomeIntroComponent } from './welcome-intro/welcome-intro.component';
import { AcSettingsComponent } from './ac-features/ac-settings/ac-settings.component';
import { AcFriendProfileComponent } from './ac-features/ac-friend-profile/ac-friend-profile.component';
const routes: Routes = [
  { path: '', component: WelcomeIntroComponent },
  {
    path: 'acHome',
    component: AcHomeComponent,
    children: [
      {
        path: 'acHeader',
        component: AcHeaderComponent
      },
      {
        path: 'acMainChat',
        component: AcMainChatComponent,
        //data: { animation: 'ResultsPage' }
      }]
  },
  { path: 'settings', component: AcSettingsComponent },
  { path: 'userprofile', component: AcFriendProfileComponent },
  { path: '**', component: AcHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

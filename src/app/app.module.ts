import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Модуль для работы с формами



import { AppComponent } from './app.component';
//import { UserInfoComponent } from './friend-detail/friend-detail.component'; // Добавляем новый, только что созданный компонент.
import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';
// import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
    // UserFormComponent
    //UserInfoComponent // Теперь подключаем его.
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // И подключаем модуль форм.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
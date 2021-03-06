import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app-routing.module';

// MODULOS
import { PagesModule } from './pages/pages.module';

// SERVIVIOS
import { ServiceModule } from './services/service.module';

// TEMPORAL 
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],

  providers: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

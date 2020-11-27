import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@lightning-components';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent],
  imports: [ButtonModule, BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { SectionToursComponent } from './components/section-tours/section-tours.component';
import { TourComponent } from './components/tour/tour.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoInfoComponent } from './components/demo-info/demo-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    BookingComponent,
    FooterComponent,
    PopupComponent,
    SectionToursComponent,
    TourComponent,
    HeaderComponent,
    DemoInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

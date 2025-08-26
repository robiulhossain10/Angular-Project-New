import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MongouserComponent } from './components/mongouser/mongouser.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ParentComponent } from './datasharing/parent/parent.component';
import { ChildComponent } from './datasharing/child/child.component';
import { SiblingsAComponent } from './datasharing/siblings-a/siblings-a.component';
import { SiblingsBComponent } from './datasharing/siblings-b/siblings-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FormComponent,
    MongouserComponent,
    StudentFormComponent,
    ParentComponent,
    ChildComponent,
    SiblingsAComponent,
    SiblingsBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

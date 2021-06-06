import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateDrivenModelComponent } from './template-driven-model/template-driven-model.component';
import { DynamicRowReactiveComponent } from './dynamic-row-reactive/dynamic-row-reactive.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { HttpExampleComponent } from './http-example/http-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NameDialogComponent } from './name-dialog/name-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { MatRadioModule } from '@angular/material/radio';
import { ShareLinkdialogComponent } from './share-linkdialog/share-linkdialog.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    TemplateDrivenComponent,
    TemplateDrivenModelComponent,
    DynamicRowReactiveComponent,
    DirectivesExComponent,
    HttpExampleComponent,
    DashboardComponent,
    NameDialogComponent,
    QuestionpageComponent,
    ShareLinkdialogComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule

  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  entryComponents: [NameDialogComponent, ShareLinkdialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

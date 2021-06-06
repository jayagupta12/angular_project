import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { DynamicRowReactiveComponent } from './dynamic-row-reactive/dynamic-row-reactive.component';
import { HomeComponent } from './home/home.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { TemplateDrivenModelComponent } from './template-driven-model/template-driven-model.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [

  {
    path: "home",
    component: HomeComponent,
    redirectTo: ""
  },
  {
    path: "about",
    component: AboutusComponent

  },
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "template",
    component: TemplateDrivenComponent
  }
  ,
  {
    path: "templatemodel",
    component: TemplateDrivenModelComponent
  },
  {
    path: "row",
    component: DynamicRowReactiveComponent
  }
  ,
  {
    path: "directives",
    component: DirectivesExComponent
  },

  {
    path: "httpcall",
    component: HttpExampleComponent
  },
  {
    path: "questionPage",
    component: QuestionpageComponent
  },
  {
    path: "dashboard/:id",
    component: DashboardComponent,
    
  }
  ,
  {
    path: "questionPage/:id",
    component: QuestionpageComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

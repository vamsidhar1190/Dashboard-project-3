import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranscationsComponent } from './transcations/transcations.component';
import { Madhapurbranch1Component } from './madhapurbranch1/madhapurbranch1.component';
import { Madhapurbranch2Component } from './madhapurbranch2/madhapurbranch2.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { UserOutline } from '@ant-design/icons-angular/icons';
import { InputTextModule } from 'primeng/inputtext';



const icons = [UserOutline];






const routes: Routes = [
  {
    path:"", component:SidebarComponent,
    children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'Dashboard',component:DashboardComponent
      },
      {
        path:'Transcations',component:TranscationsComponent
      },
      {
        path:'Madhapurbranch1',component:Madhapurbranch1Component
      },
      {
        path:'Madhapurbranch2',component:Madhapurbranch2Component
      },
      {
        path:'contact',component:ContactComponent
      },
      
    ]
  },

]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TranscationsComponent,
    Madhapurbranch1Component,
    Madhapurbranch2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    
    MessagesModule,
    CardModule,
    ChartModule,
    NzProgressModule,
    MegaMenuModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    InputTextModule,
    FormsModule,
    

   
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from "ngx-bootstrap/modal";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { ExecutiveComponent } from './executive/executive.component';
import { ExecutiveService } from './shared/executive.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiceDetailComponent,
    AboutComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    AdminRequestsComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ExecutiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgbModule,
    // TooltipModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    ExecutiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

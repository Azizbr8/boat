import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UsersService } from './services/users.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MODULES_ANGULAR_MATERIAL } from './angular-material.module';
import { ListBoatComponent } from './list-boat/list-boat.component';
const appRoutes: Routes = [
  {
    path: 'list',
    component: ListBoatComponent,
    data: {
      title: 'Add Todo'
    }
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    data: {
      title: 'Inscription'
    }
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    data: {
      title: 'Connexion'
    }
  },
  // Home Page
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  // 404 Page
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: '404 Page Not Found'
    }
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AccountsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ...MODULES_ANGULAR_MATERIAL
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    InscriptionComponent,
    ConnexionComponent,
    ListBoatComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

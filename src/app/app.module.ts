import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugComponent } from './bug/bug.component';
import { Bug } from './bug';

const appRoutes: Routes = [
  { path: 'bugs', component: BugsComponent },
  { path: 'bug/:id', component: BugComponent },
  {
    path: '',
    redirectTo: '/bugs',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugComponent
  ],
  // entryComponents: [BugComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
       // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    MatTableModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './issue/list/list.component';
import { CreateComponent } from './issue/create/create.component';
import { EditComponent } from './issue/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'issues/create', component: CreateComponent},
  { path: 'issues/edit/:id', component: EditComponent},
  { path: 'issues/list', component: ListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

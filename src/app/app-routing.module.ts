import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgpaComponent } from './cgpa/cgpa.component';
import { SgpaComponent } from './sgpa/sgpa.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/cgpa',
    pathMatch: 'full',
  },
  {
    path: 'cgpa',
    component: CgpaComponent,
  },
  {
    path: 'sgpa',
    component: SgpaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

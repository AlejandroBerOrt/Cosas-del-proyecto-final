import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { ImagenComponent } from './imagen/imagen.component';
import { CambioVistaComponent } from './cambio-vista/cambio-vista.component';
import { TabsComponent } from './tabs/tabs.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {path: "other", component: OtherComponent},
  {path: "cambioVista", component: CambioVistaComponent},
  {path: "imagen", component: ImagenComponent},
  {path: "tabs", component: TabsComponent},
  {path: "bootstrap", component: BootstrapComponent},
  {path: "subirImg", component: FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

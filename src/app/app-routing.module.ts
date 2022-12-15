import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

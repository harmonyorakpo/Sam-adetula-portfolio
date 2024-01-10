import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent, CompetitiveAnalysisComponent, ConclusionComponent, FooterComponent, FreelanceLandingPageComponent, FreelanceProductSummaryComponent, HeaderComponent, IterationsComponent, KickOffComponent, MeetTheUsersComponent, ModifiedIterationsComponent, ProductKeyFeaturesComponent, StyleGuideComponent, UserFlowComponent, WorkDetailsLandingPageComponent } from '.';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
    WorkDetailsLandingPageComponent,
    KickOffComponent,
    MeetTheUsersComponent,
    CompetitiveAnalysisComponent,
    UserFlowComponent,
    IterationsComponent,
    ModifiedIterationsComponent,
    StyleGuideComponent,
    ConclusionComponent,
    ProductKeyFeaturesComponent,
    FreelanceLandingPageComponent,
    FreelanceProductSummaryComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
    WorkDetailsLandingPageComponent,
    KickOffComponent,
    MeetTheUsersComponent,
    CompetitiveAnalysisComponent,
    UserFlowComponent,
    IterationsComponent,
    ModifiedIterationsComponent,
    StyleGuideComponent,
    ConclusionComponent,
    ProductKeyFeaturesComponent,
    FreelanceLandingPageComponent,
    FreelanceProductSummaryComponent,
  ],
})
export class SharedModule {}

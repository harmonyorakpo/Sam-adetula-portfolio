import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent, CompetitiveAnalysisComponent, ConclusionComponent, FooterComponent, FreelanceLandingPageComponent, FreelanceProductSummaryComponent, HeaderComponent, IterationsComponent, KickOffComponent, MeetTheUsersComponent, ModifiedIterationsComponent, ProductKeyFeaturesComponent, StyleGuideComponent, UserFlowComponent, WorkDetailsLandingPageComponent } from '.';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

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
    HeroSectionComponent,
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
    HeroSectionComponent,
  ],
})
export class SharedModule {}

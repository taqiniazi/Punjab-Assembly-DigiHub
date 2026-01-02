import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LegislativLoginComponent } from './components/legislativ-login/legislativ-login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LegislativeBranchDashboardComponent } from './components/legislativ-login/legislative-branch-dashboard/legislative-branch-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'questions-login',
    loadComponent: () => import('./components/question-login/question-login.component').then(m => m.QuestionLoginComponent)
  },
  {
    path: 'legislative-branch-login',
    loadComponent: () => import('./components/legislativ-login/legislativ-login.component').then(m => m.LegislativLoginComponent)
  },
  {
    path: 'member-assembly-dashboard',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/member-assembly-dashboard/member-assembly-dashboard.component').then(m => m.MemberAssemblyDashboardComponent)
      }
    ]
  },
  {
    path: 'current-session',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/current-session-dashboard/current-session-dashboard.component').then(m => m.CurrentSessionDashboardComponent)
      }
    ]
  },
  {
    path: 'documents-page',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/documents-page/documents-page.component').then(m => m.DocumentsPageComponent)
      }
    ]
  },
  {
    path: 'previous-proceedings',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/previous-proceedings/previous-proceedings.component').then(m => m.PreviousProceedingsComponent)
      }
    ]
  },
  {
    path: 'legislative-dashboard',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/legislativ-login/legislative-branch-dashboard/legislative-branch-dashboard.component').then(m => m.LegislativeBranchDashboardComponent)
      }
    ]
  },
  {
    path: 'questions-dashboard',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/question-login/question-branch-dashboard/question-branch-dashboard.component').then(m => m.QuestionBranchDashboardComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
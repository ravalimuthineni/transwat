import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender // This prerenders the home page
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender // Prerenders the about page
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender // Prerenders the services page
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender // Prerenders the contact page
  },
  {
    path: '**',  // Catch-all route, but without redirect
    renderMode: RenderMode.Prerender  // You can specify a fallback behavior like a 404 page here
  }
];

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },

  // ✅ Dynamic routes should not be prerendered
  { path: 'sectors/:sectorId', renderMode: RenderMode.Server },
  { path: 'slide-detail/:slideId', renderMode: RenderMode.Server },

  { path: '**', renderMode: RenderMode.Prerender }
];

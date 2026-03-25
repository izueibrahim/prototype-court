"use client";

import { useEffect } from 'react';
import { useAppStore } from './store';

// Map currentView values to URL-friendly slugs
const viewToSlug: Record<string, string> = {
  'portal': '',
  'login': 'login',
  'schedule': 'schedule',
  'search': 'search',
  'case-details': 'case-details',
  'dashboard-internal': 'dashboard',
  'dashboard-efiling': 'efiling',
  'dashboard-guest': 'guest',
  'about': 'about',
  'contact': 'contact',
  'modules': 'modules',
};

// Map dashboard sub-views to URL-friendly slugs
const dashViewToSlug: Record<string, string> = {
  'overview': 'overview',
  'chairman': 'chairman-workspace',
  'analytics': 'award-analytics',
  'registration': 'case-registration',
  'cases': 'case-management',
  'schedule_int': 'court-schedule',
  'notice': 'notice-management',
  'notice_board': 'notice-board',
  'collective': 'collective-agreement',
  'search': 'smart-award',
  'sebutan': 'e-sebutan',
  'display': 'digital-display',
  'integration': 'system-integration',
  'usage': 'usage-reports',
  'settings': 'system-admin',
  'users': 'user-management',
};

const slugToView = Object.fromEntries(
  Object.entries(viewToSlug).map(([k, v]) => [v, k])
);

const slugToDashView = Object.fromEntries(
  Object.entries(dashViewToSlug).map(([k, v]) => [v, k])
);

export function useUrlSync() {
  const {
    currentView,
    dashActiveView,
    setCurrentView,
    setDashActiveView,
  } = useAppStore();

  // Sync state → URL hash
  useEffect(() => {
    const viewSlug = viewToSlug[currentView] || '';
    let hash = '';

    if (currentView === 'dashboard-internal') {
      const dashSlug = dashViewToSlug[dashActiveView] || dashActiveView;
      hash = `#/dashboard/${dashSlug}`;
    } else if (viewSlug) {
      hash = `#/${viewSlug}`;
    } else {
      hash = '#/';
    }

    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash);
    }
  }, [currentView, dashActiveView]);

  // Sync URL hash → state (on mount + popstate)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const parts = hash.split('/').filter(Boolean);

      if (parts.length === 0) {
        setCurrentView('portal');
        return;
      }

      if (parts[0] === 'dashboard' && parts.length >= 2) {
        setCurrentView('dashboard-internal' as any);
        const dashView = slugToDashView[parts[1]];
        if (dashView) {
          setDashActiveView(dashView as any);
        }
        return;
      }

      const view = slugToView[parts[0]];
      if (view) {
        setCurrentView(view as any);
      }
    };

    // Sync on mount
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [setCurrentView, setDashActiveView]);
}

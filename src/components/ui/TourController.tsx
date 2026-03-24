"use client";

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export default function TourController() {
    const { hasSeenOnboarding, currentView, wcagStates, completeOnboarding } = useAppStore();
    const isHighContrast = wcagStates?.highContrast;
    const tourRef = useRef<any>(null);

    useEffect(() => {
        if (hasSeenOnboarding) return;

        // Ensure we wait for DOM to mount
        const timeout = setTimeout(() => {
            if (!tourRef.current) {
                tourRef.current = driver({
                    showProgress: true,
                    animate: true,
                    allowClose: false, // Force them to go through it or use skip button
                    overlayColor: isHighContrast ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)',
                    popoverClass: `emp-tour-theme ${isHighContrast ? 'emp-tour-hc' : ''}`,
                    onDestroyStarted: () => {
                        if (tourRef.current?.hasNextStep() === false) {
                            completeOnboarding();
                        }
                        tourRef.current.destroy();
                    },
                    steps: [] // We dynamically set steps based on currentView
                });
            }

            if (currentView === 'login') {
                tourRef.current.setSteps([
                    {
                        element: '#tour-role-select',
                        popover: {
                            title: 'Select Role',
                            description: 'Welcome! Let\'s get started. Select your role from this dropdown to access the specific features tailored for you.',
                            side: 'right',
                            align: 'start'
                        }
                    },
                    {
                        element: '#tour-next-btn',
                        popover: {
                            title: 'Next Step',
                            description: 'Click here to proceed after selecting your role.',
                            side: 'top',
                            align: 'center'
                        }
                    },
                    {
                        element: '#tour-login-form',
                        popover: {
                            title: 'Sign In',
                            description: 'Normally, you would enter your ID and password here. For this mockup, no password is required. Just click "Sign In" to continue to the Dashboard.',
                            side: 'top',
                            align: 'start'
                        }
                    }
                ]);
                tourRef.current.drive(0);
            } else if (currentView === 'dashboard-internal') {
                // If they reached dashboard-internal and haven't seen onboarding, show the rest
                tourRef.current.setSteps([
                    {
                        element: '#tour-dash-nav',
                        popover: {
                            title: 'Main Navigation',
                            description: 'Here is your main sidebar. You can switch between different modules like Registration, Cases, and Schedule.',
                            side: 'right',
                            align: 'start'
                        }
                    },
                    {
                        element: '#tour-dash-quick-actions',
                        popover: {
                            title: 'Quick Actions',
                            description: 'Use these buttons for common tasks like adding a new case or scheduling a hearing quickly.',
                            side: 'bottom',
                            align: 'center'
                        }
                    },
                    {
                        popover: {
                            title: 'You\'re All Set!',
                            description: 'You now know how to navigate the basic flow. Explore the system to see the premium features!',
                            side: 'center',
                            align: 'center',
                            showButtons: ['close']
                        }
                    }
                ]);
                tourRef.current.drive(0);
            }
        }, 800);

        return () => {
            clearTimeout(timeout);
            if (tourRef.current) {
                try {
                    tourRef.current.destroy();
                } catch (e) {}
                tourRef.current = null;
            }
        };
    }, [currentView, hasSeenOnboarding, isHighContrast, completeOnboarding]);

    // This component renders nothing but handles the side-effect tour
    return null;
}

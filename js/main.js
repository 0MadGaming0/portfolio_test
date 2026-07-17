/**
 * @module Main
 * @description Application entry point. Bootstraps and imports page-specific module scripts.
 */

'use strict';

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';

/**
 * Initializes the main application module.
 */
export function initMain() {
    // Application setup logic goes here in Phase 2
}

// Bootstrap all modules once DOM is fully loaded and ready
document.addEventListener('DOMContentLoaded', () => {
    initMain();
    initNavigation();
    initAnimations();
    initProjects();
    initContact();
});

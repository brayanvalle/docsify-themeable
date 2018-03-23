// Dependencies
// =============================================================================
import cssVars                   from 'css-vars-ponyfill';
import pluginFixCoverHeaderLink  from './plugin-fix-cover-header-link';
import pluginFixPrismThemes      from './plugin-fix-prism-themes';
import pluginFixSearchResults    from './plugin-fix-search-results';
import pluginLoadedState         from './plugin-loaded-state';
import pluginResponsiveTables    from './plugin-responsive-tables';
import { version as pkgVersion } from '../../package.json';


// Main
// =============================================================================
// CSS custom properties ponyfill
cssVars({
    // Force ponyfill on Edge 15/16 due to numerous custom property bugs
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/?page=1&q=%22custom%20property%22%20%22custom%20properties%22%20%22css%20variable%22%20%22css%20variables%22
    onlyLegacy: !(/Edge\/15|Edge\/16./i.test(navigator.userAgent)),
    silent    : true
});

// Docsify plugins
if (window) {
    window.$docsify = window.$docsify || {};
    window.$docsify.themeable = window.$docsify.themeable || {};

    // Add plugins
    window.$docsify.plugins = [
        pluginLoadedState,
        pluginFixCoverHeaderLink,
        pluginFixPrismThemes,
        pluginFixSearchResults,
        pluginResponsiveTables
    ].concat(window.$docsify.plugins || []);

    // Add themeable properties
    window.$docsify.themeable.version = pkgVersion;
}

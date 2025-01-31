import register from 'preact-custom-element';

import App from './App';

// @ts-ignore
if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    require('preact/debug');
}

// Register & add the debug web component, tagName and attributes are automatically read from the component
register(App, null, null, App.options);

window.addEventListener('neoscms-i18n-initialized', () => {
    // Get the top bar left container and create a custom element to render the command bar into
    const topBarLeft = document.querySelector('.neos-top-bar-left');
    const pluginContainer = document.createElement('command-bar-container');
    pluginContainer.id = 'shel-neos-commandbar';

    // Get the style tag of the command bar package from the HTML head to also load it inside the custom element
    const commandBarStyleTag = document.querySelector(
        'link[rel="stylesheet"][href*="Shel.Neos.CommandBar"]'
    ) as HTMLLinkElement;
    pluginContainer.setAttribute('styleuri', commandBarStyleTag.href);

    topBarLeft.appendChild(pluginContainer);
});

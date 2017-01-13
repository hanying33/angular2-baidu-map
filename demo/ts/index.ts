import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { DemoModule } from './demo';

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DemoModule);

document.head.removeChild(document.querySelector('#splash-spinner'));
document.body.removeChild(document.querySelector('.spinner'));
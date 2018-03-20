import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { <%= rootModuleClassName %> } from './<%= appDir %>/<%= stripTsExtension(rootModuleFileName) %>';
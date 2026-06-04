
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers
  ]
})
.catch((err) => console.error(err));








// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { appConfig } from './app/app.config';

// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// bootstrapApplication(App, {

//   providers: [
//     provideHttpClient()
//   ]

// }).catch((err) => console.error(err));















// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// import { AppComponent } from './app/app';

// bootstrapApplication(AppComponent, {

//   providers: [
//     provideHttpClient()
//   ]

// }).catch((err) => console.error(err));









// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// // import { App } from './app/app';
// import { AppComponent } from './app/app';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

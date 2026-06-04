import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Jt } from './jt/jt';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet],

  // imports: [Jt,
  //           RouterOutlet
  // ],

  templateUrl: './app.html'
})

export class App {
}

// import { Component } from '@angular/core';
// import { Jt } from './jt/jt';

// @Component({
//   selector: 'app-root',
//   standalone: true,

//   imports: [
//     Jt
//   ],

//   templateUrl: './app.html'
// })
// export class App {

// }



















// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { JtComponent } from './jt/jt';

// @Component({
//   selector: 'app-root',
//   standalone: true,

//   imports: [
//     RouterOutlet,
//     JtComponent
//   ],

//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class AppComponent {

// }





// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('frontend');
// }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Occupation: {{occupation}}</p>
  <p>Location: {{location}}</p>
  `,
})
export class AppComponent  { 
	name = 'Rakesh Patel',
	occupation = 'Software Developer',
	location = 'Atlanta, GA'

}

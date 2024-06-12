import { Component } from '@angular/core';

@Component({
  selector: 'form',
  template: `
    <form>
      <label>Name: <input /></label>
      <label>Email: <input type="email" /></label>
      <button>submit</button>
    </form>
  `,
  standalone: true,
})
export class Form {}

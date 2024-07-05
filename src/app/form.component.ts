import { Component } from '@angular/core';

@Component({
  selector: 'form-component',
  template: `
    <form>
      <label>Name: <input /></label>
      <label>Email: <input type="email" /></label>
      <button>submit</button>
    </form>
  `,
  standalone: true,
  styleUrl: './form.component.css',
})
export class Form {}

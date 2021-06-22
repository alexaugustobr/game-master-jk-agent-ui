import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="hasError()" class="invalid-feedback">
      {{ text }}
    </div>
  `,
  styles: [`
    .invalid-feedback {
      display: block !important;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  hasError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}

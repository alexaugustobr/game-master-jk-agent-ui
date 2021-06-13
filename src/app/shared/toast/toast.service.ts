import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(textOrTpl) {
    this.toasts.push({ textOrTpl,  classname: 'bg-success text-light', delay: 10000 });
  }

  showInfo(textOrTpl) {
    this.toasts.push({ textOrTpl,  classname: 'bg-info text-light', delay: 10000 });
  }

  showWarning(textOrTpl) {
    this.toasts.push({ textOrTpl,  classname: 'bg-warning text-light', delay: 10000 });
  }
  
  showDanger(textOrTpl) {
    this.toasts.push({ textOrTpl,  classname: 'bg-danger text-light', delay: 10000 });
  }
}
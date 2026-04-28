import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="relative group">
      <input 
        type="text" 
        [(ngModel)]="title"
        (keyup.enter)="submit()"
        placeholder="Add a new task..."
        class="w-full bg-system-white border-2 border-system-black p-4 pr-12 text-sm font-bold placeholder:text-system-grey-400 focus:bg-system-grey-100 transition-all"
      />
      <button 
        (click)="submit()"
        [disabled]="!title.trim()"
        class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-system-black text-system-white disabled:bg-system-grey-400 transition-colors"
      >
        <lucide-icon [name]="Plus" [size]="18"></lucide-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent {
  @Output() add = new EventEmitter<string>();
  title = '';
  readonly Plus = Plus;

  submit() {
    if (this.title.trim()) {
      this.add.emit(this.title.trim());
      this.title = '';
    }
  }
}

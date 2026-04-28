import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideLucideIcons, Trash2, CheckCircle, Circle, GripVertical, Plus, Loader2, Info } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideLucideIcons({ Trash2, CheckCircle, Circle, GripVertical, Plus, Loader2, Info })
  ]
};

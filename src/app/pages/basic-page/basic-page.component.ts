import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('adriana');
  nameUpper = signal('ADRIANA');
  fullName = signal('aDrIaNa aRgUeLLo');

  customDate = signal(new Date());

  tickingDateEffect = effect(() => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  changeLocale(locale: AvailableLocale){
    this.localeService.changeLocale(locale);
  }
}

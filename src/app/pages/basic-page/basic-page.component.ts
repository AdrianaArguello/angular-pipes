import { LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicPageComponent {
  nameLower = signal('adriana');
  nameUpper = signal('ADRIANA');
  fullName = signal('aDrIaNa');
}

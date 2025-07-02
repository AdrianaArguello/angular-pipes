import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data.heroes';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Adriana Arguello');
  upperCase = signal(true);
  heroes = signal(heroes)

  toggleCase() {
    this.upperCase.update(upper => !upper);
  }
}

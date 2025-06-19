import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Klissman',
  gender: 'male',
  age: 39,
  address: 'Maracaibo, Venezuela'
}

const client2 = {
  name: 'Adriana',
  gender: 'female',
  age: 33,
  address: 'Maracaibo, Venezuela'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UncommonPageComponent {
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18n plural pipe
  clients = signal ([
    'Maria',
    'Ana',
    'Joanna',
    'Klissman',
    'Mariana',
    'Mario',
    'Catalina'
  ]);

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  })

  deleteClient(){
    this.clients.update((prev) => prev.slice(1))
  }

  //keyValuePipe

  profile = {
    name: 'adriana',
    age: 25,
    address: 'Maracaibo, Venezuela'
  }

  //async pipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log(value))
  );

}

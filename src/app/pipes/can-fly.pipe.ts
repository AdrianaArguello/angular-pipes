import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): string {
    return canFly ? 'puede volar' : 'No puede volar';
  }
}

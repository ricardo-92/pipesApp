import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform( value: boolean ): 'Fly' | "Can't Fly" {

    return value ? 'Fly': "Can't Fly";
  }
}

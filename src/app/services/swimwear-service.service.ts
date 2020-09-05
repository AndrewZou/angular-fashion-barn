import { Injectable } from '@angular/core';
import { SWIMWEARS } from '../shared/swimwears';
import { SwimWear } from '../shared/swimwaer';

@Injectable({
  providedIn: 'root'
})
export class SwimwearServiceService {

  swimwears: SwimWear[] = SWIMWEARS;

  constructor() { }

  getSwimwears(): SwimWear[]{
    return this.swimwears.slice();
  }

  getFeaturedSwimwear(): SwimWear{
    return this.swimwears.filter( (swimwear) => ( swimwear.featured ) )[0];
  }
}

import { Component, OnInit } from '@angular/core';
import { SwimWear } from '../shared/swimwaer';
//import { SWIMWEARS } from '../shared/swimwears';
import { SwimwearServiceService } from '../services/swimwear-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  swimwears: SwimWear[] = [];

  selectedSwimwear;
  comments;

  constructor(private swimwearService: SwimwearServiceService) {  }

  ngOnInit(): void {
    this.swimwears = this.swimwearService.getSwimwears();
  }

  selectSwimwear(selectedWear: SwimWear){
    this.selectedSwimwear = selectedWear;
    this.comments = selectedWear.comments;
  }

}

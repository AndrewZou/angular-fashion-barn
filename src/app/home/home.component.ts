import { Component, OnInit } from '@angular/core';
import { SwimWear } from '../shared/swimwaer';
import { SwimwearServiceService } from '../services/swimwear-service.service';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  swimwear: SwimWear;
  promotion: Promotion;

  constructor(private swimwearService: SwimwearServiceService,
              private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.swimwear = this.swimwearService.getFeaturedSwimwear();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

  getSwimwear(id: string): SwimWear {
    return this.swimwearService.getSwimwears().filter((swimwear) => (swimwear.id === id))[0];
  }

  getFeaturedSwimwear(): SwimWear {
    return this.swimwearService.getSwimwears().filter((swimwear) => swimwear.featured)[0];
  }

}

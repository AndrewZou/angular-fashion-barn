import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';

import { SwimWear } from '../shared/swimwaer';
import { SwimwearServiceService } from '../services/swimwear-service.service';
import { Comment } from '../shared/Comment';

@Component({
  selector: 'app-swimweardetail',
  templateUrl: './swimweardetail.component.html',
  styleUrls: ['./swimweardetail.component.scss']
})
export class SwimweardetailComponent implements OnInit, OnChanges {
  //@Input('mySwimwear') selectedSwimwear :SwimWear;
  selectedSwimwear :SwimWear;
  //@Input() comments;//this.selectedSwimwear.comments;
  //comments: Comment[];

  constructor(private swimwearservice: SwimwearServiceService,
              private currentRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    //console.log( ">>>>>>>" +this.selectedSwimwear );
    //this.comments = this.selectedSwimwear.comments;
    let id = this.currentRoute.snapshot.params['Id'];
    this.selectedSwimwear = this.swimwearservice.getSwimwearById(id);
  }

  ngOnChanges(): any {
    // if( this.selectedSwimwear )
    // {
    //   console.log( ">>>>>>>" +this.selectedSwimwear );
    //   this.comments = this.selectedSwimwear.comments;
    // }
  }

  goBack(): void{
    this.location.back();
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwimWear } from '../shared/swimwaer';
import { Comment } from '../shared/Comment';

@Component({
  selector: 'app-swimweardetail',
  templateUrl: './swimweardetail.component.html',
  styleUrls: ['./swimweardetail.component.scss']
})
export class SwimweardetailComponent implements OnInit, OnChanges {
  @Input('mySwimwear') selectedSwimwear :SwimWear;
  //@Input() comments;//this.selectedSwimwear.comments;
  comments: Comment[];

  constructor() { }

  ngOnInit(): void {
    //console.log( ">>>>>>>" +this.selectedSwimwear );
    //this.comments = this.selectedSwimwear.comments;
  }

  ngOnChanges(): any {
    if( this.selectedSwimwear )
    {
      console.log( ">>>>>>>" +this.selectedSwimwear );
      this.comments = this.selectedSwimwear.comments;
    }
  }

}

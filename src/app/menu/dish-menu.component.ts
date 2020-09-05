import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishServiceService } from '../services/dish-service.service';


@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class DishMenuComponent implements OnInit {
  dishes: Dish[] = [];

  selectedDish: Dish;
  comments: Comment[];

  constructor( private dishService: DishServiceService ) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelectedDish(selectedDish: Dish){
    this.selectedDish = selectedDish;
    this.comments = selectedDish.comments;
  }

}

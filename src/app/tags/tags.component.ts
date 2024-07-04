import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  @Input()
  foodPageTags?: string[];

  @Input()
  justifiContent:string = 'center';

  tags?:Tag[];

  constructor(private foodService:FoodService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}

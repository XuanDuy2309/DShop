import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm:String ="";
  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }


  search():void {
    if(this.searchTerm){
      this.router.navigateByUrl('/search/'+this.searchTerm);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heading:string = 'Angular Blog App';

  public allBlogs;
  public errorMessage;

  constructor(private blogs:BlogsService) { }

  ngOnInit() {
    this.blogs.getBlogs()
      .subscribe(
        data => this.allBlogs = data,
        error => this.errorMessage = error
        );
  }

}

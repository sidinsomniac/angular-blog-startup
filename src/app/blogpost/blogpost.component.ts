import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  public blogUrl:string;
  public checkerArray:string[]=[];
  public allBlogs;

  checkIfInvalid():boolean {
    this.allBlogs.forEach(element => {
      this.checkerArray.push(element.url);
    });
    return (this.checkerArray.indexOf(this.blogUrl) === -1) ? true : false;
  }

  constructor(private route: ActivatedRoute, private blogs:BlogsService) { }

  ngOnInit() {
    this.blogs.getBlogs()
      .subscribe(
        data => this.allBlogs = data
      );
    let url = this.route.snapshot.paramMap.get('blogpost');
    this.blogUrl = url;
    this.checkIfInvalid();
  }

}

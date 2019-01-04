import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heading:string = 'Angular Blog App';

  public allBlogs = [
    {
      "id": 1,
      "created": "Thu Jan 03 2019",
      "lastModified":"1 day ago",
      "tags":["gadget","tech"],
      "author":"red",
      "category":"Tech",
      "views":540,
      "title":"The Sands of Time",
      "description":"Hipster ipsum dolor amet quinoa four loko keytar celiac copper mug jean shorts. Palo santo put a bird on it af, tofu skateboard cred 3 wolf moon lo-fi brooklyn vape humblebrag celiac gastropub fixie air plant."
    },
    {
      "id": 2,
      "created": "Fri Jan 04 2019",
      "tags":["showerthought","history","foodforthought"],
      "author":"blue",
      "category":"Informative",
      "views":270,
      "title":"The Plague of Dormammu",
      "description":"Bacon ipsum dolor amet picanha turducken shoulder, buffalo filet mignon ball tip shankle brisket biltong pork chop frankfurter ribeye. Pancetta kielbasa shoulder salami."
    },
    {
      "id": 3,
      "created": "Sat Jan 05 2019",
      "lastModified":"Today",
      "tags":["lol","lmao","rofl"],
      "author":"green",
      "category":"Entertainment/Comedy",
      "views":110,
      "title":"The Extraordinary Set of Events",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde rerum in porro voluptatum illo debitis libero molestiae minima alias."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

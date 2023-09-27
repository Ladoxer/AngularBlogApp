import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogPosts$: Observable<any> | undefined;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
}

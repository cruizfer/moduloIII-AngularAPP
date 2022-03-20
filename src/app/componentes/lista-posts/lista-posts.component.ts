import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrListaPosts: post[]

  constructor(private PostsService: PostsService) {
    this.arrListaPosts = []
  }

  onInput($event: any) {
    this.arrListaPosts = this.PostsService.getByWord($event.target.value.toLowerCase())

  }

  onChange($event: any) {


    if ($event.target.value === 'All') { this.arrListaPosts = this.PostsService.getAll() } else { this.arrListaPosts = this.PostsService.getByCategory($event.target.value) }

  }
  ngOnInit(): void {
    this.arrListaPosts = this.PostsService.getAll();

  }

}
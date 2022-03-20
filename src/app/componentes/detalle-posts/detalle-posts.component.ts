import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalle-posts',
  templateUrl: './detalle-posts.component.html',
  styleUrls: ['./detalle-posts.component.css']
})
export class DetallePostsComponent implements OnInit {

  postDetail: any

  constructor(private postsService: PostsService,
    private activatedRoute: ActivatedRoute) {

    this.postDetail = []

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.postDetail = this.postsService.getByID(params['postId'])
    })
  }

}

import { Injectable } from '@angular/core';
import { post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: post[]

  constructor() {
    this.arrPosts = [{
      id: 1, title: 'Bares', body: 'Los mejores bares de moda: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Celia Ruiz', category: 'Restauración', createdAt: new Date()
    }, {
      id: 2, title: 'Restaurantes', body: 'Los mejores restaurantes de moda: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Paloma Gutierrez', category: 'Restauración', createdAt: new Date()
    }, {
      id: 3, title: 'Vinotecas', body: 'Las mejores vinotecas de moda: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Elena Valiente', category: 'Restauración', createdAt: new Date()
    }, {
      id: 4, title: 'Mejores salas de cine', body: 'Cine por menos de 7€: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Luis Povedano', category: 'Cine', createdAt: new Date()
    }, {
      id: 5, title: 'Discos para el olvido', body: 'Los peores discos del año: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Luis Povedano', category: 'Música', createdAt: new Date()
    }, {
      id: 6, title: 'Efecto "gruppie"', body: 'Como pedir un autógrafo y no morir en el intento: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Elena Valiente', category: 'Música', createdAt: new Date()
    },
    {
      id: 7, title: 'Must to watch', body: 'Recomendaciones semanales: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Celia Ruiz', category: 'Cine', createdAt: new Date()
    }, {
      id: 8, title: 'Oscars 2022', body: 'La gala del cine: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil beatae assumenda facere labore dolorum sint nam ratione, non consequatur tempora eos eveniet ut dolores, tenetur repudiandae eligendi earum qui!', author: 'Luis Povedano', category: 'Cine', createdAt: new Date()
    }

    ]
  }

  //get all posts
  getAll(): post[] {
    return this.arrPosts
  }

  //get by ID
  getByID(postId: number): post {
    let result: any;

    for (let post of this.arrPosts) {
      if (post.id == postId) {
        result = post
      }
    }
    return result
  }



  //filter by post title 
  getByWord(text: string): post[] {
    return this.arrPosts.filter(post => post.title.toLowerCase().indexOf(text) !== -1 || post.body.toLowerCase().indexOf(text) !== -1)
  }

  //filter by category
  getByCategory(category: string): post[] {
    return this.arrPosts.filter(post => post.category === category)
  }

  //add new posts
  createPost(pPost: post) {
    this.arrPosts.push(pPost)

  }
}


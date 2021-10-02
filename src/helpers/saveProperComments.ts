import Store from '../entities/Store';
import commentInterface from '../interfaces/CommentInterface';
import CommentFactory from '../factories/CommentFactory';

export default function saveProperComments(store: Store, comment: commentInterface): void {
    
    let productsAmount:number = store.getCatalog().all().length;
    
    if ( comment["postId"] <= productsAmount ) {
      let newComment = CommentFactory.create(comment);
      store.addComment(newComment);
    } 
}
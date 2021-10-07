import CommentInterface from '../interfaces/CommentInterface';
import selectComments from '../helpers/selectComments';
import { store } from '../index';

async function getCommentsFromApi() {

  try {

    let res = await fetch('https://jsonplaceholder.typicode.com/comments'),
    json: CommentInterface[] = await res.json();

    if (!res.ok) { throw new Error("algo salió mal")}

    selectComments(store, json);

  }
  
  catch(err) {

    console.log(err)

  }
}


export default getCommentsFromApi;
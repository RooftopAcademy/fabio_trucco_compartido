import UserComment from '../models/UserComment'

export default function commentItem(comment: UserComment){
    let listItem = `
    <hr>
    <li class="review-item">
        <h3>Username: ${comment.getUserName()}</h3>
        <h3>Comment: ${comment.getBody()}</h3>
    </li>
    `

    let reviews = document.getElementsByClassName(`reviews${comment.getTarget()}`)[0];
    if ( reviews ){
        reviews.innerHTML += listItem;
    }
}


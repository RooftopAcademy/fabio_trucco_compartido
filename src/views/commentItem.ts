import UserComment from '../entities/UserComment'

export default function commentItem(comment: UserComment){
    let listItem = `
    <hr>
    <li class="review-item">
        <h3 class="comment-line">Username: ${comment.getUserName()}</h3>
        <h3 class="comment-line">Comment: ${comment.getBody()}</h3>
    </li>
    `

    let reviews = document.getElementById(`reviews${comment.getTarget()}`);
    if ( reviews ){
        reviews.innerHTML += listItem;
    }
}


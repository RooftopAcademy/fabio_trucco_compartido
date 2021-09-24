import UserComment from '../models/UserComment'

export default function commentItem(comment: UserComment){
    let listItem = `
    <li >
        <h3>Review by ${comment.getUserName()}:</h3> 
        <br>
        <p>${comment.getBody()}</p>
    </li>
    `
    document.getElementById(`comments-list ${comment.getTarget()}`).innerHTML = listItem;
}


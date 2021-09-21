function commentItem(comment){
    let listItem = `
    <li >
        <h3>Review by ${comment.getUserName()}:</h3> 
        <br>
        <p>${comment.getBody()}</p>
    </li>
    `
    document.getElementById(`comments-list ${comment.getTarget()}`).innerHTML = listItem;
}
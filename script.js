
let comments = [];


function addComment() {
const userName = document.getElementById('userName').value;
const commentText = document.getElementById('commentText').value;

if (userName === '' || commentText === '') {
    alert('Completa todos los campos.');
    return;
}

const comment = {
    author: userName,
    text: commentText
};

comments.push(comment);

document.getElementById('userName').value = '';
document.getElementById('commentText').value = '';

displayComments();
}


function displayComments() {

const commentSection = document.getElementById('commentSection');
commentSection.innerHTML = '';

comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.textContent = `${comment.author}: ${comment.text}`;
    commentSection.appendChild(commentDiv);
});
}

function formFunc(event){
    event.preventDefault();
    let username = document.getElementById('username').value;
    let blogTitle = document.getElementById('title').value;
    let blogContent = document.getElementById('blog-content').value;

    localStorage.setItem('ls_username', username);
    localStorage.setItem('ls_blogtitle', blogTitle);
    localStorage.setItem('ls_blogContent', blogContent);

    console.log(localStorage.getItem('ls_username'));
    console.log(localStorage.getItem('ls_blogtitle'));

    return true;


}
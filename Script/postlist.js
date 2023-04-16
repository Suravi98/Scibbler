function viewDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('idToDelete', id);
}

function closeDeletePostModal(event) {
    document.getElementById('deletePostModal').style.display = 'none';
   // prevents page from refreshing
    event.preventDefault(); 
}

function viewFullPost() {
    window.location.href = "";
}

function deletePost(event) {
    // prevents page from refreshing
    event.preventDefault(); 

    document.getElementById('deletePostModal').style.display = 'none';
    var idToDelete = document.getElementById('deletePostModal').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}
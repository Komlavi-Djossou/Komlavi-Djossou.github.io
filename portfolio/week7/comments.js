function newComment(hikeName, comment) {
    return newComment = {
        "name": hikeName,
        "date": new Date(),
        "content": comment
    }
}


export class Comments {
    constructor(type) {
        this.type = type;
        this.listOfComments = getAllComments();
    }
    addNewComment(hikeName, comment) {
        let newComment = newComment(hikeName, comment);
        //get list from local storage
        //add item to the list
        //set list variable again in local storage
        //add the comment to localStorage
    }
    filterCommentsByName() {
        //TODO  - getAllComments() then filter them by name
    }
    getAllComments() {
        //TODO 1st - pull comments from local storage
    }
    renderCommentList() {
        //TODO - use getAllComments() - then render them
    }
    addSubmitListener() {
        //add a listener to a button created 
    }
}


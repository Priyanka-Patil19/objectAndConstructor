function Book(title,author,noOfPagers,isRead){
    this.title=title;
    this.author=author;
    this.noOfPagers=noOfPagers;
    this.isRead=isRead;
    this.info=function(){
        // console.log(title);
        // console.log(author);
        // console.log(noOfPagers);
        // console.log(isRead);
        return "The "+title+" by "+author+" , "+noOfPagers+" , "+((isRead)?"Read":"not read yet");
    }
}
const theHobbit=new Book("Hobbit","J.R.R Tolkien","295",false);
console.log(theHobbit.info());
alert(theHobbit.info());
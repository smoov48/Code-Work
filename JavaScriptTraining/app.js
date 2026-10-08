console.log(document);

// EXAMINE THE DOCUMENT OBJECT 
// console.dir(document); 


// Changes the Document Title
console.log(document.title);
document.title = 'Hello Simon!';


// I’ve selected a document element by id so that I can change the title text.


//In the page UI, that means the element will now show a heading saying Hello Simon!.
//Title.innerHTML ='<h3>Hello Simon!</h3>';


var Title = document.getElementById('title');
console.log(Title);
Title.innerText = 'Welcome to my Playground!';


var li = document.getElementsByTagName('li');
console.log(li);
li[0].innerText = 'Zombie';
li[1].innerText = 'Enderman';
li[2].innerText = 'Skeleton';
li[3].innerText = 'Creeper';
li[4].innerText = 'Piglin';


var Characters = document.querySelector('.character');
console.log(Characters);
Characters.innerText = 'Added Monster Character';











                                                                            
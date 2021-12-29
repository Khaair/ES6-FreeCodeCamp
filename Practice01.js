// class vagitable{
//     constructor(a,b){
//         this.name = a
//         this.Quantity = b
//     }
// }

// const z = new vagitable("Beguun",  20)

// console.log(z)
// console.log(z.Quantity)

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
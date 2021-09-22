console.clear();

class Queue {
  constructor() {
    this.kyuArray = [];
  }

  push(new_item) {
    this.kyuArray.push(new_item);
  }

  pop() {
    if (this.kyuArray.length === 0) {
      console.log("Queue is currently empty.");
    } else {
      this.kyuArray.shift();
    }
  }

  check() {
    console.log(`[${this.kyuArray}]`);
  }
}

const my_queue = new Queue();
my_queue.push("Milk");
my_queue.push("Eggs");
my_queue.check(); // ['Milk', 'Eggs']
my_queue.pop();
my_queue.check(); // ['Eggs']
my_queue.pop();
my_queue.check(); // []
my_queue.pop(); // 'Queue is currently empty.'

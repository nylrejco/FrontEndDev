console.clear();

class Stack {
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
      this.kyuArray.pop();
    }
  }

  check() {
    console.log(`[${this.kyuArray}]`);
  }
}

const my_stack = new Stack();
my_stack.push("Milk");
my_stack.push("Eggs");
my_stack.push("Cereal");
my_stack.check(); // "[Milk,Eggs,Cereal]"
my_stack.pop();
my_stack.check(); // "[Milk,Eggs]"
my_stack.pop();
my_stack.check(); // "[Milk]"
my_stack.pop();
my_stack.check(); // "[]"
my_stack.pop(); // "Queue is currently empty."

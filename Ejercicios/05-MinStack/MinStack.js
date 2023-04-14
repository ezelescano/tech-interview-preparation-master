
class Node {
  // Your code here:
  constructor(value){
    this.value = value;
    this.next = null;
  }

}

class Stack {
  // Your code here:
  constructor(value){
    this.top = null
  }

  push(value){
    if(!this.top) this.top= new Node(value);
    else{
      const newTop = new Node(value)
      newTop.next = this.top
      this.top = newTop
       
    }
  }

  pop(){
    const oldTop = this.top
    this.top = oldTop && oldTop.next
    return oldTop && oldTop.value
  }

  peek(){
    return this.top && this.top.value
  }

}



class MinStack extends Stack {
  // Your code here:
  constructor(value){
    this.top = null
    this.minimum= new Stack()
  }

  push(value){
    if(!this.top) {
      this.top= new Node(value)
      this.minimum.push(value)
    }else{
      const newTop = new Node(value)
      newTop.next = this.top
      this.top = newTop
      if(this.minimum.peek() > value) this.minimum.push(value)
      else this.minimum.push(this.minimum.peek())
       
    }
  }

  pop(){
    const oldTop = this.top
    this.top = oldTop && oldTop.next
   this.minimum.pop(); return oldTop && oldTop.value
  }

  min(){
    return this.minimum.peek()
  }

}

module.exports = {
  Node,
  MinStack
}
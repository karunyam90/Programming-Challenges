class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class StackInList{
    constructor(){
        this.top = null;
        this.size =0;
    }
    push =(data)=>{
       
        //check the stack is empty
        if(this.top == null){
            this.top = new Node(data);
            this.size++ ;
        } else{
            let temp = this.top;
            this.top =new Node(data);
            this.top.next=temp;
            this.size++ ;
        }
        console.log(this.top);
   }
   pop =()=>{
       
    //check the stack is empty
    if(this.top == null){
        console.log("Stack is empty");
    } else{
        let temp = this.top.next;
        this.top =temp;
    }
    console.log(this.top);
}

peek = (data) =>{
 for (let index = 0; index < this.size; index++) {
     let p1 = this.top;
     if(p1.data == data){
         console.log(p1.data);
     }else{
         p1 = p1.next;
     }
     return false;   
 }
}

}
 var newList =new StackInList();
 newList.push(10);
 newList.push(20);
 newList.push(40);
 newList.pop();
 newList.push(21);
newList.peek(10);
 
 console.log(newList);
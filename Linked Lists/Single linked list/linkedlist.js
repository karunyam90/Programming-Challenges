class Node{
	constructor(val){
		this.data=val;
		this.next=null;
	}
}

//Class for creating linked list
class Linkedlist{

	constructor(){
		this.head=null;
	}

	//append the value to the end of the list
	append(val){
		//if the list is empty
		if(this.head === null){
			this.head = new Node(val);
			return;
		}

		//if the list is not empty
		let curr =this.head;
		while(curr.next!== null){
			curr = curr.next;
		}
		curr.next=new Node(val);
	}

	//print the list
	print(){
		let arr ='';
		let curr=this.head;
		while(curr.next  != null){
			arr += curr.data +'->';
			curr=curr.next;
		}
		arr += curr.data ;
		arr +='->'+ null;
		console.log(arr);
		
	}

	//insert a data in specific location 
	insert(data,location){
		let prev =this.head;
		
		let curr =prev.next;
		let count = 0;
		let temp;

		//creating the new node
		let newnode = new Node(data);

		//check we are in appropriate position to insert
		while(count !== location){
			prev = curr;
			curr = prev.next;
			count++;
			
		}
		//location and count are at the same position
			temp = prev;
			prev = newnode;
			newnode.next=temp;	
			
	}

	//Reverse the array in groups
	//Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
	//k is a positive integer and is less than or equal to the length of the linked list. 
	//If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
	//You may not alter the values in the list's nodes, only nodes themselves may be changed.
	//Problem : https://leetcode.com/problems/reverse-nodes-in-k-group/
	// Solution : https://www.youtube.com/watch?v=NCilGMhdYPY&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=4
	
	reverse(k)
	{
		
	}

	//Segregate odd and even nodes from the linked list
	//Given the head of a singly linked list, group all the nodes with odd indices 
	//together followed by the nodes with even indices, and return the reordered list.
	//The first node is considered odd, and the second node is even, and so on.
	//Note that the relative order inside both the even and odd groups should remain as it was in the input.
	//You must solve the problem in O(1) extra space complexity and O(n) time complexity.
	//https://www.youtube.com/watch?v=C_LA6SOwVTM

	segregate(){
		let odd= this.head;
		let even = odd.next;
		let evenhead =even;
		while(even != null && even.next != null){
			odd.next = even.next;
			odd =odd.next;
			even.next=odd.next;
			even = even.next;
		}
		odd.next =evenhead;
	}

	//Palindrome Linked List
	//Leetcode Problem : Given the head of a singly linked list, return true if it is a palindrome.
	//solution :https://www.youtube.com/watch?v=wk4QsvwQwdQ&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=6

	isPalindrome(){

	}

	//Kth Node From End Of Linked List
	getthekthnodefromlastnode(k){
		let p1,p2 = this.head;
		for(int i=0;){

		}
	}

	//Detect and Remove Loop in a Linked List
	detectandremoveloop(){
		
	}
}

let list =new Linkedlist();
list.append(10);
list.append(20);
list.append(35);
list.append(40);
list.append(50);
list.append(70);
list.append(80);
list.append(90);
list.print();
list.reverse(4);
list.segregate();
list.print();

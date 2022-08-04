/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
 class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
      this.data = data;
      /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       *
       * @type {ListNode|null}
       */
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
      /** @type {ListNode|null} */
      this.head = null;
    }
  













    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
     secondToLast() {
      if (this.isEmpty()) {
        return false
      }

      if (!this.head.next) {
        return false
      }

      let runner = this.head;
      while (runner) {
        let nextNode = runner.next;
        if (!nextNode.next) {
          return runner.data;
        }
        runner = runner.next;
      }
     }

     /**
      * Removes the node that has the matching given val as it's data.
      * - Time: O(?).
      * - Space: O(?).
      * @param {any} val The value to compare to the node's data to find the
      *    node to be removed.
      * @returns {boolean} Indicates if a node was removed or not.
      */
     removeVal(val) {
      if (this.isEmpty()) {
        return false
      }

      if (!this.head.next) {
        if (this.head.data == val) {
          this.head = null;
          return true;
        }
        
        return false       
      }

      let runner = this.head;

      while(runner) {
        let nextNode = runner.next;
        if (nextNode.data == val) {
          runner.next = nextNode.next;
          return true
        }
        runner = runner.next;
      }
      return false
     }
 
     // EXTRA
     /**
      * Inserts a new node before a node that has the given value as its data.
      * - Time: O(?).
      * - Space: O(?).
      * @param {any} newVal The value to use for the new node that is being added.
      * @param {any} targetVal The value to use to find the node that the newVal
      *    should be inserted in front of.
      * @returns {boolean} To indicate whether the node was pre-pended or not.
      */
     prepend(newVal, targetVal) {

      if (this.isEmpty()) {
        return null
      }

      if (!this.head.next) {
        if (this.head.data == targetVal) {
          let newNode = new ListNode(newVal);
          newNode.next = this.head;
          this.head = newNode;
          return true;
        }
        else {
          return false;
        }
      }
        

      let runner = this.head;
      while(runner.next) {
        let nextNode = runner.next;
        if (nextNode.data == targetVal) {
          let newNode = new ListNode(newVal);
          newNode.next = nextNode;
          runner.next = newNode;
          return true
        }
        else {
          runner = runner.next;
        }
      }
    return false;

  }








     /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
      removeBack() {
        if (this.isEmpty()) {
          return null
        }
        else if (!this.head.next) {
          let temp = this.head.data;
          this.head = null;
          return temp;
        }
        else {

          let current = this.head;

          while (current.next) {
            let nextNode = current.next;
            if (nextNode.next == null) {
              current.next = null;
              return nextNode.data;
            }
            else {
              current = current.next;
            }
          }
        }
      }

      /**
       * Determines whether or not the given search value exists in this list.
       * - Time: O(?).
       * - Space: O(?).
       * @param {any} val The data to search for in the nodes of this list.
       * @returns {boolean}
       */
      contains(val) {

        let current = this.head;

        while(current) {
          if (current.data == val) {
            return true
          }
          current = current.next;
        }
        return false
      }
  
      /**
       * Determines whether or not the given search value exists in this list.
       * - Time: O(?).
       * - Space: O(?).
       * @param {any} val The data to search for in the nodes of this list.
       * @param {?ListNode} current The current node during the traversal of this list
       *    or null when the end of the list has been reached.
       * @returns {boolean}
       */
      containsRecursive(val, current = this.head) {
        if (current.data == val) {
          return true
        }
        if (!current.next) {
          return false
        }
        return this.containsRecursive(val, current = current.next)
      }
  
      // EXTRA
      /**
       * Recursively finds the maximum integer data of the nodes in this list.
       * - Time: O(?).
       * - Space: O(?).
       * @param {ListNode} runner The start or current node during traversal, or null
       *    when the end of the list is reached.
       * @param {ListNode} maxNode Keeps track of the node that contains the current
       *    max integer as it's data.
       * @returns {?number} The max int or null if none.
       */
      recursiveMax(runner = this.head, maxNode = this.head) {
        if (runner.data > maxNode.data) {
          maxNode = runner;
        }
        if (!runner.next) {
          return maxNode.data;
        }
        return this.recursiveMax(runner = runner.next, maxNode)
      }









    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
     insertAtFront(data) {
      if (this.isEmpty()) {
        this.head = new ListNode(data)
      }
      else {
        let newNode = new ListNode(data)
        newNode.next = this.head;
        this.head = newNode;
      }
      return this;
     }



     /**
      * Removes the first node of this list.
      * - Time: (?).
      * - Space: (?).
      * @returns {any} The data from the removed node.
      */
     removeHead() {
      if (this.isEmpty()) {
        return null
      }
      else {
        let temp = this.head
        this.head = temp.next;
        return temp.data;
      }
     }
 
     // EXTRA
     /**
      * Calculates the average of this list.
      * - Time: (?).
      * - Space: (?).
      * @returns {number|NaN} The average of the node's data.
      */
     average() {

      if(this.isEmpty()){
        return NaN
      }
      else {
        var current = this.head;
        let sum = 0;
        let length = 0;

        while(current){
            sum += current.data;
            length++
            current = current.next
        }
        let average = sum/length;
        return average
      }
     }










    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head == null;
    //     if (this.head == null){
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    }
  





    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack2(data) {
        let newNode = new ListNode(data);

        // if (this.isEmpty()) {
        //     this.head = newNode;
        // }
        // let runner = this.head;

        // while (runner.next != null) {
        //     runner = runner.next;
        // }

        // runner = newNode;
        // return this;
        if (!this.head) {
            this.head = newNode.tail;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }




    insertAtBack(data) {
        if(this.isEmpty()){
            this.head = new ListNode(data)
        } else {
            var current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = new ListNode(data)
        }
    }







  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
     insertAtBackRecursive(data, runner = this.head) {
        if(runner.next != null){
            this.insertAtBackRecursive(data, runner = runner.next)
        } else {
            runner.next = new ListNode(data)
        }
    }
  






    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }
  





    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }





  
  
  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
  const emptyList = new SinglyLinkedList();
  
  let singleNodeList = new SinglyLinkedList().insertAtBackMany([1,2]);
  singleNodeList.removeBack()
  console.log(singleNodeList.toArr())

  // singleNodeList = new SinglyLinkedList().insertAtFront([3]);
  

  let firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  console.log(firstThreeList.prepend(8,0));
  // firstThreeList.removeHead()
  firstThreeList.insertAtFront(3);
  // console.log(firstThreeList.removeVal(2));
  // console.log(singleNodeList.removeVal(1));
  console.log(singleNodeList.toArr());
  // console.log(firstThreeList.removeBack());
  // console.log(firstThreeList.average())

  // console.log(firstThreeList.contains(2))
  // console.log(firstThreeList.contains(8))
  // console.log(firstThreeList.containsRecursive(2))
  // console.log(firstThreeList.containsRecursive(8))
  // console.log(firstThreeList.recursiveMax())
  // firstThreeList.removeHead();
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new SinglyLinkedList().insertAtBackMany([
  //   -5, -10, 4, -3, 6, 1, -7, -2,
  // ]);
  
  /* node 4 connects to node 1, back to head */
  // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // perfectLoopList.head.next.next.next = perfectLoopList.head;
  
  /* node 4 connects to node 2 */
  // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // loopList.head.next.next.next = loopList.head.next;
  
  // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  //   1, 1, 1, 2, 3, 3, 4, 5, 5,
  // ]);
  
  // Print your list like so:
  console.log(firstThreeList.toArr()); 
  console.log(firstThreeList.secondToLast())
  console.log(singleNodeList.secondToLast())
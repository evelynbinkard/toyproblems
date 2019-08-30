
var addTwoNumbers = function(l1, l2) {
    let arrayOne = [];
    let arrayTwo = [];
    let currentNodeOne = l1;
    let currentNodeTwo = l2;
    let newHead;

    while (currentNodeOne) {
        arrayOne.push(currentNodeOne.val.toString());
        currentNodeOne = currentNodeOne.next;
    };

    while (currentNodeTwo) {
        arrayTwo.push(currentNodeTwo.val.toString());
        currentNodeTwo = currentNodeTwo.next;
    };

    if (arrayOne.length < arrayTwo.length) {
        for (let i = 0; i < (arrayTwo.length - arrayOne.length); i++) {
            arrayOne.push(0);
        }
    } else if (arrayOne.length > arrayTwo.length) {
        for (let i = 0; i < (arrayOne.length - arrayTwo.length); i++) {
            arrayTwo.push(0);
        }
    }

    reversedOne = arrayOne.reverse();
    reversedTwo = arrayTwo.reverse();
    let counter = 0;
    let carry = 0;
    const totalArray = [];
    while (counter < reversedOne.length) {
        let indexTotal = Number(reversedOne[counter]) + Number(reversedTwo[counter]) + carry;
        if (counter === reversedOne.length - 1 && (carry > 0)) {
                
        }
        if (indexTotal < 10) {
            totalArray.push(indexTotal);
            carry = 0;
        } else {
            totalArray.push(indexTotal % 10);
            carry = (indexTotal - (indexTotal % 10))/10;
        }
        counter++
    }
    newHead = new ListNode(Number(totalArray[0]));
    let currentNewList = newHead; 
    let i = 1;
    
    while (i < totalArray.length) {
        
        currentNewList.next = new ListNode(Number(totalArray[i]));
        currentNewList = currentNewList.next;
        i++
    }
    return newHead;

};
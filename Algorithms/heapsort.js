var listArray = [7, 6, 1, 9, 8, 4, 3, 5, 2, 0];
var copyArray;

function loadInfo(){
  copyArray = listArray.slice();
	document.getElementById("numbers").innerHTML = "Input array: " + copyArray;
  drawTree(listArray, "mynetwork");
  myFunction();
}

function myFunction() {
	var numLength = listArray.length;
  var networkVal = "mynetwork";
  var inputArray = "inputArray";
  var outputArray = "outputArray";
  var count = 1;
	console.log("Initial array:",(numLength-2)/2);
	for(var start=(numLength-2)/2; start >= 0; start--){
		siftdown(listArray, start, numLength-1);
  	//console.log("Interim array:",listArray);
    //networkVal = networkVal.concat(count);
    console.log("1. listArray = ", listArray);
    console.log("1. networkVal = ", networkVal.concat(count));
    drawTree(listArray, networkVal.concat(count));

    document.getElementById(inputArray.concat(count)).innerHTML =  "Input Array  : " + copyArray;
    document.getElementById(outputArray.concat(count)).innerHTML = "Output Array : " + listArray;

    count++;

    copyArray = listArray.slice();
	}
	for(var end = numLength-1;end > 0;end--){
		listArray[end] = [listArray[0], listArray[0] = listArray[end]][0];
		siftdown(listArray, 0, end - 1);
    console.log("2. listArray = ", listArray);
    console.log("2. networkVal = ", networkVal.concat(count));
    drawTree(listArray, networkVal.concat(count));

    document.getElementById(inputArray.concat(count)).innerHTML =  "Input Array  : " + copyArray;
    document.getElementById(outputArray.concat(count)).innerHTML = "Output Array : " + listArray;

    count++;

    copyArray = listArray.slice();
	}
	//console.log(listArray);  

	//document.getElementById("sort").innerHTML = "Sorted Array: " + listArray;
}

function siftdown(listArray, start, end){
  root = start;
  while (true){
  	child = root * 2 + 1;
  	if (child > end){
  		break;
  	}
  	if (child + 1 <= end && listArray[child] < listArray[child + 1]){
      child += 1;
    }
    if (listArray[root] < listArray[child]){
    	listArray[root] = [listArray[child], listArray[child] = listArray[root]][0];
      	root = child;
    }
    else{
      break;
    }
  }
}
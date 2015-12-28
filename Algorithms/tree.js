var network = null;

function destroy() {
    if (network !== null) {
        network.destroy();
        network = null;
    }
}

function drawTree(listArray, mynetwork) {
    //destroy();
    // randomly create some nodes and edges
    nodeCount = listArray.length;
    var nodes = [];
    var edges = [];
    //var network = null;
    var layoutMethod = "directed";

    var newNodeCount = 0;
    var edgeCount = 1;
    // randomly create some nodes and edges
    for (var i = 0; i < nodeCount; i++) {
      nodes.push({id: i, label: listArray[i], font: '18px verdana blue'});
    }

    while(edgeCount < nodeCount){
      edges.push({from: newNodeCount, to: edgeCount});
      //console.log("Edge from newNodeCount= " + newNodeCount + " to edgeCount=" + edgeCount);
      edgeCount++;
      edges.push({from: newNodeCount, to: edgeCount});
      //console.log("Edge from newNodeCount= " + newNodeCount + " to edgeCount=" + edgeCount);
      edgeCount++;
      newNodeCount++;
    }
    // create a network
    
    var container = document.getElementById(mynetwork);
    //console.log("container = ", container);
    var data = {
      nodes: nodes,
      edges: edges
    };

    var options = {
      layout: {
        hierarchical: {
          sortMethod: layoutMethod
        }
      },
      edges: {
        smooth: true,
        arrows: {to : true }
      },
      nodes: {
        shape: 'circle',
        size: 30,
        font: {
            size: 32
        },
        borderWidth: 2,
        shadow:true
      },
      
    };
    
    network = new vis.Network(container, data, options);

}
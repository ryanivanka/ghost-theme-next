$(document).ready(function () {
var treeMapModel = {
 "name": "treemap",
 "children": [
  {
   "name": "China",
   "children": [
        {
         "name": "Zhejiang",
         "children": [
          {"name": "AgglomerativeCluster", "size": 3938},
          {"name": "CommunityStructure", "size": 3812},
          {"name": "HierarchicalCluster", "size": 6714},
          {"name": "MergeEdge", "size": 743}
         ]
        },
        {
         "name": "Beijiang",
         "children": [
          {"name": "BetweennessCentrality", "size": 3534},
          {"name": "LinkDistance", "size": 5731},
          {"name": "MaxFlowMinCut", "size": 7840},
          {"name": "ShortestPaths", "size": 5914},
          {"name": "SpanningTree", "size": 3416}
         ]
        },
        {
         "name": "Shanghai",
         "children": [
          {"name": "AspectRatioBanker", "size": 7074}
         ]
        }
       ]
      },
      {
       "name": "Guangdong",
       "children": [
        {"name": "Easing", "size": 17010},
        {"name": "FunctionSequence", "size": 5842},
        {
         "name": "interpolate",
         "children": [
          {"name": "ArrayInterpolator", "size": 1983},
          {"name": "ColorInterpolator", "size": 2047},
          {"name": "DateInterpolator", "size": 1375},
          {"name": "Interpolator", "size": 8746},
          {"name": "MatrixInterpolator", "size": 2202},
          {"name": "NumberInterpolator", "size": 1382},
          {"name": "ObjectInterpolator", "size": 1629},
          {"name": "PointInterpolator", "size": 1675},
          {"name": "RectangleInterpolator", "size": 2042}
         ]
        },
        {"name": "ISchedulable", "size": 1041},
        {"name": "Parallel", "size": 5176},
        {"name": "Pause", "size": 449},
        {"name": "Scheduler", "size": 5593},
        {"name": "Sequence", "size": 5534},
        {"name": "Transition", "size": 9201},
        {"name": "Transitioner", "size": 19975},
        {"name": "TransitionEvent", "size": 1116},
        {"name": "Tween", "size": 6006}
       ]
      },
      {
       "name": "Jiangsu",
       "children": [
        {
         "name": "converters",
         "children": [
          {"name": "Converters", "size": 721},
          {"name": "DelimitedTextConverter", "size": 4294},
          {"name": "GraphMLConverter", "size": 9800},
          {"name": "IDataConverter", "size": 1314},
          {"name": "JSONConverter", "size": 2220}
         ]
        },
        {"name": "DataField", "size": 1759},
        {"name": "DataSchema", "size": 2165},
        {"name": "DataSet", "size": 586},
        {"name": "DataSource", "size": 3331},
        {"name": "DataTable", "size": 772},
        {"name": "DataUtil", "size": 3322}
       ]
      },
     {"name": "Chongqing", "size": 16540}
   ]
};               
    
    
    
var margin = {top: 0, right: 10, bottom: 10, left: 20},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var color = d3.scale.category20();

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) { return d.size; });


var div = d3.select(".treemap").append("div")
    .style("position", "relative")
    .style("width", (width + margin.left + margin.right) + "px")
    .style("height", (height + margin.top + margin.bottom) + "px")
    .style("left", margin.left + "px")
    .style("top", margin.top + "px");

  var node = div.datum(treeMapModel).selectAll(".node")
      .data(treemap.nodes)
    .enter().append("div")
      .attr("class", "node")
      .call(position)
      .style("background", function(d) { return d.children ? color(d.name) : null; })
      .text(function(d) { return d.children ? null : d.name; });

    var isSize = true;
    setInterval(function() {
        var value = isSize
            ? function() { return 1; }
            : function(d) { return d.size};  
        
        node.data(treemap.value(value).nodes)
          .transition()
            .duration(1500)
            .call(position); 
        
        isSize = !isSize;
        
    }, 4000);

function position() {
  this.style("left", function(d) { return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}
    
    
    /********eventDrop widget*********/
    
    var eventDropsChart = d3.chart.eventDrops().width(600).margin({ top: 60, left: 150, bottom: 40, right: 10 });
    
    var eventDropModel = [
      { name: "Build Break", dates: [
          new Date('1985/06/29 9:02:54'), 
          new Date('2000/07/11 19:25:03'), 
          new Date('2004/08/15 05:24:54'), 
          new Date('2011/03/15 13:25:03'), 
          new Date('2013/02/15 21:24:54'), 
          new Date('2013/08/15 13:25:03'), 
          new Date('2014/09/15 13:25:05')
      ] }
    ];
   
    d3.select(".timeline")
      .datum(eventDropModel)
      .call(eventDropsChart);
    
});

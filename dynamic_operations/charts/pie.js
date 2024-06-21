// const gloop = d3.select("svg")
// .style("border","1px solid red")
// .attr("width",500)
// .attr("height",500)
// .append("g")
// .append("rect")
// .style("border","1px solid blue")
// .style("fill","blue")
// .attr("width",500)
// .attr("height",500)

function generate_pie(titley,width,height,datam){
    
    const data = []
    const labels_arr = []
    for(const key in datam){
        data.push(datam[key])
        labels_arr.push(key)
    }
    
    // Create the setup   
    const svg = d3.create("svg")
    const gloop = svg
        .style("border","1px solid red")
        .attr("width",width)
        .attr("height",height)
        .append("g")
        .attr("transform",`translate(${width*0.5},${height*0.5})`)
    
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height * 0.05)
        .attr("class", "chart-title")
        .attr("margin","10px")
        .text(titley);
    
    const pie = d3.pie();
    var pie_proportions = pie(data)
    const arc = d3.arc()
                .innerRadius(0)
                .outerRadius(width*0.5);
    const color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeCategory10);

    gloop.selectAll("path")             // FOR ALL ELEMENT CALLED PATH INSIDE GROUP ELEMENT
        .data(pie_proportions)          // EACH ELEMENT IS PASSED A RESPECTIVE DATA PIECE 
        .enter()                        // A WAY TO PASS THE REMAINDING THINGS REQUIRED TO VISUALISE 
        .append("path")                 // FOR EACH DATA PIECE, Attach it to a newly created and appended path element
        .attr("d",arc)                  // Pass a function to turn data piece into coordinate points on the screen to draw the pie
        .attr("fill", function(d, i) { return color(i); }) // Fill the slices with color

        var labels = gloop.selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("dy", "0.35em")
        .attr("class", "label")
        .text(function(d,i) { return labels_arr[i]; });
    
    return svg.node()

}

// var data = {
//     "one": 10,
//     "two": 20,
//     three: 30,
//     four: 40,
//     five: 50
// }
// // var data = [10, 20, 30, 40, 50];
// const x = document.getElementById("lala")
// x.appendChild(generate_pie(400,400,data))









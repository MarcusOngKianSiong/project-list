function generate_line_chart(title_text,width,height,x,y){

         const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
        svg.setAttribute("style",'border: 1px solid brown')
        svg.setAttribute("width",width)
        svg.setAttribute("height",width)
            
        const x_axis_start_pixel = width * 0.1 / 2;
        const y_axis_start_pixel = height * 0.1 / 2;
        
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute("x",width/2)
        title.setAttribute("y",height*0.05)
        title.setAttribute("class","chart-title")
        title.textContent = title_text
        svg.appendChild(title)
            // svg.append("text")
            // .attr("x", width / 2)
            // .attr("y", margin.top / 2)
            // .attr("class", "chart-title")
            // .text("My D3 Line Chart");

        // CHECK THE TYPE OF X AXIS VALUES I AM HOLDING...
        let x_scale = null
        let x_time_scale = null
        const daty = new Date(x[0])
        if(daty instanceof Date && !isNaN(daty)){
            x_time_scale = x.map(d => new Date(d));
            x_scale = d3.scaleTime()
                .domain([d3.min(x_time_scale), d3.max(x_time_scale)])
                .range([x_axis_start_pixel, width - x_axis_start_pixel]);
        }else{
            x_scale = d3.scaleLinear()
                .domain([Math.min(...x), Math.max(...x)])
                .range([x_axis_start_pixel, width - x_axis_start_pixel]);
        }

            
    
            const y_scale = d3.scaleLinear()
                .domain([Math.min(...y), Math.max(...y)])
                .range([(height - y_axis_start_pixel) , y_axis_start_pixel]);

            const x_axis_func = d3.axisBottom(x_scale);
            const y_axis_func = d3.axisLeft(y_scale);

            const gX = document.createElementNS("http://www.w3.org/2000/svg", "g");
            gX.setAttribute("transform", `translate(0,${height - y_axis_start_pixel})`);
            d3.select(gX).call(x_axis_func);
            gX.setAttribute("class","axis")
            const gY = document.createElementNS("http://www.w3.org/2000/svg", "g");
            gY.setAttribute("transform", `translate(${x_axis_start_pixel}, 0)`);
            d3.select(gY).call(y_axis_func);
            gY.setAttribute("class","axis")

            let lineData = null
            if(x_time_scale !== null){
                lineData = x_time_scale.map((d, i) => `${x_scale(d)},${y_scale(y[i])}`).join("L");
            }else{
                lineData = x.map((d, i) => `${x_scale(d)},${y_scale(y[i])}`).join("L");
            }

            // Create the path element
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", `M${lineData}`); // M signifies move to the starting point
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "steelblue");
            path.setAttribute("stroke-width", "2");
    
            svg.appendChild(gX);
            svg.appendChild(gY);
            svg.appendChild(path);
            
            return svg

            // return generate_outcome_message("success", "Line SVG generated");
            
                
}
// const outcome  = generate_line_chart(500,500,[1,2,3,4,5,6],[1,2,3,4,5,6])

// const y = document.getElementById("display")
// y.appendChild(outcome)


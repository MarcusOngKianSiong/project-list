function display_charts(overarching_title){
    
    const archy = document.createElement("div")
    archy.classList.add("visual-project-encapsulator")

    // Creating overarching title
    const overarch_title = document.createElement("div")
    overarch_title.classList.add("visual-project-title")
    overarch_title.textContent = overarching_title
    archy.appendChild(overarch_title)
    
    

    const outer_container_width = display.offsetWidth
    let cell_width = 0
    let cell_height = 0
    const table = document.createElement("div")
    
    
    
    table.classList.add("visual-project-container")
    // table.style.width = viewWidth * 0.7 + "px"
    const seventy_percent = outer_container_width
    table.style.width = seventy_percent + "px"
    cell_width = seventy_percent / 4
    cell_height = seventy_percent / 4
    
    for(const title in visual_data){
        const current = visual_data[title]
        if (current.type === "line"){
            table.appendChild(generate_line_chart(title,cell_width,cell_height,current.data.x,current.data.y))
        }
        if (current.type === "pie"){
            table.appendChild(generate_pie(title,cell_width,cell_height,current.data.obj))
        }
    }
    archy.appendChild(table)

    display.replaceChildren()
    display.appendChild(archy)
    
}



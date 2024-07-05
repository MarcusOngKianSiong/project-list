/**
 * 1. Source from local refresher.js file
 * 
 */


function organise_visuals(arr_of_elements){
    
    display.replaceChildren()
    const rows = []
    // Construct table

    const count = arr_of_elements.length

    let current_index = 0
    let current_row = []
    for(let i = 0;i<count;i++){
        const length = current_row.length
        if (length === 3){
            rows.push(create_actual_visual_row_element(current_row))
            current_row = []
        }

        const column_element = document.createElement("div")
        column_element.className = "table-item"
        column_element.appendChild(arr_of_elements[i])
        current_row.push(column_element)
    }

    rows.push(create_actual_visual_row_element(current_row))
    current_row = []
    
    rows.forEach(item=>{
        display.appendChild(item)
    })

}

const create_actual_visual_row_element = (element) => {
    const row = document.createElement("div")
    row.className = "table-row"
    element.forEach(item=>{
        row.appendChild(item)
    })
    return row
}


function generate_table(){

    const table = document.createElement("div")
    table.classList.add("visual-box")
    table.setAttribute("id","table")
    let header = null
    if (current_view === "projects"){
        header = project_columns
    }
    if(current_view === "visuals"){
        header = visual_columns
    }
    const tits = document.createElement("div")
        tits.classList.add("table-header")
        header.forEach((item,index)=>{
            const x = document.createElement("div")
            x.textContent = item
            tits.appendChild(x)
        })
        table.appendChild(tits)
    table_data.forEach((row,index)=>{
        if(index !== 0){
            table.appendChild(generate_row(row))
        }
    })
    display.replaceChildren()
    display.appendChild(table)
    
}


function generate_row(array){
    
    const row = document.createElement("div")
    if (current_view === "visuals"){
        /*1*/ row.addEventListener("click",()=>{row_on_click_for_performance_measuarements(array[0])})
    }
    row.setAttribute("class","table-row-container")
        array.forEach((item,index)=>{
            
                const column_cell_element = document.createElement("div")
                column_cell_element.classList.add("table-row-cell")
    
                
                
                if (isValidUrl(item)){
                    const url = document.createElement("a")
                    url.setAttribute("href",item)
                    url.textContent = "link"
                    column_cell_element.appendChild(url)
                }else{
                    column_cell_element.textContent = item
                }
                row.appendChild(column_cell_element)
            
        })
    return row
}


function isValidUrl(text) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!urlPattern.test(text);
  }

  get_table_data().then(res=>{
        generate_table()
  })
  
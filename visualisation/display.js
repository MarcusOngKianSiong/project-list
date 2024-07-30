const data = window.location.search
const x = new URLSearchParams(data)
const name = x.get('name')
const typer = x.get('objective')

const title = document.querySelector("#title")
const content = document.querySelector('#content')

title.textContent = name

function organise_visuals(arr_of_elements){
    
    content.replaceChildren()
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
        column_element.classList.add("visual-cell")
        column_element.appendChild(arr_of_elements[i])
        current_row.push(column_element)
    }

    rows.push(create_actual_visual_row_element(current_row))
    current_row = []
    
    rows.forEach(item=>{
        content.appendChild(item)
    })

}



async function display_visual(){
    const image_data = await fetch("http:192.168.10.145:10001/custom_package_usage/usage")
    const segmented = await response_segmentation(image_data)                       // CDN
    const length = segmented.parts.length
    const visuals = []
    for(let i = 0;i<length;i++){
        const current = segmented.parts[i]
        // console.log("CHECKING CURRENT PART: ",current)
        if(current["data-type"] == "image/jpeg"){
            const data = current.data
            /*1*/ const binaryObj = stringedData(data)                              // CDN
            // console.log(binaryObj)
            /*1*/ const blobObj = create_blob(binaryObj,"image/jpeg")               // CDN
            /*1*/ const url = create_object_url(blobObj)                            // CDN
            // console.log(url)
            const image_element = document.createElement("img")              
            image_element.setAttribute("src",url)
            image_element.classList.add("the-image")
            // image_element.style = "border: 1px solid red;"
            visuals.push(image_element)
            const x = []
            
        }
    }
    organise_visuals(visuals)
    // image_data.forEach((item)=>{
    //     if(item !== ""){
    //         const image = document.createElement("img")
    //         image.src = item
    //         content.appendChild(image)
    //     }
    // })
    // console.log("HERE HERE: ",image_data)
}

const create_actual_visual_row_element = (element) => {
    
    const row = document.createElement("div")
    // row.style = "display: flex; flex-direction: row;"
    row.classList.add("visual-row")
    element.forEach(item=>{
        row.appendChild(item)
    })
    return row
}


// display_visual().then(res=>)
display_visual()
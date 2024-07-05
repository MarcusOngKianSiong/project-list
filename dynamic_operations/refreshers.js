/*
    sources:
        1. Source from cdn: breakdownmultipart.js, stringed_code_to_image.js
        2. Source from variable file
*/


const change_table = async (change_to) => {
    current_view = change_to
    await get_table_data()
    generate_table()
}



const row_on_click = async (name) => {
    console.log("GETTING DATA..")
    const underscored = name.replace(/\s/g, '_');
    const outcome = await fetch(`${visual_data_route}${underscored}/usage`)
    
    const outcome2 = await outcome.json()
    
    if(outcome2["outcome"] === "error"){
        console.log(`ERROR: ${outcome2["output"]}`)
    }

    visual_data = outcome2["output"]
    display_charts(name)
    
}



const row_on_click_for_performance_measuarements = async (name) =>{
    console.log("Running row on click for performance measurement...")
    // display.replaceChildren()
    const underscored = name.replace(/\s/g, '_');
    /*2*/const outcome = await fetch(`${visual_data_route}${underscored}/usage`)
    /*1*/ const segmented = await response_segmentation(outcome)
    console.log("CHECKING SEGMENTATION: ",segmented)
    const length = segmented.parts.length
    const visuals = []
    for(let i = 0;i<length;i++){
        const current = segmented.parts[i]
        console.log("CHECKING CURRENT PART: ",current)
        if(current["data-type"] == "image/jpeg"){
            const data = current.data
            /*1*/ const binaryObj = stringedData(data)
            console.log(binaryObj)
            /*1*/ const blobObj = create_blob(binaryObj,"image/jpeg")
            /*1*/ const url = create_object_url(blobObj)
            console.log(url)
            const image_element = document.createElement("img")
            image_element.setAttribute("src",url)
            image_element.className = "visual"
            visuals.push(image_element)
            const x = []
            
        }
    }

    organise_visuals(visuals)
    
}


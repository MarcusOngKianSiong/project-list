
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

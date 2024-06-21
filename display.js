
function create_navigation_buttons(){
    
    navigation_list.forEach(item=>{
        const new_button = document.createElement("div")
        
        new_button.addEventListener("click",()=>{change_table(item)})
        const text = document.createElement("p")
        text.textContent = item
        new_button.appendChild(text)
        navigation.appendChild(new_button)
    })
    
}

async function get_table_data(){
    let data = null;
    if(current_view === "projects"){
        console.log("HERE")
        outcome = await fetch(table_route_projects)
        outcome_2 = await outcome.json()
        table_data = convertDataFormat(outcome_2)
        console.log("FINISH: ",table_data)
    }
    if(current_view === "visuals"){
        outcome = await fetch(table_route_visuals)
        outcome_2 = await outcome.json()
        if(outcome_2["outcome"] === "error"){
            console.log(`ERROR: ${outcome_2["output"]}`)
            return False
        }
        table_data = outcome_2["output"]
    }
}


/* SUPPORT FUNCTION */

function convertDataFormat(data){
    if(current_view !== "projects"){
        return
    }
    const reformatted = []
    project_columns.forEach(column_name=>{
        const current = data[column_name]
        current.forEach((item,index)=>{
            try{
                reformatted[index].push(item)
            }catch{
                reformatted.push([item])
            }
        })
    })
    return reformatted
}

create_navigation_buttons()
// get_table_data()

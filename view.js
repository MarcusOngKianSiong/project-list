// const display = document.querySelector("body")
// generate_table(["something","nothing","hello"],[[1,2,3],[4,5,6]],display)
// const body = document.querySelector("body")
// const scripts = document.createElement("script")
// scripts.src = "http://192.168.10.145:10001/cdn/test"

// body.appendChild(scripts)
// console.log("HELLO")

const display = document.querySelector(".content")

async function get_table_data(){
    const data = await fetch('https://project-list-uf6y.onrender.com/software_projects')    
    const core = await data.json()
    if (core["outcome"] == "error"){
        throw new Error("Unable to get data from server....")
    }
    
    generate_table(core.output.headers,core.output.data,display,on_click_operation=()=>{console.log("HELLO")},row_navigation="multi") //CDN
}

get_table_data()
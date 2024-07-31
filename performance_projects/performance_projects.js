// const display = document.querySelector("body")
// generate_table(["something","nothing","hello"],[[1,2,3],[4,5,6]],display)
// const body = document.querySelector("body")
// const scripts = document.createElement("script")
// scripts.src = "http://192.168.10.145:10001/cdn/test"

// body.appendChild(scripts)
console.log("HELLO")

const display = document.querySelector(".content")

const move_to_visualisation = (x) => {
    window.location.href = `../visualisation/display.html?objective=performance_visual&name=${x[1]}`
}

async function get_table_data(){
    const data = await fetch('https://project-list-uf6y.onrender.com/visual_list_2')    
    const core = await data.json()
    if (core["outcome"] == "error"){
        throw new Error("Unable to get data from server....")
    }
    // console.log(core)
    generate_table(core.output.headers,core.output.data,display,on_click_operation=move_to_visualisation,row_navigation="single")
}

get_table_data()


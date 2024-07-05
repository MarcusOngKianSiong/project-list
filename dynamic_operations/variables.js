/* ROUTES */

// PRODUCTION SOURCE
const table_route_projects = "https://personal-back-end.onrender.com/projects";
// const table_route_visuals = "https://project-list-uf6y.onrender.com/visual_list"
// const visual_data_route = "https://project-list-uf6y.onrender.com/"

// TEST SOURCE
// const table_route_visuals = "http://172.16.33.25:10000/visual_list"
// const visual_data_route = "http://172.16.33.25:10000/"


const table_route_visuals = "http://192.168.10.145:10000/visual_list"
const visual_data_route = "http://192.168.10.145:10000/";



const project_columns = ["Project","Description","Documentation","Github","ProjectApp"]
const visual_columns = ["visual project name","description","charts"]

let display = document.getElementById("display")
let navigation = document.getElementById("navigation")
let current_view = "projects"

/* Buttons */
const navigation_list = ["projects","visuals"]
let table_data = null
let visual_data = null



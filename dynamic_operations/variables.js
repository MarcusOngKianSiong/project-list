/* ROUTES */
const table_route_projects = "https://personal-back-end.onrender.com/projects";
const table_route_visuals = "https://project-list-uf6y.onrender.com/visual_list"
// const table_route_visuals = "http://127.0.0.1:10000/visual_list"
// const visual_data_route = "http://127.0.0.1:10000/";
const visual_data_route = "https://project-list-uf6y.onrender.com/"
const project_columns = ["Project","Description","Documentation","Github","ProjectApp"]
const visual_columns = ["visual project name","description","charts"]

let display = document.getElementById("display")
let navigation = document.getElementById("navigation")
let current_view = "projects"

/* Buttons */
const navigation_list = ["projects","visuals"]
let table_data = null
let visual_data = null






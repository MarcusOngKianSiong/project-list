async function get_image_data(){
    outcome = await fetch(visual_data_route+"custom_package_usage/usage")
    const content_type = outcome.headers.get("Content-Type")
    const boundary = content_type.split('boundary=')[1]
    text = await outcome.text()
    console.log(text)
    const sections = text.split(`--${boundary}--\r\n`)
    console.log(sections)
    const length = sections.length
    const arr_of_image_links = []
    for(let i = 0;i<length;i++){
        const current = sections[i]
        const the_link = turn_image_section_into_link(current)
        document.getElementById('imageDisplay').src = the_link
        console.log("FINAL:",the_link)
    }
}

function turn_image_section_into_link(section){
    // Split by line
    console.log("section:",section)
    const splitted = section.split("\n")
    const length = splitted.length
    console.log(length)
    let link = ""
    for(let i = 0;i<length;i++){
        console.log(`steps ${i}:`,splitted[i])
        if(i === length-2){
            link += splitted[i]
            continue
        }
        const current = splitted[i].split(':')
        if(current[0] == "number-system"){
            link += current[1] + ","
        }
        if(current[0] == "data-type"){
            link = "data:" + current[1] + ";" + link
        }
    }
    return link
}

async function fetch_multi_part(){
    
    // const outcome = await fetch('http://172.32.249.131:10002/multipart')
    const outcome = await fetch('http://192.168.10.145:10002/multipart')
    const content_type = outcome.headers.get("Content-Type")
    const boundary = content_type.split('boundary=')[1]
    
    const multi_part_whole = await outcome.text()
    const splitted = multi_part_whole.split(`--${boundary}\r\n`)
    console.log(splitted)
    const length = splitted.length
    console.log("HEREE----")
    for(let i = 0;i<length;i++){
        
        const current = splitted[i]
        const split_again = current.split('\r\n')
        console.log(split_again)

        if(i == 3){
            const current = split_again[2]
            
            const imageData = `data:image/jpeg;base64,${current}`; // Display the image
            console.log(imageData)
            document.getElementById('imageDisplay').src = imageData
            
            // Log the binary data to the console
            const binaryData = new Uint8Array(imageData);
            console.log('Binary Array:', binaryData);
            // reader.readAsDataURL(file); // Read file as Data URL (base64-encoded string)
        }
    }

}
// fetch_multi_part()
// get_image_data()
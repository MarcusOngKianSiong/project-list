### Changes
- Bug fixes:
    1. ✅ Moving to the next "thing" before the completion of the previous "thing" would cause the previous "thing" to override the completion of current "thing".
        2. ✅ Create multipage infrastructure

- Changes:
    1. Development aspect: 
        - ✅ Create two types of table
            1. the whole row when clicked, brings you to another page within the website. 
            2. There are more than one column in the row that can bring you to other sites.
    2. ✅ Able to use the back button and the front button to navigate between pages.
    
### Operation Components
1. Table manipulation: 
2. Image reconstruction: 


### Visualisation dependencies
1. break_down_multipart
2. stringed_code_to_image

# How does it work?
*Currently*
1. `🎯 Currently working towards it:` All operation files will be retrieved from [personal backend](../testing_back_end/README.md) 
2. 

# Format of data to be received
- List of projects:
    1. 

# Current configuration
1. software project table: `https://personal-back-end.onrender.com/projects`
2. personal performance/Research project table: `https://project-list-uf6y.onrender.com/visual_list`
3. Specific research project: `https://project-list-uf6y.onrender.com/custom_package_usage/usage`
4. 

For software projects, you would have two links (github, and the app itself)
For visual, you just jump straight to a new page.

How to make it such that the different tables are in different pages?

I need to redo some parts of it.
    What parts?
        - The speed of things

The reason for choosing an individual page option is because of the difference between table 1 (software projects) and table 2 (visual projects). 
    - Software projects have a github link and an app link, whenever relevant
    - Visual projects just directly display images and text if clicked. That is all.

### Notes
1. ##### Example of turning hexadecimal to image elements (*See the CDN section.*)
    ```javascript
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
                    visuals.push(image_element)
                }
            }
            return visuals
        }
    ```
    - [See multi part sub section in CDN section](../testing_back_end/README.md#website-multipart-message-deconstruction-see-content_delivery_networkpersonal_websitecontents_to_deliverbreak_down_multipartjs)
        - `response_segmentation()`
    - [See stringed code to image sub section in CDN section](../testing_back_end/README.md#image-element-creation-from-hexadecimals-see-content_delivery_networkpersonal_websitecontents_to_deliverstringed_code_to_imagejs)
        - `stringedData()`
        - `create_blob()`
        - `create_object_url()`

    
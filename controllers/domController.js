
'use strict';

function addForm(nombre, apellido) {
    api('GET', 'products/4').then( response => {
        console.log(response);
        
        query('/functions/domQuerys.js', `addForm('${response.name}', '${response.pantone_value}')`);
    });
    //query('/api/api.js', `api('GET', 'products/3');`);
}

function deleteForm() {
    query('/functions/domQuerys.js',  `deleteForm()`);
}

function query(file, metodo) {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {        
        chrome.tabs.executeScript(
            tabs.id,
            {file},
            () => {
                chrome.tabs.executeScript(
                    tabs.id, 
                    {code: metodo}
                );
            }
        );
    });
}

'use strict';

function api(metodo, url) {
    return new Promise(resolve => {   
        var xhr = new XMLHttpRequest();
        xhr.open(metodo, "https://reqres.in/api/"+url, true);
        xhr.onload = function() {
            resolve(JSON.parse(xhr.responseText).data);
        };
        xhr.send();
    });
}

//Console.log out elements in JSON file

let jsonInfo = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

for (let i = 0; i < jsonInfo.video.length; i++){
    
    for (key in jsonInfo.video[i]){
        console.log(jsonInfo.video[i][key]);
    }
    
    for (key in jsonInfo.video[i].author.data[i]){
        console.log(jsonInfo.video[i].author.data[i][key]);
    }
    
}


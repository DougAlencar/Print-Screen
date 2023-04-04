	function imprimir_atributos (){
     		// adicionar o que voce quer tirar o print, pode ser uma img  
		const mapElement = document.getElementById('O que vc quer tirar print');
    
    		// Renderizar o mapa em um canvas HTML
		html2canvas(mapElement).then(function(canvas) {
      
			var canvas = document.getElementsByTagName('canvas')[0];
			var imgData = canvas.toDataURL('image/png', 1.0);

			fetch(imgData)
				.then(function(imgData){
					return imgData.blob();
				}).then(function(result){
					var imgURL = URL.createObjectURL(result);
					img_map = `<img src="${imgURL}" class="map-image"/>`;
      }

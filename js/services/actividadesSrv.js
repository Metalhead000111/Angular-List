 
 app.service('actividadService',function($http){

 		this.agregarActividad = function(){
 			console.log("Se a agregado una actividad");
 		}

 		this.eliminarActividad = function(){
 			console.log("Se a eliminado una actividad"+actividad.nombre);
 		}

 		this.obtenerActividad = function(callback){
 			$http.get('js/models/actividades.json').then(callback);

 		}
 });
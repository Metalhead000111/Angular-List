app.controller('actividadController',function ($scope,actividadService){
		
		actividadService.obtenerActividad(function(response){
			$scope.actividades = response.data;
	});
		$scope.agregarActividad = function(accion){
			actividadService.agregarActividad();
			var actividad = {"nombre":accion};
			$scope.actividades.push(actividad);
		}
		$scope.eliminarActividad = function(actividad,index){
			actividadService.eliminarActividad(actividad);			
			$scope.actividades.splice(index,1);
		}
});
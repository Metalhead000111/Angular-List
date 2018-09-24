new Vue({
	el: '#app',
	data:{
		//Variables del Slider v-bind
		spanRange1: 5,
		spanRange2:7,
		//Propiedades del Slider Dinero del prestamo v-bind:propiedad
		minPrestamo: 5,
		maxPrestamo: 2000,
		//Propiedades del Slider Dias para pagar v-bind:propiedad
		minFecha: 1,
		maxFecha: 30,

		//Variables para validar y traer los datos de Registro
		
	},
	computed: {
	    intereses: function() {
	    	var tasa = 420
	    	var totalHere = 0
	    	totalHere = (tasa/360)*(this.spanRange2)*(this.spanRange1)
	    	totalHere = totalHere / 100

	    	var IVA = .16
	    	var IVAAplicado = 0
	    	IVAAplicado = totalHere * IVA
	    	totalHere = totalHere + IVAAplicado
	    	return totalHere.toFixed(2)
	    },
	    total: function(){
	    	var total = parseFloat(this.intereses) + parseFloat(this.spanRange1)
	    	return total.toFixed(2)
	    }
	}
});
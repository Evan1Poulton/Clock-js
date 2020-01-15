
function checkTime(m) {
	if (m < 10) 
		m = "0" + m	
	return m
}
function twelvehour(h) {
	if (h>12){
		var f = h-12
		return f;

	}
	if (h==0){
		return 12

	}
	else	
		return h
}

function get_ampm(h){
	if (h<12)
		return "AM"
	if (h>=12)
	   return "PM"
}
function start() {
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()

	var ampm = get_ampm(h)


	m = checkTime(m)	
	h = twelvehour(h)	


    document.getElementById('time').innerHTML = h + ":" + m + " " + ampm

    var t = setTimeout(start, 2*1000) 
}

var _hide_details = false
var count = 0


function toggle(){

	var info = document.getElementById('info');
	

	if(_hide_details == false)
		_hide_details = true
	else
		_hide_details = false
	
	

	if(_hide_details == true && count%2==0){
		info.style.display = 'none'
	
	}
	else{
		info.style.display = 'block'
	
	}
		
	
	count++
}


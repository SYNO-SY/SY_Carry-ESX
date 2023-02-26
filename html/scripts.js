function closeMain() {
	$("body").css("display", "none");
}
function openMain() {
	$("body").css("display", "block");
}


$(".closetypemenu").click(function(){
    $.post('http://SY_Carry/closetypeselect', JSON.stringify({}));
});

window.addEventListener('message', function (event) {

	var item = event.data;	

	if (item.message == "showtypes") {
		$('#carryreceiever').hide();
		$('#carryrequester').hide();
		$('#carryed').hide();
		$('#carrytype').show();
		openMain();
	}			
	
	if (item.message == "hide") {
		closeMain();
		$('#carryreceiever').hide();
		$('#carryrequester').hide();
		$('#carrytype').hide();
		$('#carryed').hide();
	}
});

$(".carry1select").click(function () {
	closeMain();
	$('#carryreceiever').hide();
	$('#carryrequester').hide();
	$('#carryed').hide();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type1"
	}));
});

$(".carry2select").click(function () {
	closeMain();
	$('#carryreceiever').hide();
	$('#carryrequester').hide();
	$('#carryed').hide();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type2"
	}));
});

$(".carry3select").click(function () {
	closeMain();
	$('#carryreceiever').hide();
	$('#carryrequester').hide();
	$('#carryed').hide();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type3"
	}));
});

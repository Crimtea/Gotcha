// JavaScript Document

var var_light = document.getElementById("text_light");
var var_air = document.getElementById("text_air");

var goLight = document.getElementById("goLight");
var goAir = document.getElementById("goAir");

var lightRecharge = document.getElementById("lightRecharge");
var airRecharge = document.getElementById("airRecharge");

lightRecharge.addEventListener("click", function() {
	if (var_light.value == ''){
		alert("请输入金额");
	}else if (var_light.value < 6){
		alert("充值金额不可低于6元")
	}else {
		window.open('http://dk.suet.edu.cn/dk_pay/wx_pay.php?data={%22xiaoqu%22:%224865894c-9415-4035-a5be-c8ceebd2702a%22,%22louzuo%22:%222b27c349-9851-45bb-b15f-09637c413dfd%22,%22louceng%22:%2212%22,%22sushe%22:%226e809e33-3b1a-4903-baa3-f2e43898c127%22,%22price%22:%22'+(var_light.value - var_light.value%6)+'%22}','_self');
	}
})

airRecharge.addEventListener("click", function() {
	if (var_air.value == ''){
		alert("请输入金额");
	}else if (var_light.value < 6){
		alert("充值金额不可低于6元")
	}else {
		window.open('http://dk.suet.edu.cn/dk_pay/wx_pay.php?data={%22xiaoqu%22:%22ba84c2fb-5bf7-459e-976d-bdee08ec036f%22,%22louzuo%22:%222aac1ebb-4d96-4878-8fc5-35b5af774e61%22,%22louceng%22:%2212%22,%22sushe%22:%223983f93d-6002-4045-a55d-1da2efdc2794%22,%22price%22:%22'+(var_air.value - var_air.value%6)+'%22}','_self');
	}
})

goLight.addEventListener("click", function() {
  window.open('http://dk.suet.edu.cn/dk_pay/chongzhi_list.php?data=%7B%22sushe%22%3A%226e809e33-3b1a-4903-baa3-f2e43898c127%22%7D','_self');
});

goAir.addEventListener("click", function() {
  window.open('http://dk.suet.edu.cn/dk_pay/chongzhi_list.php?data=%7B%22sushe%22%3A%223983f93d-6002-4045-a55d-1da2efdc2794%22%7D', '_self');
});
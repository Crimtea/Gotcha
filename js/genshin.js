// JavaScript Document

var checkbox = document.getElementById("nextTure");

var run = document.getElementById("run");

// 概率基础
function odds(odds_float) {
  odds_float = Math.floor(odds_float * 1000);
  var i = Math.floor(Math.random() * 1000) + 1;
  if (i <= odds_float) {
    return true;
  } else {
    return false;
  }
}

// 计算第amass_5_int次，出5的概率
function prob_5(amass_5_int){
    if (amass_5_int <= 73){
        return odds(0.006);
    } else if(amass_5_int >= 74 && amass_5_int <= 89){
        return odds((amass_5_int - 73 + 0.1) * 0.06);
    } else{
        return true;
    }
}

checkbox.addEventListener("change", function() {
  if(this.checked) {
    this.value = "1";
  } else {
    this.value = "0";
  }
});

run.onclick = function() {
    var own = Number(document.getElementById("text_own").value); // 拥有的纠缠之缘
    var stone = Number(document.getElementById("text_stone").value); // 拥有的原石
    var amass_5 = document.getElementById("text_amass_5").value; // 已经垫的抽数
    
    own = own + parseInt(stone/160); // 将原石换成纠缠之缘
    alert(prob_5(own));
    
};

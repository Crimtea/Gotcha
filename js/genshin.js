// JavaScript Document

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

// 计算第amass_4_int次，出4的概率
function prob_4(amass_4_int) {
    if (amass_4_int <= 9) {
        return odds(0.1);
    } else {
        return true;
    }
}

// 计算第amass_5_int次，出5的概率
function prob_5(amass_5_int) {
    if (amass_5_int <= 73) {
        return odds(0.006);
    } else if (amass_5_int >= 74 && amass_5_int <= 89) {
        return odds((amass_5_int - 73 + 0.1) * 0.06);
    } else {
        return true;
    }
}

// main
function main(own, amass_4, amass_5,
    nextTrue_4, nextTrue_5,
    code = 0, codeTrue,
    p1, p2, p3) {
    var timer_3 = 0;
    var list_5 = [];
    var up_5 = 0;
    var not_4 = 0;
    var not_5 = 0;
    var all_num = own;

    while (own > 0) {
        own = own - 1;
        if (prob_5(amass_5 + 1)) {
            list_5.push(Number(amass_5));
            amass_4 += 1;
            amass_5 = 0;
            code += 10;
            if (odds(0.5) || nextTrue_5) {
                up_5 += 1;
                nextTrue_5 = false;
            } else {
                not_5 += 1;
                nextTrue_5 = true;
            }
        } else if (prob_4(amass_4 + 1)) { // 抽到四星
            code += 2; // 星辉+2
            amass_4 = 0; // 四星垫卡归零
            amass_5 += 1; // 五星垫卡+1
            if (odds(0.5) || nextTrue_4) { // 50%UP或使用大保底获得四星
                var p_num = Math.floor(Math.random() * 3) + 1;
                switch (p_num) {
                    case 1: // 抽到四星角色一
                        if (p1 < 6) { //命座<6时
                            p1 += 1; // 命座+1
                        } else { // 命座>=6时
                            code += 3; // 星辉额外+3，总计+5
                        }
                        break;
                    case 2:
                        if (p2 < 6) {
                            p2 += 1;
                        } else {
                            code += 3;
                        }
                        break;
                    case 3:
                        if (p3 < 6) {
                            p3 += 1;
                        } else {
                            code += 3;
                        }
                        break;
                }
                nextTrue_4 = false; // 获得四星UP后进入四星小保底
            } else { // 抽到四星非UP
                not_4 += 1; // 统计四星非UP数量
                nextTrue_4 = true; // 进入四星大保底
            }
        } else { // 抽到三星
            amass_4 += 1; // 四星垫卡+1
            amass_5 += 1; // 五星垫卡+1
            timer_3 += 1; // 统计三星卡数量
        }
        if (codeTrue || code >= 5) {
            own = own + parseInt(code / 5);
            all_num = all_num + parseInt(code / 5);
            code = code % 5;
        }
    }
    if (list_5.length == 0) {
        list_5 = [0];
    }
    var up_4 = p1 + p2 + p3;
    var timer_4 = up_4 + not_4;
    var timer_5 = up_5 + not_5;
    var text_amass = `
        总计：${all_num}；\n
        三星卡数量：${timer_3}；\n
        四星卡数量：${timer_4+3}；\n
        五星卡数量：${timer_5}；\n
        四星up卡数量：${up_4+3} [${p1},${p2},${p3}]；\n
        五星up卡数量：${up_5}；\n
        五星占比为：${(((timer_5 / all_num) * 100).toFixed(2) + "%")}；\n
        五星平均次数：${(list_5.reduce((total, current) => total + current, 0)/list_5.length).toFixed(2)}。\n`;
    //    alert(list_5);
    return text_amass;

}

run.onclick = function () {
    var own = Number(document.getElementById("text_own").value) || 0; // 拥有的纠缠之缘
    var stone = Number(document.getElementById("text_stone").value) || 0; // 拥有的原石
    var amass_4 = document.getElementById("text_amass_4").value || 0; // 已经垫的抽数
    var amass_5 = document.getElementById("text_amass_5").value || 0; // 已经垫的抽数
    var nextTrue_4 = document.getElementById("nextTrue_4").checked;
    var nextTrue_5 = document.getElementById("nextTrue_5").checked;
    var code = document.getElementById("text_code").value || 0;
    var codeTrue = document.getElementById("codeTrue").checked;
    var p1 = Number(document.getElementById("p1").value) || -1;
    var p2 = Number(document.getElementById("p2").value) || -1;
    var p3 = Number(document.getElementById("p3").value) || -1;
    if (p1 > 6 || p2 > 6 || p3 > 6) {
        alert("四星角色的命座输入有误，请重新输入。");
    } else {
        own = own + parseInt(stone / 160); // 将原石换成纠缠之缘
        if (own >= 1 || code >= 5) {
            if (own < 1) {
                alert("由于纠缠之缘个数不足1，且原石不足160，自动使用了最初始的星辉。");
                own = own + parseInt(code / 5);
                code = code % 5;
            }
            var text_end = main(own, amass_4, amass_5, nextTrue_4, nextTrue_5, code, codeTrue, p1, p2, p3);
            alert(text_end);
        } else {
            alert("现资源不足一抽，无法开始模拟。");
        }
    }
};

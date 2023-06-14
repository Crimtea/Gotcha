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
function main(own, stone, amass_4, amass_5,
    nextTrue_4, nextTrue_5,
    code = 0, codeTrue,
    p1, p2, p3) {
    own = own + parseInt(stone / 160);
    var timer_3 = 0;
    var list_5 = [];
    var up_5 = 0;
    var not_4 = 0;
    var not_5 = 0;
    var all_num = own;

    if (own <= 0) {
        return 0;
    }

    while (own > 0) {
        own = own - 1;
        if (prob_5(amass_5 + 1)) {
            list_5.push(amass_5);
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
        } else if (prob_4(amass_4 + 1)) {
            code += 2;
            amass_4 = 0;
            amass_5 += 1;
            if (odds(0.5) || nextTrue_4) {
                var p_num = Math.floor(Math.random() * 3) + 1;
                switch (p_num) {
                    case 1:
                        if (p1 < 7) {
                            p1 += 1;
                        } else {
                            code += 3;
                        }
                        break;
                    case 2:
                        if (p2 < 7) {
                            p2 += 1;
                        } else {
                            code += 3;
                        }
                        break;
                    case 3:
                        if (p3 < 7) {
                            p3 += 1;
                        } else {
                            code += 3;
                        }
                        break;
                }
                nextTrue_4 = false;
            } else {
                not_4 += 1;
                nextTrue_4 = true;
            }
        } else {
            amass_4 += 1;
            amass_5 += 1;
            timer_3 += 1;
        }
        if (codeTrue && code >= 5) {
            own += parseInt(stone / 160);
            all_num += parseInt(stone / 160);
            code = code % 5;
        }
    }
    if (list_5.length == 0) {
        list_5 = [0];
    }
    var up_4 = p1 + p2 + p3;
    var timer_4 = up_4 + not_4;
    var timer_5 = up_5 + not_5;
    var list_amass = [timer_3, timer_4+3, timer_5, up_4+3, up_5,
        (((timer_5 / all_num) * 100).toFixed(2) + "%"),
        ((list_5.reduce((total, currentValue) =>
            total + currentValue, 0) / list_5.length))
    ];
    return list_amass;

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
    var p1 = document.getElementById("text_p1") || -1;
    var p2 = document.getElementById("text_p2") || -1;
    var p3 = document.getElementById("text_p3") || -1;



    own = own + parseInt(stone / 160); // 将原石换成纠缠之缘
    var list_end = main(own, stone, amass_4, amass_5, nextTrue_4.value, nextTrue_5.value, code, codeTrue.value, p1, p2, p3);
    alert(list_end);
//    var list_test = [own, stone, amass_4, amass_5, nextTrue_4, nextTrue_5, code, codeTrue, p1, p2, p3];
//    alert(list_test);

};

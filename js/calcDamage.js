// JavaScript Document

var run = document.getElementById("calc");

run.onclick = function () {
    var atk = Number(document.getElementById("text_atk").value) || 0; // 攻击值
    var mult = Number(document.getElementById("text_mult").value) || 0; // 倍率
    var crt = Number(document.getElementById("text_crt").value) || 0; // 暴击率
    var crt_bonus = Number(document.getElementById("text_crt_bonus").value) || 0; // 暴击伤害
    var bonus = Number(document.getElementById("text_bonus").value) || 0; // 属性加成
    var reaction = Number(document.getElementById("select_reaction").value) || 1.0; // 元素反应
    var pro = Number(document.getElementById("text_pro").value) || 0; // 精通加成
    var plv = Number(document.getElementById("text_plv").value) || 90; // 人物等级
    var mlv = Number(document.getElementById("text_mlv").value) || 86; // 怪物等级
    var de = Number(document.getElementById("text_de").value) || 10; // 怪物抗性

    var z_atk = atk;
    var z_mult = mult / 100;
    var z_crt = 1 + (crt / 100) * (crt_bonus / 100);
    var z_bonus = 1 + (bonus / 100);
    var z_reaction = reaction * (1 + pro / 100);
    var z_defense = (plv + 100) / (plv + mlv + 200);
    var z_de = 1 - (de / 100);

    var damage = z_atk * z_mult * z_bonus * z_reaction * z_defense * z_de;
    var damage_crt = damage * (1 + (crt_bonus / 100))
    var damage_avg = damage * z_crt

    alert(`计算结果：\n
    暴击伤害：${damage_crt.toFixed(0)}
    伤害期望：${damage_avg.toFixed(0)}\n
    [详细数据]
        攻击值：${atk}
        倍率：${mult}%
        暴击率：${crt}%
        暴击伤害：${crt_bonus}%
        属性加成：${bonus}%
        元素系数：${reaction}
        精通加成：${pro}%
        人物等级：${plv};
        怪物等级：${mlv};
        怪物抗性：${de}%`)
//    alert(`暴击伤害为：${damage_crt.toFixed(0)}\n伤害期望为：${damage_avg.toFixed(0)}`)
}

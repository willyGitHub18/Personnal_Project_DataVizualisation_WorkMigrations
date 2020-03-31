// Events triggered when legend clicked
document.getElementById("left1").addEventListener("click", function(d) {
    var paris = "75"
    var seineEtMarne = "77"
    var yvelines = "78"
    var essonne = "91"
    var hautsDeSeine = "92"
    var seineSaintDenis = "93"
    var valDeMarne = "94"
    var valOise = "95"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === paris && l[l.length-1].dpt === seineEtMarne && l[l.length-1].dpt === yvelines
            && l[l.length-1].dpt === essonne && l[l.length-1].dpt === hautsDeSeine && l[l.length-1].dpt === seineSaintDenis
            && l[l.length-1].dpt === valDeMarne && l[l.length-1].dpt === valOise; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != paris && l[l.length-1].dpt != seineEtMarne && l[l.length-1].dpt != yvelines
            && l[l.length-1].dpt != essonne && l[l.length-1].dpt != hautsDeSeine && l[l.length-1].dpt != seineSaintDenis
            && l[l.length-1].dpt != valDeMarne && l[l.length-1].dpt != valOise; })
        .classed("downlight", true);

    // On click, departments hilighted
    d3.select("#dpt_77").classed("landlight", true)
    d3.select("#dpt_86").classed("landlight", true)
    d3.select("#dpt_101").classed("landlight", true)
    d3.select("#dpt_33").classed("landlight", true)
    d3.select("#dpt_50").classed("landlight", true)
    d3.select("#dpt_88").classed("landlight", true)
    d3.select("#dpt_94").classed("landlight", true)
    d3.select("#dpt_93").classed("landlight", true)

});

document.getElementById("left2").addEventListener("click", function(d) {
    var oise = "60"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === oise; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != oise; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_75"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left3").addEventListener("click", function(d) {
    var vaucluse = "84"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === vaucluse; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != vaucluse; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_96"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left4").addEventListener("click", function(d) {
    var saoneEtLoire = "71"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === saoneEtLoire; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != saoneEtLoire; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_83"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left5").addEventListener("click", function(d) {
    var illeEtVilaine = "35"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === illeEtVilaine; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != illeEtVilaine; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_52"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left6").addEventListener("click", function(d) {
    var drome = "26"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === drome; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != drome; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_32"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left7").addEventListener("click", function(d) {
    var orne = "61"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === orne; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != orne; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_76"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left8").addEventListener("click", function(d) {
    var maineEtLoire = "49"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === maineEtLoire; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != maineEtLoire; })
        .classed("downlight", true);

    // On hover, departments hilighted
    cityId = "dpt_65"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left9").addEventListener("click", function(d) {
    var hautRhin = "68"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === hautRhin; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != hautRhin; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_40"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("left10").addEventListener("click", function(d) {
    var eure = "27"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt === eure; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .filter(function(l) { return l[l.length-1].dpt != eure; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_34"
    d3.select("#" + cityId).classed("landlight", true)
});

// Same rules for right legend
document.getElementById("right1").addEventListener("click", function(d) {
    var paris = "75"
    var seineEtMarne = "77"
    var yvelines = "78"
    var essonne = "91"
    var hautsDeSeine = "92"
    var seineSaintDenis = "93"
    var valDeMarne = "94"
    var valOise = "95"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === paris && l[l.length-1].dpt === seineEtMarne && l[l.length-1].dpt === yvelines
            && l[l.length-1].dpt === essonne && l[l.length-1].dpt === hautsDeSeine && l[l.length-1].dpt === seineSaintDenis
            && l[l.length-1].dpt === valDeMarne && l[l.length-1].dpt === valOise; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != paris && l[l.length-1].dpt != seineEtMarne && l[l.length-1].dpt != yvelines
            && l[l.length-1].dpt != essonne && l[l.length-1].dpt != hautsDeSeine && l[l.length-1].dpt != seineSaintDenis
            && l[l.length-1].dpt != valDeMarne && l[l.length-1].dpt != valOise; })
        .classed("downlight", true);

    // On click, departments hilighted
    d3.select("#dpt_77").classed("landlight", true)
    d3.select("#dpt_86").classed("landlight", true)
    d3.select("#dpt_101").classed("landlight", true)
    d3.select("#dpt_33").classed("landlight", true)
    d3.select("#dpt_50").classed("landlight", true)
    d3.select("#dpt_88").classed("landlight", true)
    d3.select("#dpt_94").classed("landlight", true)
    d3.select("#dpt_93").classed("landlight", true)
});

document.getElementById("right2").addEventListener("click", function(d) {
    var bouchesDuRhone = "13"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === bouchesDuRhone; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != bouchesDuRhone; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_18"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right3").addEventListener("click", function(d) {
    var loireAtlantique = "44"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === loireAtlantique; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != loireAtlantique; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_60"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right4").addEventListener("click", function(d) {
    var rhone = "69"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === rhone; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != rhone; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_82"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right5").addEventListener("click", function(d) {
    var gard = "30"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === gard; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != gard; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_37"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right6").addEventListener("click", function(d) {
    var eureEtLoir = "28"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === eureEtLoir; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != eureEtLoir; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_35"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right7").addEventListener("click", function(d) {
    var marne = "51"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === marne; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != marne; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_67"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right8").addEventListener("click", function(d) {
    var ain = "01"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === ain; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != ain; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_6"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right9").addEventListener("click", function(d) {
    var deuxSevres = "79"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === deuxSevres; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != deuxSevres; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_29"
    d3.select("#" + cityId).classed("landlight", true)
});

document.getElementById("right10").addEventListener("click", function(d) {
    var mayenne = "53"

    // Paths action when department clicked in legend
    // Shows only paths for the clicked department (incoming paths)
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt === mayenne; })
        .classed("highlight", true);
    d3.select("#plot").selectAll(".move_SN")
        .classed("downlight", true);
    d3.select("#plot").selectAll(".move_NS")
        .filter(function(l) { return l[l.length-1].dpt != mayenne; })
        .classed("downlight", true);

    // On click, departments hilighted
    cityId = "dpt_68"
    d3.select("#" + cityId).classed("landlight", true)
});

document.addEventListener("mouseout", function() {
    // Map flow is back to normal, every path os displayed
    d3.select("#plot").selectAll(".move_NS")
    .classed("highlight downlight", false);
    d3.select("#plot").selectAll(".move_SN")
    .classed("highlight downlight", false);

    // Departments hover highlight off
    d3.select("#dpt_77").classed("landlight", false);
    d3.select("#dpt_86").classed("landlight", false);
    d3.select("#dpt_101").classed("landlight", false);
    d3.select("#dpt_33").classed("landlight", false);
    d3.select("#dpt_50").classed("landlight", false);
    d3.select("#dpt_88").classed("landlight", false);
    d3.select("#dpt_94").classed("landlight", false);
    d3.select("#dpt_93").classed("landlight", false);
    d3.select("#dpt_75").classed("landlight", false);
    d3.select("#dpt_96").classed("landlight", false);
    d3.select("#dpt_83").classed("landlight", false);
    d3.select("#dpt_52").classed("landlight", false);
    d3.select("#dpt_32").classed("landlight", false);
    d3.select("#dpt_76").classed("landlight", false);
    d3.select("#dpt_65").classed("landlight", false);
    d3.select("#dpt_40").classed("landlight", false);
    d3.select("#dpt_34").classed("landlight", false);
    d3.select("#dpt_18").classed("landlight", false);
    d3.select("#dpt_60").classed("landlight", false);
    d3.select("#dpt_82").classed("landlight", false);
    d3.select("#dpt_37").classed("landlight", false);
    d3.select("#dpt_35").classed("landlight", false);
    d3.select("#dpt_67").classed("landlight", false);
    d3.select("#dpt_6").classed("landlight", false);
    d3.select("#dpt_29").classed("landlight", false);
    d3.select("#dpt_68").classed("landlight", false);
})
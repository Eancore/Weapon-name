/*Un-Minified Version (sorry brain :( original intent was for file size) of the Name Your Weapon Plugin
Author:GameFreakBoy
Version:1.0 */
BBLog.handle("add.plugin", {
    id: "weapon-pet-name",
    name: "Weapon Pet Name",
    translations: {
        "en": {
            "text.field": "Weapon_Name",
            "header": "Name",
            "reset": "Reset",
            "enter": "Hit_Enter_To_Accept"
        }
    },
    init: function (instance) {
        instance.weaponName(instance);
    },
    domchange: function (instance) {
        instance.weaponName(instance);
    },
    weaponName: function (instance) {
        if (BBLog.cache("mode") == "bf4") {
            $(document).ready(function () {
                (function ($) {
                    $.fn.specifAppend = function (amountAppend, child, appItem) {
                        if ($(this).children(child).length < amountAppend) {
                            $(this).append(appItem);
                        }
                    };
                })(jQuery);
                if ($(".breadcrumb > li:nth-child(3)").length == 1) {
                    var htmlBox = '<div id="weapon-name" class="row-fluid"><div class="box loadout-item-container type-appearance"><header class="loadout-item-title"><h1>' + instance.t("header") + '</h1></header><div class="loadout-item-info box-content"><form style="position:relative; left:3px; top:3px" data-tooltip=' + instance.t("enter") + '><input type="text" placeholder=' + instance.t("text.field") + '></form></div></div></div>';
                    var htmlReset = '<button id="reset-name" type="button" class="btn btn-tiny" data-tooltip="Default Name" style="position:relative; left:174px; top:-21px"><i></i>' + instance.t("reset") + '</button>';
                    $("#loadout-menus #kit-loadout").specifAppend(1, "#weapon-name", htmlBox);
                    $("#loadout-menus #weapon-name .loadout-item-info").specifAppend(1, "#reset-name", htmlReset);
                }
                $(".loadout-item-info #reset-name").on("click", function () {
                    if (localStorage.getItem(wepBread) !== null) {
                        localStorage.removeItem(wepBread);
                        console.log("Local Storage Removed And Limit Down By 1");
                        var getLim = parseInt(localStorage.getItem("Nalimit"));
                        localStorage.setItem("Nalimit", getLim - 1);
                    }
                });
                var wepBread = $.trim($(".breadcrumb > li:nth-child(3) > a:nth-child(1)").html());
                $("#weapon-name input").bind("enterKey", function (e) {
                    var Nlimit = localStorage.getItem("Nalimit");
                    if (Nlimit === null || Nlimit == 0) {
                        localStorage.setItem("Nalimit", 1);
                    }
                    var next = parseInt(localStorage.getItem("Nalimit"));
                    if (Nlimit >= 1 && localStorage.getItem(wepBread) === null) {
                        localStorage.setItem("Nalimit", ++next);
                    }
                    if (localStorage.getItem("Nalimit") <= 10) {
                        var newNm = $("#weapon-name input").val();
                        var nameArray = [];
                        nameArray.push(wepBread);
                        nameArray.push(newNm);
                        localStorage.setItem(wepBread, JSON.stringify(nameArray));
                    } else {
                        BBLog.alert("testing");
                        if ($("#popup-testing").length == 1) {
                            $("#popup-testing header h3").html("OUT OF SPACE :(");
                            $("#popup-testing section div").html("<p style='font-size:13px'>You have too many weapons named. Wouldn't want you to take up too much of your browsers space would we?</p><br><p style='font-size:15px'>Reset some for more space!</p>");
                        }
                        localStorage.setItem("Nalimit", 10);
                    }
                });
                $("#weapon-name input").keyup(function (e) {
                    if (e.keyCode == 13) {
                        $(this).trigger("enterKey");
                    }
                });
                var kit = $("#slot-0 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1)");
                var kitWep = $.trim(kit.html());
                var A = JSON.parse(localStorage.getItem(kitWep));
                if (localStorage.getItem(kitWep) !== "null" && $.inArray(kitWep, A) > -1) {
                    var exNmA = A[1];
                    kit.html(exNmA);
                }
                var side = $("#slot-1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1)");
                var sideWep = $.trim(side.html());
                var B = JSON.parse(localStorage.getItem(sideWep));
                if (localStorage.getItem(sideWep) !== "null" && $.inArray(sideWep, B) > -1) {
                    var exNmB = B[1];
                    side.html(exNmB);
                }
                $(".loadout-item-grid .items-select-item-name span").each(function () {
                    var ht = $.trim($(this).html());
                    var C = JSON.parse(localStorage.getItem(ht));
                    if (localStorage.getItem(ht) !== "null" && $.inArray(ht, C) > -1) {
                        var exNmC = C[1];
                        $(this).html(exNmC);
                    }
                });
                $(".row .loadout-kit-container .loadout-item-name span").each(function () {
                    var ct = $.trim($(this).html());
                    var D = JSON.parse(localStorage.getItem(ct));
                    if (localStorage.getItem(ct) !== "null" && $.inArray(ct, D) > -1) {
                        var exNmD = D[1];
                        $(this).html(exNmD);
                    }
                });
                $("#weapon-list .weapons-stat-tbl .relative p").each(function () {
                    var dt = $.trim($(this).html());
                    var E = JSON.parse(localStorage.getItem(dt));
                    if (localStorage.getItem(dt) !== "null" && $.inArray(dt, E) > -1) {
                        var exNmE = E[1];
                        $(this).html(exNmE);
                    }
                });
                var det = $(".stat-details #weapon-details .box-content h4");
                var detH = $.trim(det.html());
                var F = JSON.parse(localStorage.getItem(detH));
                if (localStorage.getItem(detH) !== "null" && $.inArray(detH, F) > -1) {
                    var exNmF = F[1];
                    det.html(exNmF);
                }
                $(".weapon-stats-box .weapon-stats-list li p").each(function () {
                    var dat = $.trim($(this).html());
                    var G = JSON.parse(localStorage.getItem(dat));
                    if (localStorage.getItem(dat) !== "null" && $.inArray(dat, G) > -1) {
                        var exNmG = G[1];
                        $(this).html(exNmG);
                    }
                });
            });
        }
    }
});
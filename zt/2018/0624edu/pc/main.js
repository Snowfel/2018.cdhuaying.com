$(document).ready(function () {
    $(".content").mCustomScrollbar({
        scrollButtons: {
            enable: true
        },
        theme: "inset-3-dark"
    });

    $('body').scrollspy({target: '.navbar'});


    //绑定滚动条事件

    var showTopHeight = 1000; //底部报名框出现时机
    var realShow = 1;
    var setShow = 0;
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        sTop = parseInt(sTop);
        if (sTop < showTopHeight) {
            if ($(".g-pop-bottom").position().left == 0) {
                setShow = 0;
            }
        }
        else {
            if ($(".g-pop-bottom").position().left < 0) {
                setShow = 1;
            }
        }
        //console.log(realShow + ' '+setShow);
        if (realShow == 1 && setShow == 0) {
            realShow = 0;
            $(".g-pop-bottom").animate({"left": "-100%"}, function () {
                $(".g-left-fix").animate({"left": "0"});
            });
        } else if (realShow == 0 && setShow == 1) {
            realShow = 1;
            $(".g-left-fix").animate({"left": "-100%"}, function () {
                $(".g-pop-bottom").animate({"left": "0"});
                realShow = 1;
            })
        }
    });

});

$(function () {
    $(".m-act ul li").each(function (i) {
        $(this).hover(function () {
            $(".m-act li").eq(i).addClass("on").siblings(".m-act li").removeClass("on");
            $('.m-act .m-content').eq(i).removeClass("d-none").siblings('.m-act .m-content').addClass("d-none");
        })
    });
    $(".m-act .m-content dl").each(function (i) {
        $(this).hover(function () {
            $(this).addClass("active").siblings(".m-act .m-content dl").removeClass("active");
            $(this).find('dd').removeClass("d-none");
            $(this).siblings('.m-act .m-content dl').find('dd').addClass("d-none");
        })
    });

    $(".m-offer-slide ul li").each(function (i) {
        $(this).hover(function () {
            $(".m-offer-slide li").eq(i).addClass("on").siblings(".m-offer-slide li").removeClass("on");
            $('.m-offer-slide table').eq(i).show().siblings('.m-offer-slide table').hide();
        })
    });

    $(".m-sch .m-nav li").each(function (i) {
        $(this).click(function () {
            $(".m-sch .m-nav li").eq(i).addClass("active").siblings(".m-sch .m-nav li").removeClass("active");
            $(".m-sch .m-cc").eq(i).removeClass("d-none").siblings(".m-sch .m-cc").addClass("d-none");
        })
    });

    $(".m-fixed .u-close-fixed-form").on('click', function () {
        $(".g-pop-bottom").animate({"left": "-100%"}, function () {
            $(".g-left-fix").animate({"left": "0"})
        });
    });
    $(".g-left-fix").on('click', function () {
        $(".g-left-fix").animate({"left": "-100%"}, function () {
            $(".g-pop-bottom").animate({"left": "0"})
        })
    });
    $(".u-btn-order-submit").on('click', function () {
        arrOrderInfo = new Array();
        arrOrderInfo['title'] = $(this).attr('data-title');
        arrOrderInfo['uname'] = $("#" + $(this).attr('data-rel') + "-uname").val();
        arrOrderInfo['umobile'] = $("#" + $(this).attr('data-rel') + "-umobile").val();
        arrOrderInfo['wt_guojia'] = $("#" + $(this).attr('data-rel') + "-ctry").val();
        arrOrderInfo['cr_xueli'] = $('input[name="' + $(this).attr('data-rel') + '-edu[]"]:checked').val();
        arrOrderInfo['source'] = '华樱网站';
        orderInfoPost(arrOrderInfo);
    });
    $(".u-btn-pop-order-submit").on('click', function () {
        //$(this).attr('data-rel')
        arrOrderInfo = new Array();
        arrOrderInfo['title'] = $(this).attr('data-title');
        arrOrderInfo['uname'] = $("#" + $(this).attr('data-rel') + "-uname").val();
        arrOrderInfo['umobile'] = $("#" + $(this).attr('data-rel') + "-umobile").val();
        arrOrderInfo['wt_guojia'] = $("#" + $(this).attr('data-rel') + "-ctry").val();
        arrOrderInfo['source'] = '华樱网站';
        orderInfoPost(arrOrderInfo);
    });
});

function getCheckBoxValue(cblid) {
    var a = "";
    $('input[type="checkbox"][name="' + cblid + '"]:checked').each(
        function () {
            if (a == "") {
                a = $(this).val();
            } else {
                a += "," + $(this).val();
            }
        }
    );
    return a;
}//获取多选框Value

/**
 * 底部报名提交
 */
function orderInfoPost(arrOrderInfo) {
    if (Array.isArray(arrOrderInfo)) {

        console.debug(arrOrderInfo['cr_xueli']);
        if(arrOrderInfo['cr_xueli']){
            cr_xueli = arrOrderInfo['cr_xueli'];
        } else {
            cr_xueli = '';
        }
        console.debug(cr_xueli);

        var dataArr = {
            uTitle: arrOrderInfo['title'],
            uName: arrOrderInfo['uname'],
            uMobile: arrOrderInfo['umobile'],
            Wt_guojia: arrOrderInfo['wt_guojia'],

            uSex: '',
            uPhone: '',
            uQQ: '',
            uEmail: '',
            uCity: '',
            Cr_xueli: cr_xueli,
            Wt_xueli: '',
            Cr_yusuan: '',
            Wt_shijian: '',
            Yx_guojia: '',
            Cr_xuexiao: '',
            Wt_xuexiao: '',
            Cr_zhuanye: '',
            Wt_zhuanye: '',
            uIelts: '',
            uToefl: '',
            uSat: '',
            uGmat: '',
            uGre: '',
            uJtest: '',
            Wt_more: '',
            uGrade: '',
            uWechat: '',
            uOther: '',
            uOther_check: '',
            SourceLink: window.location.href,
            Source: arrOrderInfo['source']
        };
        if (!dataArr.uName) {
            alert('请填写姓名！');
            return false;
        }
        if (!dataArr.uMobile) {
            alert('请填写电话！');
            return false;
        }

        console.debug(dataArr.uMobile);

        $.ajax({
            url: "/Webhandler/2016_02_19_OverallData.ashx?t=send",
            type: "post",
            async: true,
            data: dataArr,
            success: function (e) {
                alert(e)
            },
            error: function (jqXHR) {
            }
        });
    }
}
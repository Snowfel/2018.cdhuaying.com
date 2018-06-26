/**
 * 报名提交
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
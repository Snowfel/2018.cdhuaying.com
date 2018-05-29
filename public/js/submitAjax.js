function updateInfoString() {
      var sSource = "";
      var oSource = location.search;
      if (oSource == "?hy") {
          sSource ="华樱官网";
      }
      else if (oSource == "?sdgj") {
          sSource ="树德国际";
      }
      else if (oSource == "?sdzx") {
          sSource ="树德中学";
      }
      else if (oSource == "?lanxi") {
          sSource ="兰西小屋";
      }
      else if (oSource == "?baokaoqun") {
          sSource ="树德国际报考群";
      }
      else if (oSource == "?bd") {
          sSource ="百度";
      }
      else if (oSource == "?hy_A01") {
          sSource ="首页顶部横幅";
      }
      else if (oSource == "?hy_A02_1") {
          sSource ="首页中间横幅1";
      }
      else if (oSource == "?hy_A02_2") {
          sSource ="首页中间横幅2";
      }
      else if (oSource == "?hy_A02_3") {
          sSource ="首页中间横幅3";
      }
      else if (oSource == "?hy_A02_4") {
          sSource ="首页中间横幅4";
      }
      else if (oSource == "?hy_A02_5") {
          sSource ="首页中间横幅5";
      }
      else if (oSource == "?hy_A03") {
          sSource ="专题图片";
      }
      else if (oSource == "?hy_A04") {
          sSource ="讲座广告图片";
      }
      else if (oSource == "?hy_A05") {
          sSource ="二级页/内容页横幅";
      }
      else if (oSource == "?hy_A06") {
          sSource ="内容页右侧";
      }
      else if (oSource == "?hy_A07") {
          sSource ="内容页中间";
      }
      else if (oSource == "?hy_A08") {
          sSource ="内容页底部";
      }
      else if (oSource == "?hy_A09") {
          sSource ="全站弹窗";
      }
      else if (oSource == "?hy_A11") {
          sSource ="留学首页顶部横幅";
      }
      else if (oSource == "?hy_A12") {
          sSource ="留学首页中部横幅";
      }
      else if (oSource == "?hy_A13") {
          sSource ="移民首页顶部横幅";
      }
      else {
          sSource ="其他";
      }
        var oSex = "";
        var oGrade = ($("#ugrade").val()) || ($("#ugrade").html());
        var oName = $("#uname").val();
        var oMobile = $("#umobile").val();
        var oPhone = $("#uphone").val();
        var oQQ = $("#qq").val();
        var oEmail = $("#email").val();
        var oCity = $("#city").val();
        var oCr_xueli = ($("#cr_xueli").val()) || ($("#cr_xueli").html());
        var oWt_xueli = ($("#wt_xueli").val()) || ($("#wt_xueli").html());
        var oCr_yusuan = ($("#cr_yusuan").val()) || ($("#cr_yusuan").html());
        var oWt_shijian = ($("#wt_shijian").val()) || ($("#wt_shijian").html());
        var oCr_xuexiao = $("#cr_xuexiao").val();
        var oWt_xuexiao = $("#wt_xuexiao").val();
        var oCr_zhuanye = $("#cr_zhuanye").val();
        var oWt_zhuanye = $("#wt_zhuanye").val();
        var oIelts = $("#ielts").val();
        var oToefl = $("#toefl").val();
        var oSat = $("#sat").val();
        var oGmat = $("#gmat").val();
        var oGre = $("#gre").val();
        var oJtest = $("#jtest").val();
        var oWt_more = $("#wt_more").val();
        var oWechat = $("#wechat").val();
        var oYx_guojia = $("#yx_guojia").html();
        var oTitle = $("h6").html();
        var oSex = $("input[name='sex']:checked").val();
        var oOther = $("#other_infor").val() || $("#other_infor").html();
        var oOther_check = new Array();
        var ocheck = document.getElementsByName("other_check");
        for ( var i = 0; i < ocheck.length; i++) {
            if (ocheck[i].checked) {
                oOther_check.push(ocheck[i].value);
            }
        }
        var other_check = oOther_check.join();
        if (other_check) {
          other_check = oOther_check.join();
        }
        else
        {
          other_check = "";
        }
        var arr = new Array();
        var items = document.getElementsByName("wt_guojia");
        for ( var i = 0; i < items.length; i++) {
            if (items[i].checked) {
                arr.push(items[i].value);
            }
        }
        var aJoin = arr.join();
        if (aJoin) {
          aJoin = arr.join();
        }
        else
        {
          aJoin = "";
        }
        if (oOther) {
          oOther = $("#other_infor").val() || $("#other_infor").html();
        }
        else
        {
          oOther = "";
        }
        if(oSex == undefined)
          {
            oSex = "";
          }
          else
          {
           oSex =  $("input[name='sex']:checked").val() ;
          }
        if (oTitle) {
          oTitle = $("h6").html();
        }
        else
        {
          oTitle = "无<h6>标签";
        }
        if (oYx_guojia) {
          oYx_guojia = $("#yx_guojia").html();
        }
        else
        {
          oYx_guojia = "";
        }

        if (oWechat) {
          oWechat = $("#wechat").val();
        }
        else
        {
          oWechat = "";
        }

        if (oPhone) {
          oPhone = $("#uphone").val();
        }
        else
        {
          oPhone = "";
        }
        if (oGrade) {
          oGrade = $("#ugrade").val() || $("#ugrade").html();
        }
        else
        {
          oGrade = "";
        }
        if (oName) {
          oName = $("#uname").val();
        }
        else
        {
          oName = "";
        }
        if (oQQ) {
          oQQ = $("#qq").val();
        }
        else
        {
          oQQ = "";
        }
        if (oMobile) {
          oMobile = $("#umobile").val();
        }
        else
        {
          oMobile = "";
        }
        if (oEmail) {
          oEmail = $("#email").val();
        }
        else
        {
          oEmail = "";
        }
        if (oCity) {
          oCity = $("#city").val();
        }
        else
        {
          oCity = "";
        }
        if (oCr_xueli == "未选择") {
          oCr_xueli = "";
        }
        else if (oCr_xueli) {
          oCr_xueli = $("#cr_xueli").val() || $("#cr_xueli").html();
        }
        else
        {
          oCr_xueli = "";
        }
        if (oWt_xueli == "未选择") {
          oWt_xueli = "";
        }
        else if (oWt_xueli) {
          oWt_xueli = $("#wt_xueli").val() || $("#wt_xueli").html();
        }
        else
        {
          oWt_xueli = "";
        }
        if (oCr_yusuan == "未选择") {
          oCr_yusuan = "";
        }
        else if (oCr_yusuan) {
          oCr_yusuan = $("#cr_yusuan").val() || $("#cr_yusuan").html();
        }
        else
        {
          oCr_yusuan = "";
        }
        if (oWt_shijian == "未选择") {
          oWt_shijian = "";
        }
        else if (oWt_shijian) {
          oWt_shijian = $("#wt_shijian").val() || $("#wt_shijian").html();
        }
        else
        {
          oWt_shijian = "";
        }
        if (oCr_xuexiao) {
          oCr_xuexiao = $("#cr_xuexiao").val();
        }
        else
        {
          oCr_xuexiao = "";
        }
        if (oWt_xuexiao) {
          oWt_xuexiao = $("#wt_xuexiao").val();
        }
        else
        {
          oWt_xuexiao = "";
        }
        if (oCr_zhuanye) {
          oCr_zhuanye = $("#cr_zhuanye").val();
        }
        else
        {
          oCr_zhuanye = "";
        }
        if (oWt_zhuanye) {
          oWt_zhuanye = $("#wt_zhuanye").val();
        }
        else
        {
          oWt_zhuanye = "";
        }
        if (oIelts) {
          oIelts = $("#ielts").val();
        }
        else
        {
          oIelts = "";
        }
        if (oToefl) {
          oToefl = $("#toefl").val();
        }
        else
        {
          oToefl = "";
        }
        if (oSat) {
          oSat = $("#sat").val();
        }
        else
        {
          oSat = "";
        }
        if (oGmat) {
          oGmat = $("#gmat").val();
        }
        else
        {
          oGmat = "";
        }
        if (oGre) {
          oGre = $("#gre").val();
        }
        else
        {
          oGre = "";
        }
        if (oJtest) {
          oJtest = $("#jtest").val();
        }
        else
        {
          oJtest = "";
        }
        if (oWt_more) {
          oWt_more += $("#wt_more").val();
        }
        else
        {
          oWt_more = "";
        }

        console.log(other_check+"|"+oOther+"|"+oGrade+"|" +oCr_xuexiao );
        $.ajax({
            url: "/Webhandler/2016_02_19_OverallData.ashx?t=send",
            type: "post",
            async: false,//设为同步执行
            data: {
                uName: oName,
                uSex:oSex,
                uMobile: oMobile,
                uPhone: oPhone,
                uQQ:oQQ,
                uEmail:oEmail,
                uCity:oCity,
                Cr_xueli:oCr_xueli,
                Wt_xueli:oWt_xueli,
                Cr_yusuan:oCr_yusuan,
                Wt_shijian:oWt_shijian,
                Wt_guojia:aJoin,
                Yx_guojia:oYx_guojia,
                Cr_xuexiao:oCr_xuexiao,
                Wt_xuexiao:oWt_xuexiao,
                Cr_zhuanye:oCr_zhuanye,
                Wt_zhuanye:oWt_zhuanye,
                uIelts:oIelts,
                uToefl:oToefl,
                uSat:oSat,
                uGmat:oGmat,
                uGre:oGre,
                uJtest:oJtest,
                Wt_more:oWt_more,
                uGrade:oGrade,
                uWechat:oWechat,
                uOther:oOther,
                uOther_check:other_check,
                uTitle:oTitle,
                SourceLink:window.location.href,
                Source:sSource
            },
            success: function (e) {
                //这里如果弹出了路径，说明执行正确
                // $("[name=c_js]:checkbox").prop("checked", false)
                alert(e);
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            },
        });
};


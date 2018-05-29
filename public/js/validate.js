(function () {
    $validate = window.$validate = function (options) {
        return new $validate.prototype.init(options);	
    };
    $validate.prototype = {
        valilist: [
            { name: "isEmail", expression: /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/, message: "邮箱格式不正确" },
            { name: "isNull", expression: /\S/, message: "此项不能为空" },
            {name: "isMobile",expression:/^1\d{10}$/,message:"电话号码格式不正确"},
            {name: "isID",expression:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/,message:"请填写18位身份证号"}
        //自己加
        ],
        extend: function EvUpdate(NewObject, OldObject) {
            function clonePrototype() { }
            clonePrototype.prototype = NewObject;
            var obj = new clonePrototype();
            for (var ele in obj) {
                if (typeof (obj[ele]) == "object")
                    EvUpdate(obj[ele], OldObject[ele]);
                else
                    OldObject[ele] = obj[ele];
            }
        },
        config: { doc: null, realtime: false, callback: null, uiback: null, tags: "input", valiattr: "data-validate-option", valimessageattr: "data-validate-message" },
        init: function (options) {
            this.extend(options, this.config);
            if (typeof (this.config.doc) == "string") {
                this.config.doc = document.getElementById(this.config.doc);
            }
            return this;
        },
        serch: function (name) {
            for (var i = 0; i < this.valilist.length; i++) {
                if (name == this.valilist[i].name) {
                    return this.valilist[i];
                }
            }
            return null;
        },
        begin: function () {
            if (!this.config.doc) {
                return false;
            }
            if (this.config.doc.tagName.toLowerCase() != "input" && this.config.doc.tagName.toLowerCase() != "select") {
                var alls = new Array();
                alls.push(this.config.doc.getElementsByTagName("input"));
                alls.push(this.config.doc.getElementsByTagName("select"));
                for (var i = 0; i < alls.length; i++) {
                    for (var y = 0; y < alls[i].length; y++) {
                        var valitype = alls[i][y].getAttribute(this.config.valiattr);
                        var valione = this.serch(valitype);
                        if (valitype && valione) {
                            var value = alls[i][y].value;
                            var message = alls[i][y].getAttribute(this.config.valimessageattr);
                            var result = value.match(valione.expression);
                            if (result == null) {
                                this.show(alls[i][y], valione, message);
                                return false;
                            }
                        }
                    }
                }
            }
            else {
                var valitype = this.config.doc.getAttribute(this.config.valiattr);
                var valione = this.serch(valitype);
                if (valitype && valione) {
                    var value = this.config.doc.value;
                    var message = this.config.doc.getAttribute(this.config.valimessageattr);
                    var result = value.match(valione.expression);
                    if (result == null) {
                        this.show(this.config.doc, valione, message);
                        return false;
                    }
                }
            }
            return true;
        },
        show: function (domone, valione, message) {
            if (this.config.uiback == null) {
                domone.focus();
                var valimessage = message != "" ? message : valione.message;
                var _hg = domone.clientHeight;
                var t = domone.offsetTop;
                var l = domone.offsetLeft;
                while (domone = domone.offsetParent) {
                    t += domone.offsetTop;
                    l += domone.offsetLeft;
                };
                t = t + _hg;
                function parseNode(arg) { var objE = document.createElement("div"); objE.innerHTML = arg; return objE.childNodes[0]; };
                var str = "<div id=\"_lxpfloattip_\" onclick=\"hidefloattooltip()\" style=\"width:" + _hg + "px;z-index: 800000; position: absolute; left: " + l + "px; top: " + t + "px;\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"width:200px\"><tbody><tr style=\"height:auto\"><td class=\"tip_lefttop\"></td><td class=\"tip_top\"></td><td class=\"tip_righttop\"></td></tr><tr><td class=\"tip_left\"></td><td id=\"_lxpfloattip_value\" bgcolor=\"#ffffda\" style=\"color:navy;font-size:14px\">" + valimessage + "</td><td class=\"tip_right\"></td></tr><tr><td class=\"tip_leftbottom\"></td><td class=\"tip_bottom\"></td><td class=\"tip_rightbottom\"></td></tr></tbody></table></div>";
                var validatedemo = parseNode(str);
                document.body.appendChild(validatedemo);
                setTimeout("document.body.removeChild(document.getElementById(\"_lxpfloattip_\"))", 2000);
            }
            else {
                domone.focus();
                this.config.uiback(domone, valione, message);
                //调用客户自定义的提示UI进行提示
            }
        }
    };
    $validate.prototype.init.prototype = $validate.prototype;
})();
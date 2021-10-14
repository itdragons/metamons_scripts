window.__require = function e(t, o, n) {
    function r(a, c) {
        if (!o[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1],
                !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(s, !0);
                    if (i)
                        return i(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = s
            }
            var u = o[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                return r(t[a][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++)
        r(n[a]);
    return r
}({
    App: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1af01jpCQ5Mjq7tgBIhwW3R", "App"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./manager/UIManager")
          , r = e("./manager/SceneManager")
          , i = e("./manager/ControllerManager")
          , a = e("./utils/Utils")
          , c = e("./net/http/HttpAPI")
          , s = e("./manager/RemindManager")
          , l = e("./manager/Global")
          , u = function() {
            function e() {}
            return e.init = function() {
                this.ControllerManager = new i.default,
                this.UIManager = new n.default,
                this.SceneManager = new r.default,
                this.Http = new c.default,
                this.Utils = new a.default,
                this.Remind = new s.default,
                this.Global = new l.default
            }
            ,
            e.ControllerManager = null,
            e.UIManager = null,
            e.SceneManager = null,
            e.Http = null,
            e.Utils = null,
            e.Remind = null,
            e.Global = null,
            e
        }();
        o.default = u,
        cc._RF.pop()
    }
    , {
        "./manager/ControllerManager": "ControllerManager",
        "./manager/Global": "Global",
        "./manager/RemindManager": "RemindManager",
        "./manager/SceneManager": "SceneManager",
        "./manager/UIManager": "UIManager",
        "./net/http/HttpAPI": "HttpAPI",
        "./utils/Utils": "Utils"
    }],
    BackGroundFix: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1e91agmnLRIgKYbggXkzA7c", "BackGroundFix");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.updateSize()
            }
            ,
            t.prototype.onEnable = function() {
                cc.game.on("view-resize", this.updateSize, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.updateSize = function() {
                var e = cc.winSize.height;
                cc.winSize.width > cc.winSize.height && (e = cc.winSize.width + 1),
                this.node.setContentSize(e, e)
            }
            ,
            i([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    BagCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bf5b1E81ltFWofgIbaK061R", "BagCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ConstDefine")
          , l = e("../../../game_framework/consts/ModuleDefine")
          , u = e("../../../game_framework/mvc/BaseController")
          , p = e("../../config/NetConfig")
          , f = e("../../define/EventDefine")
          , d = e("../../platform/Platform")
          , h = e("../data/UserData")
          , m = e("./BagData")
          , g = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.data = new m.default,
                cc.game.on(f.default.User_Bag_Update, t.CS_checkBag, t),
                cc.game.on(f.default.User_Login_GS, t.CS_checkBag, t),
                t
            }
            return r(t, e),
            t.prototype.CS_checkBag = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, o;
                    return a(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return p.NetConfig.getIsLocal() ? (e = {
                                data: {
                                    eggIds: ["109"],
                                    eggNum: 1,
                                    piecesNum: 20,
                                    potionNum: 10,
                                    unActivatedNum: 10
                                },
                                message: "",
                                result: 1
                            },
                            this.SC_checkBag(e),
                            [2]) : (this.data.needUpdateFromGS = !0,
                            t = {
                                address: h.default.instance.getOpenId()
                            },
                            [4, c.default.Http.post(p.NetConfig.url + "checkBag", {}, t).catch(function() {})]);
                        case 1:
                            return (o = n.sent()) ? (this.SC_checkBag(o),
                            [2]) : [2]
                        }
                    })
                })
            }
            ,
            t.prototype.SC_checkBag = function(e) {
                var t = e;
                if (1 == t.result) {
                    for (var o = [], n = ["eggNum", "piecesNum", "unActivatedNum"], r = 0; r < n.length; ++r) {
                        var i = n[r]
                          , a = t.data[i];
                        if (a > 0) {
                            var c = {
                                index: r,
                                itemId: r + 1,
                                itemNum: a
                            };
                            o.push(c)
                        }
                    }
                    this.data.setData(o),
                    this.data.needUpdateFromGS = !1,
                    this.data.setTokenList(e.data.eggIds),
                    h.default.instance.setPotion(t.data.potionNum),
                    cc.game.emit(f.default.User_Bag_Change)
                }
            }
            ,
            t.prototype.CS_mergeEgg = function() {
                return i(this, void 0, void 0, function() {
                    var e = this;
                    return a(this, function() {
                        return [2, new Promise(function(t, o) {
                            return i(e, void 0, void 0, function() {
                                var e, n, r;
                                return a(this, function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return p.NetConfig.getIsLocal() ? (e = {
                                            data: {
                                                nonce: "0x51950a64adf5f42154dc51845e647b3688ad69ec031515a8a30d307c9739a531",
                                                sign: "0xa44fe570633e5dac598e3dc6ebbf8435533ae879175661de0241479f087bc09c31bf511c77404be586029e7b1f3c04bdef6135dd101937f59215b9093f5d31221c"
                                            },
                                            message: "",
                                            result: 1
                                        },
                                        [2, this.SC_mergeEgg(e).then(t).catch(o)]) : (n = {
                                            address: h.default.instance.getOpenId()
                                        },
                                        c.default.UIManager.open(l.ModuleDefine.LoadingTips),
                                        [4, c.default.Http.post(p.NetConfig.url + "composeMonsterEgg", {}, n).catch(o)]);
                                    case 1:
                                        return (r = i.sent()) ? (this.SC_mergeEgg(r).then(t).catch(o),
                                        [2]) : (this.onMergeFailed(),
                                        [2])
                                    }
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            t.prototype.SC_mergeEgg = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    if (1 != e.result)
                        return t.onMergeFailed(),
                        void n();
                    var r = e.data.nonce
                      , u = function() {
                        return i(t, void 0, void 0, function() {
                            var e, t, o = this;
                            return a(this, function(i) {
                                switch (i.label) {
                                case 0:
                                    return e = function() {
                                        n(),
                                        o.onMergeFailed()
                                    }
                                    ,
                                    t = {
                                        address: h.default.instance.getAddress(),
                                        nonce: r
                                    },
                                    [4, c.default.Http.post(p.NetConfig.url + "cancelCMonsterEgg", {}, t).catch(e)];
                                case 1:
                                    return i.sent() && e(),
                                    [2]
                                }
                            })
                        })
                    };
                    d.default.instance.useItem({
                        id: d.default.Define.eItemType.MergeEgg,
                        nonce: r,
                        sign: e.data.sign
                    }).then(function(e) {
                        return i(t, void 0, void 0, function() {
                            var t, r = this;
                            return a(this, function() {
                                return console.log("\u5408\u6210\u7ed3\u679c", e),
                                "ok" == e.message ? t = c.default.Global.interval(function() {
                                    return i(r, void 0, void 0, function() {
                                        var n;
                                        return a(this, function(r) {
                                            switch (r.label) {
                                            case 0:
                                                return [4, h.default.instance.protocol.CS_orderStatus(e.value.hash)];
                                            case 1:
                                                return n = r.sent(),
                                                console.log("\u5408\u6210\u7ed3\u679c \u8f6e\u8be2-----", n),
                                                n && n.data && (c.default.Global.clearInterval(t),
                                                c.default.UIManager.close(l.ModuleDefine.LoadingTips),
                                                c.default.UIManager.open(l.ModuleDefine.FloatText, "Mint successfully"),
                                                cc.game.emit(f.default.User_Bag_Update),
                                                c.default.Global.interval(function() {
                                                    cc.game.emit(f.default.User_Bag_Update)
                                                }, function() {}, 3, 5),
                                                o(e),
                                                cc.game.emit("audio-play", s.eAudio.Merge)),
                                                [2]
                                            }
                                        })
                                    })
                                }, function() {
                                    r.onMergeFailed(),
                                    n()
                                }, 3, 10) : u(),
                                [2]
                            })
                        })
                    }).catch(u)
                }
                )
            }
            ,
            t.prototype.CS_openEgg = function() {
                var e = this;
                return new Promise(function(t, o) {
                    return i(e, void 0, void 0, function() {
                        var e, n, r = this;
                        return a(this, function() {
                            return p.NetConfig.getIsLocal(),
                            e = this.data.getBagItemList().find(function(e) {
                                return 1 == e.itemId
                            }),
                            console.log("\u5f00\u542f\u602a\u517d\u86cb", e, this.data.getBagItemList()),
                            (n = this.data.getTokenList()).length <= 0 ? [2] : (c.default.UIManager.open(l.ModuleDefine.LoadingTips),
                            d.default.instance.useItem({
                                id: d.default.Define.eItemType.OpenEgg,
                                token: n.pop()
                            }).then(function(e) {
                                if (console.log("\u5f00\u542f\u7ed3\u679c", e),
                                "ok" == e.message)
                                    var n = c.default.Global.interval(function() {
                                        return i(r, void 0, void 0, function() {
                                            var o, r;
                                            return a(this, function(i) {
                                                switch (i.label) {
                                                case 0:
                                                    return [4, h.default.instance.protocol.CS_orderStatus(e.value.hash)];
                                                case 1:
                                                    return o = i.sent(),
                                                    console.log("\u5f00\u542f\u7ed3\u679c \u8f6e\u8be2-----", o),
                                                    o && o.data && o.data.status && (c.default.Global.clearInterval(n),
                                                    c.default.UIManager.close(l.ModuleDefine.LoadingTips),
                                                    r = {
                                                        id: o.data.id,
                                                        num: o.data.amount,
                                                        typeStr: o.data.category,
                                                        quality: c.default.Utils.getQualityIndex(o.data.rarity),
                                                        remoteImage: o.data.imageUrl
                                                    },
                                                    c.default.UIManager.open(l.ModuleDefine.IncubationRes, r),
                                                    cc.game.emit(f.default.User_Bag_Update),
                                                    cc.game.emit(f.default.User_All_Role_Update),
                                                    t(e)),
                                                    [2]
                                                }
                                            })
                                        })
                                    }, function() {
                                        r.onOpenFailed(),
                                        o()
                                    }, 2, 10);
                                else
                                    r.onOpenFailed(),
                                    o()
                            }).catch(function() {
                                return i(r, void 0, void 0, function() {
                                    return a(this, function() {
                                        return this.onOpenFailed(),
                                        o(),
                                        [2]
                                    })
                                })
                            }),
                            [2])
                        })
                    })
                }
                )
            }
            ,
            t.prototype.onMergeFailed = function() {
                c.default.UIManager.close(l.ModuleDefine.LoadingTips),
                c.default.UIManager.open(l.ModuleDefine.FloatText, "Mint failed, no transaction result was received. Later, your number of fragments will be updated according to the transaction results."),
                cc.game.emit(f.default.User_Bag_Update)
            }
            ,
            t.prototype.onOpenFailed = function() {
                c.default.UIManager.close(l.ModuleDefine.LoadingTips),
                c.default.UIManager.open(l.ModuleDefine.FloatText, "Open failed, no transaction result was received. Later, your Metamon eggs will be returned according to the transaction results."),
                cc.game.emit(f.default.User_Bag_Update)
            }
            ,
            t.prototype.onRequestFail = function() {
                c.default.UIManager.close(l.ModuleDefine.LoadingTips),
                cc.game.emit(f.default.User_Bag_Update)
            }
            ,
            t
        }(u.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../../define/EventDefine": "EventDefine",
        "../../platform/Platform": "Platform",
        "../data/UserData": "UserData",
        "./BagData": "BagData"
    }],
    BagData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "00061Bt3B1O2LU157lBv6Wp", "BagData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("../../define/EventDefine")
          , c = e("./BagVo")
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._vo = new c.default,
                t.needUpdateFromGS = !1,
                t
            }
            return r(t, e),
            Object.defineProperty(t.prototype, "vo", {
                get: function() {
                    return this._vo
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.setData = function(e) {
                this._vo.itemList = e,
                cc.game.emit(a.default.User_Bag_Change)
            }
            ,
            t.prototype.getBagItemList = function() {
                return this._vo.itemList
            }
            ,
            t.prototype.getItemInfo = function(e) {
                return this.getBagItemList()[e]
            }
            ,
            t.prototype.getTokenList = function() {
                return this._vo.eggTokenList
            }
            ,
            t.prototype.setTokenList = function(e) {
                this._vo.eggTokenList = e
            }
            ,
            t.prototype.getItemCanUse = function(e) {
                var t = !1
                  , o = this.getBagItemList().find(function(t) {
                    return t.itemId == e
                });
                if (o)
                    switch (o.itemId) {
                    case 2:
                        t = o.itemNum >= 1e3
                    }
                return t
            }
            ,
            t.prototype.getCanUseOneOfItem = function() {
                for (var e = !1, t = this.getBagItemList(), o = 0; o < t.length; ++o) {
                    var n = t[o];
                    if (e = this.getItemCanUse(n.itemId))
                        break
                }
                return e
            }
            ,
            t
        }(i.default);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "../../define/EventDefine": "EventDefine",
        "./BagVo": "BagVo"
    }],
    BagItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d7c419joGhOZYOv3gdvMLr3", "BagItem");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lblItemName = null,
                t.lblItemNum = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.init = function(e) {
                this.data = e,
                this.refleshItem()
            }
            ,
            t.prototype.refleshItem = function() {
                this.lblItemNum.string = this.data.itemNum + ""
            }
            ,
            i([s(cc.Label)], t.prototype, "lblItemName", void 0),
            i([s(cc.Label)], t.prototype, "lblItemNum", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    BagView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "44b61Z11FxABq6SgD+3DzPJ", "BagView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../config/client/Cfg")
          , c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ConstDefine")
          , l = e("../../../game_framework/consts/ModuleDefine")
          , u = e("../../../game_framework/mvc/BaseView")
          , p = e("../../define/EventDefine")
          , f = e("../component/item_cell/ItemCell")
          , d = e("../component/scrollview/RecycleScroll")
          , h = e("../component/ui_title/UITitleView")
          , m = ["Mint", "", "Open"]
          , g = ["#888888", "#11D5E5"]
          , _ = cc._decorator
          , y = _.ccclass
          , v = _.property
          , b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.uiTitlePrefab = null,
                t.page = [],
                t.bagScroll = null,
                t.itemCellPrefab = null,
                t.bigItemCellParent = null,
                t.lblItemName = null,
                t.lblItemDesc = null,
                t.lblWays = null,
                t.lockNode = null,
                t.canUnlockNode = null,
                t.lblIncutasion = null,
                t.typePage = null,
                t.btnUnlock = null,
                t.lblUnlock = null,
                t.imgNTF = null,
                t.controller = null,
                t.lastChooseIndex = -1,
                t.currChooseIndex = -1,
                t.bigItemCell = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.controller = c.default.ControllerManager.getController(l.ModuleDefine.Bag);
                var t = cc.instantiate(this.itemCellPrefab);
                t.parent = this.bigItemCellParent,
                this.bigItemCell = t.getComponent(f.default);
                var o = cc.instantiate(this.uiTitlePrefab);
                o.parent = this.node;
                var n = {
                    titleName: "Backpack",
                    showItemNum: !0,
                    showDiamond: !0,
                    showPDiamond: !0,
                    showSetting: !1,
                    backButtonCallBack: function() {
                        c.default.UIManager.close(l.ModuleDefine.Bag)
                    }
                };
                o.getComponent(h.default).setData(n),
                this.registerReminds()
            }
            ,
            t.prototype.registerReminds = function() {
                var e = this
                  , t = {
                    node: this.btnUnlock.node,
                    checkFunc: function() {
                        var t = e.controller.data.getBagItemList()[e.currChooseIndex];
                        return t ? Number(e.controller.data.getItemCanUse(t.itemId)) : 0
                    },
                    scale: 1.2,
                    rtOffset: cc.v2(-10, -10)
                };
                c.default.Remind.regRemind(t)
            }
            ,
            t.prototype.onOpen = function() {
                var e = this;
                this.scheduleOnce(function() {
                    e.updateView()
                }),
                this.controller.data.needUpdateFromGS && this.controller.CS_checkBag(),
                cc.game.emit(p.default.User_Bag_Update),
                cc.game.on(p.default.User_Bag_Change, this.updateView, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.updateView = function() {
                var e = this.controller.data.getBagItemList();
                e.length > 0 ? (this.page[0].active = !1,
                this.page[1].active = !0,
                this.bagScroll.numItems = e.length,
                this.bagScroll.onItemRender = this.onItemRender.bind(this),
                this.bagScroll.onItemClicked = this.onItemClicked.bind(this),
                this.chooseItem(-1 == this.currChooseIndex ? 0 : this.currChooseIndex, !0)) : (this.page[0].active = !0,
                this.page[1].active = !1)
            }
            ,
            t.prototype.onBtnIncubationClicked = function(e) {
                var t = this
                  , o = this.controller.data.getBagItemList()[this.currChooseIndex].itemId
                  , n = a.Cfg.Item.get(o)
                  , r = "Open Egg"
                  , i = "Are you sure you want to open a metamon egg?";
                1 == n.ItemType && (r = "Mint Fragments",
                i = "Do you want to Synthesize 1000 Metamon egg fragments  to get one egg?");
                var u = function() {}
                  , p = {
                    title: r,
                    content: i,
                    confirm: function() {
                        switch (n.ItemType) {
                        case 1:
                            t.controller.CS_mergeEgg().then(u).catch(function() {
                                c.default.UIManager.open(l.ModuleDefine.FloatText, "Failed")
                            });
                            break;
                        case 3:
                            t.controller.CS_openEgg().then(u).catch(function() {
                                c.default.UIManager.open(l.ModuleDefine.FloatText, "Hatch failed, no transaction result was received. ")
                            })
                        }
                    }
                };
                c.default.UIManager.open(l.ModuleDefine.PopTips, p),
                console.log(e),
                cc.game.emit("audio-play", s.eAudio.Click)
            }
            ,
            t.prototype.onItemRender = function(e, t) {
                var o = this
                  , n = t.getComponent(f.default)
                  , r = this.controller.data.getBagItemList()[e]
                  , i = {
                    index: e,
                    isChoose: this.currChooseIndex == e,
                    itemData: {
                        id: r.itemId,
                        num: r.itemNum
                    }
                };
                n.setData(i);
                var a = {
                    node: t,
                    checkFunc: function() {
                        return Number(o.controller.data.getItemCanUse(r.itemId))
                    },
                    scale: 1 / .45,
                    rtOffset: cc.v2(-20, -40)
                };
                c.default.Remind.regRemind(a)
            }
            ,
            t.prototype.onItemClicked = function(e) {
                this.chooseItem(e)
            }
            ,
            t.prototype.chooseItem = function(e, t) {
                if (void 0 === t && (t = !1),
                this.currChooseIndex != e || t) {
                    this.lastChooseIndex = this.currChooseIndex,
                    this.currChooseIndex = e;
                    var o = this.bagScroll.itemTable
                      , n = o[this.lastChooseIndex];
                    n && n.getComponent(f.default).setIsChoose(!1);
                    var r = o[this.currChooseIndex];
                    r && r.getComponent(f.default).setIsChoose(!0),
                    this.updateBigItem(),
                    this.updateItemInfo(),
                    this.updateLockInfo()
                }
            }
            ,
            t.prototype.updateBigItem = function() {
                var e = this.controller.data.getItemInfo(this.currChooseIndex)
                  , t = {
                    index: this.currChooseIndex,
                    isChoose: !1,
                    itemData: {
                        id: e.itemId,
                        num: e.itemNum
                    }
                };
                this.bigItemCell.setData(t)
            }
            ,
            t.prototype.updateItemInfo = function() {
                var e = this.controller.data.getItemInfo(this.currChooseIndex).itemId
                  , t = a.Cfg.Item.get(e);
                this.lblItemName.string = t.ItemName,
                this.lblItemDesc.string = t.Desc,
                this.lblWays.string = t.Ways,
                this.typePage.active = 2 == t.ItemType,
                this.imgNTF.node.active = 1 == t.id
            }
            ,
            t.prototype.updateLockInfo = function() {
                var e = this
                  , t = this.controller.data.getItemInfo(this.currChooseIndex)
                  , o = t.itemId
                  , n = a.Cfg.Item.get(o);
                n.Quality,
                this.lblIncutasion.string = m[n.ItemType - 1],
                this.lockNode.active = 2 != n.ItemType;
                var r = 2 != n.ItemType;
                this.canUnlockNode.active = r;
                var i = function(t) {
                    e.btnUnlock = e.canUnlockNode.children.find(function(e) {
                        return "btnUnlock" == e.name
                    }).getComponent(cc.Button),
                    e.btnUnlock && (e.btnUnlock.interactable = t,
                    e.lblUnlock.node.color = cc.color().fromHEX(g[Number(t)]),
                    c.default.Remind.updateOneRemind(e.btnUnlock.node.uuid))
                };
                if (i(r),
                r)
                    switch (n.ItemType) {
                    case 1:
                        i(t.itemNum >= 1e3)
                    }
            }
            ,
            i([v(cc.Prefab)], t.prototype, "uiTitlePrefab", void 0),
            i([v([cc.Node])], t.prototype, "page", void 0),
            i([v(d.default)], t.prototype, "bagScroll", void 0),
            i([v(cc.Prefab)], t.prototype, "itemCellPrefab", void 0),
            i([v(cc.Node)], t.prototype, "bigItemCellParent", void 0),
            i([v(cc.Label)], t.prototype, "lblItemName", void 0),
            i([v(cc.Label)], t.prototype, "lblItemDesc", void 0),
            i([v(cc.Label)], t.prototype, "lblWays", void 0),
            i([v(cc.Node)], t.prototype, "lockNode", void 0),
            i([v(cc.Node)], t.prototype, "canUnlockNode", void 0),
            i([v(cc.Label)], t.prototype, "lblIncutasion", void 0),
            i([v(cc.Node)], t.prototype, "typePage", void 0),
            i([v(cc.Button)], t.prototype, "btnUnlock", void 0),
            i([v(cc.Label)], t.prototype, "lblUnlock", void 0),
            i([v(cc.Sprite)], t.prototype, "imgNTF", void 0),
            i([y], t)
        }(u.default);
        o.default = b,
        cc._RF.pop()
    }
    , {
        "../../../config/client/Cfg": "Cfg",
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../define/EventDefine": "EventDefine",
        "../component/item_cell/ItemCell": "ItemCell",
        "../component/scrollview/RecycleScroll": "RecycleScroll",
        "../component/ui_title/UITitleView": "UITitleView"
    }],
    BagVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9ab9bBAGI1Fh5HlB63gwuXo", "BagVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemList = [],
                t.eggTokenList = [],
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    BaseActor: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7d87bYWCK5IrK1iSC4wmJRB", "BaseActor");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            i([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    BaseController: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "20a1eLzsGROzKcq45/kBC3o", "BaseController"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        o.default = function() {
            this.view = null,
            this.data = null
        }
        ,
        cc._RF.pop()
    }
    , {}],
    BaseData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f23382IzoJH75uVdDSJz3Nn", "BaseData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        o.default = function() {
            this.needUpdateFromGS = !1
        }
        ,
        cc._RF.pop()
    }
    , {}],
    BaseProtocol: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bbd62y17JNEK4EMyXTfXeWU", "BaseProtocol"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        o.default = function() {}
        ,
        cc._RF.pop()
    }
    , {}],
    BaseSDK: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "93838PyonNNuZpiPIemzAgr", "BaseSDK"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.setEnv = function() {}
            ,
            e.prototype.logout = function() {}
            ,
            e.prototype.getCacheKey = function() {
                return null
            }
            ,
            e.prototype.connect = function() {
                return new Promise(function(e) {
                    e(null)
                }
                )
            }
            ,
            e.prototype.pay = function() {
                return new Promise(function(e) {
                    e(null)
                }
                )
            }
            ,
            e.prototype.useItem = function() {
                return new Promise(function(e) {
                    e(null)
                }
                )
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    BaseScene: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba214C3J4dCWIBo6/ufMLGv", "BaseScene");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.screenAdapt(),
                cc.view.setResizeCallback(this.screenAdapt.bind(this))
            }
            ,
            t.prototype.screenAdapt = function() {
                var e = cc.winSize
                  , t = cc.view.getDesignResolutionSize()
                  , o = e.width / e.height
                  , n = t.width / t.height
                  , r = !0;
                t.width > t.height && (e.width > e.height ? o < n && (r = !1) : r = !1);
                var i = cc.Canvas.instance;
                i.fitWidth = !r,
                i.fitHeight = r,
                cc.game.emit("view-resize")
            }
            ,
            i([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    BaseView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "230e3LI/9xH0JFrWS0LCsmr", "BaseView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.onEnable = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function() {}
            ,
            t.prototype.lateUpdate = function() {}
            ,
            t.prototype.onDisable = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onOpen = function() {}
            ,
            i([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    BaseVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "dc48dqtqmlMGKi3wzTn+mUJ", "BaseVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        o.default = function() {}
        ,
        cc._RF.pop()
    }
    , {}],
    BattlefieldCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f1f01+s745Fdp+KbbtUa0tE", "BattlefieldCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/mvc/BaseController")
          , l = e("../../config/NetConfig")
          , u = e("../data/UserData")
          , p = e("../monster/Monster")
          , f = e("./BattlefieldData")
          , d = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.data = new f.default,
                t
            }
            return r(t, e),
            t.prototype.CS_getBattlefieldInfo = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    return i(t, void 0, void 0, function() {
                        var t, r, i, s;
                        return a(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return u.default.instance.setFightId(e),
                                l.NetConfig.getIsLocal() ? (t = {
                                    data: {
                                        number: 2,
                                        objects: [{
                                            symbol: "Metamon",
                                            metadata: '{"name":"Metamon","description":"Normal Metamon NFT in Metamon Game on BSC.","attributes":[],"image":"https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png","external_url":"https://www.radiocaca.com/"}\n',
                                            luk: 20,
                                            con: 10,
                                            description: "Normal Metamon NFT in Metamon Game on BSC.",
                                            created_at: "2021-09-09T16:57:28",
                                            con_max: 20,
                                            contract_address: "0x4C275b94a2e5993b6418adabc2B0DF9f16951cE2",
                                            inte_max: 20,
                                            years: 1,
                                            life: 100,
                                            sca: 50,
                                            update_time: "2021-09-17T04:08:22",
                                            token_id: "0",
                                            updated_at: "2021-09-09T16:57:28",
                                            crg_max: 100,
                                            tear: 100,
                                            sca_max: 100,
                                            crg: 50,
                                            inv_max: 20,
                                            id: "1",
                                            exp: 90,
                                            owner: "0x0a0b364093cb37787827e210806f50c30ce4e192",
                                            level_max: 60,
                                            race: "1",
                                            create_time: "2021-09-13T12:48:28",
                                            level: 10,
                                            image_url: "https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png",
                                            inte: 5,
                                            exp_max: 1e3,
                                            inv: 10,
                                            is_play: !0,
                                            name: "Metamon",
                                            rarity: 1,
                                            luk_max: 50
                                        }, {
                                            symbol: "Metamon",
                                            metadata: '{"name":"Metamon","description":"Normal Metamon NFT in Metamon Game on BSC.","attributes":[],"image":"https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png","external_url":"https://www.radiocaca.com/"}\n',
                                            luk: 20,
                                            con: 10,
                                            description: "Normal Metamon NFT in Metamon Game on BSC.",
                                            created_at: "2021-09-09T16:57:31",
                                            con_max: 20,
                                            contract_address: "0x4C275b94a2e5993b6418adabc2B0DF9f16951cE2",
                                            inte_max: 20,
                                            years: 1,
                                            life: 100,
                                            sca: 5,
                                            update_time: "2021-09-18T06:29:10",
                                            token_id: "1",
                                            updated_at: "2021-09-09T16:57:31",
                                            crg_max: 100,
                                            tear: 100,
                                            sca_max: 100,
                                            crg: 50,
                                            inv_max: 20,
                                            id: "2",
                                            exp: 90,
                                            owner: "0xb8b0fca54db13e009b42e7fb0da855c0741f57b5",
                                            level_max: 60,
                                            race: "1",
                                            create_time: "2021-09-13T15:47:08",
                                            level: 8,
                                            image_url: "https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png",
                                            inte: 5,
                                            exp_max: 1e3,
                                            inv: 10,
                                            is_play: !0,
                                            name: "Metamon",
                                            rarity: 1,
                                            luk_max: 50
                                        }]
                                    },
                                    message: "",
                                    result: 1
                                },
                                [2, this.SC_getBattlefieldInfo(t).then(o).catch(n)]) : (r = u.default.instance,
                                i = {
                                    address: r.getOpenId(),
                                    metamonId: r.getMonsterSelectId(),
                                    front: e
                                },
                                [4, c.default.Http.post(l.NetConfig.url + "getBattelObjects", {}, i).catch(n)]);
                            case 1:
                                return (s = a.sent()) ? (this.SC_getBattlefieldInfo(s).then(o).catch(n),
                                [2]) : [2]
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.SC_getBattlefieldInfo = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    if (1 == e.result) {
                        for (var r = e.data.objects, i = [], a = e.data.number, c = 0; c < a; ++c) {
                            var s = r[c];
                            i[c] = (new p.default).decode(s)
                        }
                        i = i.sort(function(e, t) {
                            return t.level - e.level
                        }),
                        t.data.setOpponentList(i),
                        o(i)
                    } else
                        n()
                }
                )
            }
            ,
            t
        }(s.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../data/UserData": "UserData",
        "../monster/Monster": "Monster",
        "./BattlefieldData": "BattlefieldData"
    }],
    BattlefieldData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3a786iBUWdB/oNtkz87AZV3", "BattlefieldData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("./BattlefiledVo")
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._vo = new a.default,
                t
            }
            return r(t, e),
            t.prototype.setOpponentList = function(e) {
                this._vo.opponentList = e
            }
            ,
            t.prototype.getOpponentList = function() {
                return this._vo.opponentList
            }
            ,
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "./BattlefiledVo": "BattlefiledVo"
    }],
    BattlefieldView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "35546Nh8hFAi7dx3O0RCnRn", "BattlefieldView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/consts/SceneDefine")
          , u = e("../../../game_framework/mvc/BaseView")
          , p = e("../component/ui_title/UITitleView")
          , f = e("../data/UserData")
          , d = cc._decorator
          , h = d.ccclass
          , m = d.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.primary = null,
                t.intermediate = null,
                t.advanced = null,
                t.level = 0,
                t.titleView = null,
                t.controller = null,
                t.canClick = !0,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = this
                  , t = cc.instantiate(this.titleView);
                t.parent = this.node;
                var o = {
                    titleName: "Challenge the battlefield",
                    showItemNum: !0,
                    showDiamond: !0,
                    showPDiamond: !0,
                    showSetting: !1,
                    backButtonCallBack: function() {
                        a.default.SceneManager.runScene(l.SceneDefine.GameHome)
                    }
                };
                t.getComponent(p.default).setData(o),
                [this.primary, this.intermediate, this.advanced].forEach(function(t) {
                    t.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
                        cc.game.emit("audio-play", c.eAudio.Transfom)
                    }, e)
                })
            }
            ,
            t.prototype.onOpen = function() {
                a.default.UIManager.close(s.ModuleDefine.ChooseOpponent),
                this.controller = a.default.ControllerManager.getController(s.ModuleDefine.Battlefield);
                var e = f.default.instance.getMonsterSelectInfo();
                this.level = e.level,
                this.reflesh()
            }
            ,
            t.prototype.onChangeField = function(e, t) {
                var o = this;
                if (cc.game.emit("audio-play", c.eAudio.Click),
                this.canClick) {
                    this.canClick = !1;
                    var n = function(e) {
                        o.controller.CS_getBattlefieldInfo(e).then(function() {
                            a.default.SceneManager.runScene(l.SceneDefine.GameMain)
                        }).catch(function() {
                            o.canClick = !0
                        })
                    }
                      , r = function() {
                        o.canClick = !0
                    };
                    switch (t) {
                    case "0":
                        n(1);
                        break;
                    case "1":
                        this.level > 20 ? n(2) : (a.default.UIManager.open(s.ModuleDefine.FloatText, "You need upgrade to 21 level to unlock this battle field"),
                        r());
                        break;
                    case "2":
                        this.level > 40 ? n(3) : (a.default.UIManager.open(s.ModuleDefine.FloatText, "You need upgrade to 41 level to unlock this battle field"),
                        r())
                    }
                }
            }
            ,
            t.prototype.reflesh = function() {
                this.level > 20 && this.level < 41 ? cc.find("lock", this.intermediate.node.children[0]).active = !1 : this.level > 40 && (cc.find("lock", this.intermediate.node.children[0]).active = !1,
                cc.find("lock", this.advanced.node.children[0]).active = !1)
            }
            ,
            i([m(cc.Button)], t.prototype, "primary", void 0),
            i([m(cc.Button)], t.prototype, "intermediate", void 0),
            i([m(cc.Button)], t.prototype, "advanced", void 0),
            i([m], t.prototype, "level", void 0),
            i([m(cc.Prefab)], t.prototype, "titleView", void 0),
            i([h], t)
        }(u.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/consts/SceneDefine": "SceneDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../component/ui_title/UITitleView": "UITitleView",
        "../data/UserData": "UserData"
    }],
    BattlefiledVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1faa3dMdC1F2pHkvYWu4xyW", "BattlefiledVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.opponentList = [],
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    Cfg: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "07dd0ugE3FFppc9kncCSIRI", "Cfg");
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.Cfg = void 0;
        var i = e("./ItemCfg")
          , a = e("./MonsterCfg")
          , c = function() {
            function e() {
                this._Item = new i.ItemCfgReader,
                this._Monster = new a.MonsterCfgReader
            }
            return Object.defineProperty(e.prototype, "Item", {
                get: function() {
                    return this._Item
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "Monster", {
                get: function() {
                    return this._Monster
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.initByMergeJson = function() {
                return n(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function() {
                        return [2, new Promise(function(t, o) {
                            cc.loader.loadRes("config/GameJsonCfg", cc.JsonAsset, function(e, n) {
                                if (e)
                                    return cc.error("Cfg.initByMergeJson error", e),
                                    void o(e);
                                var r = n.json;
                                for (var i in r)
                                    this.hasOwnProperty("_" + i) ? this["_" + i].initByMap(r[i]) : cc.warn("Cfg.initByMergeJson null, " + i);
                                t(null)
                            }
                            .bind(e))
                        }
                        )]
                    })
                })
            }
            ,
            e.prototype.initBySingleJson = function() {
                return n(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function() {
                        return [2, new Promise(function(t, o) {
                            cc.loader.loadResDir("config", function(e, n) {
                                if (e)
                                    return cc.error("Cfg.initBySingleJson error", e),
                                    void o(e);
                                for (var r = 0; r < n.length; r++) {
                                    var i = n[r]
                                      , a = i.name;
                                    this.hasOwnProperty("_" + a) ? this["_" + a].initByMap(i.json) : cc.warn("Cfg.initBySingleJson null, " + a)
                                }
                                t(null)
                            }
                            .bind(e))
                        }
                        )]
                    })
                })
            }
            ,
            e.prototype.HasTag = function(e, t) {
                return null != e.tags && e.tags.indexOf(t) >= 0
            }
            ,
            e.prototype.selectArray = function(e, t, o, n) {
                var r = e[t];
                return null == r ? n : r[o] || n
            }
            ,
            e
        }();
        o.Cfg = new c,
        cc._RF.pop()
    }
    , {
        "./ItemCfg": "ItemCfg",
        "./MonsterCfg": "MonsterCfg"
    }],
    Charactor: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8f083JNvQhNx5uLBf3WCNDh", "Charactor");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("./BaseActor")
          , c = cc._decorator
          , s = c.ccclass
          , l = (c.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Name = "",
                t
            }
            return r(t, e),
            i([s], t)
        }(a.default));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "./BaseActor": "BaseActor"
    }],
    ChooseOpponentCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d7747XcDLtHh4twq30ziIab", "ChooseOpponentCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/mvc/BaseController")
          , l = e("../../config/NetConfig")
          , u = e("../../platform/Platform")
          , p = e("../data/UserData")
          , f = e("./ChooseOpponentData")
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.data = new f.default,
                t
            }
            return r(t, e),
            t.prototype.CS_chooseOpponent = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    return i(t, void 0, void 0, function() {
                        var t, r, i;
                        return a(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return l.NetConfig.getIsLocal() ? (t = {
                                    data: {
                                        amount: 250,
                                        pay: !1
                                    },
                                    message: "",
                                    result: 1
                                },
                                [2, this.SC_chooseOpponent(t)]) : (r = {
                                    address: p.default.instance.getOpenId(),
                                    battleLevel: p.default.instance.getFightId(),
                                    monsterA: e[0].id,
                                    monsterB: e[1].id
                                },
                                [4, c.default.Http.post(l.NetConfig.url + "startPay", {}, r).catch(n)]);
                            case 1:
                                return (i = a.sent()) ? (this.SC_chooseOpponent(i).then(o).catch(n),
                                [2]) : [2]
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.SC_chooseOpponent = function(e) {
                return new Promise(function(t, o) {
                    1 == e.result ? t({
                        cost: e.data.amount,
                        isPay: e.data.pay
                    }) : o()
                }
                )
            }
            ,
            t.prototype.payFight = function(e) {
                return i(this, void 0, void 0, function() {
                    var t = this;
                    return a(this, function() {
                        return [2, new Promise(function(o, n) {
                            return i(t, void 0, void 0, function() {
                                var t;
                                return a(this, function(r) {
                                    switch (r.label) {
                                    case 0:
                                        return [4, u.default.instance.pay(e)];
                                    case 1:
                                        return "ok" == (t = r.sent()).message ? o(t) : n(),
                                        [2]
                                    }
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            t
        }(s.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../../platform/Platform": "Platform",
        "../data/UserData": "UserData",
        "./ChooseOpponentData": "ChooseOpponentData"
    }],
    ChooseOpponentData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "74f60IggXJFtJLWzB3rifd5", "ChooseOpponentData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("./ChooseOpponentVo")
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._vo = new a.default,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this._vo.opponentList = e
            }
            ,
            t.prototype.getOpponentList = function() {
                return this._vo.opponentList
            }
            ,
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "./ChooseOpponentVo": "ChooseOpponentVo"
    }],
    ChooseOpponentView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2f034A/KBhB4L1/XVk9UkTO", "ChooseOpponentView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        , a = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , c = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = e("../../../game_framework/App")
          , l = e("../../../game_framework/consts/ConstDefine")
          , u = e("../../../game_framework/consts/ModuleDefine")
          , p = e("../../../game_framework/mvc/BaseView")
          , f = e("../../define/EventDefine")
          , d = e("../component/scrollview/RecycleScroll")
          , h = e("../component/ui_title/UITitleView")
          , m = e("../data/UserData")
          , g = e("../role/RoleInfo")
          , _ = cc._decorator
          , y = _.ccclass
          , v = _.property
          , b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.uiTitlePrefab = null,
                t.roleScroll = null,
                t.backToLeftButton = null,
                t.backToRightButton = null,
                t.controller = null,
                t.battleController = null,
                t.data = [],
                t.scrollSposX = 0,
                t.clickLock = !1,
                t.isCheckPay = !1,
                t.counter = 0,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.controller = s.default.ControllerManager.getController(u.ModuleDefine.ChooseOpponent);
                var t = cc.instantiate(this.uiTitlePrefab);
                t.parent = this.node;
                var o = {
                    titleName: "Choose Your Opponent",
                    showItemNum: !0,
                    showDiamond: !0,
                    showPDiamond: !0,
                    showSetting: !1,
                    backButtonCallBack: function() {
                        s.default.UIManager.open(u.ModuleDefine.Battlefield)
                    }
                };
                t.getComponent(h.default).setData(o)
            }
            ,
            t.prototype.onOpen = function() {
                s.default.UIManager.close(u.ModuleDefine.Battlefield),
                s.default.UIManager.close(u.ModuleDefine.Home),
                this.battleController = s.default.ControllerManager.getController(u.ModuleDefine.Battlefield),
                this.controller.data.setData(this.battleController.data.getOpponentList()),
                this.scrollSposX = this.roleScroll.getContent().x,
                this.roleScroll.onItemRender = this.onItemRender.bind(this),
                this.roleScroll.onItemClicked = this.onItemClicked.bind(this),
                this.roleScroll.onItemHoverBegin = this.onItemHoverBegin.bind(this),
                this.roleScroll.onItemHoverLeave = this.onItemHoverLeave.bind(this),
                this.onFightListChange(),
                this.schedule(function() {
                    cc.game.emit(f.default.User_Role_Update, m.default.instance.getMonsterSelectId())
                }, 2, 8),
                cc.game.emit("music-play", l.eAudio.Choose)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this),
                this.unscheduleAllCallbacks()
            }
            ,
            t.prototype.onFightListChange = function() {
                this.data = this.controller.data.getOpponentList(),
                this.roleScroll.numItems = this.data.length
            }
            ,
            t.prototype.onBtnQuickStartClicked = function() {
                if (m.default.instance.getMonsterSelectInfo().energy <= 0)
                    s.default.UIManager.open(u.ModuleDefine.PopTips, {
                        title: "ENERGY",
                        content: "Sorry, you have no energy left to battle. Energy will be recharged after 0:00 UTC time. Or you can change another Metamon to play."
                    });
                else {
                    var e = Math.floor(Math.random() * this.data.length);
                    this.fight(this.data[e]),
                    cc.game.emit("audio-play", l.eAudio.Click)
                }
            }
            ,
            t.prototype.fight = function(e) {
                return a(this, void 0, void 0, function() {
                    var t, o, n, r = this;
                    return c(this, function() {
                        return this.isCheckPay && s.default.UIManager.open(u.ModuleDefine.FloatText, "\u652f\u4ed8\u6821\u9a8c\u4e2d\uff0c\u8bf7\u7a0d\u540e"),
                        this.clickLock ? [2] : (this.clickLock = !0,
                        t = [m.default.instance.getMonsterSelectInfo(), e],
                        o = function() {
                            s.default.UIManager.close(u.ModuleDefine.LoadingTips),
                            s.default.UIManager.close(u.ModuleDefine.ChooseOpponent),
                            s.default.UIManager.open(u.ModuleDefine.FightLoading, t),
                            r.clickLock = !1,
                            r.unscheduleAllCallbacks()
                        }
                        ,
                        (n = function() {
                            return a(r, void 0, void 0, function() {
                                var r, i, l, p = this;
                                return c(this, function(f) {
                                    switch (f.label) {
                                    case 0:
                                        return f.trys.push([0, 2, , 3]),
                                        [4, this.controller.CS_chooseOpponent(t)];
                                    case 1:
                                        return (r = f.sent()).isPay ? (o(),
                                        [2]) : this.isCheckPay ? (this.counter++,
                                        console.log("=====counter", this.counter),
                                        this.counter >= 10 && (this.counter = 0,
                                        this.isCheckPay = !1,
                                        this.clickLock = !1,
                                        s.default.UIManager.close(u.ModuleDefine.LoadingTips)),
                                        [2]) : (i = {
                                            title: "Pay",
                                            content: "Do you want to pay " + r.cost + "RACA to challenge #" + e.id + "?",
                                            confirm: function() {
                                                return a(p, void 0, void 0, function() {
                                                    var e, t = this;
                                                    return c(this, function(o) {
                                                        switch (o.label) {
                                                        case 0:
                                                            return this.isCheckPay = !0,
                                                            s.default.UIManager.open(u.ModuleDefine.LoadingTips),
                                                            [4, this.controller.payFight(r.cost).catch(function() {
                                                                console.log("\u652f\u4ed8\u5931\u8d25", t),
                                                                t.clickLock = !1,
                                                                t.isCheckPay = !1,
                                                                s.default.UIManager.open(u.ModuleDefine.FloatText, "Payment failed"),
                                                                s.default.UIManager.close(u.ModuleDefine.LoadingTips)
                                                            })];
                                                        case 1:
                                                            return e = o.sent(),
                                                            console.log("\u652f\u4ed8\u7ed3\u679c", e),
                                                            e ? (console.log("\u652f\u4ed8\u6210\u529f", e),
                                                            this.counter = 0,
                                                            this.schedule(n.bind(this), 2, 9)) : s.default.UIManager.close(u.ModuleDefine.LoadingTips),
                                                            [2]
                                                        }
                                                    })
                                                })
                                            },
                                            close: function() {
                                                p.clickLock = !1
                                            }
                                        },
                                        s.default.UIManager.open(u.ModuleDefine.PopTips, i),
                                        [3, 3]);
                                    case 2:
                                        return l = f.sent(),
                                        this.clickLock = !1,
                                        this.isCheckPay = !1,
                                        console.error(l),
                                        [3, 3];
                                    case 3:
                                        return [2]
                                    }
                                })
                            })
                        }
                        )(),
                        [2])
                    })
                })
            }
            ,
            t.prototype.onItemRender = function(e, t) {
                var o = t.getComponent(g.default);
                o.setData(this.data[e]),
                o.setIsChoose(!1)
            }
            ,
            t.prototype.onItemClicked = function(e, t) {
                if (t.getComponent(g.default),
                m.default.instance.getMonsterSelectInfo().energy <= 0)
                    s.default.UIManager.open(u.ModuleDefine.FloatText, "You don't have enough Energy to battle.");
                else {
                    var o = this.data[e];
                    this.fight(o),
                    cc.game.emit("audio-play", l.eAudio.Click)
                }
            }
            ,
            t.prototype.onItemHoverBegin = function(e, t) {
                cc.game.emit("audio-play", l.eAudio.Transfom),
                t.getComponent(g.default).setIsChoose(!0)
            }
            ,
            t.prototype.onItemHoverLeave = function(e, t) {
                t.getComponent(g.default).setIsChoose(!1)
            }
            ,
            t.prototype.onBtnBackToLeftClicked = function() {
                this.roleScroll.scrollToLeft(),
                cc.game.emit("audio-play", l.eAudio.Click)
            }
            ,
            t.prototype.onBtnBackToRightClicked = function() {
                this.roleScroll.scrollToRight(),
                cc.game.emit("audio-play", l.eAudio.Click)
            }
            ,
            t.prototype.update = function() {
                var e = this.backToLeftButton
                  , t = this.roleScroll.getCanDragToStart();
                e.active != t && (e.active = t);
                var o = this.backToRightButton
                  , n = this.roleScroll.getCanDragToEnd();
                o.active != n && (o.active = n)
            }
            ,
            i([v(cc.Prefab)], t.prototype, "uiTitlePrefab", void 0),
            i([v(d.default)], t.prototype, "roleScroll", void 0),
            i([v(cc.Node)], t.prototype, "backToLeftButton", void 0),
            i([v(cc.Node)], t.prototype, "backToRightButton", void 0),
            i([y], t)
        }(p.default);
        o.default = b,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../define/EventDefine": "EventDefine",
        "../component/scrollview/RecycleScroll": "RecycleScroll",
        "../component/ui_title/UITitleView": "UITitleView",
        "../data/UserData": "UserData",
        "../role/RoleInfo": "RoleInfo"
    }],
    ChooseOpponentVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "613a1+dnt9KE5+WrL+c5TdL", "ChooseOpponentVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.opponentList = [],
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    ConstDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "296bbk8/a1EpavjXN833v6p", "ConstDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.eAudio = o.QualityLabelShadowColor = o.QualityLabelColor = o.ItemCostType = o.FsmState = o.ItemType = void 0,
        function(e) {
            e[e.MonsterFragment = 1] = "MonsterFragment",
            e[e.MonsterEgg = 2] = "MonsterEgg"
        }(o.ItemType || (o.ItemType = {})),
        function(e) {
            e[e.None = 0] = "None",
            e[e.Idle = 1] = "Idle",
            e[e.Attack = 2] = "Attack"
        }(o.FsmState || (o.FsmState = {})),
        o.ItemCostType = {
            Potion: 1,
            YellowDiamond: 2,
            PurpleDiamond: 3
        },
        o.QualityLabelColor = ["#024162", "#560516"],
        o.QualityLabelShadowColor = ["#A5F1F6", "#E9D977"],
        function(e) {
            e[e.Bgm_Fight = 0] = "Bgm_Fight",
            e[e.Click1 = 1] = "Click1",
            e[e.Transfom = 2] = "Transfom",
            e[e.Bgm = 3] = "Bgm",
            e[e.Win = 4] = "Win",
            e[e.Lose = 5] = "Lose",
            e[e.Home = 6] = "Home",
            e[e.Choose = 7] = "Choose",
            e[e.Fight = 8] = "Fight",
            e[e.Click = 9] = "Click",
            e[e.Merge = 10] = "Merge",
            e[e.Pop = 11] = "Pop"
        }(o.eAudio || (o.eAudio = {})),
        cc._RF.pop()
    }
    , {}],
    ControllerManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "734129SB5xDYaaQ3E9tXWdT", "ControllerManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this._controllers = {}
            }
            return e.prototype.register = function(e, t) {
                var o = cc.js.getClassName(t);
                if (this.isExists(e))
                    console.error("[ControllerManager] \u6a21\u5757\u6ce8\u518c\u5931\u8d25\uff0c\u5df2\u5b58\u5728\u6a21\u5757\uff1a" + o);
                else {
                    var n = new t;
                    this._controllers[e] = n,
                    console.log("%c[ControllerManager] \u6a21\u5757\u6ce8\u518c\u6210\u529f\uff1a" + o, "color:#226622")
                }
            }
            ,
            e.prototype.unregister = function(e) {
                this.isExists(e) && (this._controllers[e] = null,
                delete this._controllers[e])
            }
            ,
            e.prototype.isExists = function(e) {
                return !!this._controllers[e]
            }
            ,
            e.prototype.getController = function(e) {
                var t = this._controllers[e];
                if (t)
                    return t;
                console.error("[ControllerManager] \u83b7\u53d6\u63a7\u5236\u5c42\u5931\u8d25\uff0c\u8bf7\u5148\u6ce8\u518c key: " + e)
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    Currency: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "db790U3NmRDEZ78UWIMylrQ", "Currency");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../game_framework/App")
          , c = e("../../../../game_framework/consts/ConstDefine")
          , s = e("../../../../game_framework/consts/ModuleDefine")
          , l = e("../../../define/EventDefine")
          , u = e("../../data/UserData")
          , p = cc._decorator
          , f = p.ccclass
          , d = p.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemNumNode = null,
                t.diamondNumNode = null,
                t.lblItemNum = null,
                t.lblDiamond = null,
                t.pDiamondNode = null,
                t.lblPDiamond = null,
                t.btnSetting = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                cc.game.on(l.default.User_Currency_Change, this.updateCurrency, this)
            }
            ,
            t.prototype.onDestroy = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.start = function() {
                this.reflesh()
            }
            ,
            t.prototype.onBtnSettingClicked = function() {
                console.log("\u6253\u5f00\u8bbe\u7f6e"),
                a.default.UIManager.open(s.ModuleDefine.Seting),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.setItemNumVisible = function(e) {
                this.itemNumNode.active = e
            }
            ,
            t.prototype.setDiamondNumVisible = function(e) {
                this.diamondNumNode.active = e
            }
            ,
            t.prototype.setSettingButtonVisible = function(e) {
                this.btnSetting.active = e
            }
            ,
            t.prototype.setPDiamondButtonVisible = function(e) {
                this.pDiamondNode.active = e
            }
            ,
            t.prototype.reflesh = function() {
                this.updateCurrency()
            }
            ,
            t.prototype.updateCurrency = function() {
                var e = u.default.instance;
                console.log("\u5237\u65b0\u8d27\u5e01", e),
                this.lblItemNum.string = "" + e.getPotion(),
                this.lblDiamond.string = "" + e.getDiamond(),
                this.lblPDiamond.string = "" + e.getPDiamond()
            }
            ,
            i([d(cc.Node)], t.prototype, "itemNumNode", void 0),
            i([d(cc.Node)], t.prototype, "diamondNumNode", void 0),
            i([d(cc.Label)], t.prototype, "lblItemNum", void 0),
            i([d(cc.Label)], t.prototype, "lblDiamond", void 0),
            i([d(cc.Node)], t.prototype, "pDiamondNode", void 0),
            i([d(cc.Label)], t.prototype, "lblPDiamond", void 0),
            i([d(cc.Node)], t.prototype, "btnSetting", void 0),
            i([f], t)
        }(cc.Component);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/App": "App",
        "../../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../define/EventDefine": "EventDefine",
        "../../data/UserData": "UserData"
    }],
    Dapp: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "233b2PzluNHrqcHARs8UdEo", "Dapp");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.setEnv = function(e) {
                console.log(window.webDapp),
                window.webDapp.setNetworkEnv(e)
            }
            ,
            t.prototype.logout = function() {
                window.webDapp.LogOut()
            }
            ,
            t.prototype.getCacheKey = function() {
                return window.webDapp.getLoginState()
            }
            ,
            t.prototype.connect = function(e) {
                return new Promise(function(t, o) {
                    window.webDapp.connectWallet(e).then(t).catch(o)
                }
                )
            }
            ,
            t.prototype.pay = function(e) {
                return new Promise(function(t, o) {
                    window.webDapp.buy(e).then(t).catch(o)
                }
                )
            }
            ,
            t.prototype.useItem = function(e) {
                return new Promise(function(t, o) {
                    console.log("Dapp \u5f00\u59cb\u5408\u6210", e);
                    var n = window.webDapp;
                    if (!n)
                        return console.log("\u6ca1\u627e\u5230sdk"),
                        void o();
                    switch (e.id) {
                    case 1:
                        n.HatchResults(e.token).then(t).catch(o);
                        break;
                    case 2:
                        n.PiecesOfSynthetic(e.nonce, e.sign).then(t).catch(o);
                        break;
                    case 3:
                        n.ConsumePotion(e.amount, e.metamonId).then(t).catch(o);
                        break;
                    case 4:
                        n.ConsumeDiamondYellow(e.amount, e.metamonId).then(t).catch(o);
                        break;
                    case 5:
                        n.ConsumeDiamondPurple(e.amount, e.metamonId).then(t).catch(o);
                        break;
                    default:
                        o()
                    }
                }
                )
            }
            ,
            t
        }(e("../base/BaseSDK").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../base/BaseSDK": "BaseSDK"
    }],
    EventDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cdf1fdhG1xFHKPaau22JHqR", "EventDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.User_Login_GS_Fail = "User_Login_GS_Fail",
            e.User_Diamond_Change = "User_Diamond_Change",
            e.User_PDiamond_Change = "User_PDiamond_Change",
            e.User_Ption_Change = "User_Ption_Change",
            e.User_Currency_Change = "User_Currency_Change",
            e.User_Diamond_Update = "User_Diamond_Update",
            e.User_NickName_Change = "User_NickName_Change",
            e.User_MonsterSelect_Change = "User_MonsterSelect_Change",
            e.User_Login_GS = "User_Login_GS",
            e.User_Bag_Update = "User_Bag_Update",
            e.User_Bag_Change = "User_Bag_Change",
            e.User_Role_Change = "User_Role_Change",
            e.User_Role_Update = "User_Role_Update",
            e.User_All_Role_Update = "User_All_Role_Update",
            e.User_All_Role_Change = "User_All_Role_Change",
            e.User_FigltList_Change = "User_FigltList_Change",
            e.User_FightStart = "User_FightStart",
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    EvolveStar: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2b457FrbbVL5o3XWOKKTczt", "EvolveStar");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.imgStars = [],
                t.imgStarFrames = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshView()
            }
            ,
            t.prototype.refleshView = function() {
                for (var e = this.data.num, t = 0; t < this.imgStars.length; ++t) {
                    var o = t < e ? 1 : 0;
                    this.imgStars[t].spriteFrame = this.imgStarFrames[o]
                }
            }
            ,
            i([s([cc.Sprite])], t.prototype, "imgStars", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "imgStarFrames", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    FightCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9974dEwHKRFE4S7p9jBtnqS", "FightCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseController")
          , u = e("../../config/NetConfig")
          , p = e("../../define/EventDefine")
          , f = e("../data/UserData")
          , d = e("../monster/Monster")
          , h = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.isFight = !1,
                cc.game.on(p.default.User_FightStart, t.CS_fightStart, t),
                t
            }
            return r(t, e),
            t.prototype.CS_fightStart = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, o, n, r, i, l, p = this;
                    return a(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return u.NetConfig.getIsLocal() ? (t = {
                                data: {
                                    backpackRecords: [],
                                    challengeExp: 165,
                                    challengeMonster: {
                                        con: 15,
                                        conMax: 20,
                                        createTime: "2021-09-13T15:47:08",
                                        crg: 60,
                                        crgMax: 100,
                                        exp: 1064,
                                        expMax: 1210,
                                        id: "4",
                                        inte: 15,
                                        inteMax: 20,
                                        inv: 18,
                                        invMax: 20,
                                        isPlay: !0,
                                        level: 11,
                                        levelMax: 60,
                                        life: 100,
                                        lifeLL: 100,
                                        luk: 50,
                                        lukMax: 50,
                                        race: "1",
                                        rarity: 1,
                                        sca: 50,
                                        scaMax: 100,
                                        tear: 100,
                                        updateTime: "2021-09-17T04:08:23",
                                        years: 1
                                    },
                                    challengeMonsterId: "4",
                                    challengeNft: {
                                        contractAddress: "0x4C275b94a2e5993b6418adabc2B0DF9f16951cE2",
                                        createdAt: "2021-09-09T16:57:49",
                                        description: "Normal Metamon NFT in Metamon Game on BSC.",
                                        id: "4",
                                        imageUrl: "https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png",
                                        metadata: '{"name":"Metamon","description":"Normal Metamon NFT in Metamon Game on BSC.","attributes":[],"image":"https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png","external_url":"https://www.radiocaca.com/"}\n',
                                        name: "Metamon",
                                        owner: "0x1f169bce0737c145ff2ca37999b30f6cc877588f",
                                        symbol: "Metamon",
                                        tokenId: "3",
                                        updatedAt: "2021-09-09T16:57:49"
                                    },
                                    challengeOwner: "0x1f169bce0737c145ff2ca37999b30f6cc877588f",
                                    challengeRecords: [{
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "418",
                                        monsteraId: "4",
                                        monsteraLife: 100,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 80,
                                        monsterbLifelost: 20
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "419",
                                        monsteraId: "3",
                                        monsteraLife: 80,
                                        monsteraLifelost: 20,
                                        monsterbId: "4",
                                        monsterbLife: 80,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "420",
                                        monsteraId: "4",
                                        monsteraLife: 80,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 70,
                                        monsterbLifelost: 10
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "421",
                                        monsteraId: "3",
                                        monsteraLife: 70,
                                        monsteraLifelost: 10,
                                        monsterbId: "4",
                                        monsterbLife: 70,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "422",
                                        monsteraId: "4",
                                        monsteraLife: 70,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 50,
                                        monsterbLifelost: 20
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "423",
                                        monsteraId: "3",
                                        monsteraLife: 50,
                                        monsteraLifelost: 20,
                                        monsterbId: "4",
                                        monsterbLife: 50,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "424",
                                        monsteraId: "4",
                                        monsteraLife: 50,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 30,
                                        monsterbLifelost: 20
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "425",
                                        monsteraId: "3",
                                        monsteraLife: 30,
                                        monsteraLifelost: 20,
                                        monsterbId: "4",
                                        monsterbLife: 30,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "426",
                                        monsteraId: "4",
                                        monsteraLife: 30,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 20,
                                        monsterbLifelost: 10
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "427",
                                        monsteraId: "3",
                                        monsteraLife: 20,
                                        monsteraLifelost: 10,
                                        monsterbId: "4",
                                        monsterbLife: 20,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "428",
                                        monsteraId: "4",
                                        monsteraLife: 20,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 10,
                                        monsterbLifelost: 10
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "429",
                                        monsteraId: "3",
                                        monsteraLife: 10,
                                        monsteraLifelost: 10,
                                        monsterbId: "4",
                                        monsterbLife: 10,
                                        monsterbLifelost: 0
                                    }, {
                                        attackType: null,
                                        challengeId: 12,
                                        defenceType: null,
                                        id: "430",
                                        monsteraId: "4",
                                        monsteraLife: 10,
                                        monsteraLifelost: 0,
                                        monsterbId: "3",
                                        monsterbLife: 0,
                                        monsterbLifelost: 10
                                    }],
                                    challengeResult: !0,
                                    challengedMonster: {
                                        con: 10,
                                        conMax: 20,
                                        createTime: "2021-09-13T15:47:08",
                                        crg: 20,
                                        crgMax: 100,
                                        exp: 90,
                                        expMax: 1e3,
                                        id: "3",
                                        inte: 5,
                                        inteMax: 20,
                                        inv: 10,
                                        invMax: 20,
                                        isPlay: !0,
                                        level: 10,
                                        levelMax: 60,
                                        life: 100,
                                        lifeLL: 0,
                                        luk: 20,
                                        lukMax: 50,
                                        race: "1",
                                        rarity: 1,
                                        sca: 5,
                                        scaMax: 100,
                                        tear: 100,
                                        updateTime: "2021-09-17T04:08:23",
                                        years: 1
                                    },
                                    challengedMonsterId: "3",
                                    challengedNft: {
                                        contractAddress: "0x4C275b94a2e5993b6418adabc2B0DF9f16951cE2",
                                        createdAt: "2021-09-09T16:57:42",
                                        description: "Normal Metamon NFT in Metamon Game on BSC.",
                                        id: "3",
                                        imageUrl: "https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png",
                                        metadata: '{"name":"Metamon","description":"Normal Metamon NFT in Metamon Game on BSC.","attributes":[],"image":"https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png","external_url":"https://www.radiocaca.com/"}\n',
                                        name: "Metamon",
                                        owner: "0xb8b0fca54db13e009b42e7fb0da855c0741f57b5",
                                        symbol: "Metamon",
                                        tokenId: "2",
                                        updatedAt: "2021-09-09T16:57:42"
                                    },
                                    challengedOwner: "0xb8b0fca54db13e009b42e7fb0da855c0741f57b5",
                                    createTime: null,
                                    id: 12,
                                    updateTime: null
                                },
                                message: "",
                                result: 1
                            },
                            this.SC_fightStart(t),
                            [2]) : (o = e[0],
                            n = e[1],
                            r = {
                                monsterA: o.id,
                                monsterB: n.id,
                                address: f.default.instance.getOpenId(),
                                battleLevel: f.default.instance.getFightId()
                            },
                            console.log("=====\u5f00\u59cb\u6218\u6597", r),
                            this.isFight = !1,
                            i = function() {
                                p.isFight || (console.log("=====\u8fdb\u5165\u6218\u573a\u5931\u8d25", r),
                                c.default.UIManager.open(s.ModuleDefine.ChooseOpponent),
                                c.default.UIManager.close(s.ModuleDefine.FightLoading),
                                c.default.UIManager.open(s.ModuleDefine.FloatText, "Failed to enter the battlefield"))
                            }
                            ,
                            [4, c.default.Http.post(u.NetConfig.url + "startBattle", {}, r).catch(i)]);
                        case 1:
                            return (l = a.sent()) ? (this.SC_fightStart(l).catch(i),
                            [2]) : [2]
                        }
                    })
                })
            }
            ,
            t.prototype.SC_fightStart = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    var r = e;
                    if (1 == r.result) {
                        var i = r.data.challengeMonster
                          , a = r.data.challengeNft
                          , l = r.data.challengedMonster
                          , u = [a, r.data.challengedNft];
                        [i, l].forEach(function(e, t) {
                            var o = u[t];
                            e.image = o.imageUrl,
                            e.token = o.tokenId,
                            e.userId = Number(o.id)
                        });
                        for (var h = [], m = 0; m < r.data.challengeRecords.length; ++m) {
                            var g = 0
                              , _ = r.data.challengeRecords[m]
                              , y = _.monsterbLifelost;
                            Number(_.monsteraId) != f.default.instance.getMonsterSelectId() && (g = 1);
                            var v = {
                                id: g,
                                cmd: 1,
                                value: y
                            };
                            h.push(v)
                        }
                        var b = 0 == h[h.length - 1].id
                          , w = {
                            drop: {
                                exp: r.data.challengeExp,
                                items: {
                                    2: r.data.bpFragmentNum,
                                    3: r.data.bpPotionNum
                                }
                            },
                            monsters: [(new d.default).decode(i), (new d.default).decode(l)],
                            win: b,
                            records: h,
                            levelUp: 0
                        };
                        t.isFight = !0,
                        c.default.UIManager.open(s.ModuleDefine.Fight, w),
                        o(w),
                        cc.game.emit(p.default.User_All_Role_Update),
                        cc.game.emit(p.default.User_Bag_Update)
                    } else
                        n()
                }
                )
            }
            ,
            t
        }(l.default);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../../define/EventDefine": "EventDefine",
        "../data/UserData": "UserData",
        "../monster/Monster": "Monster"
    }],
    FightData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "69f53RCuvJCNLgbiXughvrK", "FightData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._vo = null,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this._vo.fightData = e
            }
            ,
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    FightInfo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "384b0puPBpC2J50vPH6VAoK", "FightInfo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../component/progress_bar/ProgressBar")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lblLevel = null,
                t.lblHp = null,
                t.hpProgress = null,
                t.monsterDisplay = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.setLayoutEnable = function(e) {
                this.node.getComponent(cc.Layout).enabled = e
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data;
                this.lblLevel.string = "" + e.level,
                e.updateSpriteFromRemoteUrl(this.monsterDisplay),
                this.updateHp()
            }
            ,
            t.prototype.updateHp = function() {
                var e = this.data;
                this.hpProgress.setProgress(e.hp / 100, .2);
                var t = e.hp >= 0 ? e.hp : 0;
                this.lblHp.string = t + "/100"
            }
            ,
            i([l(cc.Label)], t.prototype, "lblLevel", void 0),
            i([l(cc.Label)], t.prototype, "lblHp", void 0),
            i([l(a.default)], t.prototype, "hpProgress", void 0),
            i([l(cc.Sprite)], t.prototype, "monsterDisplay", void 0),
            i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../component/progress_bar/ProgressBar": "ProgressBar"
    }],
    FightLoadingCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f7eafF7X7xLJaJynkDQQDwl", "FightLoadingCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return e.call(this) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    FightLoadingData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e505e7T5BFJb7CchPLCMR85", "FightLoadingData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    FightLoadingView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "374b3t1m4RM16NMzJXwdjC6", "FightLoadingView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/mvc/BaseView")
          , c = e("../../define/EventDefine")
          , s = cc._decorator
          , l = s.ccclass
          , u = s.property
          , p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.monstersDisplay = [],
                t.lblMonsterNames = [],
                t.lblLevels = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onOpen = function(e) {
                this.data = e,
                this.reflesh(),
                cc.game.emit(c.default.User_FightStart, e)
            }
            ,
            t.prototype.reflesh = function() {
                for (var e = 0; e < 2; ++e) {
                    var t = this.data[e];
                    console.log("ffff", t, e, this.monstersDisplay),
                    t.updateSpriteFromRemoteUrl(this.monstersDisplay[e]),
                    this.lblMonsterNames[e].string = "#" + t.Name,
                    this.lblLevels[e].string = "" + t.level
                }
            }
            ,
            i([u([cc.Sprite])], t.prototype, "monstersDisplay", void 0),
            i([u([cc.Label])], t.prototype, "lblMonsterNames", void 0),
            i([u([cc.Label])], t.prototype, "lblLevels", void 0),
            i([l], t)
        }(a.default);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../define/EventDefine": "EventDefine"
    }],
    FightLoadingVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "88d22hm3vFEfqAhsiuYqCze", "FightLoadingVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    FightView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9aa76gk0lxOfqJtu0HerEd5", "FightView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../component/skill_cell/SkillCell")
          , p = e("../component/ui_title/UITitleView")
          , f = e("../scene_obj/monster/Scene_Monster")
          , d = e("./FightInfo")
          , h = cc._decorator
          , m = h.ccclass
          , g = h.property
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.uiTitlePrefab = null,
                t.topNode = null,
                t.fightInfos = [],
                t.monsterDisplays = [],
                t.bulletPrefab = null,
                t.bulletLayer = null,
                t.lblDemages = [],
                t.skillCellLayout = null,
                t.skillCellPrefab = null,
                t.monsterObj = [],
                t.skillSpines = [],
                t.skillEffSpines = [],
                t.skillSpines1 = [],
                t.bgSp = null,
                t.backgroundFames = [],
                t.lblName = null,
                t.data = null,
                t.bulletPool = new cc.NodePool,
                t.fightStep = 0,
                t.currenProgress = null,
                t.isFighting = !1,
                t.isResult = !1,
                t.bullet = null,
                t.endPos = cc.v2(380, 0),
                t.lblDamage = null,
                t.labelSpos = [],
                t.skillCellList = [],
                t.enterStepCounter = .3,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var t = this;
                e.prototype.onLoad.call(this),
                this.topNode.zIndex = 1;
                var o = cc.instantiate(this.uiTitlePrefab);
                o.parent = this.node,
                o.getComponent(p.default).setData({
                    titleName: "Leave",
                    showItemNum: !1,
                    showDiamond: !1,
                    showSetting: !1,
                    showPDiamond: !1,
                    hideBack: !0,
                    backButtonCallBack: function() {}
                }),
                this.lblDemages.forEach(function(e) {
                    t.labelSpos.push(e.node.position)
                });
                for (var n = 0; n < 4; ++n) {
                    var r = cc.instantiate(this.skillCellPrefab);
                    r.parent = this.skillCellLayout,
                    r.setPosition(0, 0);
                    var i = r.getComponent(u.default)
                      , a = {
                        id: n + 1,
                        isLock: !1,
                        cdPercent: 0,
                        cd: 1
                    };
                    i.setData(a),
                    this.skillCellList.push(i)
                }
                this.skillCellLayout.getComponent(cc.Layout).updateLayout()
            }
            ,
            t.prototype.onOpen = function(e) {
                var t = this;
                a.default.UIManager.close(s.ModuleDefine.FightLoading),
                this.data = e,
                this.initMonster(),
                this.scheduleOnce(function() {
                    t.runOneFightProgress(t.fightStep)
                }, .5),
                this.reflesh(),
                this.scheduleOnce(function() {
                    t.fightInfos.forEach(function(e) {
                        e.setLayoutEnable(!1)
                    })
                }, 1),
                cc.game.emit("music-play", c.eAudio.Fight);
                var o = Math.floor(Math.random() * this.backgroundFames.length);
                this.bgSp.spriteFrame = this.backgroundFames[o]
            }
            ,
            t.prototype.onDisable = function() {}
            ,
            t.prototype.initMonster = function() {
                var e = this.data;
                e.monsters[0].reset(),
                e.monsters[1].reset(),
                e.monsters[0].target = e.monsters[1],
                e.monsters[1].target = e.monsters[0],
                this.monsterObj[0].setModel(e.monsters[0]),
                this.monsterObj[1].setModel(e.monsters[1])
            }
            ,
            t.prototype.runOneFightProgress = function(e) {
                this.fightStep = e,
                e == this.data.records.length ? this.onBtnSkipClicked(null, .3) : (this.isFighting = !0,
                this.currenProgress = this.data.records[e])
            }
            ,
            t.prototype.onBtnSkipClicked = function(e, t) {
                var o = this;
                void 0 === t && (t = 0),
                this.isResult = !0,
                this.scheduleOnce(function() {
                    a.default.UIManager.open(s.ModuleDefine.Result, o.data)
                }, t),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.reflesh = function() {
                this.updateMonsterSprite(),
                this.updateFightInfo()
            }
            ,
            t.prototype.updateFightInfo = function() {
                for (var e = 0; e < 2; ++e)
                    this.fightInfos[e].setData(this.data.monsters[e]);
                this.lblName.string = "#" + this.data.monsters[0].id
            }
            ,
            t.prototype.updateHp = function() {
                for (var e = 0; e < 2; ++e)
                    this.fightInfos[e].updateHp()
            }
            ,
            t.prototype.updateMonsterSprite = function() {
                for (var e = 0; e < 2; ++e)
                    console.error("-----\x3e m", this.data.monsters[e].remoteImage, e),
                    this.data.monsters[e].updateSpriteFromRemoteUrl(this.monsterDisplays[e])
            }
            ,
            t.prototype.update = function(e) {
                var t = this;
                if (this.isFighting && !this.isResult && (this.enterStepCounter -= e,
                !(this.enterStepCounter > 0))) {
                    var o = this.currenProgress.id
                      , n = this.data.monsters[o]
                      , r = this.monsterObj[o];
                    if (n.state == c.FsmState.Idle) {
                        n.state = c.FsmState.Attack;
                        var i = r.node.convertToWorldSpaceAR(cc.v2(100, 0))
                          , a = (this.bulletLayer.convertToNodeSpaceAR(i),
                        Math.floor(4 * Math.random()));
                        0 == o && this.skillCellList[a].runCdAnim(),
                        this.lblDamage = this.lblDemages[o],
                        r.runAttack();
                        var s = this.skillSpines[o];
                        if (0 == a) {
                            var l = this.skillEffSpines[o];
                            l.setAnimation(0, "animation", !1),
                            l.node.active = !0,
                            l.getCurrent(0).trackTime = 0,
                            l.setToSetupPose();
                            var u = l.node;
                            u.stopAllActions(),
                            cc.tween(u).to(.1, {
                                opacity: 255
                            }).start(),
                            l.node.opacity = 255,
                            l.setCompleteListener(function() {
                                l.clearTracks(),
                                l.node.opacity = 0
                            })
                        } else
                            (s = this.skillSpines1[a - 1]).node.scaleX = 0 == o ? 1 : -1;
                        s.node.active = !0,
                        s.getCurrent(0).trackTime = 0,
                        s.setToSetupPose();
                        var p = this.monsterObj[0];
                        0 == o && (p = this.monsterObj[1]);
                        var f = .9;
                        0 != a && (f = .8),
                        this.scheduleOnce(function() {
                            n.demage(t.currenProgress.value),
                            p.runBeHit(),
                            t.updateHp(),
                            t.lblDamage.string = "-" + t.currenProgress.value;
                            var e = t.lblDamage.node
                              , r = t.labelSpos[Math.abs(1 - o)];
                            e.setPosition(t.labelSpos[Math.abs(1 - o)]),
                            e.opacity = 255,
                            e.stopAllActions(),
                            cc.tween(e).to(.7, {
                                y: r.y + 50,
                                opacity: 0
                            }).start()
                        }, f),
                        s.setCompleteListener(function() {
                            s.node.active = !1,
                            t.scheduleOnce(function() {
                                n.idle(),
                                t.runOneFightProgress(t.fightStep + 1),
                                t.enterStepCounter = .5
                            }, .8)
                        })
                    }
                }
            }
            ,
            t.prototype.getBullet = function() {
                return this.bulletPool.size() > 0 ? this.bulletPool.get() : cc.instantiate(this.bulletPrefab)
            }
            ,
            t.prototype.putBullet = function(e) {
                this.bulletPool.put(e)
            }
            ,
            i([g(cc.Prefab)], t.prototype, "uiTitlePrefab", void 0),
            i([g(cc.Node)], t.prototype, "topNode", void 0),
            i([g([d.default])], t.prototype, "fightInfos", void 0),
            i([g([cc.Sprite])], t.prototype, "monsterDisplays", void 0),
            i([g(cc.Prefab)], t.prototype, "bulletPrefab", void 0),
            i([g(cc.Node)], t.prototype, "bulletLayer", void 0),
            i([g([cc.Label])], t.prototype, "lblDemages", void 0),
            i([g(cc.Node)], t.prototype, "skillCellLayout", void 0),
            i([g(cc.Prefab)], t.prototype, "skillCellPrefab", void 0),
            i([g([f.default])], t.prototype, "monsterObj", void 0),
            i([g([sp.Skeleton])], t.prototype, "skillSpines", void 0),
            i([g([sp.Skeleton])], t.prototype, "skillEffSpines", void 0),
            i([g([sp.Skeleton])], t.prototype, "skillSpines1", void 0),
            i([g(cc.Sprite)], t.prototype, "bgSp", void 0),
            i([g([cc.SpriteFrame])], t.prototype, "backgroundFames", void 0),
            i([g(cc.Label)], t.prototype, "lblName", void 0),
            i([m], t)
        }(l.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../component/skill_cell/SkillCell": "SkillCell",
        "../component/ui_title/UITitleView": "UITitleView",
        "../scene_obj/monster/Scene_Monster": "Scene_Monster",
        "./FightInfo": "FightInfo"
    }],
    FightVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b27e/Z4p1I4oTJiZvUL3hh", "FightVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fightData = null,
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    FloatTextCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "330bbDR/w9KsbjwvRCIdf1J", "FloatTextCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    FloatTextData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "69635FtdRhAyYYtN8Dr5ZYH", "FloatTextData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    FloatTextView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "88cffY/+nBG65re8n/ieED6", "FloatTextView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ModuleDefine")
          , s = e("../../../game_framework/mvc/BaseView")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.moveNode = null,
                t.textBg = null,
                t.lblText = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = this;
                this.moveNode.active = !1,
                this.lblText.node.on(cc.Node.EventType.SIZE_CHANGED, function() {
                    e.textBg.width = e.lblText.node.width + 40
                }, this)
            }
            ,
            t.prototype.onOpen = function(e) {
                var t = {
                    title: "Tips",
                    content: e,
                    buttonNum: 0
                };
                a.default.UIManager.open(c.ModuleDefine.PopTips, t)
            }
            ,
            i([p(cc.Node)], t.prototype, "moveNode", void 0),
            i([p(cc.Node)], t.prototype, "textBg", void 0),
            i([p(cc.Label)], t.prototype, "lblText", void 0),
            i([u], t)
        }(s.default);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView"
    }],
    GameData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "70c20jScIhJ/JpODDrT5CrH", "GameData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("./GameVo")
          , c = function(e) {
            function t() {
                var o = e.call(this) || this;
                return o._vo = new a.default,
                t.instance = o,
                o
            }
            return r(t, e),
            t.instance = null,
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "./GameVo": "GameVo"
    }],
    GameHome: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a66ecROyx1KSLstEHJaPa/E", "GameHome");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../game_framework/App")
          , c = e("../game_framework/base/BaseScene")
          , s = e("../game_framework/consts/ModuleDefine")
          , l = cc._decorator
          , u = l.ccclass
          , p = (l.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this)
            }
            ,
            t.prototype.start = function() {
                a.default.UIManager.open(s.ModuleDefine.Home, "\u53c2\u6570\u4f20\u9012")
            }
            ,
            i([u], t)
        }(c.default));
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../game_framework/App": "App",
        "../game_framework/base/BaseScene": "BaseScene",
        "../game_framework/consts/ModuleDefine": "ModuleDefine"
    }],
    GameLaunch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2d252yeyc9CvIf+bSWxHRo6", "GameLaunch");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        , a = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , c = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = e("../config/client/Cfg")
          , l = e("../game_framework/App")
          , u = e("../game_framework/base/BaseScene")
          , p = e("../game_framework/consts/ModuleDefine")
          , f = e("../game_main/config/UIConfig")
          , d = e("../game_main/game/data/GameData")
          , h = e("../game_main/game/data/UserData")
          , m = e("../game_main/game/GameModule")
          , g = e("../game_main/platform/Platform")
          , _ = e("../game_main/platform/PlatformDefine")
          , y = cc._decorator
          , v = y.ccclass
          , b = y.property
          , w = {
            0: {
                name: "bgm_aigei"
            },
            1: {
                name: "button_push"
            },
            2: {
                name: "switch_field"
            },
            3: {
                name: "bgm_main"
            },
            4: {
                name: "win"
            },
            5: {
                name: "lost"
            },
            6: {
                name: "bgm_home"
            },
            7: {
                name: "bgm1",
                volumnFix: .5
            },
            8: {
                name: "bgm_fight1",
                volumnFix: .5
            },
            9: {
                name: "click"
            },
            10: {
                name: "merge"
            },
            11: {
                name: "pop"
            }
        }
          , C = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.platform = _.default.ePlat.Block,
                t.bgmID = -1,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                return a(this, void 0, void 0, function() {
                    return c(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return e.prototype.onLoad.call(this),
                            cc.game.addPersistRootNode(this.node),
                            l.default.init(),
                            l.default.UIManager.setRoot(this.node),
                            l.default.UIManager.setUIConfig(f.UIConfig),
                            l.default.Remind.init("prefabs/ui/component/remind_tips/RemindTips"),
                            (new m.default).regsiterController(),
                            cc.debug.setDisplayStats(!1),
                            [4, s.Cfg.initBySingleJson()];
                        case 1:
                            return t.sent(),
                            new d.default,
                            new h.default,
                            g.default.instance.setup(this.platform),
                            this.onLoadConfigComplete(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.onEnable = function() {
                cc.game.on("view-resize", this.updateView, this),
                cc.game.on("audio-play", this.onAudioPlay, this),
                cc.game.on("music-play", this.onMusicPlay, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.start = function() {
                this.updateView()
            }
            ,
            t.prototype.onLoadConfigComplete = function() {
                l.default.UIManager.open(p.ModuleDefine.Loading)
            }
            ,
            t.prototype.updateView = function() {
                var e = cc.winSize;
                this.node.setPosition(e.width >> 1, e.height >> 1),
                this.node.setContentSize(e)
            }
            ,
            t.prototype.onAudioPlay = function(e, t) {
                var o = w[e].name;
                cc.resources.load("audios/" + o, cc.AudioClip, function(e, o) {
                    e ? console.error(e) : cc.audioEngine.playEffect(o, t)
                })
            }
            ,
            t.prototype.onMusicPlay = function(e, t) {
                var o = this;
                if (void 0 === t && (t = !0),
                this.bgmID != e) {
                    var n = w[e].name;
                    this.bgmID = e,
                    cc.resources.load("audios/" + n, cc.AudioClip, function(n, r) {
                        n ? console.error(n) : o.bgmID == e && (cc.game.emit("music-volumn-fix", w[e].volumnFix || 1),
                        cc.audioEngine.stopMusic(),
                        cc.audioEngine.playMusic(r, t))
                    })
                }
            }
            ,
            i([b({
                type: _.default.ePlat
            })], t.prototype, "platform", void 0),
            i([v], t)
        }(u.default);
        o.default = C,
        cc._RF.pop()
    }
    , {
        "../config/client/Cfg": "Cfg",
        "../game_framework/App": "App",
        "../game_framework/base/BaseScene": "BaseScene",
        "../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../game_main/config/UIConfig": "UIConfig",
        "../game_main/game/GameModule": "GameModule",
        "../game_main/game/data/GameData": "GameData",
        "../game_main/game/data/UserData": "UserData",
        "../game_main/platform/Platform": "Platform",
        "../game_main/platform/PlatformDefine": "PlatformDefine"
    }],
    GameMain: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "990f6cpmMtIYJQ/6pCbPvGj", "GameMain");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../game_framework/App")
          , c = e("../game_framework/base/BaseScene")
          , s = e("../game_framework/consts/ModuleDefine")
          , l = cc._decorator
          , u = l.ccclass
          , p = (l.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this)
            }
            ,
            t.prototype.start = function() {
                a.default.UIManager.open(s.ModuleDefine.ChooseOpponent)
            }
            ,
            i([u], t)
        }(c.default));
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../game_framework/App": "App",
        "../game_framework/base/BaseScene": "BaseScene",
        "../game_framework/consts/ModuleDefine": "ModuleDefine"
    }],
    GameModule: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "62b87Vj781EjKY/TtpR+m8c", "GameModule"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../../game_framework/App")
          , r = e("../../game_framework/consts/ModuleDefine")
          , i = e("./bag/BagCtrl")
          , a = e("./Battlefield/BattlefieldCtrl")
          , c = e("./choose_opponent/ChooseOpponentCtrl")
          , s = e("./fight/FightCtrl")
          , l = e("./fight_loading/FightLoadingCtrl")
          , u = e("./float_text/FloatTextCtrl")
          , p = e("./game_home/HomeCtrl")
          , f = e("./game_loading/LoadingCtrl")
          , d = e("./IncubationRes/IncubationResCtrl")
          , h = e("./Notice/NoticeCtrl")
          , m = e("./PopTips/PopTipsCtrl")
          , g = e("./Record/RecordCtrl")
          , _ = e("./result/ResultCtrl")
          , y = e("./role/RoleCtrl")
          , v = e("./Seting/SetingCtrl")
          , b = e("./tips/loading_tips/LoadingTipsCtrl")
          , w = e("./tips/success_tips/SuccessTipsCtrl")
          , C = function() {
            function e() {}
            return e.prototype.regsiterController = function() {
                var e = n.default.ControllerManager;
                e.register(r.ModuleDefine.Loading, f.default),
                e.register(r.ModuleDefine.Home, p.default),
                e.register(r.ModuleDefine.Bag, i.default),
                e.register(r.ModuleDefine.ChooseOpponent, c.default),
                e.register(r.ModuleDefine.FightLoading, l.default),
                e.register(r.ModuleDefine.Fight, s.default),
                e.register(r.ModuleDefine.FloatText, u.default),
                e.register(r.ModuleDefine.Role, y.default),
                e.register(r.ModuleDefine.Record, g.default),
                e.register(r.ModuleDefine.Notice, h.default),
                e.register(r.ModuleDefine.Seting, v.default),
                e.register(r.ModuleDefine.Result, _.default),
                e.register(r.ModuleDefine.PopTips, m.default),
                e.register(r.ModuleDefine.IncubationRes, d.default),
                e.register(r.ModuleDefine.SuccessTips, w.default),
                e.register(r.ModuleDefine.Battlefield, a.default),
                e.register(r.ModuleDefine.LoadingTips, b.default)
            }
            ,
            e
        }();
        o.default = C,
        cc._RF.pop()
    }
    , {
        "../../game_framework/App": "App",
        "../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "./Battlefield/BattlefieldCtrl": "BattlefieldCtrl",
        "./IncubationRes/IncubationResCtrl": "IncubationResCtrl",
        "./Notice/NoticeCtrl": "NoticeCtrl",
        "./PopTips/PopTipsCtrl": "PopTipsCtrl",
        "./Record/RecordCtrl": "RecordCtrl",
        "./Seting/SetingCtrl": "SetingCtrl",
        "./bag/BagCtrl": "BagCtrl",
        "./choose_opponent/ChooseOpponentCtrl": "ChooseOpponentCtrl",
        "./fight/FightCtrl": "FightCtrl",
        "./fight_loading/FightLoadingCtrl": "FightLoadingCtrl",
        "./float_text/FloatTextCtrl": "FloatTextCtrl",
        "./game_home/HomeCtrl": "HomeCtrl",
        "./game_loading/LoadingCtrl": "LoadingCtrl",
        "./result/ResultCtrl": "ResultCtrl",
        "./role/RoleCtrl": "RoleCtrl",
        "./tips/loading_tips/LoadingTipsCtrl": "LoadingTipsCtrl",
        "./tips/success_tips/SuccessTipsCtrl": "SuccessTipsCtrl"
    }],
    GameVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "264acwHkilDcZl6ZwV7Qx96", "GameVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    GlobalDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9d6d1bQXYRDoLR/soATl3mg", "GlobalDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.applyMixins = o.isNull = void 0,
        o.isNull = function(e) {
            return null == e || null == e
        }
        ,
        o.applyMixins = function(e, t) {
            t.forEach(function(t) {
                Object.getOwnPropertyNames(t.prototype).forEach(function(o) {
                    e.prototype[o] = t.prototype[o]
                })
            })
        }
        ,
        cc._RF.pop()
    }
    , {}],
    Global: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "99c29OXU8RBFZYcCDR7HUjW", "Global"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.interval = function(e, t, o, n) {
                var r = this
                  , i = 0;
                if (!e)
                    return i;
                var a = 0;
                return i = setInterval(function() {
                    e(),
                    ++a >= n && (r.clearInterval(i),
                    t && t())
                }, 1e3 * o)
            }
            ,
            e.prototype.clearInterval = function(e) {
                clearInterval(e)
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    HomeCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8517373h0ZK+J8tCdRJAqt5", "HomeCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseController")
          , a = e("./HomeData")
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = null,
                t.data = new a.default,
                t
            }
            return r(t, e),
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController",
        "./HomeData": "HomeData"
    }],
    HomeData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2428er+GwJAaoKYzHQ1E5vp", "HomeData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("./HomeVo")
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._vo = new a.default,
                t
            }
            return r(t, e),
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "./HomeVo": "HomeVo"
    }],
    HomeView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c3f3aqyThlMaLqyrNBdhU9J", "HomeView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../../define/EventDefine")
          , p = e("../component/img_quality/ImgQuality")
          , f = e("../component/progress_bar/ProgressBar")
          , d = e("../component/ui_title/UITitleView")
          , h = e("../data/UserData")
          , m = e("../role/RoleProperty")
          , g = cc._decorator
          , _ = g.ccclass
          , y = g.property
          , v = [cc.color(24, 212, 222), cc.color(107, 255, 254)]
          , b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.uiTitlePrefab = null,
                t.lblMonsterName = null,
                t.lblLevel = null,
                t.lblProperties = [],
                t.propProgressBars = [],
                t.btnEvolution = null,
                t.btnMorph = null,
                t.imgButtonFrames = [],
                t.monsterDisplay = null,
                t.imgQuality = null,
                t.lblEnergy = null,
                t.btnRole = null,
                t.btnBag = null,
                t.btnUpgrade = null,
                t.loadingMonster = null,
                t.controller = null,
                t.bagController = null,
                t.isStart = !1,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this);
                var t = cc.instantiate(this.uiTitlePrefab);
                t.parent = this.node,
                t.getComponent(d.default).setData({
                    titleName: "summer",
                    showItemNum: !0,
                    showDiamond: !0,
                    showPDiamond: !0,
                    showSetting: !0,
                    viewStyle: 1
                }),
                this.registerButtonEvent(this.btnEvolution, this.onBtnEvolutionClicked.bind(this)),
                this.registerButtonEvent(this.btnMorph, this.onBtnMorphClicked.bind(this))
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.start = function() {
                this.registerReminds()
            }
            ,
            t.prototype.onOpen = function(e) {
                this.controller = a.default.ControllerManager.getController(s.ModuleDefine.Home),
                this.bagController = a.default.ControllerManager.getController(s.ModuleDefine.Bag),
                this.isStart = !1,
                cc.log("\u754c\u9762\u6253\u5f00", e),
                a.default.UIManager.close(s.ModuleDefine.Loading),
                a.default.UIManager.close(s.ModuleDefine.Battlefield),
                this.reflesh(),
                cc.game.on(u.default.User_All_Role_Update, this.reflesh, this),
                cc.game.on(u.default.User_MonsterSelect_Change, this.reflesh, this),
                cc.game.emit("music-play", c.eAudio.Home),
                a.default.UIManager.close(s.ModuleDefine.LoadingTips)
            }
            ,
            t.prototype.registerButtonEvent = function(e, t) {
                var o = this
                  , n = e.getComponent(cc.Sprite)
                  , r = e.children[0].children[0];
                e.on(cc.Node.EventType.TOUCH_START, function() {
                    n.spriteFrame = o.imgButtonFrames[1],
                    r.color = v[1]
                }, this);
                var i = function() {
                    n.spriteFrame = o.imgButtonFrames[0],
                    r.color = v[0],
                    t()
                };
                e.on(cc.Node.EventType.TOUCH_END, i, this),
                e.on(cc.Node.EventType.TOUCH_CANCEL, i, this)
            }
            ,
            t.prototype.registerReminds = function() {
                var e = this
                  , t = h.default.instance
                  , o = {
                    node: this.btnRole.node,
                    checkFunc: function() {
                        return Number(t.getCanUpgradeOneOfMonster())
                    },
                    type: 1
                };
                a.default.Remind.regRemind(o),
                o = {
                    node: this.btnBag.node,
                    checkFunc: function() {
                        return Number(e.bagController.data.getCanUseOneOfItem())
                    }
                },
                a.default.Remind.regRemind(o),
                o = {
                    node: this.btnUpgrade.node,
                    checkFunc: function() {
                        return Number(t.getCurrentSelectMonsterCanUpgrade())
                    },
                    rtOffset: cc.v2(-10, -3),
                    type: 1
                },
                a.default.Remind.regRemind(o)
            }
            ,
            t.prototype.onBtnStartClicked = function() {
                cc.game.emit("audio-play", c.eAudio.Click),
                h.default.instance.getMonsterSelectInfo().energy <= 0 ? a.default.UIManager.open(s.ModuleDefine.FloatText, "Sorry, you have no energy left to battle. Energy will be recharged after 0:00 UTC time. Or you can change another Metamon to play. ") : this.isStart || (this.isStart = !0,
                a.default.UIManager.open(s.ModuleDefine.Battlefield))
            }
            ,
            t.prototype.onBtnMorphClicked = function() {
                a.default.UIManager.open(s.ModuleDefine.Role, m.eRolePropertyPage.Morph),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.onBtnEvolutionClicked = function() {
                a.default.UIManager.open(s.ModuleDefine.Role, m.eRolePropertyPage.Evolve),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.onBtnRoleClicked = function() {
                a.default.UIManager.open(s.ModuleDefine.Role, m.eRolePropertyPage.OverView),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.onBtnBagClicked = function() {
                a.default.UIManager.open(s.ModuleDefine.Bag),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.onBtnHelpClicked = function() {
                cc.game.emit("audio-play", c.eAudio.Click),
                a.default.UIManager.open(s.ModuleDefine.PopTips, {
                    title: "ENERGY",
                    buttonNum: 0,
                    content: "Each battle consumes 1 Energy.Each Metamon have up to 20 Energy per day and will be recharged automatically  after 0:00 UTC time."
                })
            }
            ,
            t.prototype.reflesh = function() {
                var e = this
                  , t = h.default.instance.getMonsterSelectInfo();
                if (t) {
                    for (var o = t.properties, n = t.propertiesMax, r = 0; r < o.length; ++r) {
                        var i = o[r]
                          , a = n[r];
                        this.lblProperties[r].string = "" + i,
                        this.propProgressBars[r].setProgress(i / a),
                        cc.log(i, a)
                    }
                    this.lblLevel.string = "" + t.level,
                    this.lblMonsterName.string = "#" + t.id,
                    this.imgQuality.setData({
                        quality: t.quality
                    }),
                    console.log("[Home] ===== monster", t),
                    this.loadingMonster.active = !0;
                    var c = function() {
                        e.loadingMonster.active = !1
                    };
                    t.updateSpriteFromRemoteUrl(this.monsterDisplay).then(c).catch(c),
                    this.lblEnergy.string = t.energy + "/20"
                }
            }
            ,
            i([y(cc.Prefab)], t.prototype, "uiTitlePrefab", void 0),
            i([y(cc.Label)], t.prototype, "lblMonsterName", void 0),
            i([y(cc.Label)], t.prototype, "lblLevel", void 0),
            i([y([cc.Label])], t.prototype, "lblProperties", void 0),
            i([y([f.default])], t.prototype, "propProgressBars", void 0),
            i([y(cc.Node)], t.prototype, "btnEvolution", void 0),
            i([y(cc.Node)], t.prototype, "btnMorph", void 0),
            i([y([cc.SpriteFrame])], t.prototype, "imgButtonFrames", void 0),
            i([y(cc.Sprite)], t.prototype, "monsterDisplay", void 0),
            i([y(p.default)], t.prototype, "imgQuality", void 0),
            i([y(cc.Label)], t.prototype, "lblEnergy", void 0),
            i([y(cc.Button)], t.prototype, "btnRole", void 0),
            i([y(cc.Button)], t.prototype, "btnBag", void 0),
            i([y(cc.Button)], t.prototype, "btnUpgrade", void 0),
            i([y(cc.Node)], t.prototype, "loadingMonster", void 0),
            i([_], t)
        }(l.default);
        o.default = b,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../define/EventDefine": "EventDefine",
        "../component/img_quality/ImgQuality": "ImgQuality",
        "../component/progress_bar/ProgressBar": "ProgressBar",
        "../component/ui_title/UITitleView": "UITitleView",
        "../data/UserData": "UserData",
        "../role/RoleProperty": "RoleProperty"
    }],
    HomeVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c2052RKxVdJTokEKYJfAjxW", "HomeVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    HttpAPI: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d5750d6ReBNI6cUG6dTTV9y", "HttpAPI"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.headers = {}
            }
            return e.prototype.get = function(e, t, o) {
                var n = this;
                return new Promise(function(r, i) {
                    var a = new XMLHttpRequest;
                    a.timeout = 5e3;
                    var c = e;
                    return t && (c += n.paramFormat2UrlStr(t)),
                    t = t || {},
                    console.log("%c[Http] --\x3e Get: " + e + " \n params: " + JSON.stringify(t) + " token: " + o, "color:#1C00CF"),
                    a.open("GET", c, !0),
                    a.setRequestHeader("Content-Type", "application/json"),
                    o && a.setRequestHeader("Authorization", o),
                    a.onreadystatechange = function() {
                        if (4 === a.readyState && a.status >= 200 && a.status < 300) {
                            console.log("%c[Http] --\x3e Respon: " + c + "\nres (len: " + a.responseText.length + "):" + a.responseText, "color:#C41616");
                            try {
                                var e = a.responseText;
                                return void r(JSON.parse(e))
                            } catch (t) {
                                i(t)
                            }
                        } else
                            2 != a.readyState && 3 != a.readyState && (console.log("[Http] --\x3e fail(readyState\uff1a" + a.readyState + ")  status\uff1a" + a.status),
                            i(a.readyState + ": " + a.status))
                    }
                    ,
                    a.ontimeout = function() {
                        console.log("[Http] --\x3e time out(readyState\uff1a" + a.readyState + ")  status\uff1a" + a.status),
                        i(a.readyState + ": " + a.status)
                    }
                    ,
                    a.onerror = function() {
                        console.log("[Http] --\x3e onerror(readyState\uff1a" + a.readyState + ")  status\uff1a" + a.status),
                        i(a.readyState + ": " + a.status)
                    }
                    ,
                    a.send(),
                    a
                }
                )
            }
            ,
            e.prototype.post = function(e, t, o, n) {
                var r = this;
                return new Promise(function(i, a) {
                    var c = new XMLHttpRequest;
                    c.timeout = 3e4;
                    var s = e;
                    if (t && (s += r.paramFormat2UrlStr(t)),
                    c.open("post", s, !0),
                    Object.keys(r.headers).length > 0)
                        for (var l in r.headers)
                            c.setRequestHeader(l, r.headers[l]);
                    c.onreadystatechange = function() {
                        if (4 === c.readyState && c.status >= 200 && c.status < 300)
                            try {
                                var e = c.responseText;
                                return i(JSON.parse(e)),
                                console.log("%c [Http] --\x3e post Respond!\nurl: " + s + "\n res:" + e, "color: #C41A16"),
                                void console.log("%c [Http] --\x3e", "color: #C41A16", JSON.parse(e))
                            } catch (t) {
                                console.error("[Http] --\x3e post fail! " + t),
                                a(t)
                            }
                        else
                            2 != c.readyState && 3 != c.readyState && (console.log("[Http] --\x3e post fail(readyState\uff1a" + c.readyState + ") status\uff1a" + c.status),
                            a(c.readyState + ": " + c.status))
                    }
                    ,
                    c.ontimeout = function() {
                        a()
                    }
                    ,
                    console.log("%c [Http] --\x3e send:\nurl: " + s + " \n body: " + JSON.stringify(o) + "\n token:" + n + "\n header:" + JSON.stringify(r.headers), "color: #2222FF");
                    var u = new FormData;
                    for (var p in o)
                        u.append(p, o[p]);
                    return c.send(u),
                    c
                }
                )
            }
            ,
            e.prototype.download = function(e, t) {
                var o = this;
                return new Promise(function(n, r) {
                    var i = new XMLHttpRequest;
                    i.timeout = 5e3;
                    var a = e;
                    t && (a += o.paramFormat2UrlStr(t)),
                    i.responseType = "arraybuffer",
                    i.open("GET", a, !0),
                    i.onreadystatechange = function() {
                        if (4 === i.readyState && i.status >= 200 && i.status < 300) {
                            for (var e = i.response, t = new DataView(e), o = new Uint8Array(e.byteLength), a = 0; a < o.length; ++a)
                                o[a] = t.getUint8(a);
                            n(o)
                        } else
                            r(i.readyState + ": " + i.status);
                        return i.send(),
                        i
                    }
                }
                )
            }
            ,
            e.prototype.paramFormat2UrlStr = function(e) {
                var t = "";
                if ("object" == typeof e)
                    for (var o in Object.keys(e).length > 0 && (t += "?"),
                    e)
                        "?" != t && (t += "&"),
                        t += o + "=" + e[o];
                return t
            }
            ,
            e.prototype.paramJoint = function(e) {
                var t = "";
                if ("object" == typeof e)
                    for (var o in e)
                        "" != t && (t += "&"),
                        t += o + "=" + e[o];
                return t
            }
            ,
            e.prototype.setHeaders = function(e) {
                this.headers = e
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    IActor: [function(e, t) {
        "use strict";
        cc._RF.push(t, "aadd0nO1SxPCKU6ZuvwSNG4", "IActor"),
        cc._RF.pop()
    }
    , {}],
    IBagItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ce4aaXzjahPI5Qmdxpju63D", "IBagItem"),
        cc._RF.pop()
    }
    , {}],
    IBagRespond: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9f484ILw8pElaevvXSqykEp", "IBagRespond"),
        cc._RF.pop()
    }
    , {}],
    ICharactor: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5af79cFA8FD1a1oYyc5MfEp", "ICharactor"),
        cc._RF.pop()
    }
    , {}],
    IChooseOpponent: [function(e, t) {
        "use strict";
        cc._RF.push(t, "359f3IJWR5IProxLRIq3IZd", "IChooseOpponent"),
        cc._RF.pop()
    }
    , {}],
    IConfig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "190b24GQp5H0I3YXvUdzxMj", "IConfig"),
        cc._RF.pop()
    }
    , {}],
    IEvolveStar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4c618dAx35Ic4I4Co7eSa4+", "IEvolveStar"),
        cc._RF.pop()
    }
    , {}],
    IEvolveViewData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "00abbYwUl1MH7XdwxQarzPZ", "IEvolveViewData"),
        cc._RF.pop()
    }
    , {}],
    IFightData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "e5d9dpRAyRNE4C1n4ajWRSB", "IFightData"),
        cc._RF.pop()
    }
    , {}],
    IImgQualityData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "05ddfpcI2hJO7rX9992BEX1", "IImgQualityData"),
        cc._RF.pop()
    }
    , {}],
    IIncubationData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fb971vfAVhMBp8pN1uLber0", "IIncubationData"),
        cc._RF.pop()
    }
    , {}],
    IItemCellData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4c207xJVe9MAI44Yemp05mr", "IItemCellData"),
        cc._RF.pop()
    }
    , {}],
    ILoginData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "8f766tHlglOX7bDd80bi6vD", "ILoginData"),
        cc._RF.pop()
    }
    , {}],
    IMonster: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3dec4Tk8nxD5L6hiZD1jyNi", "IMonster"),
        cc._RF.pop()
    }
    , {}],
    IMorphViewData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4a324kxcexIfpSGt6ew6crT", "IMorphViewData"),
        cc._RF.pop()
    }
    , {}],
    INoticeItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fcb85iLcBFOq6tg0K57rLL6", "INoticeItem"),
        cc._RF.pop()
    }
    , {}],
    IOverViewData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30b6aASCdhFCpX+5L13bD+Y", "IOverViewData"),
        cc._RF.pop()
    }
    , {}],
    IPopTipsData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2b29aCGLW1K/oFqzKbQNjuX", "IPopTipsData"),
        cc._RF.pop()
    }
    , {}],
    IProtocol: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c0ce3nlqgNJUZN8Tf3iTbt2", "IProtocol"),
        cc._RF.pop()
    }
    , {}],
    IRecordItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "08880Tgpv9Mz5Sz5w7EurJW", "IRecordItem"),
        cc._RF.pop()
    }
    , {}],
    IRemind: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c5710VKm3REE4JNHw0VEaTW", "IRemind"),
        cc._RF.pop()
    }
    , {}],
    IResultDropItemData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fa54d4qWL5Opr6OJfI06dGD", "IResultDropItemData"),
        cc._RF.pop()
    }
    , {}],
    IRoleInfo: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bf006ZR5kROaYW2Jr1i33Ux", "IRoleInfo"),
        cc._RF.pop()
    }
    , {}],
    IRoleItemData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f8c52+06b9LL7bmEG2yFfMe", "IRoleItemData"),
        cc._RF.pop()
    }
    , {}],
    ISkillCellData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a2c9d6RKDdIsqqTR3NPolk+", "ISkillCellData"),
        cc._RF.pop()
    }
    , {}],
    ISuccessTipsData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6326agPDY9AgqCwYfoVjT3O", "ISuccessTipsData"),
        cc._RF.pop()
    }
    , {}],
    ITabItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9bd10DGPR5Apqsc9SL9TDGH", "ITabItem"),
        cc._RF.pop()
    }
    , {}],
    IUITitleData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "834eaXOuPhNtYutvjcegSWG", "IUITitleData"),
        cc._RF.pop()
    }
    , {}],
    IUIconfig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1a999MsPIpP1LzkZqN5hbT5", "IUIconfig"),
        cc._RF.pop()
    }
    , {}],
    IUserProtocol: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6b20c48bzpO9IhrJYk4YxaO", "IUserProtocol"),
        cc._RF.pop()
    }
    , {}],
    ImgQuality: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "297b68ZVX1OzYcdd61aJpwd", "ImgQuality");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.imgQuality = null,
                t.imgQualityFrames = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data.quality - 1;
                this.imgQuality.spriteFrame = this.imgQualityFrames[e]
            }
            ,
            i([s(cc.Sprite)], t.prototype, "imgQuality", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "imgQualityFrames", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    IncubationResCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5ea31/yIv5ImZvvgmKU5fXZ", "IncubationResCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    IncubationResData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9ee5fmWW4xIFa6uzPP0cJF0", "IncubationResData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    IncubationResView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "47020g1rmFLgL/vxjJsPa5y", "IncubationResView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../config/client/Cfg")
          , c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../component/img_quality/ImgQuality")
          , p = e("../monster/Monster")
          , f = cc._decorator
          , d = f.ccclass
          , h = f.property
          , m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.incubationTit = null,
                t.transFormTit = null,
                t.Diamond = null,
                t.Monster = null,
                t.MonsterLabel = null,
                t.MonsterSprite = null,
                t.DiamondNum = null,
                t.RarityNode = null,
                t.potion = null,
                t.imgQuality = null,
                t.lblPotionNum = null,
                t.diamonds = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onOpen = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.onConfirm = function() {
                c.default.UIManager.close(s.ModuleDefine.IncubationRes)
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data;
                if (-1 != e.typeStr.indexOf("Metamon")) {
                    this.Monster.active = !0,
                    this.incubationTit.active = !0,
                    this.MonsterLabel.string = a.Cfg.Monster.get(e.id).MonsterName;
                    var t = {
                        quality: e.quality
                    };
                    this.imgQuality.setData(t),
                    p.default.updateSpriteFromRemoteUrl(this.MonsterSprite.getComponent(cc.Sprite), e.remoteImage)
                } else if (-1 != e.typeStr.indexOf("Diamond")) {
                    this.Diamond.active = !0,
                    this.DiamondNum.string = "" + this.data.num;
                    var o = "YDiamond" == e.typeStr ? 0 : 1;
                    this.diamonds[0].node.active = 0 == o,
                    this.diamonds[1].node.active = 1 == o
                } else
                    this.potion.active = !0,
                    this.lblPotionNum.string = "" + this.data.num
            }
            ,
            i([h(cc.Node)], t.prototype, "incubationTit", void 0),
            i([h(cc.Node)], t.prototype, "transFormTit", void 0),
            i([h(cc.Node)], t.prototype, "Diamond", void 0),
            i([h(cc.Node)], t.prototype, "Monster", void 0),
            i([h(cc.Label)], t.prototype, "MonsterLabel", void 0),
            i([h(cc.Node)], t.prototype, "MonsterSprite", void 0),
            i([h(cc.Label)], t.prototype, "DiamondNum", void 0),
            i([h(cc.Node)], t.prototype, "RarityNode", void 0),
            i([h(cc.Node)], t.prototype, "potion", void 0),
            i([h(u.default)], t.prototype, "imgQuality", void 0),
            i([h(cc.Label)], t.prototype, "lblPotionNum", void 0),
            i([h([cc.Sprite])], t.prototype, "diamonds", void 0),
            i([d], t)
        }(l.default);
        o.default = m,
        cc._RF.pop()
    }
    , {
        "../../../config/client/Cfg": "Cfg",
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../component/img_quality/ImgQuality": "ImgQuality",
        "../monster/Monster": "Monster"
    }],
    ItemCell: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5898f9T3iBHwIfC2rwNUZWi", "ItemCell");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../config/client/Cfg")
          , c = e("../../../../game_framework/App")
          , s = e("../../../../game_framework/consts/ConstDefine")
          , l = e("../shadow_label/ShadowLabel")
          , u = cc._decorator
          , p = u.ccclass
          , f = u.property
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.imgIcon = null,
                t.imgSubIcon = null,
                t.lblItemNum = null,
                t.imgChoose = null,
                t.imgQuality = null,
                t.imgSubQuality = null,
                t.frameQualitys = [],
                t.frameSubQualitys = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshItemCell()
            }
            ,
            t.prototype.setIsChoose = function(e) {
                this.data && (this.data.isChoose = e,
                this.imgChoose.node.active = this.data.isChoose)
            }
            ,
            t.prototype.refleshItemCell = function() {
                var e = this.data;
                if (e) {
                    var t = e.itemData.id
                      , o = a.Cfg.Item.get(t);
                    if (o) {
                        var n = o.Quality - 1;
                        this.imgQuality.spriteFrame = this.frameQualitys[n],
                        e.hideNum && (this.imgSubQuality.node.active = !1),
                        this.lblItemNum.setText(e.itemData.num + ""),
                        this.lblItemNum.setColor([s.QualityLabelColor[n], s.QualityLabelShadowColor[n]]),
                        this.setIsChoose(this.data.isChoose);
                        var r = "textures/item/" + t;
                        c.default.Utils.setSprite(this.imgIcon, r);
                        var i = o.ItemType == s.ItemType.MonsterFragment;
                        if (this.imgSubIcon.node.active = i,
                        i) {
                            var l = "textures/item/" + t + "_sub";
                            c.default.Utils.setSprite(this.imgSubIcon, l)
                        }
                    }
                }
            }
            ,
            i([f(cc.Sprite)], t.prototype, "imgIcon", void 0),
            i([f(cc.Sprite)], t.prototype, "imgSubIcon", void 0),
            i([f(l.default)], t.prototype, "lblItemNum", void 0),
            i([f(cc.Sprite)], t.prototype, "imgChoose", void 0),
            i([f(cc.Sprite)], t.prototype, "imgQuality", void 0),
            i([f(cc.Sprite)], t.prototype, "imgSubQuality", void 0),
            i([f([cc.SpriteFrame])], t.prototype, "frameQualitys", void 0),
            i([f([cc.SpriteFrame])], t.prototype, "frameSubQualitys", void 0),
            i([p], t)
        }(cc.Component);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../../config/client/Cfg": "Cfg",
        "../../../../game_framework/App": "App",
        "../../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../shadow_label/ShadowLabel": "ShadowLabel"
    }],
    ItemCfg: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "47a5dCn02ZEOY07b00/tnKD", "ItemCfg");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.ItemCfgReader = void 0;
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._name = "Item",
                t
            }
            return r(t, e),
            t
        }(e("./TConfig").TConfig);
        o.ItemCfgReader = i,
        cc._RF.pop()
    }
    , {
        "./TConfig": "TConfig"
    }],
    LayerDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "56843V34cVOfby4JppfPD/M", "LayerDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.LayerDefine = void 0,
        function(e) {
            e[e.Loading = 0] = "Loading",
            e[e.Home = 1] = "Home",
            e[e.ChooseOpponent = 2] = "ChooseOpponent",
            e[e.Fight = 3] = "Fight",
            e[e.FightLoading = 4] = "FightLoading",
            e[e.Role = 5] = "Role",
            e[e.Result = 6] = "Result",
            e[e.Bag = 7] = "Bag",
            e[e.Notice = 8] = "Notice",
            e[e.Seting = 9] = "Seting",
            e[e.Record = 10] = "Record",
            e[e.IncubationRes = 11] = "IncubationRes",
            e[e.SuccessTips = 12] = "SuccessTips",
            e[e.Battlefield = 13] = "Battlefield",
            e[e.LoadingTips = 14] = "LoadingTips",
            e[e.Tips = 15] = "Tips",
            e[e.PopTips = 16] = "PopTips",
            e[e.FloatText = 17] = "FloatText",
            e[e.Max = 18] = "Max"
        }(o.LayerDefine || (o.LayerDefine = {})),
        cc._RF.pop()
    }
    , {}],
    LevelInfo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1fedahEM59HgZGvAy+w+NJG", "LevelInfo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../../scripts/game_main/game/data/UserData")
          , c = e("../../../define/EventDefine")
          , s = cc._decorator
          , l = s.ccclass
          , u = s.property
          , p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.monsterIcon = null,
                t.lblMonsterName = null,
                t.lblLevel = null,
                t.lblExp = null,
                t.lblEnergy = null,
                t
            }
            return r(t, e),
            t.prototype.onEnable = function() {
                this.reflesh(),
                cc.game.on(c.default.User_Role_Change, this.reflesh, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.reflesh = function() {
                var e = a.default.instance.getMonsterSelectInfo();
                e && (e.updateSpriteFromRemoteUrl(this.monsterIcon),
                this.lblMonsterName.string = "#" + e.Name,
                this.lblLevel.string = "Lv." + e.level,
                this.lblExp.string = e.exp + "/" + e.expMax,
                this.lblEnergy.string = "" + e.energy)
            }
            ,
            i([u(cc.Sprite)], t.prototype, "monsterIcon", void 0),
            i([u(cc.Label)], t.prototype, "lblMonsterName", void 0),
            i([u(cc.Label)], t.prototype, "lblLevel", void 0),
            i([u(cc.Label)], t.prototype, "lblExp", void 0),
            i([u(cc.Label)], t.prototype, "lblEnergy", void 0),
            i([l], t)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../../../scripts/game_main/game/data/UserData": "UserData",
        "../../../define/EventDefine": "EventDefine"
    }],
    LoadingCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f51e4p2judAjoPJrJVFrCnp", "LoadingCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseController")
          , u = e("../../config/NetConfig")
          , p = e("../../define/EventDefine")
          , f = e("../../platform/Platform")
          , d = e("../data/UserData")
          , h = e("./LoadingData")
          , m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = null,
                t.data = new h.default,
                t
            }
            return r(t, e),
            t.prototype.CS_loginWallet = function(e) {
                return i(this, void 0, Promise, function() {
                    var t = this;
                    return a(this, function() {
                        return [2, new Promise(function(o, n) {
                            return i(t, void 0, void 0, function() {
                                var t, r;
                                return a(this, function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return console.log("\u767b\u5f55\u73af\u5883", u.NetConfig.env),
                                        f.default.instance.setEnv(u.NetConfig.env),
                                        u.NetConfig.getIsLocal() ? (t = {
                                            message: "ok",
                                            description: "",
                                            value: {
                                                address: u.NetConfig.testAccount.account,
                                                sign: u.NetConfig.testAccount.sign,
                                                msg: "LogIn"
                                            }
                                        },
                                        [2, this.SC_LoginWaller(t).then(o).catch(n)]) : (console.log("=====connectWallet start"),
                                        [4, f.default.instance.connect(e)]);
                                    case 1:
                                        return r = i.sent(),
                                        console.log("=====connectWallet suc", r),
                                        r && "ok" == r.message ? this.SC_LoginWaller(r).then(o).catch(n) : (n(),
                                        c.default.UIManager.open(s.ModuleDefine.FloatText, "Login failed")),
                                        [2]
                                    }
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            t.prototype.CS_loginGS = function() {
                var e = this;
                return new Promise(function(t, o) {
                    return i(e, void 0, void 0, function() {
                        var e, n, r, i, s, l = this;
                        return a(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return e = d.default.instance,
                                n = function() {
                                    var e = {
                                        data: u.NetConfig.testAccount.account,
                                        message: "",
                                        result: 1
                                    };
                                    return l.SC_LoginGS(e).then(t).catch(o)
                                }
                                ,
                                u.NetConfig.getIsLocal() ? [2, n()] : u.NetConfig.skipGSLogin ? [2, n()] : (r = f.default.instance.getCacheKey(),
                                console.log("=====\u5f00\u59cb\u767b\u5f55\u6e38\u620f\u670d\u52a1\u5668 \u662f\u5426\u5b58\u5728\u94b1\u5305\u767b\u5f55\u7f13\u5b58", r && r.state),
                                r && r.state ? (console.log("=====\u7f13\u5b58\u767b\u5f55", r),
                                d.default.instance.setAddress(r.address),
                                d.default.instance.setSign(r.sign),
                                i = {
                                    address: e.getAddress(),
                                    sign: e.getSign(),
                                    msg: "LogIn"
                                },
                                [4, c.default.Http.post(u.NetConfig.url + "login", {}, i).catch(o)]) : (console.log("=====\u6ca1\u6709\u7f13\u5b58\uff0c\u5f00\u59cb\u9009\u62e9\u94b1\u5305\u767b\u5f55\u65b9\u5f0f"),
                                cc.game.emit(p.default.User_Login_GS_Fail),
                                [2]));
                            case 1:
                                return (s = a.sent()) ? (this.SC_LoginGS(s).then(t).catch(o),
                                [2]) : [2]
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.SC_LoginWaller = function(e) {
                return new Promise(function(t) {
                    console.log("\u767b\u5f55\u94b1\u5305\u6210\u529f", e);
                    var o = e.value
                      , n = d.default.instance
                      , r = o.address
                      , i = o.sign;
                    n.setAddress(r),
                    n.setSign(i),
                    t(null)
                }
                )
            }
            ,
            t.prototype.SC_LoginGS = function(e) {
                return new Promise(function(t, o) {
                    if (1 == e.result) {
                        var n = d.default.instance
                          , r = e.data;
                        n.setOpenId(r),
                        n.setNickName(r),
                        n.setAddress(r),
                        t(),
                        cc.game.emit(p.default.User_Login_GS, r)
                    } else
                        o()
                }
                )
            }
            ,
            t
        }(l.default);
        o.default = m,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../../define/EventDefine": "EventDefine",
        "../../platform/Platform": "Platform",
        "../data/UserData": "UserData",
        "./LoadingData": "LoadingData"
    }],
    LoadingData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "52714FaeCRJbIkp/LJ9qbsx", "LoadingData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    LoadingTipsCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "682bfrPxIxEaIq7P1mpSIH7", "LoadingTipsCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/mvc/BaseController": "BaseController"
    }],
    LoadingTipsView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1561cBx1thKcqpCrzgocOva", "LoadingTipsView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../game_framework/mvc/BaseView")
          , c = cc._decorator
          , s = c.ccclass
          , l = (c.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.onOpen = function() {}
            ,
            i([s], t)
        }(a.default));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/mvc/BaseView": "BaseView"
    }],
    LoadingView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "92d36TaD/xCFIq5jwFZor86", "LoadingView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../../config/UIConfig")
          , p = e("../../define/EventDefine")
          , f = e("../component/progress_bar/ProgressBar")
          , d = cc._decorator
          , h = d.ccclass
          , m = d.property
          , g = [u.UIConfig[s.ModuleDefine.Home].path, u.UIConfig[s.ModuleDefine.Bag].path, u.UIConfig[s.ModuleDefine.ChooseOpponent].path, u.UIConfig[s.ModuleDefine.FightLoading].path, "audios/switch_field", "audios/win", "audios/lost", "audios/bgm_home", "audios/bgm1", "audios/bgm_fight1", "audios/click", "audios/merge", "audios/pop"]
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.LoadingNode = null,
                t.lblProgress = null,
                t.SignIn = null,
                t.btnLogins = [],
                t.btnEnter = null,
                t.progressBar = null,
                t.controller = null,
                t.isClickEnter = !1,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.showLoadingPage()
            }
            ,
            t.prototype.onOpen = function(e) {
                var t = this;
                if (this.controller = a.default.ControllerManager.getController(s.ModuleDefine.Loading),
                cc.game.emit("music-play", c.eAudio.Home),
                1 != e) {
                    var o = this.LoadingNode.getComponent(f.default);
                    o.setProgress(0, 0),
                    this.updateLblProgress(0),
                    cc.resources.load(g, function(e, n) {
                        o.setProgress(e / n, .1, null, !0),
                        t.updateLblProgress(e / n)
                    }, function(e) {
                        e ? console.error(e) : t.onProgressComplete()
                    }),
                    cc.game.on(p.default.User_Login_GS_Fail, this.onLoginFail, this)
                } else
                    this.showLoginPage()
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.onProgressComplete = function() {
                this.progressBar.active = !1,
                this.btnEnter.node.active = !0
            }
            ,
            t.prototype.onBtnEnterClicked = function() {
                var e = this;
                this.isClickEnter || (this.isClickEnter = !0,
                this.controller.CS_loginGS().then(function() {
                    e.isClickEnter = !1
                }).catch(function() {
                    e.isClickEnter = !1,
                    e.showLoginPage()
                }))
            }
            ,
            t.prototype.onLoginFail = function() {
                this.showLoginPage()
            }
            ,
            t.prototype.sginIn = function(e, t) {
                var o = this;
                "MetaMask" == t ? console.log(t) : "WalletConnect" == t && console.log(t);
                var n = function() {
                    o.scheduleOnce(function() {
                        o.setLoginButtonState(!0)
                    }, .2)
                };
                this.setLoginButtonState(!1),
                this.controller.CS_loginWallet(t).then(function() {
                    console.log("\u767b\u5f55\u94b1\u5305\u6210\u529f1"),
                    o.controller.CS_loginGS().catch(function() {
                        n(),
                        a.default.UIManager.open(s.ModuleDefine.FloatText, "Login failed! Please try again!")
                    })
                }).catch(n),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.showLoadingPage = function() {
                this.LoadingNode.active = !0,
                this.SignIn.active = !1
            }
            ,
            t.prototype.showLoginPage = function() {
                this.LoadingNode.active = !1,
                this.SignIn.active = !0,
                this.setLoginButtonState(!0),
                a.default.UIManager.close(s.ModuleDefine.Home),
                a.default.UIManager.close(s.ModuleDefine.LoadingTips)
            }
            ,
            t.prototype.updateLblProgress = function(e) {
                this.lblProgress.string = (100 * e).toFixed(2) + "%"
            }
            ,
            t.prototype.setLoginButtonState = function(e) {
                e ? a.default.UIManager.close(s.ModuleDefine.LoadingTips) : a.default.UIManager.open(s.ModuleDefine.LoadingTips),
                this.btnLogins.forEach(function(t) {
                    return t.interactable = e
                })
            }
            ,
            i([m(cc.Node)], t.prototype, "LoadingNode", void 0),
            i([m(cc.Label)], t.prototype, "lblProgress", void 0),
            i([m(cc.Node)], t.prototype, "SignIn", void 0),
            i([m([cc.Button])], t.prototype, "btnLogins", void 0),
            i([m(cc.Button)], t.prototype, "btnEnter", void 0),
            i([m(cc.Node)], t.prototype, "progressBar", void 0),
            i([h], t)
        }(l.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../config/UIConfig": "UIConfig",
        "../../define/EventDefine": "EventDefine",
        "../component/progress_bar/ProgressBar": "ProgressBar"
    }],
    LoginVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "25c59a4PIZHM5YkEj9ipqIj", "LoginVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    ModuleDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0e8b3uhPkNNW7egejZGHZ3i", "ModuleDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.ModuleDefine = void 0,
        function(e) {
            e[e.Loading = 1] = "Loading",
            e[e.Home = 2] = "Home",
            e[e.ChooseOpponent = 3] = "ChooseOpponent",
            e[e.Fight = 4] = "Fight",
            e[e.FightLoading = 5] = "FightLoading",
            e[e.Role = 6] = "Role",
            e[e.Result = 7] = "Result",
            e[e.Bag = 8] = "Bag",
            e[e.Tips = 9] = "Tips",
            e[e.FloatText = 10] = "FloatText",
            e[e.Notice = 11] = "Notice",
            e[e.Seting = 12] = "Seting",
            e[e.Record = 13] = "Record",
            e[e.PopTips = 14] = "PopTips",
            e[e.IncubationRes = 15] = "IncubationRes",
            e[e.SuccessTips = 16] = "SuccessTips",
            e[e.Battlefield = 17] = "Battlefield",
            e[e.LoadingTips = 18] = "LoadingTips"
        }(o.ModuleDefine || (o.ModuleDefine = {})),
        cc._RF.pop()
    }
    , {}],
    MonsterCfg: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d3086V9K4NKLqG07uhiJj1u", "MonsterCfg");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.MonsterCfgReader = void 0;
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._name = "Monster",
                t
            }
            return r(t, e),
            t
        }(e("./TConfig").TConfig);
        o.MonsterCfgReader = i,
        cc._RF.pop()
    }
    , {
        "./TConfig": "TConfig"
    }],
    Monster: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a2188jKC1ZAlpYWdjtk2cGf", "Monster");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../config/client/Cfg")
          , c = e("../../../game_framework/actor/Charactor")
          , s = e("../../../game_framework/consts/ConstDefine")
          , l = e("../../config/NetConfig")
          , u = cc._decorator
          , p = u.ccclass
          , f = (u.property,
        {
            N: 1,
            R: 2,
            SR: 3,
            SSR: 4
        })
          , d = function(e) {
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                var n = e.call(this) || this;
                return n.id = 1,
                n.Name = "sum",
                n.quality = 1,
                n.level = 10,
                n.levelMax = 10,
                n.starNum = 1,
                n.properties = [40, 90, 50, 60, 70],
                n.propertiesMax = [100, 100, 100, 100, 100],
                n.exp = 100,
                n.expMax = 300,
                n.power = 150,
                n.hp = 100,
                n.hpMax = 100,
                n.state = s.FsmState.Idle,
                n.target = null,
                n.token = "",
                n.remoteImage = null,
                n.isChoose = !1,
                n.energy = 0,
                n.strength = 0,
                n.id = t[0] || 1,
                n.Name = n.name = a.Cfg.Monster.get(n.id).MonsterName,
                n
            }
            var o;
            return r(t, e),
            o = t,
            t.prototype.reset = function() {
                return this.state = s.FsmState.Idle,
                this.hp = 100,
                this
            }
            ,
            t.prototype.idle = function() {
                return this.state = s.FsmState.Idle,
                this
            }
            ,
            t.prototype.demage = function(e) {
                return this.target && (this.target.hp -= e),
                this
            }
            ,
            t.getRemoteSpritePath = function(e) {
                var t = "";
                return e && (t = e.split("https://racawebsource.s3.us-east-2.amazonaws.com")[1]),
                t || e
            }
            ,
            t.prototype.getRemoteSpritePath = function() {
                return o.getRemoteSpritePath(this.remoteImage)
            }
            ,
            t.prototype.setData = function(e) {
                return this.id = e.id,
                this.Name = this.name = e.Name || "",
                this.quality = e.quality,
                this.level = e.level,
                this.levelMax = e.levelMax,
                this.starNum = e.starNum,
                this.properties = e.properties,
                this.propertiesMax = e.propertiesMax,
                this.exp = e.exp,
                this.expMax = e.expMax,
                this.power = e.power,
                this.hp = e.hp,
                this.hpMax = e.hpMax,
                this.remoteImage = e.remoteImage,
                this.energy = e.energy,
                this.token = e.token,
                this.strength = e.strength,
                this.upgradeCost = e.upgradeCost,
                this.isChoose = e.isChoose,
                this.upgradeCostType = e.upgradeCostType,
                this.upgradeCost = e.upgradeCost,
                this
            }
            ,
            t.prototype.decode = function(e) {
                var t = {
                    id: e.id,
                    Name: String(e.id),
                    power: e.sca,
                    quality: f[String(e.rarity).toUpperCase()],
                    level: e.level,
                    levelMax: e.levelMax,
                    exp: e.exp,
                    expMax: e.expMax,
                    hp: e.life,
                    hpMax: e.lifeLL,
                    properties: [e.luk, e.crg, e.inte, e.con, e.inv],
                    propertiesMax: [e.lukMax, e.crgMax, e.inteMax, e.conMax, e.invMax],
                    starNum: e.years,
                    remoteImage: this.remoteImage || e.image || e.imageUrl,
                    isChoose: e.isPlay,
                    energy: e.tear,
                    token: e.token || e.tokenId || this.token,
                    strength: e.tear,
                    upgradeCostType: e.itemId,
                    upgradeCost: e.itemNum
                };
                return console.log("\u5237\u65b0\u5143\u517d\u4fe1\u606f", t),
                this.setData(t),
                this
            }
            ,
            t.prototype.setImageUrl = function(e) {
                this.remoteImage = e
            }
            ,
            t.updateSpriteFromRemoteUrl = function(e, t) {
                return new Promise(function(n, r) {
                    var i = e;
                    if (t) {
                        i.spPath = t;
                        var a = o.spFrameCache[t];
                        if (a && cc.isValid(a))
                            return e.spriteFrame = a,
                            void n(null);
                        i.node.opacity = 0;
                        var c = "" + t;
                        l.NetConfig.localNtf && (c = "http://127.0.0.1" + c),
                        cc.assetManager.loadRemote("" + c, cc.Texture2D, function(c, s) {
                            if (c)
                                return i.node.opacity = 255,
                                console.error("tex", c),
                                void r();
                            i.spPath == t && cc.isValid(i.node) ? (a = new cc.SpriteFrame(s),
                            o.spFrameCache[t] = a,
                            i.spriteFrame = a,
                            e.sizeMode = cc.Sprite.SizeMode.CUSTOM,
                            e.node.setContentSize(350, 350),
                            i.node.opacity = 255,
                            n(null)) : r()
                        })
                    } else
                        r()
                }
                )
            }
            ,
            t.prototype.updateSpriteFromRemoteUrl = function(e) {
                return o.updateSpriteFromRemoteUrl(e, this.getRemoteSpritePath())
            }
            ,
            t.spFrameCache = {},
            o = i([p], t)
        }(c.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../config/client/Cfg": "Cfg",
        "../../../game_framework/actor/Charactor": "Charactor",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../config/NetConfig": "NetConfig"
    }],
    NetConfig: [function(e, t, o) {
        "use strict";
        var n;
        cc._RF.push(t, "c05eayfQhtCapGJOuLvFKOW", "NetConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.ErrorCode = o.NetConfig = void 0,
        function(e) {
            e[e.Local = 0] = "Local",
            e[e.Develop = 1] = "Develop",
            e[e.Release = 2] = "Release"
        }(n || (n = {})),
        o.NetConfig = {
            env: n.Develop,
            localNtf: !1,
            skipGSLogin: !1,
            testAccount: {
                account: "0x0a0b364093cb37787827e210806f50c30ce4e192",
                sign: "0xd8799ae1c9aa211d74a3f0b40aa5014c6b274eb6272bb28b638fad071f10d2942b01b3906352adc86ce8fcc39a18497b7a00efdc40d3649e5e870272ba44cc181c"
            },
            url: "https://test-api.metamons.io/usm-api/",
            getIsLocal: function() {
                return this.env == n.Local
            },
            getIsDevelop: function() {
                return this.env == n.Develop
            },
            getIsRelease: function() {
                return this.env == n.Release
            }
        },
        function(e) {
            e[e.Failed = 0] = "Failed",
            e[e.MonsterListEmpty = 1] = "MonsterListEmpty"
        }(o.ErrorCode || (o.ErrorCode = {})),
        cc._RF.pop()
    }
    , {}],
    NoticeCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "646b0TMshVP+LK4D3fV5ReL", "NoticeCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = null,
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    NoticeData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d08b2FYZtlJYq2GyVDzzaBv", "NoticeData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    NoticeItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "db886uA4eZHLI5yCsmcyole", "NoticeItem");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Time = null,
                t.Desc = null,
                t
            }
            return r(t, e),
            t.prototype.init = function(e) {
                this.Time.string = e.time,
                this.Desc.string = e.desc
            }
            ,
            t.prototype.start = function() {}
            ,
            i([s(cc.Label)], t.prototype, "Time", void 0),
            i([s(cc.Label)], t.prototype, "Desc", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    NoticeView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "333dcIDcC1BmL3ZES4/7SbO", "NoticeView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ModuleDefine")
          , s = e("../../../game_framework/mvc/BaseView")
          , l = e("../component/scrollview/RecycleScroll")
          , u = cc._decorator
          , p = u.ccclass
          , f = u.property
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.controller = null,
                t.Scroll = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.controller = a.default.ControllerManager.getController(c.ModuleDefine.Notice),
                this.Scroll.numItems = 10,
                this.Scroll.onItemRender = this.onItemRender.bind(this)
            }
            ,
            t.prototype.onItemRender = function(e, t) {
                var o = t.getComponent("NoticeItem")
                  , n = {
                    time: (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate(),
                    desc: "\u88ab\u6311\u6218\u83b7\u80dc"
                };
                o.init(n)
            }
            ,
            t.prototype.closeNotice = function() {
                a.default.UIManager.close(c.ModuleDefine.Notice)
            }
            ,
            i([f(l.default)], t.prototype, "Scroll", void 0),
            i([p], t)
        }(s.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../component/scrollview/RecycleScroll": "RecycleScroll"
    }],
    PlatformDefine: [function(e, t, o) {
        "use strict";
        var n, r;
        cc._RF.push(t, "8b839zxYhtF+rujNdExG1xB", "PlatformDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Block = 0] = "Block"
        }(n || (n = {})),
        function(e) {
            e[e.OpenEgg = 1] = "OpenEgg",
            e[e.MergeEgg = 2] = "MergeEgg",
            e[e.PotionUpgrade = 3] = "PotionUpgrade",
            e[e.YellowDiamondUpgrade = 4] = "YellowDiamondUpgrade",
            e[e.PurpleDiamondUpgrade = 5] = "PurpleDiamondUpgrade"
        }(r || (r = {}));
        var i = function() {
            function e() {}
            return e.ePlat = cc.Enum(n),
            e.eItemType = cc.Enum(r),
            e.costTypeToOpertaion = {
                1: 3,
                2: 4,
                3: 5
            },
            e
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {}],
    Platform: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba7a8h43kVBZbyX4pCgCKVO", "Platform");
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("./PlatformDefine")
          , a = e("./sdk/dapp/Dapp")
          , c = function() {
            function e() {
                this._sdk = null
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return this._instance || (this._instance = new e),
                    this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.setup = function(e) {
                switch (console.log("\u521d\u59cb\u5316sdk 0", e, i.default.ePlat.Block),
                e) {
                case i.default.ePlat.Block:
                    this._sdk = new a.default,
                    console.log("\u521d\u59cb\u5316sdk 1", this._sdk)
                }
            }
            ,
            e.prototype.setEnv = function(e) {
                this._sdk.setEnv(e)
            }
            ,
            e.prototype.logout = function() {
                this._sdk.logout()
            }
            ,
            e.prototype.getCacheKey = function() {
                return this._sdk.getCacheKey()
            }
            ,
            e.prototype.connect = function(e) {
                return n(this, void 0, void 0, function() {
                    return r(this, function() {
                        return [2, this._sdk.connect(e)]
                    })
                })
            }
            ,
            e.prototype.pay = function(e) {
                return n(this, void 0, void 0, function() {
                    return r(this, function() {
                        return [2, this._sdk.pay(e)]
                    })
                })
            }
            ,
            e.prototype.useItem = function(e) {
                return this._sdk.useItem(e)
            }
            ,
            e._instance = null,
            e.Define = i.default,
            e
        }();
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./PlatformDefine": "PlatformDefine",
        "./sdk/dapp/Dapp": "Dapp"
    }],
    PopTipsCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f4745sW1qxGy7MBd6X/Dy/S", "PopTipsCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    PopTipsData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1ad07PCd9lD9IyLJiH76MGh", "PopTipsData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    PopTipsView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "827cf/UYP1B6peGh/1vMXBG", "PopTipsView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = cc._decorator
          , p = u.ccclass
          , f = u.property
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.title = null,
                t.content = null,
                t.cancelNode = null,
                t.confrimNode = null,
                t.callBack = null,
                t.canClick = !0,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onOpen = function(e) {
                this.data = e,
                e && (void 0 === e.buttonNum && (e.buttonNum = 1),
                this.title.string = e.title,
                this.content.string = e.content,
                this.cancelNode.active = e.buttonNum > 1,
                this.confrimNode.active = e.buttonNum > 0),
                cc.game.emit("audio-play", c.eAudio.Pop)
            }
            ,
            t.prototype.onClose = function() {
                if (this.canClick) {
                    this.canClick = !1,
                    a.default.UIManager.close(s.ModuleDefine.PopTips);
                    var e = this.data.close;
                    e && e(),
                    cc.game.emit("audio-play", c.eAudio.Click)
                }
            }
            ,
            t.prototype.onConfirm = function() {
                if (this.canClick) {
                    this.canClick = !1,
                    a.default.UIManager.close(s.ModuleDefine.PopTips);
                    var e = this.data.confirm;
                    e && e(),
                    cc.game.emit("audio-play", c.eAudio.Click)
                }
            }
            ,
            t.prototype.onCancel = function() {
                if (this.canClick) {
                    this.canClick = !1,
                    a.default.UIManager.close(s.ModuleDefine.PopTips);
                    var e = this.data.cancel;
                    e && e(),
                    cc.game.emit("audio-play", c.eAudio.Click)
                }
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data;
                this.title.string = e.title,
                this.content.string = e.content
            }
            ,
            i([f(cc.Label)], t.prototype, "title", void 0),
            i([f(cc.Label)], t.prototype, "content", void 0),
            i([f(cc.Node)], t.prototype, "cancelNode", void 0),
            i([f(cc.Node)], t.prototype, "confrimNode", void 0),
            i([p], t)
        }(l.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView"
    }],
    ProgressBar: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ff12fF0n6lPFbtORyT6Hgz8", "ProgressBar");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = cc.Enum({
            ProgressCom: 0,
            FillRange: 1
        })
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.progressBg = null,
                t.progressBar = null,
                t.progressType = l.ProgressCom,
                t.progress = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                switch (!0) {
                case this.progressType == l.ProgressCom:
                    this.progressBar.type = cc.Sprite.Type.SLICED,
                    this.progress = this.progressBg.getComponent(cc.ProgressBar),
                    this.progress || (this.progress = this.progressBg.addComponent(cc.ProgressBar),
                    this.progress.barSprite = this.progressBar),
                    this.progress.progress = 0;
                    break;
                case this.progressType == l.FillRange:
                    this.progressBar.type = cc.Sprite.Type.FILLED,
                    this.setProgress(.5)
                }
            }
            ,
            t.prototype.setProgress = function(e, t, o, n) {
                var r = this;
                return void 0 === t && (t = .5),
                new Promise(function(i) {
                    switch (!0) {
                    case r.progressType == l.ProgressCom:
                        var a = r.progress;
                        if (n && e < a.progress)
                            return;
                        if (!t)
                            return a.progress = e,
                            void (o && o(e));
                        (c = a.node).stopAllActions(),
                        cc.tween(r.progress).to(t, {
                            progress: e
                        }, {
                            progress: function(e, t, n, r) {
                                return o && o(r),
                                e + (t - e) * r
                            }
                        }).call(i).start();
                        break;
                    case r.progressType == l.FillRange:
                        var c, s = r.progressBar;
                        if (n && e < s.fillRange)
                            return;
                        if (!t)
                            return s.fillRange = e,
                            void (o && o(e));
                        (c = s.node).stopAllActions();
                        var u = s.fillRange;
                        cc.tween(c).to(t, {
                            opacity: 255
                        }, {
                            progress: function(t, n, r, i) {
                                return s.fillRange = u + (e - u) * i,
                                o && o(i),
                                t + (n - t) * i
                            }
                        }).call(i).start()
                    }
                }
                )
            }
            ,
            t.prototype.reProgress = function(e) {
                this.setProgress(0, 0),
                this.setProgress(e)
            }
            ,
            i([s(cc.Node)], t.prototype, "progressBg", void 0),
            i([s(cc.Sprite)], t.prototype, "progressBar", void 0),
            i([s({
                type: l
            })], t.prototype, "progressType", void 0),
            i([c], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {}],
    RecordCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9de4asXbMBC26GSRwDFhzc3", "RecordCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseController")
          , a = e("./RecordData")
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.view = null,
                t.data = new a.default,
                t
            }
            return r(t, e),
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController",
        "./RecordData": "RecordData"
    }],
    RecordData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e9feeAk4dBPGYFaIjqNfoJ9", "RecordData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    RecordItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c8a62ONZG9BkZhfns0meALp", "RecordItem");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.Time = null,
                t.Result = null,
                t
            }
            return r(t, e),
            t.prototype.init = function(e) {
                this.Time.string = e.time,
                this.Result.string = e.result
            }
            ,
            t.prototype.start = function() {}
            ,
            i([s(cc.Label)], t.prototype, "Time", void 0),
            i([s(cc.Label)], t.prototype, "Result", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    RecordView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b9facgo/eZHHJ+rNcUwjsJ0", "RecordView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../component/scrollview/RecycleScroll")
          , p = e("./RecordItem")
          , f = cc._decorator
          , d = f.ccclass
          , h = f.property
          , m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.controller = null,
                t.scroll = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.controller = a.default.ControllerManager.getController(s.ModuleDefine.Record),
                this.scroll.numItems = 10,
                this.scroll.onItemRender = this.onItemRender.bind(this)
            }
            ,
            t.prototype.onItemRender = function(e, t) {
                var o = t.getComponent(p.default);
                console.log();
                var n = {
                    index: e,
                    time: (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate(),
                    result: ["\u80dc\u5229", "\u5931\u8d25"][Math.random().toFixed()]
                };
                o.init(n)
            }
            ,
            t.prototype.onBtnBackClicked = function() {
                a.default.UIManager.close(s.ModuleDefine.Record),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.onLoadImg = function() {}
            ,
            i([h(u.default)], t.prototype, "scroll", void 0),
            i([d], t)
        }(l.default);
        o.default = m,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../component/scrollview/RecycleScroll": "RecycleScroll",
        "./RecordItem": "RecordItem"
    }],
    RecycleScroll: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "de9dfSeW+1C+LnxnXxtDVOw", "RecycleScroll");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemPrefab = null,
                t.spacingX = 0,
                t.spacingY = 0,
                t._numItems = 0,
                t._viewCol = 0,
                t._viewRow = 0,
                t._viewW = 0,
                t._viewH = 0,
                t._itemW = 0,
                t._itemH = 0,
                t._lastPosX = 0,
                t._lastPosY = 0,
                t._isInit = !1,
                t._itemsUUIDToIndex = {},
                t._updatingContentHeight = !1,
                t._scrollToIndex = 0,
                t.itemList = [],
                t.itemTable = {},
                t.content = null,
                t.isHorizontal = !1,
                t
            }
            return r(t, e),
            Object.defineProperty(t.prototype, "numItems", {
                get: function() {
                    return this._numItems
                },
                set: function(e) {
                    var t = this;
                    this._numItems = e,
                    this._updatingContentHeight = !0,
                    this._hideAllItems(),
                    this.scheduleOnce(function() {
                        t._initialize(),
                        t._updateContentSize()
                    }),
                    this.updateAllItems()
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.onItemRender = function() {}
            ,
            t.prototype.onItemClicked = function() {}
            ,
            t.prototype.onItemClickStart = function() {}
            ,
            t.prototype.onItemClickCancel = function() {}
            ,
            t.prototype.onItemHoverBegin = function() {}
            ,
            t.prototype.onItemHoverLeave = function() {}
            ,
            t.prototype.onItemLoadComplete = function() {}
            ,
            t.prototype.updateAllItems = function() {
                var e = this;
                this.itemList.forEach(function(t) {
                    e._updateItem(e._itemsUUIDToIndex[t.uuid], t)
                })
            }
            ,
            t.prototype.scrollToLeft = function() {
                this.node.getComponent(cc.ScrollView).scrollToLeft(.2)
            }
            ,
            t.prototype.scrollToRight = function() {
                this.node.getComponent(cc.ScrollView).scrollToRight(.2)
            }
            ,
            t.prototype.getContent = function() {
                return this.node.getComponent(cc.ScrollView).content
            }
            ,
            t.prototype.scrollToIndex = function(e, t, o) {
                void 0 === t && (t = .2),
                this._scrollToIndex = e,
                this._updatingContentHeight || this._updateScrollToPos(e, t, o)
            }
            ,
            t.prototype._updateScrollToPos = function(e, t, o) {
                if (void 0 === t && (t = .2),
                !(this.numItems < 2)) {
                    var n = this.node.getComponent(cc.ScrollView)
                      , r = cc.v2()
                      , i = (Math.ceil(e / this._viewCol) - 2) / (this._viewRow - 1);
                    console.log("scroll to", e, this._viewCol, this._viewRow, i),
                    r = cc.v2(0, 1 - i),
                    n.scrollTo(r, t, o)
                }
            }
            ,
            t.prototype._hideAllItems = function() {
                this.itemList.forEach(function(e) {
                    e.active = !1
                })
            }
            ,
            t.prototype._initialize = function() {
                var e = this;
                if (!this._isInit) {
                    var t = this.node.getComponent(cc.ScrollView);
                    t.enabled = !1,
                    this.isHorizontal = t.horizontal,
                    this._isInit = !0;
                    var o = this.getContent();
                    this.content = o,
                    this._viewW = o.parent.width,
                    this._viewH = o.parent.height;
                    var n = this.itemPrefab.data;
                    this._itemW = n.width + this.spacingX,
                    this._itemH = n.height + this.spacingY,
                    this._lastPosX = o.x,
                    this._lastPosY = o.y,
                    this.isHorizontal ? (this._viewRow = 1,
                    this._viewCol = Math.ceil(this._viewW / this._itemW) + 1) : (this._viewRow = Math.ceil(this._viewH / this._itemH) + 1,
                    this._viewCol = Math.floor(this._viewW / this._itemW));
                    var r = this._viewW - this._viewCol * this._itemW
                      , i = cc.v2((-this._viewW >> 1) + (this._itemW >> 1) + (r >> 1), -this._itemH >> 1);
                    this.isHorizontal && (i = cc.v2(this._itemW >> 1, 0));
                    var a = this._viewRow * this._viewCol;
                    cc.log("\u5b9e\u4f8b\u5316\u6570\u91cf:" + a);
                    var c = 0;
                    u(a, function(n) {
                        if (cc.isValid(o)) {
                            var r = cc.instantiate(e.itemPrefab);
                            r.parent = o;
                            var s = n % e._viewCol * e._itemW
                              , l = -Math.floor(n / e._viewCol) * e._itemH + (e.spacingY >> 1);
                            e.isHorizontal && (l = 0);
                            var u = i.add(cc.v2(s, l));
                            r.setPosition(u),
                            r.on(cc.Node.EventType.TOUCH_START, function() {
                                e.onItemClickStart(e._itemsUUIDToIndex[r.uuid], r)
                            }, e),
                            r.on(cc.Node.EventType.TOUCH_END, function() {
                                e.onItemClicked(e._itemsUUIDToIndex[r.uuid], r)
                            }, e),
                            r.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                                e.onItemClickCancel(e._itemsUUIDToIndex[r.uuid], r)
                            }, e),
                            r.on(cc.Node.EventType.MOUSE_ENTER, function() {
                                e.onItemHoverBegin(e._itemsUUIDToIndex[r.uuid], r)
                            }, e),
                            r.on(cc.Node.EventType.MOUSE_LEAVE, function() {
                                e.onItemHoverLeave(e._itemsUUIDToIndex[r.uuid], r)
                            }, e),
                            e.itemList.push(r),
                            e._updateItem(n, r),
                            e._itemsUUIDToIndex[r.uuid] = n,
                            ++c == a && (t.enabled = !0,
                            e.onItemLoadComplete())
                        }
                    })
                }
            }
            ,
            t.prototype._updateContentSize = function() {
                var e = this.getContent();
                if (this.isHorizontal) {
                    var t = this.numItems;
                    e.width = t * (this.itemPrefab.data.width + this.spacingX) - this.spacingX
                } else {
                    t = Math.floor(this._viewW / this._itemW);
                    var o = Math.ceil(this.numItems / t);
                    e.height = o * (this.itemPrefab.data.height + this.spacingY) - this.spacingY
                }
                this._updatingContentHeight && this._scrollToIndex && this._updateScrollToPos(this._scrollToIndex),
                this._updatingContentHeight = !1
            }
            ,
            t.prototype._getPosInView = function(e) {
                var t = this.getContent()
                  , o = t.parent
                  , n = t.convertToWorldSpaceAR(e.position);
                return o.convertToNodeSpaceAR(n)
            }
            ,
            t.prototype._updateItem = function(e, t) {
                var o = e >= 0 && e < this.numItems;
                t.active = o,
                o && (this.itemTable[e] = t,
                this.onItemRender(e, t))
            }
            ,
            t.prototype.update = function() {
                var e = this.getContent()
                  , t = this.itemList.length;
                if (this.isHorizontal) {
                    var o = e.x
                      , n = o - this._lastPosX;
                    if (this._lastPosX = o,
                    0 == n)
                        return;
                    var r = n < 0;
                    for (u = 0; u < t; ++u) {
                        f = this.itemList[u],
                        d = this._getPosInView(f);
                        var i = this._viewW >> 1
                          , a = this._itemW >> 1;
                        g = p = this._itemsUUIDToIndex[f.uuid],
                        r ? d.x <= -(i + a) && (f.x += this._viewCol * this._itemW,
                        g = p + t) : d.x >= i + a && (f.x -= this._viewCol * this._itemW,
                        g = p - t),
                        g != p && this._updateItem(g, f),
                        this._itemsUUIDToIndex[f.uuid] = g
                    }
                } else {
                    var c = e.y
                      , s = c - this._lastPosY;
                    if (this._lastPosY = c,
                    0 == s)
                        return;
                    for (var l = s < 0, u = 0; u < t; ++u) {
                        var p, f = this.itemList[u], d = this._getPosInView(f), h = this._viewH >> 1, m = this._itemH >> 1, g = p = this._itemsUUIDToIndex[f.uuid];
                        l ? d.y <= -(h + m) && (f.y += this._viewRow * this._itemH,
                        g = p - t) : d.y >= h + m && (f.y -= this._viewRow * this._itemH,
                        g = p + t),
                        g != p && this._updateItem(g, f),
                        this._itemsUUIDToIndex[f.uuid] = g
                    }
                }
            }
            ,
            t.prototype.getCanDragToStart = function() {
                var e = !1
                  , t = this.getContent();
                return t.width > this._viewW && 0 != this._viewW && (e = Math.abs(t.x - -this._viewW / 2) >= 1),
                e
            }
            ,
            t.prototype.getCanDragToEnd = function() {
                var e = !1
                  , t = this.getContent();
                return t.width > this._viewW && 0 != this._viewW && (e = Math.abs(t.x - this._viewW / 2 - -t.width) >= 2),
                e
            }
            ,
            i([s(cc.Prefab)], t.prototype, "itemPrefab", void 0),
            i([s()], t.prototype, "spacingX", void 0),
            i([s()], t.prototype, "spacingY", void 0),
            i([c], t)
        }(cc.Component);
        function u(e, t, o, n) {
            void 0 === o && (o = 16),
            void 0 === n && (n = 0);
            for (var r = e, i = (new Date).getTime(), a = 0; a < r && !(n >= r); ++a) {
                try {
                    t && t(n)
                } catch (c) {
                    cc.error(c)
                }
                if (n++,
                (new Date).getTime() - i > o) {
                    setTimeout(function() {
                        u(r, t, o, n)
                    }, 10);
                    break
                }
            }
        }
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    RemindManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "399e77dKxBMtqCkMsdcHjkb", "RemindManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../../game_main/game/component/remind_tips/RemindTips")
          , r = function() {
            function e() {
                this._path = null,
                this._remindTable = {},
                this._inited = !1
            }
            return e.prototype.init = function(e) {
                var t = this;
                this._path = e,
                this._inited || setInterval(function() {
                    t.updateAllRemind()
                }, 500)
            }
            ,
            e.prototype.regRemind = function(e) {
                var t = this;
                if (this._path && e) {
                    var o = e.node
                      , r = this._remindTable[o.uuid];
                    if (r && cc.isValid(r.node))
                        return r.checkFunc = e.checkFunc,
                        r.rtOffset = e.rtOffset ? e.rtOffset : r.rtOffset,
                        this.updateOneRemind(o.uuid),
                        void r.node.getComponent(n.default).setType(e.type || 0);
                    cc.resources.load(this._path, cc.Prefab, function(r, i) {
                        if (r)
                            console.error("[Remind]", r);
                        else if (cc.isValid(o)) {
                            var a = cc.instantiate(i);
                            a.parent = o;
                            var c = o.getContentSize()
                              , s = cc.v2(c.width / 2, c.height / 2);
                            e.rtOffset = e.rtOffset ? e.rtOffset : cc.v2(-5, -5),
                            a.setPosition(s.add(e.rtOffset)),
                            a.opacity = 0,
                            a.scale = e.scale ? e.scale : 1,
                            t._remindTable[o.uuid] = {
                                node: a,
                                checkFunc: e.checkFunc
                            },
                            a.getComponent(n.default).setType(e.type || 0)
                        }
                    })
                }
            }
            ,
            e.prototype.updateAllRemind = function() {
                for (var e = Object.keys(this._remindTable), t = e.length - 1; t >= 0; --t) {
                    var o = e[t];
                    this._remindTable[o] || delete this._remindTable[o]
                }
                for (var t in this._remindTable)
                    this.updateOneRemind(t)
            }
            ,
            e.prototype.updateOneRemind = function(e) {
                var t = this._remindTable[e];
                t && cc.isValid(t.node) ? t.node.opacity = t.checkFunc() ? 255 : 0 : this._remindTable[e] = void 0
            }
            ,
            e
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {
        "../../game_main/game/component/remind_tips/RemindTips": "RemindTips"
    }],
    RemindTips: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c0b9f2SYANAeaSWlhoAnycP", "RemindTips");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.remindSp = null,
                t.spFrames = [],
                t.type = 0,
                t
            }
            return r(t, e),
            t.prototype.setType = function(e) {
                this.type = e,
                this.remindSp.spriteFrame = this.spFrames[e || 0]
            }
            ,
            i([s(cc.Sprite)], t.prototype, "remindSp", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "spFrames", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    ResultCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c8c54YCfhxMc7lRCSvxe9zw", "ResultCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController"
    }],
    ResultData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e98e8OFo85JOLyr+MLwtY0J", "ResultData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    ResultDropItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "aa0e6abFtlBa6U3QMxkfuUI", "ResultDropItem");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../config/client/Cfg")
          , c = e("../component/item_cell/ItemCell")
          , s = cc._decorator
          , l = s.ccclass
          , u = s.property
          , p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemCellPrefab = null,
                t.lblNum = null,
                t.lblDesc = null,
                t.itemCell = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = cc.instantiate(this.itemCellPrefab);
                e.parent = this.node,
                e.scale = .55,
                this.itemCell = e.getComponent(c.default)
            }
            ,
            t.prototype.setData = function(e) {
                e.hideNum = !0,
                this.data = e,
                this.reflesh(),
                this.itemCell.setData(e)
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data
                  , t = a.Cfg.Item.get(e.itemData.id);
                this.lblDesc.string = t.ItemName,
                this.lblNum.string = "" + e.itemData.num
            }
            ,
            i([u(cc.Prefab)], t.prototype, "itemCellPrefab", void 0),
            i([u(cc.Label)], t.prototype, "lblNum", void 0),
            i([u(cc.Label)], t.prototype, "lblDesc", void 0),
            i([l], t)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../config/client/Cfg": "Cfg",
        "../component/item_cell/ItemCell": "ItemCell"
    }],
    ResultView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "67216epxcVGZac3LJ8GUEm1", "ResultView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("./ResultDropItem")
          , p = cc._decorator
          , f = p.ccclass
          , d = p.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.winPage = null,
                t.losePage = null,
                t.lblExp = null,
                t.dropItemLayout = null,
                t.dropItemPrefab = null,
                t.normalWin = null,
                t.levelUpWin = null,
                t.lblLevel = null,
                t.data = null,
                t.dropItemList = [],
                t
            }
            return r(t, e),
            t.prototype.onOpen = function(e) {
                a.default.UIManager.close(s.ModuleDefine.Fight),
                this.data = e,
                this.reflesh(),
                e.win ? cc.game.emit("music-play", c.eAudio.Win, !1) : cc.game.emit("music-play", c.eAudio.Lose, !1)
            }
            ,
            t.prototype.onBtnConfirmClicked = function() {
                a.default.UIManager.close(s.ModuleDefine.Result),
                a.default.UIManager.open(s.ModuleDefine.ChooseOpponent),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data;
                this.winPage.active = e.win,
                this.losePage.active = !e.win,
                this.lblExp.string = "+" + e.drop.exp;
                for (var t = e.drop.items, o = Object.keys(t), n = 0; n < o.length; ++n) {
                    var r = o[n]
                      , i = t[r];
                    if (i > 0) {
                        var a = this.dropItemList[n];
                        a || ((a = cc.instantiate(this.dropItemPrefab).getComponent(u.default)).node.parent = this.dropItemLayout),
                        this.dropItemList[n] = a;
                        var c = {
                            index: n,
                            isChoose: !1,
                            itemData: {
                                id: Number(r),
                                num: i
                            }
                        };
                        a.setData(c)
                    }
                }
                if (e.win) {
                    var s = !!e.levelUp;
                    this.normalWin.active = !s,
                    this.levelUpWin.active = s,
                    s && (this.lblLevel.string = "" + e.levelUp)
                }
            }
            ,
            i([d(cc.Node)], t.prototype, "winPage", void 0),
            i([d(cc.Node)], t.prototype, "losePage", void 0),
            i([d(cc.Label)], t.prototype, "lblExp", void 0),
            i([d(cc.Node)], t.prototype, "dropItemLayout", void 0),
            i([d(cc.Prefab)], t.prototype, "dropItemPrefab", void 0),
            i([d(cc.Node)], t.prototype, "normalWin", void 0),
            i([d(cc.Node)], t.prototype, "levelUpWin", void 0),
            i([d(cc.Label)], t.prototype, "lblLevel", void 0),
            i([f], t)
        }(l.default);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "./ResultDropItem": "ResultDropItem"
    }],
    RoleCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "45a42tW3CVOyLET9ovkTol1", "RoleCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/consts/SceneDefine")
          , u = e("../../../game_framework/mvc/BaseController")
          , p = e("../../config/NetConfig")
          , f = e("../../define/EventDefine")
          , d = e("../../platform/Platform")
          , h = e("../data/UserData")
          , m = e("../monster/Monster")
          , g = e("./RoleData")
          , _ = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.data = new g.default,
                cc.game.on(f.default.User_Login_GS, t.onUserLoginGS, t),
                cc.game.on(f.default.User_Role_Update, t.onRoleUpdate, t),
                cc.game.on(f.default.User_All_Role_Update, t.onAllRoleUpdate, t),
                t
            }
            return r(t, e),
            t.prototype.onUserLoginGS = function() {
                this.updateRoleData().then(function() {
                    c.default.SceneManager.runScene(l.SceneDefine.GameHome),
                    h.default.instance.setIsLogin(!0)
                }).catch(function(e) {
                    e == p.ErrorCode.MonsterListEmpty ? c.default.UIManager.open(s.ModuleDefine.PopTips, {
                        title: "Tips",
                        content: "You need a Metamon to log in.",
                        buttonNum: 1
                    }) : c.default.UIManager.open(s.ModuleDefine.FloatText, "Login failed! Please try again!"),
                    cc.game.emit(f.default.User_Login_GS_Fail)
                })
            }
            ,
            t.prototype.updateRoleData = function() {
                var e = this;
                return new Promise(function(t, o) {
                    return i(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return this.data.needUpdateFromGS = !0,
                                [4, this.CS_getRoleData().catch(o)];
                            case 1:
                                return (e = n.sent()) && (this.data.needUpdateFromGS = !1,
                                t(e),
                                cc.game.emit(f.default.User_Role_Change)),
                                [2]
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.CS_chooseMonster = function(e) {
                return i(this, void 0, void 0, function() {
                    var t = this;
                    return a(this, function() {
                        return [2, new Promise(function(o, n) {
                            return i(t, void 0, void 0, function() {
                                var t, o;
                                return a(this, function(r) {
                                    switch (r.label) {
                                    case 0:
                                        return t = {
                                            address: h.default.instance.getAddress(),
                                            metamonId: e
                                        },
                                        this.data.chooseId = e,
                                        c.default.UIManager.open(s.ModuleDefine.LoadingTips),
                                        this.data.needUpdateChoose = !0,
                                        [4, c.default.Http.post(p.NetConfig.url + "isFightMonster", {}, t).catch(n)];
                                    case 1:
                                        return (o = r.sent()) ? (1 == o.result ? this.data.chooseIntervalId = c.default.Global.interval(function() {
                                            cc.game.emit(f.default.User_All_Role_Update)
                                        }, function() {
                                            c.default.UIManager.close(s.ModuleDefine.LoadingTips)
                                        }, 3, 10) : (c.default.UIManager.close(s.ModuleDefine.LoadingTips),
                                        n()),
                                        [2]) : (n(),
                                        c.default.UIManager.close(s.ModuleDefine.LoadingTips),
                                        [2])
                                    }
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            t.prototype.onRoleUpdate = function() {}
            ,
            t.prototype.onAllRoleUpdate = function() {
                this.CS_getRoleData()
            }
            ,
            t.prototype.upgradeMonster = function(e) {
                return this.CS_upgradeMonster(e)
            }
            ,
            t.prototype.CS_getRoleData = function() {
                var e = this;
                return new Promise(function(t, o) {
                    return i(e, void 0, void 0, function() {
                        var e, n, r;
                        return a(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return p.NetConfig.getIsLocal() ? (e = {
                                    data: {
                                        metamonList: [{
                                            contractAddress: "0x4C275b94a2e5993b6418adabc2B0DF9f16951cE2",
                                            createdAt: "2021-09-09T16:57:28",
                                            description: "Normal Metamon NFT in Metamon Game on BSC.",
                                            id: "1",
                                            imageUrl: "https://racawebsource.s3.us-east-2.amazonaws.com/metamon/media/normal/_1_1_2_8_4_3_1_8_6.png",
                                            metadata: '{"name":"Metamon","description":"Normal Metamon NFT in Metamon Game on BSC.","attributes":[],"image":"https://racawebsource.s3.us-east-2.amazonaws.com/nft/Metamon.png","external_url":"https://www.radiocaca.com/"}\n',
                                            name: "Metamon",
                                            owner: "0x0a0b364093cb37787827e210806f50c30ce4e192",
                                            symbol: "Metamon",
                                            tokenId: "0",
                                            updatedAt: "2021-09-09T16:57:28"
                                        }],
                                        metamonNum: 1,
                                        pDiamondNum: 0,
                                        potionNum: 0,
                                        yDiamondNum: 0
                                    },
                                    message: "",
                                    result: 1
                                },
                                [2, this.SC_getRoleData(e).then(t).catch(o)]) : (n = {
                                    address: h.default.instance.getOpenId()
                                },
                                [4, c.default.Http.post(p.NetConfig.url + "getWalletPropertyList", {}, n).catch(o)]);
                            case 1:
                                return (r = i.sent()) ? (1 == r.result && this.SC_getRoleData(r).then(t).catch(o),
                                [2]) : (o(),
                                [2])
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.CS_getMonsterInfoById = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    return i(t, void 0, void 0, function() {
                        var t, r, i;
                        return a(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return p.NetConfig.getIsLocal() ? (t = {
                                    data: {
                                        con: 6,
                                        conMax: 20,
                                        createTime: "2021-09-13 15:47:08",
                                        crg: 50,
                                        crgMax: 100,
                                        exp: 490,
                                        expMax: 490,
                                        id: 1,
                                        image: "https://racawebsource.s3.us-east-2.amazonaws.com/metamon/media/normal/_1_1_2_8_4_3_1_8_6.png",
                                        inte: 20,
                                        inteMax: 20,
                                        inv: 5,
                                        invMax: 20,
                                        isPlay: Number,
                                        level: 7,
                                        levelMax: 7,
                                        life: 100,
                                        lifeLL: 0,
                                        luk: 20,
                                        lukMax: 50,
                                        race: "1",
                                        rarity: "S",
                                        sca: 20,
                                        scaMax: 100,
                                        tear: 100,
                                        token: "1631515562058",
                                        updateTime: "2021-09-13 18:59:31",
                                        userId: 8,
                                        itemId: 1,
                                        itemNum: 1,
                                        years: 1
                                    },
                                    message: "",
                                    result: 1
                                },
                                [2, this.SC_getMonsterInfoById(t).then(o).catch(n)]) : (r = {
                                    address: h.default.instance.getAddress(),
                                    metamonId: e
                                },
                                [4, c.default.Http.post(p.NetConfig.url + "getMetamonProperties", {}, r).catch(n)]);
                            case 1:
                                return (i = a.sent()) ? (this.SC_getMonsterInfoById(i).then(o).catch(n),
                                [2]) : [2]
                            }
                        })
                    })
                }
                )
            }
            ,
            t.prototype.SC_getRoleData = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    if (1 == e.result) {
                        var r = e.data.metamonList
                          , i = h.default.instance;
                        if (i.setDiamond(e.data.yDiamondNum),
                        i.setPDiamond(e.data.pDiamondNum),
                        i.setPotion(e.data.potionNum),
                        e.data.metamonNum)
                            for (var a = [], l = -1, u = function(n) {
                                var u = r[n];
                                t.CS_getMonsterInfoById(u.id).then(function(n) {
                                    if (n.token = u.tokenId,
                                    n.setImageUrl(u.imageUrl),
                                    a.push(n),
                                    n.isChoose && (l = n.id),
                                    a.length == r.length) {
                                        var p = a.sort(function(e, t) {
                                            var o = t.level - e.level;
                                            return e.level == t.level && (o = e.energy == t.energy ? e.power != t.power ? t.power - e.power : e.id - t.id : t.energy - e.energy),
                                            o
                                        });
                                        -1 == l && (l = p[0].id),
                                        i.getMonsterSelectId() != l && -1 != t.data.chooseId && (t.data.chooseId = -1,
                                        c.default.Global.clearInterval(t.data.chooseIntervalId),
                                        c.default.UIManager.close(s.ModuleDefine.LoadingTips)),
                                        -1 != t.data.needUpdateUpgrade && (c.default.UIManager.close(s.ModuleDefine.LoadingTips),
                                        c.default.UIManager.open(s.ModuleDefine.FloatText, "Level-up successfully"),
                                        cc.game.emit(f.default.User_Bag_Update)),
                                        i.setMonsterSelectId(l),
                                        i.setMonsterList(p),
                                        o(e)
                                    }
                                }).catch(function() {
                                    cc.game.emit(f.default.User_Login_GS_Fail)
                                })
                            }, d = 0; d < e.data.metamonNum; ++d)
                                u(d);
                        else
                            n(p.ErrorCode.MonsterListEmpty)
                    } else
                        n(e.message)
                }
                )
            }
            ,
            t.prototype.SC_getMonsterInfoById = function(e) {
                return new Promise(function(t) {
                    e.data,
                    t((new m.default).decode(e.data))
                }
                )
            }
            ,
            t.prototype.CS_updateMonsterById = function(e) {
                this.CS_getMonsterInfoById(e).then(function(t) {
                    var o = h.default.instance.getMonsterList();
                    o.push(t);
                    var n = o.find(function(t) {
                        return t.id == e
                    });
                    n && (n.setData(t),
                    cc.game.emit(f.default.User_Role_Change))
                })
            }
            ,
            t.prototype.CS_upgradeMonster = function(e) {
                var t = this;
                return new Promise(function(o, n) {
                    var r = {
                        id: d.default.Define.costTypeToOpertaion[e.upgradeCostType],
                        amount: e.upgradeCost,
                        metamonId: e.id
                    };
                    c.default.UIManager.open(s.ModuleDefine.LoadingTips),
                    d.default.instance.useItem(r).then(function(r) {
                        console.log("\u5347\u7ea7\u7ed3\u679c", r, "ok" == r.message),
                        "ok" == r.message ? (t.data.needUpdateUpgrade = e.id,
                        t.data.upgradeIntervalId = c.default.Global.interval(function() {
                            return i(t, void 0, void 0, function() {
                                var e;
                                return a(this, function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, h.default.instance.protocol.CS_orderStatus(r.value.hash)];
                                    case 1:
                                        return e = t.sent(),
                                        console.log("\u5347\u7ea7\u7ed3\u679c \u8f6e\u8be2-----", e),
                                        e && e.data && e.data.status && (c.default.Global.clearInterval(this.data.upgradeIntervalId),
                                        cc.game.emit(f.default.User_All_Role_Update),
                                        o(r)),
                                        [2]
                                    }
                                })
                            })
                        }, function() {
                            t.requestFailed(),
                            n()
                        }, 3, 10)) : (t.requestFailed(),
                        n())
                    }).catch(function() {
                        t.requestFailed(),
                        n()
                    })
                }
                )
            }
            ,
            t.prototype.requestFailed = function() {
                c.default.UIManager.close(s.ModuleDefine.LoadingTips),
                cc.game.emit(f.default.User_All_Role_Update)
            }
            ,
            t
        }(u.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/consts/SceneDefine": "SceneDefine",
        "../../../game_framework/mvc/BaseController": "BaseController",
        "../../config/NetConfig": "NetConfig",
        "../../define/EventDefine": "EventDefine",
        "../../platform/Platform": "Platform",
        "../data/UserData": "UserData",
        "../monster/Monster": "Monster",
        "./RoleData": "RoleData"
    }],
    RoleData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6926eek73ZKDqQLpvRTeqNU", "RoleData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.needUpdateFromGS = !1,
                t.upgradeId = -1,
                t.chooseId = -1,
                t.needUpdateChoose = !1,
                t.chooseIntervalId = -1,
                t.needUpdateUpgrade = -1,
                t.upgradeIntervalId = -1,
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    RoleEvolvePage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "60565oqrlhFLaaLCkkQI/Cz", "RoleEvolvePage");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../component/evolve_star/EvolveStar")
          , u = e("../data/UserData")
          , p = cc._decorator
          , f = p.ccclass
          , d = p.property
          , h = ["\u5e7c\u5e74", "\u9752\u5e74", "\u6210\u5e74"]
          , m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.evolveStarPrefab = null,
                t.evolveStarCurrParent = null,
                t.evolveStarNextParent = null,
                t.lblCurrStep = null,
                t.lblNextStep = null,
                t.currEvolveStar = null,
                t.nextEvolveStar = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = cc.instantiate(this.evolveStarPrefab)
                  , t = cc.instantiate(this.evolveStarPrefab);
                e.parent = this.evolveStarCurrParent,
                t.parent = this.evolveStarNextParent,
                this.currEvolveStar = e.getComponent(l.default),
                this.nextEvolveStar = t.getComponent(l.default)
            }
            ,
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshView()
            }
            ,
            t.prototype.onBtnEvolveClicked = function() {
                var e = this.data;
                if (e) {
                    var t = u.default.instance.getMonsterInfoById(e.id);
                    if (t.level >= t.levelMax)
                        if (t.level >= 60)
                            a.default.UIManager.open(s.ModuleDefine.FloatText, "\u4f60\u5df2\u8fbe\u5230\u6700\u9ad8\u7ea7\u522b");
                        else {
                            var o = {
                                title: "\u6210\u957f\u7a81\u7834",
                                content: "\u786e\u5b9a\u652f\u4ed810000 RACA\u6bd4\u8fdb\u884c\u6210\u7a81\u7834\u5417\uff1f",
                                buttonNum: 2,
                                confirm: function() {
                                    var e = {
                                        page: 0,
                                        id: t.id,
                                        evolution: {
                                            level: t.level + 1,
                                            currStar: t.starNum,
                                            nextStar: t.starNum + 1,
                                            currStr: h[t.starNum - 1],
                                            nextStr: h[t.starNum]
                                        }
                                    };
                                    a.default.UIManager.open(s.ModuleDefine.SuccessTips, e)
                                }
                            };
                            a.default.UIManager.open(s.ModuleDefine.PopTips, o)
                        }
                    else {
                        var n = "\u672a\u5230" + (e.starNum - 1) + "\u7ea7\uff0c\u65e0\u6cd5\u7a81\u7834";
                        a.default.UIManager.open(s.ModuleDefine.FloatText, n)
                    }
                }
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.refleshView = function() {
                var e = this.data.starNum;
                this.currEvolveStar.setData({
                    num: e
                }),
                this.nextEvolveStar.setData({
                    num: e + 1
                });
                var t = e - 1
                  , o = h[t]
                  , n = h[t + 1];
                this.lblCurrStep.string = o,
                this.lblNextStep.string = n
            }
            ,
            i([d(cc.Prefab)], t.prototype, "evolveStarPrefab", void 0),
            i([d(cc.Node)], t.prototype, "evolveStarCurrParent", void 0),
            i([d(cc.Node)], t.prototype, "evolveStarNextParent", void 0),
            i([d(cc.Label)], t.prototype, "lblCurrStep", void 0),
            i([d(cc.Label)], t.prototype, "lblNextStep", void 0),
            i([f], t)
        }(cc.Component);
        o.default = m,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../component/evolve_star/EvolveStar": "EvolveStar",
        "../data/UserData": "UserData"
    }],
    RoleInfo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "95dcbN8dZdB7Y3AZuSuUmEu", "RoleInfo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../component/img_quality/ImgQuality")
          , c = e("../component/progress_bar/ProgressBar")
          , s = cc._decorator
          , l = s.ccclass
          , u = s.property
          , p = ["#8A8A96", "#6CFFFF"]
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lblName = null,
                t.imgRoleDisplay = null,
                t.lblLevel = null,
                t.lblPower = null,
                t.progExp = null,
                t.ImgQualityPrefab = null,
                t.imgQualityParent = null,
                t.bgFrames = [],
                t.lblEnergy = null,
                t.loadingNode = null,
                t.data = null,
                t.imgQuality = null,
                t.isChoose = !1,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = cc.instantiate(this.ImgQualityPrefab);
                e.parent = this.imgQualityParent,
                this.imgQuality = e.getComponent(a.default)
            }
            ,
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshView()
            }
            ,
            t.prototype.setIsChoose = function(e) {
                var t = p;
                if (t) {
                    this.isChoose = e;
                    var o = Number(e);
                    this.lblName.node.color = cc.color().fromHEX(t[o]),
                    this.node.getComponent(cc.Sprite).spriteFrame = this.bgFrames[o]
                }
            }
            ,
            t.prototype.refleshView = function() {
                var e = this
                  , t = this.data;
                this.lblName.string = "#" + t.id,
                this.lblLevel.string = "" + t.level,
                this.lblPower.string = "" + t.power,
                this.progExp.reProgress(t.exp / t.expMax),
                this.imgQuality.setData({
                    quality: t.quality
                }),
                this.setLoadingMonsterVisible(!0);
                var o = function() {
                    e.setLoadingMonsterVisible(!1)
                };
                this.data.updateSpriteFromRemoteUrl(this.imgRoleDisplay).then(o).catch(o),
                this.lblEnergy && (this.lblEnergy.string = "" + t.energy)
            }
            ,
            t.prototype.setLoadingMonsterVisible = function(e) {
                this.loadingNode && (this.loadingNode.active = e)
            }
            ,
            i([u(cc.Label)], t.prototype, "lblName", void 0),
            i([u(cc.Sprite)], t.prototype, "imgRoleDisplay", void 0),
            i([u(cc.Label)], t.prototype, "lblLevel", void 0),
            i([u(cc.Label)], t.prototype, "lblPower", void 0),
            i([u(c.default)], t.prototype, "progExp", void 0),
            i([u(cc.Prefab)], t.prototype, "ImgQualityPrefab", void 0),
            i([u(cc.Node)], t.prototype, "imgQualityParent", void 0),
            i([u([cc.SpriteFrame])], t.prototype, "bgFrames", void 0),
            i([u(cc.Label)], t.prototype, "lblEnergy", void 0),
            i([u(cc.Node)], t.prototype, "loadingNode", void 0),
            i([l], t)
        }(cc.Component);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../component/img_quality/ImgQuality": "ImgQuality",
        "../component/progress_bar/ProgressBar": "ProgressBar"
    }],
    RoleItemCell: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f61ef2x0aNKfYlKZnvRJgcT", "RoleItemCell");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = [cc.color(121, 115, 127), cc.color(18, 203, 221)]
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.frameBg = null,
                t.imgSubQuality = null,
                t.imgIcon = null,
                t.lblLevelShadow = null,
                t.lblLevel = null,
                t.frameBgs = [],
                t.imgSubQualityFrames = [],
                t.imgSelect = null,
                t.data = null,
                t.isChoose = !1,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshItem()
            }
            ,
            t.prototype.setIsChoose = function(e) {
                if (this.data) {
                    this.data.isChoose = e;
                    var t = e ? 1 : 0;
                    this.frameBg.spriteFrame = this.frameBgs[t],
                    this.imgSubQuality.spriteFrame = this.imgSubQualityFrames[t],
                    this.lblLevelShadow.node.color = l[t]
                }
            }
            ,
            t.prototype.refleshItem = function() {
                var e = this.data;
                this.setIsChoose(e.isChoose),
                this.lblLevel.string = "Lv" + e.monster.level,
                e.monster.updateSpriteFromRemoteUrl(this.imgIcon),
                this.imgSelect.node.active = this.data.isFight
            }
            ,
            i([s(cc.Sprite)], t.prototype, "frameBg", void 0),
            i([s(cc.Sprite)], t.prototype, "imgSubQuality", void 0),
            i([s(cc.Sprite)], t.prototype, "imgIcon", void 0),
            i([s(cc.Label)], t.prototype, "lblLevelShadow", void 0),
            i([s(cc.Label)], t.prototype, "lblLevel", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "frameBgs", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "imgSubQualityFrames", void 0),
            i([s(cc.Sprite)], t.prototype, "imgSelect", void 0),
            i([c], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {}],
    RoleMorphPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cbbcbqT6FVGSYrfniYrWvcI", "RoleMorphPage");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../component/img_quality/ImgQuality")
          , u = e("../data/UserData")
          , p = cc._decorator
          , f = p.ccclass
          , d = p.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.imgQualityPrefab = null,
                t.imgQualityParents = [],
                t.lblCost = null,
                t.costLayout = null,
                t.imgQualities = [],
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                for (var e = 0; e < 2; ++e) {
                    var t = cc.instantiate(this.imgQualityPrefab);
                    t.parent = this.imgQualityParents[e],
                    this.imgQualities[e] = t.getComponent(l.default)
                }
            }
            ,
            t.prototype.setData = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.onBtnMorphClicked = function() {
                var e = this.data
                  , t = u.default.instance;
                if (e) {
                    var o = t.getMonsterInfoById(e.id);
                    if (o.level >= o.levelMax)
                        if (o.level >= 60)
                            a.default.UIManager.open(s.ModuleDefine.FloatText, "\u5df2\u662f\u6700\u7a00\u6709\u7269\u79cd\uff0c\u65e0\u9700\u8fdb\u5316");
                        else {
                            var n = {
                                title: "\u7a00\u6709\u5ea6\u8fdb\u5316",
                                content: "\u786e\u5b9a\u8981\u82b1\u8d39" + e.cost + "\u4e2a\u94bb\u77f3\uff0c\u8fdb\u884c\u7a00\u6709\u5ea6\u8fdb\u5316\u5417\uff1f",
                                buttonNum: 2,
                                confirm: function() {
                                    if (t.getDiamond() >= e.cost) {
                                        var n = {
                                            page: 1,
                                            id: o.id,
                                            morphData: {
                                                quality: o.quality
                                            }
                                        };
                                        a.default.UIManager.open(s.ModuleDefine.SuccessTips, n)
                                    } else
                                        a.default.UIManager.open(s.ModuleDefine.FloatText, "\u94bb\u77f3\u4e0d\u8db3\uff0c\u65e0\u6cd5\u8fdb\u5316")
                                }
                            };
                            a.default.UIManager.open(s.ModuleDefine.PopTips, n)
                        }
                    else {
                        var r = "\u672a\u5230" + (e.quality - 1) + "\u7ea7\uff0c\u65e0\u6cd5\u7a81\u7834";
                        a.default.UIManager.open(s.ModuleDefine.FloatText, r)
                    }
                }
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.imgQualities[0]
                  , t = this.imgQualities[1]
                  , o = {
                    quality: this.data.quality
                }
                  , n = {
                    quality: this.data.quality + 1
                };
                e.setData(o),
                t.setData(n),
                this.lblCost.string = "x" + this.data.cost,
                this.costLayout.updateLayout()
            }
            ,
            i([d(cc.Prefab)], t.prototype, "imgQualityPrefab", void 0),
            i([d([cc.Node])], t.prototype, "imgQualityParents", void 0),
            i([d(cc.Label)], t.prototype, "lblCost", void 0),
            i([d(cc.Layout)], t.prototype, "costLayout", void 0),
            i([f], t)
        }(cc.Component);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../component/img_quality/ImgQuality": "ImgQuality",
        "../data/UserData": "UserData"
    }],
    RoleOverViewPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "55a9ah/SQdMYpMpILXMq94g", "RoleOverViewPage");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        , a = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , c = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = e("../../../game_framework/App")
          , l = e("../../../game_framework/consts/ConstDefine")
          , u = e("../../../game_framework/consts/ModuleDefine")
          , p = e("../../define/EventDefine")
          , f = e("../component/progress_bar/ProgressBar")
          , d = e("../data/UserData")
          , h = cc._decorator
          , m = h.ccclass
          , g = h.property
          , _ = ["Potion", "Yellow Diamond", "Purple Diamond"]
          , y = ["#888888", "#E9D625"]
          , v = ["#ffffff", "#382624"]
          , b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.propProgBars = [],
                t.lblProperties = [],
                t.lblLevel = null,
                t.lblLevelMax = null,
                t.lblExp = null,
                t.progressExp = null,
                t.lblUpgradeCost = null,
                t.costType = null,
                t.costTypeFrames = [],
                t.lblNum = null,
                t.btnUpgrade = null,
                t.lblUpgrade = null,
                t.controller = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.registerReminds()
            }
            ,
            t.prototype.registerReminds = function() {
                var e = this
                  , t = d.default.instance
                  , o = {
                    node: this.btnUpgrade.node,
                    checkFunc: function() {
                        return Number(t.getMonsterCanUpgrade(e.data.id))
                    },
                    type: 1
                };
                s.default.Remind.regRemind(o)
            }
            ,
            t.prototype.onEnable = function() {
                this.controller = s.default.ControllerManager.getController(u.ModuleDefine.Role),
                cc.game.on(p.default.User_Currency_Change, this.updateBtnUpgrade, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshView()
            }
            ,
            t.prototype.refleshView = function() {
                for (var e = this.data, t = 0; t < e.properties.length; ++t) {
                    var o = e.properties[t]
                      , n = o / e.propertiesMax[t];
                    this.propProgBars[t].setProgress(n),
                    this.lblProperties[t].string = "" + o
                }
                this.lblLevel.string = "Lv" + e.level,
                this.lblLevelMax.string = "/" + e.levelMax,
                this.lblExp.string = e.exp + "/" + e.expMax,
                this.progressExp.setProgress(e.exp / e.expMax),
                this.lblUpgradeCost.string = "x" + e.upgradeCost,
                this.costType.spriteFrame = this.costTypeFrames[e.upgradeCostType - 1 || 0],
                this.updateBtnUpgrade()
            }
            ,
            t.prototype.updateBtnUpgrade = function() {
                var e = this.data
                  , t = d.default.instance.getMonsterCanUpgrade(e.id);
                this.btnUpgrade.interactable = t,
                this.lblUpgrade.node.color = cc.color().fromHEX(v[Number(t)]),
                this.lblUpgrade.node.parent.color = cc.color().fromHEX(y[Number(t)])
            }
            ,
            t.prototype.onBtnUpgradeClicked = function() {
                var e = this
                  , t = this.data;
                console.log("UpgradeClicked", _, t.upgradeCostType);
                var o = t.upgradeCost > 1 ? "s" : ""
                  , n = {
                    title: "Level-up hint",
                    content: "You need " + t.upgradeCost + " " + _[t.upgradeCostType - 1 || 0] + o + " to level up.\nDo you want to level up?",
                    confirm: function() {
                        return a(e, void 0, void 0, function() {
                            return c(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, this.controller.upgradeMonster(t).catch(function() {})];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            })
                        })
                    }
                };
                s.default.UIManager.open(u.ModuleDefine.PopTips, n),
                cc.game.emit("audio-play", l.eAudio.Click)
            }
            ,
            i([g([f.default])], t.prototype, "propProgBars", void 0),
            i([g([cc.Label])], t.prototype, "lblProperties", void 0),
            i([g(cc.Label)], t.prototype, "lblLevel", void 0),
            i([g(cc.Label)], t.prototype, "lblLevelMax", void 0),
            i([g(cc.Label)], t.prototype, "lblExp", void 0),
            i([g(f.default)], t.prototype, "progressExp", void 0),
            i([g(cc.Label)], t.prototype, "lblUpgradeCost", void 0),
            i([g(cc.Sprite)], t.prototype, "costType", void 0),
            i([g([cc.SpriteFrame])], t.prototype, "costTypeFrames", void 0),
            i([g(cc.Label)], t.prototype, "lblNum", void 0),
            i([g(cc.Button)], t.prototype, "btnUpgrade", void 0),
            i([g(cc.Label)], t.prototype, "lblUpgrade", void 0),
            i([m], t)
        }(cc.Component);
        o.default = b,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../define/EventDefine": "EventDefine",
        "../component/progress_bar/ProgressBar": "ProgressBar",
        "../data/UserData": "UserData"
    }],
    RoleProperty: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5f64fG4AmRHSLg9xhfu1Jsa", "RoleProperty");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.eRolePropertyPage = void 0;
        var a, c = e("../../../game_framework/consts/ConstDefine"), s = e("./RoleEvolvePage"), l = e("./RoleMorphPage"), u = e("./RoleOverViewPage"), p = cc._decorator, f = p.ccclass, d = p.property;
        (function(e) {
            e[e.OverView = 0] = "OverView",
            e[e.Evolve = 1] = "Evolve",
            e[e.Morph = 2] = "Morph"
        }
        )(a = o.eRolePropertyPage || (o.eRolePropertyPage = {}));
        var h = ["#11D7E4", "#6DFFFF"]
          , m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.overViewPage = null,
                t.evolveViewPage = null,
                t.morphViewPage = null,
                t.pageButtons = [],
                t.pageButtonFrames = [],
                t.pageButtonLabels = [],
                t.currPageIndex = -1,
                t.lastPageIndex = -1,
                t.overViewData = null,
                t.evolveViewData = null,
                t.morphViewData = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.showPage(a.OverView)
            }
            ,
            t.prototype.setOverViewData = function(e) {
                this.overViewData = e,
                this.overViewPage.node.active && this.overViewPage.setData(e)
            }
            ,
            t.prototype.setEvolveViewData = function(e) {
                this.evolveViewData = e,
                this.evolveViewPage.node.active && this.evolveViewPage.setData(e)
            }
            ,
            t.prototype.setMorphViewData = function(e) {
                this.morphViewData = e,
                this.morphViewPage.node.active && this.morphViewPage.setData(e)
            }
            ,
            t.prototype.onBtnClicked = function(e, t) {
                var o = Number(t);
                this.showPage(o),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.showPage = function(e, t) {
                if (e = a.OverView,
                this.currPageIndex != e || t) {
                    this.lastPageIndex = this.currPageIndex,
                    this.currPageIndex = e;
                    var o = this.pageButtons[this.lastPageIndex];
                    o && (o.spriteFrame = this.pageButtonFrames[0]);
                    var n = this.pageButtons[this.currPageIndex];
                    n && (n.spriteFrame = this.pageButtonFrames[1]);
                    var r = e == a.OverView
                      , i = e == a.Evolve
                      , c = e == a.Morph;
                    switch (this.overViewPage.node.active = r,
                    this.evolveViewPage.node.active = i,
                    this.morphViewPage.node.active = c,
                    e) {
                    case a.OverView:
                        this.overViewData && this.setOverViewData(this.overViewData);
                        break;
                    case a.Evolve:
                        this.evolveViewData && this.setEvolveViewData(this.evolveViewData);
                        break;
                    case a.Morph:
                        this.morphViewData && this.setMorphViewData(this.morphViewData)
                    }
                    for (var s = 0; s < this.pageButtonLabels.length; ++s)
                        this.pageButtonLabels[s].node.color = cc.color().fromHEX(h[Number(e == s)])
                }
            }
            ,
            i([d(u.default)], t.prototype, "overViewPage", void 0),
            i([d(s.default)], t.prototype, "evolveViewPage", void 0),
            i([d(l.default)], t.prototype, "morphViewPage", void 0),
            i([d([cc.Sprite])], t.prototype, "pageButtons", void 0),
            i([d([cc.SpriteFrame])], t.prototype, "pageButtonFrames", void 0),
            i([d([cc.Label])], t.prototype, "pageButtonLabels", void 0),
            i([f], t)
        }(cc.Component);
        o.default = m,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "./RoleEvolvePage": "RoleEvolvePage",
        "./RoleMorphPage": "RoleMorphPage",
        "./RoleOverViewPage": "RoleOverViewPage"
    }],
    RoleView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0a6cduv1+NFjLyucyqYFJHb", "RoleView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        , a = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , c = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = e("../../../game_framework/App")
          , l = e("../../../game_framework/consts/ConstDefine")
          , u = e("../../../game_framework/consts/ModuleDefine")
          , p = e("../../../game_framework/mvc/BaseView")
          , f = e("../../define/EventDefine")
          , d = e("../component/scrollview/RecycleScroll")
          , h = e("../component/ui_title/UITitleView")
          , m = e("../data/UserData")
          , g = e("./RoleInfo")
          , _ = e("./RoleItemCell")
          , y = e("./RoleProperty")
          , v = cc._decorator
          , b = v.ccclass
          , w = v.property
          , C = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.uiTitleViewPrefab = null,
                t.roleInfo = null,
                t.roleProperty = null,
                t.roleItemScroll = null,
                t.btnChooses = [],
                t.uiTitleView = null,
                t.lastChooseIndex = -1,
                t.currChooseIndex = -1,
                t.lastChooseId = -1,
                t.currChooseId = -1,
                t.monsterList = [],
                t.controller = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                e.prototype.onLoad.call(this),
                this.controller = s.default.ControllerManager.getController(u.ModuleDefine.Role);
                var t = cc.instantiate(this.uiTitleViewPrefab);
                t.parent = this.node,
                this.uiTitleView = t.getComponent(h.default);
                var o = {
                    titleName: "My Metamon",
                    backButtonCallBack: function() {
                        s.default.UIManager.close(u.ModuleDefine.Role)
                    },
                    showItemNum: !0,
                    showDiamond: !0,
                    showPDiamond: !0,
                    showSetting: !1
                };
                this.uiTitleView.setData(o)
            }
            ,
            t.prototype.onOpen = function(e) {
                void 0 === e && (e = 0),
                this.monsterList = m.default.instance.getMonsterList().concat(),
                this.roleItemScroll.numItems = this.monsterList.length,
                this.roleItemScroll.onItemRender = this.onItemRender.bind(this),
                this.roleItemScroll.onItemClicked = this.onItemClicked.bind(this),
                this.controller.data.needUpdateFromGS && this.controller.updateRoleData(),
                this.onUpdateView(e),
                cc.game.emit(f.default.User_All_Role_Update),
                cc.game.on(f.default.User_All_Role_Change, this.onAllRoleChange, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.onAllRoleChange = function() {
                if (this.monsterList = m.default.instance.getMonsterList().concat(),
                this.roleItemScroll.updateAllItems(),
                -1 != this.controller.data.needUpdateUpgrade) {
                    for (var e = 0, t = 0; t < this.monsterList.length; ++t)
                        if (Number(this.monsterList[t].id) == Number(this.currChooseId)) {
                            e = t;
                            break
                        }
                    this.chooseItem(e),
                    this.controller.data.needUpdateUpgrade = -1
                }
                this.reflesh()
            }
            ,
            t.prototype.onUpdateView = function(e, t) {
                for (var o = 0, n = 0; n < this.monsterList.length; ++n)
                    if (Number(this.monsterList[n].id) == Number(m.default.instance.getMonsterSelectId())) {
                        o = n;
                        break
                    }
                this.chooseItem(o),
                this.roleItemScroll.scrollToIndex(o),
                this.roleProperty.showPage(e, t)
            }
            ,
            t.prototype.onItemRender = function(e, t) {
                var o = t.getComponent(_.default)
                  , n = this.monsterList[e]
                  , r = {
                    id: n.id,
                    isChoose: this.currChooseIndex == e,
                    monster: n,
                    isFight: n.id == m.default.instance.getMonsterSelectId()
                };
                o.setData(r);
                var i = {
                    node: t,
                    checkFunc: function() {
                        return Number(m.default.instance.getMonsterCanUpgrade(n.id))
                    },
                    rtOffset: cc.v2(0, -10),
                    type: 1
                };
                s.default.Remind.regRemind(i)
            }
            ,
            t.prototype.onItemClicked = function(e) {
                this.chooseItem(e)
            }
            ,
            t.prototype.chooseItem = function(e, t) {
                if (this.currChooseIndex != e || t) {
                    this.lastChooseIndex = this.currChooseIndex,
                    this.currChooseIndex = e;
                    var o = this.roleItemScroll.itemTable
                      , n = o[this.lastChooseIndex];
                    n && n.getComponent(_.default).setIsChoose(!1);
                    var r = o[this.currChooseIndex];
                    r && r.getComponent(_.default).setIsChoose(!0);
                    var i = this.monsterList[this.currChooseIndex];
                    this.lastChooseId = this.currChooseId,
                    this.currChooseId = i.id,
                    this.reflesh()
                }
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.monsterList[this.currChooseIndex];
                this.roleInfo.setData(e),
                this.roleProperty.setOverViewData(e);
                var t = {
                    id: e.id,
                    starNum: e.starNum
                };
                this.roleProperty.setEvolveViewData(t);
                var o = {
                    id: e.id,
                    quality: e.quality,
                    cost: 300
                };
                this.roleProperty.setMorphViewData(o),
                this.updateChooseButton()
            }
            ,
            t.prototype.onBtnSelectClicked = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return c(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return (e = this.monsterList[this.currChooseIndex]).id == m.default.instance.getMonsterSelectId() ? [2] : (cc.game.emit("audio-play", l.eAudio.Click),
                            [4, this.controller.CS_chooseMonster(e.id).catch(function() {})]);
                        case 1:
                            return t.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.updateChooseButton = function() {
                var e = this.monsterList[this.currChooseIndex].id == m.default.instance.getMonsterSelectId();
                this.btnChooses[0].active = e,
                this.btnChooses[1].active = !this.btnChooses[0].active
            }
            ,
            i([w(cc.Prefab)], t.prototype, "uiTitleViewPrefab", void 0),
            i([w(g.default)], t.prototype, "roleInfo", void 0),
            i([w(y.default)], t.prototype, "roleProperty", void 0),
            i([w(d.default)], t.prototype, "roleItemScroll", void 0),
            i([w([cc.Node])], t.prototype, "btnChooses", void 0),
            i([b], t)
        }(p.default);
        o.default = C,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../define/EventDefine": "EventDefine",
        "../component/scrollview/RecycleScroll": "RecycleScroll",
        "../component/ui_title/UITitleView": "UITitleView",
        "../data/UserData": "UserData",
        "./RoleInfo": "RoleInfo",
        "./RoleItemCell": "RoleItemCell",
        "./RoleProperty": "RoleProperty"
    }],
    SceneDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "abe69K9i2hBCKIQJ5FgQcu0", "SceneDefine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.SceneDefine = void 0;
        var n = function() {
            function e() {}
            return e.GameLaunch = "GameLaunch",
            e.GameHome = "GameHome",
            e.GameMain = "GameMain",
            e
        }();
        o.SceneDefine = n,
        cc._RF.pop()
    }
    , {}],
    SceneManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "fe87cj+5m9IjpuSGHtiroXu", "SceneManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.runScene = function(e) {
                cc.director.loadScene(e)
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    Scene_Monster: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a2cf3SvNsdIu6QQmjupYKux", "Scene_Monster");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../game_framework/consts/ConstDefine")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.display = null,
                t.imgTear = null,
                t.startPos = null,
                t.model = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.startPos = this.display.node.position,
                this.runIdle()
            }
            ,
            t.prototype.setModel = function(e) {
                this.model = e
            }
            ,
            t.prototype.runAnim = function(e) {
                switch (e) {
                case a.FsmState.Attack:
                    this.runAttack();
                    break;
                case a.FsmState.Idle:
                    this.runIdle()
                }
            }
            ,
            t.prototype.runIdle = function() {
                var e = this
                  , t = this.stopAnim();
                this.display.getComponent(cc.Animation).play();
                var o = function() {
                    cc.tween(t).to(1, {
                        y: e.startPos.y + 30
                    }).to(2, {
                        y: e.startPos.y - 30
                    }).to(1, {
                        y: e.startPos.y
                    }).call(o).start()
                };
                o()
            }
            ,
            t.prototype.runAttack = function() {
                var e = this
                  , t = this.stopAnim();
                this.display.getComponent(cc.Animation).stop(),
                cc.tween(t).to(.2, {
                    angle: -15
                }).to(.2, {
                    angle: 0
                }).call(function() {
                    e.runIdle()
                }).start()
            }
            ,
            t.prototype.runBeHit = function(e) {
                var t = this;
                void 0 === e && (e = 0),
                this.imgTear.node.active = !0;
                var o = this.stopAnim();
                cc.tween(o).to(.05, {
                    x: this.startPos.x - 10
                }).to(.05, {
                    x: this.startPos.x
                }).to(.05, {
                    x: this.startPos.x + 10
                }).to(.05, {
                    x: this.startPos.x
                }).to(.05, {
                    x: this.startPos.x - 10
                }).to(.05, {
                    x: this.startPos.x
                }).to(.05, {
                    x: this.startPos.x - 10
                }).to(.05, {
                    x: this.startPos.x
                }).call(function() {
                    t.imgTear.node.active = !1
                }).delay(e).call(function() {
                    t.runIdle()
                }).start()
            }
            ,
            t.prototype.stopAnim = function() {
                var e = this.display.node;
                return e.stopAllActions(),
                e.angle = 0,
                cc.tween(e).to(.1, {
                    angle: 0,
                    position: this.startPos
                }).start(),
                e
            }
            ,
            i([l(cc.Sprite)], t.prototype, "display", void 0),
            i([l(cc.Sprite)], t.prototype, "imgTear", void 0),
            i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/consts/ConstDefine": "ConstDefine"
    }],
    SetingCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6a559le9MtLIrVP/L06y7cE", "SetingCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseController")
          , a = e("./SetingData")
          , c = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.data = new a.default,
                t.view = null,
                t.volumnFix = 1,
                t.loadLocalSetting(),
                cc.game.on("music-volumn-fix", t.fixedMusicVolumn, t),
                t
            }
            return r(t, e),
            t.prototype.loadLocalSetting = function() {
                var e = cc.sys.localStorage.getItem("musicVolumn");
                e = null === e ? .8 : Number(e);
                var t = cc.sys.localStorage.getItem("effectVolumn");
                t = null === t ? .6 : Number(t),
                this.saveLocalSetting(e, t)
            }
            ,
            t.prototype.saveLocalSetting = function(e, t) {
                e = Number(e.toFixed(2)),
                t = Number(t.toFixed(2));
                var o = this.data;
                o.musicVolumn = e,
                o.effectVolumn = t,
                cc.sys.localStorage.setItem("musicVolumn", e),
                cc.sys.localStorage.setItem("effectVolumn", t),
                cc.audioEngine.setMusicVolume(this.volumnFix * e),
                cc.audioEngine.setEffectsVolume(t)
            }
            ,
            t.prototype.fixedMusicVolumn = function(e) {
                this.volumnFix = e;
                var t = this.data;
                cc.audioEngine.setMusicVolume(t.musicVolumn * e)
            }
            ,
            t
        }(i.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseController": "BaseController",
        "./SetingData": "SetingData"
    }],
    SetingData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e6e97eKvN5DsqdiAAPuuQQZ", "SetingData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.musicVolumn = 1,
                t.effectVolumn = 1,
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseData").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData"
    }],
    SetingView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "25d97319p9PGqsAXLvqfPLR", "SetingView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../game_framework/App")
          , c = e("../../../game_framework/consts/ConstDefine")
          , s = e("../../../game_framework/consts/ModuleDefine")
          , l = e("../../../game_framework/mvc/BaseView")
          , u = e("../../platform/Platform")
          , p = cc._decorator
          , f = p.ccclass
          , d = p.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.controller = null,
                t.MusicSlider = null,
                t.EffectSlider = null,
                t
            }
            return r(t, e),
            t.prototype.onOpen = function() {
                this.controller = a.default.ControllerManager.getController(s.ModuleDefine.Seting),
                this.reflesh(),
                cc.game.emit("audio-play", c.eAudio.Pop)
            }
            ,
            t.prototype.closeSeting = function() {
                a.default.UIManager.close(s.ModuleDefine.Seting),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.LogOut = function() {
                var e = {
                    title: "Log Out",
                    content: "Do you want to log out?",
                    confirm: function() {
                        a.default.UIManager.close(s.ModuleDefine.Seting),
                        a.default.UIManager.open(s.ModuleDefine.Loading, 1),
                        u.default.instance.logout()
                    }
                };
                a.default.UIManager.open(s.ModuleDefine.PopTips, e),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.saveLocalSetting = function() {
                this.controller.saveLocalSetting(this.MusicSlider.progress, this.EffectSlider.progress)
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.controller.data;
                this.MusicSlider.progress = e.musicVolumn,
                this.EffectSlider.progress = e.effectVolumn
            }
            ,
            i([d(cc.Slider)], t.prototype, "MusicSlider", void 0),
            i([d(cc.Slider)], t.prototype, "EffectSlider", void 0),
            i([f], t)
        }(l.default);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../game_framework/mvc/BaseView": "BaseView",
        "../../platform/Platform": "Platform"
    }],
    ShadowLabel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9ed49HEdy5Olbnq5QrmfY3j", "ShadowLabel");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = a.executeInEditMode
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lblTextShadow = null,
                t.lblText = null,
                t
            }
            return r(t, e),
            t.prototype.setText = function(e) {
                this.lblText.string = e
            }
            ,
            t.prototype.setColor = function(e) {
                var t = e[0];
                t && (this.lblText.node.color = cc.color().fromHEX(t));
                var o = e[1];
                o && (this.lblTextShadow.node.color = cc.color().fromHEX(o))
            }
            ,
            t.prototype.update = function() {
                this.lblText && this.lblTextShadow && (this.lblTextShadow.string = this.lblText.string)
            }
            ,
            i([s(cc.Label)], t.prototype, "lblTextShadow", void 0),
            i([s(cc.Label)], t.prototype, "lblText", void 0),
            i([c, l], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {}],
    SkillCell: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d9cc52aM0ZOWb+j5W4ZllBy", "SkillCell");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.skillIcon = null,
                t.skillMask = null,
                t.lockNode = null,
                t.skillIconFrames = [],
                t.data = null,
                t.isRunCdAnim = !1,
                t.cdCounter = 0,
                t
            }
            return r(t, e),
            t.prototype.setData = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.reflesh = function() {
                var e = this.data;
                this.skillIcon.spriteFrame = this.skillIconFrames[e.id - 1],
                this.lockNode.active = e.isLock,
                this.setSkillMaskPercent(e.cdPercent)
            }
            ,
            t.prototype.runCdAnim = function() {
                this.cdCounter = this.data.cd,
                this.isRunCdAnim = !0
            }
            ,
            t.prototype.setSkillMaskPercent = function(e) {
                this.skillMask.fillRange = e
            }
            ,
            t.prototype.update = function(e) {
                if (this.isRunCdAnim && 0 != this.data.cd) {
                    this.cdCounter -= e,
                    this.cdCounter < 0 && (this.cdCounter = 0);
                    var t = this.cdCounter / this.data.cd;
                    this.setSkillMaskPercent(t)
                }
            }
            ,
            i([s(cc.Sprite)], t.prototype, "skillIcon", void 0),
            i([s(cc.Sprite)], t.prototype, "skillMask", void 0),
            i([s(cc.Node)], t.prototype, "lockNode", void 0),
            i([s([cc.SpriteFrame])], t.prototype, "skillIconFrames", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    SuccessTipsCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a2ce8ed4zlJO6Zn4Dshj801", "SuccessTipsCtrl");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(e("../../../../game_framework/mvc/BaseController").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/mvc/BaseController": "BaseController"
    }],
    SuccessTipsView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4bd54mP6hZB/4DOBFVScQJh", "SuccessTipsView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../game_framework/App")
          , c = e("../../../../game_framework/consts/ConstDefine")
          , s = e("../../../../game_framework/consts/ModuleDefine")
          , l = e("../../../../game_framework/mvc/BaseView")
          , u = e("../../component/evolve_star/EvolveStar")
          , p = e("../../component/img_quality/ImgQuality")
          , f = cc._decorator
          , d = f.ccclass
          , h = f.property
          , m = ["N", "R", "S", "SR", "SSR"]
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.pages = [],
                t.evolution_currStar = null,
                t.evolution_nextStar = null,
                t.evolution_lblCurr = null,
                t.evolution_lblNext = null,
                t.evolution_lblLevel = null,
                t.morph_monsterDisplay = null,
                t.morph_lblDesc = null,
                t.morph_imgQuality = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.onOpen = function(e) {
                this.data = e,
                this.reflesh()
            }
            ,
            t.prototype.onBtnConfirmClicked = function() {
                var e = this.data.confirm;
                e && e(),
                a.default.UIManager.close(s.ModuleDefine.SuccessTips),
                cc.game.emit("audio-play", c.eAudio.Click)
            }
            ,
            t.prototype.reflesh = function() {
                for (var e = this.data, t = 0; t < this.pages.length; ++t)
                    this.pages[t].active = t == this.data.page;
                switch (this.data.page) {
                case 0:
                    var o = e.evolution;
                    this.evolution_currStar.setData({
                        num: o.currStar
                    }),
                    this.evolution_nextStar.setData({
                        num: o.nextStar
                    }),
                    this.evolution_lblLevel.string = "Level up to " + o.level,
                    this.evolution_lblCurr.string = o.currStr,
                    this.evolution_lblNext.string = o.nextStr;
                    break;
                case 1:
                    a.default.Utils.setMonsterSpriteById(this.morph_monsterDisplay, e.id),
                    this.morph_lblDesc.string = "Congratulations, get the " + m[e.morphData.quality - 1] + " Metamon",
                    this.morph_imgQuality.setData({
                        quality: e.morphData.quality
                    })
                }
            }
            ,
            i([h([cc.Node])], t.prototype, "pages", void 0),
            i([h(u.default)], t.prototype, "evolution_currStar", void 0),
            i([h(u.default)], t.prototype, "evolution_nextStar", void 0),
            i([h(cc.Label)], t.prototype, "evolution_lblCurr", void 0),
            i([h(cc.Label)], t.prototype, "evolution_lblNext", void 0),
            i([h(cc.Label)], t.prototype, "evolution_lblLevel", void 0),
            i([h(cc.Sprite)], t.prototype, "morph_monsterDisplay", void 0),
            i([h(cc.Label)], t.prototype, "morph_lblDesc", void 0),
            i([h(p.default)], t.prototype, "morph_imgQuality", void 0),
            i([d], t)
        }(l.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/App": "App",
        "../../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../../../game_framework/consts/ModuleDefine": "ModuleDefine",
        "../../../../game_framework/mvc/BaseView": "BaseView",
        "../../component/evolve_star/EvolveStar": "EvolveStar",
        "../../component/img_quality/ImgQuality": "ImgQuality"
    }],
    TConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "fff02DEYW1M+4YvvGDWsiu7", "TConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.TConfig = void 0;
        var n = function() {
            function e() {
                this._name = "",
                this._keyMap = null
            }
            return e.prototype.initByMap = function(e) {
                null == this._map ? this._map = e : cc.error(this._name + " TConfig.initByMap repetition")
            }
            ,
            e.prototype.initByArray = function(e) {
                var t = this;
                null == this._map ? (this._map = {},
                e.forEach(function(e) {
                    t._map[e.id] = e
                })) : cc.error(this._name + " TConfig.initByArray repetition")
            }
            ,
            e.prototype.tryGet = function(e) {
                if (null != this._map) {
                    var t = this._map[e];
                    return [null != t, t]
                }
                cc.error(this._name + " TConfig.isExist _map null")
            }
            ,
            e.prototype.get = function(e) {
                if (null != this._map) {
                    var t = this._map[e];
                    return null == t && cc.error(this._name + " TConfig.get fail, id:", e),
                    t
                }
                cc.error(this._name + " TConfig.get _map null")
            }
            ,
            e.prototype.find = function(e) {
                if (null != this._map) {
                    for (var t in this._map) {
                        var o = this._map[t]
                          , n = !0;
                        for (var r in e)
                            if (e[r] !== o[r]) {
                                n = !1;
                                break
                            }
                        if (n)
                            return o
                    }
                    return cc.error(this._name + " TConfig.find fail, key:", JSON.stringify(e)),
                    null
                }
                cc.error(this._name + " TConfig.find _map null")
            }
            ,
            e.prototype.filter = function(e) {
                if (null == this._map)
                    return cc.error(this._name + " TConfig.filter _map null"),
                    [];
                var t = [];
                for (var o in this._map) {
                    var n = this._map[o]
                      , r = !0;
                    for (var i in e)
                        if (e[i] !== n[i]) {
                            r = !1;
                            break
                        }
                    r && t.push(n)
                }
                return t.length <= 0 && cc.error(this._name + " TConfig.filter fail, key:", JSON.stringify(e)),
                t
            }
            ,
            e.prototype.sort = function(e, t) {
                var o = this;
                e.sort(function(e, n) {
                    for (var r in t) {
                        var i = t[r]
                          , a = e[r]
                          , c = n[r];
                        if (null != a && null != c)
                            return i * (a - c);
                        cc.warn(o._name + " TConfig.sort property null, key:", r, "id", e.id, n.id)
                    }
                    return 0
                })
            }
            ,
            e.prototype.forEach = function(e, t) {
                if (null != this._map)
                    for (var o in this._map) {
                        var n = this._map[o];
                        e.call(t, n)
                    }
                else
                    cc.error(this._name + " TConfig.forEach _map null")
            }
            ,
            e.prototype.keyMap = function(e, t, o) {
                null == this._keyMap && (this._keyMap = {});
                var n = this._keyMap[e];
                null == n && (n = {},
                this._keyMap[e] = n);
                var r = n[t];
                if (null == r)
                    for (var i in r = {},
                    n[t] = r,
                    this._map) {
                        var a = this._map[i]
                          , c = a[e]
                          , s = a[t];
                        null != c && null != s && (r[c] = s)
                    }
                return r[o]
            }
            ,
            e.prototype.getAll = function() {
                if (null != this._map)
                    return this._map;
                cc.error(this._name + " TConfig.getAll _map null")
            }
            ,
            Object.defineProperty(e.prototype, "count", {
                get: function() {
                    return this._count ? this._count : null == this._map ? (cc.error(this._name + " TConfig.count _map null"),
                    0) : (this._count = Object.keys(this._map).length,
                    this._count)
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        }();
        o.TConfig = n,
        cc._RF.pop()
    }
    , {}],
    TabItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "95254nvyCJAcrbBDEnZQDQ5", "TabItem");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lblTabName = null,
                t.data = null,
                t
            }
            return r(t, e),
            t.prototype.init = function(e) {
                this.data = e,
                this.refleshItem()
            }
            ,
            t.prototype.setIsChoose = function(e) {
                this.data.isChoose = e,
                this.node.color = e ? cc.color(255, 0, 255) : cc.color(255, 255, 255)
            }
            ,
            t.prototype.refleshItem = function() {
                this.lblTabName.string = this.data.tabName,
                this.setIsChoose(this.data.isChoose)
            }
            ,
            i([s(cc.Label)], t.prototype, "lblTabName", void 0),
            i([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    UIConfig: [function(e, t, o) {
        "use strict";
        var n;
        cc._RF.push(t, "23b8do0m0JN2orOv5cyWH7y", "UIConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.UIConfig = void 0;
        var r = e("../../game_framework/consts/LayerDefine")
          , i = e("../../game_framework/consts/ModuleDefine");
        o.UIConfig = ((n = {})[i.ModuleDefine.Home] = {
            path: "prefabs/ui/home/UIHomeView",
            layer: r.LayerDefine.Home
        },
        n[i.ModuleDefine.Loading] = {
            path: "prefabs/ui/loading/UILoadingView",
            layer: r.LayerDefine.Loading
        },
        n[i.ModuleDefine.Bag] = {
            path: "prefabs/ui/bag/BagView",
            layer: r.LayerDefine.Bag
        },
        n[i.ModuleDefine.ChooseOpponent] = {
            path: "prefabs/ui/choose_opponent/ChooseOpponentView",
            layer: r.LayerDefine.ChooseOpponent
        },
        n[i.ModuleDefine.FightLoading] = {
            path: "prefabs/ui/fight_loading/FightLoadingView",
            layer: r.LayerDefine.FightLoading
        },
        n[i.ModuleDefine.Fight] = {
            path: "prefabs/ui/fight/FightView",
            layer: r.LayerDefine.Fight
        },
        n[i.ModuleDefine.FloatText] = {
            path: "prefabs/ui/tips/float_text/FloatTextView",
            layer: r.LayerDefine.FloatText
        },
        n[i.ModuleDefine.Role] = {
            path: "prefabs/ui/role/RoleView",
            layer: r.LayerDefine.Role
        },
        n[i.ModuleDefine.Record] = {
            path: "prefabs/ui/Record/RecordView",
            layer: r.LayerDefine.Record
        },
        n[i.ModuleDefine.Seting] = {
            path: "prefabs/ui/Setting/SettingView",
            layer: r.LayerDefine.Seting
        },
        n[i.ModuleDefine.Notice] = {
            path: "prefabs/ui/Notice/NoticeView",
            layer: r.LayerDefine.Notice
        },
        n[i.ModuleDefine.Result] = {
            path: "prefabs/ui/result/ResultView",
            layer: r.LayerDefine.Result
        },
        n[i.ModuleDefine.PopTips] = {
            path: "prefabs/ui/PopTips/PopTipsView",
            layer: r.LayerDefine.PopTips
        },
        n[i.ModuleDefine.IncubationRes] = {
            path: "prefabs/ui/IncubationRes/IncubationResView",
            layer: r.LayerDefine.IncubationRes
        },
        n[i.ModuleDefine.SuccessTips] = {
            path: "prefabs/ui/tips/success_tips/SuccessTipsView",
            layer: r.LayerDefine.SuccessTips
        },
        n[i.ModuleDefine.Battlefield] = {
            path: "prefabs/ui/Battlefield/BattlefieldView",
            layer: r.LayerDefine.Battlefield
        },
        n[i.ModuleDefine.LoadingTips] = {
            path: "prefabs/ui/tips/loading_tips/LoadingTipsView",
            layer: r.LayerDefine.LoadingTips
        },
        n),
        cc._RF.pop()
    }
    , {
        "../../game_framework/consts/LayerDefine": "LayerDefine",
        "../../game_framework/consts/ModuleDefine": "ModuleDefine"
    }],
    UIManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "710c5PBBE1OA60QeOrUUepP", "UIManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../App")
          , r = e("../mvc/BaseView")
          , i = function() {
            function e() {
                this._views = {},
                this._opens = [],
                this._root = null,
                this._uiConfig = null,
                cc.game.on("view-resize", this.onViewReszie, this)
            }
            return e.prototype.onViewReszie = function() {
                for (var e in this._views) {
                    var t = this._views[e];
                    cc.isValid(t) && t.node.setContentSize(cc.winSize)
                }
            }
            ,
            e.prototype.open = function(e, t) {
                var o = this;
                if (this._uiConfig)
                    if (this._root)
                        if (this.isShow(e))
                            this.uiOpenCallBack(e, t);
                        else {
                            var n = this.getView(e);
                            if (this._opens.push(e),
                            console.log("%c[UIManager] \u6253\u5f00ui: " + e + " " + this._uiConfig[e].path, "color:#2222FF"),
                            n && cc.isValid(n))
                                return n.node.active = !0,
                                void this.uiOpenCallBack(e, t);
                            var r = this._uiConfig[e];
                            r ? this._createView(r.path).then(function(n) {
                                var i = n.node;
                                i.parent = o._root,
                                i.setContentSize(cc.winSize),
                                i.zIndex = r.layer,
                                o._views[e] = n,
                                o.isShow(e) ? (o.uiOpenCallBack(e, t),
                                o._bindController(e)) : n.node.destroy()
                            }) : console.error("[UIManager] ui\u914d\u7f6e\u4e0d\u5b58\u5728 key: " + e)
                        }
                    else
                        console.error("[UIManager] \u8fd8\u6ca1\u521d\u59cb\u5316\u89c6\u56fe\u6839\u8282\u70b9")
            }
            ,
            e.prototype.close = function(e, t) {
                if (void 0 === t && (t = !0),
                this.isShow(e)) {
                    var o = this._opens.indexOf(e);
                    this._opens.splice(o, 1),
                    this._unbindController(e);
                    var n = this.getView(e);
                    n && cc.isValid(n) && (t ? (n.node.destroy(),
                    this._views[e] = null,
                    delete this._views[e]) : n.node.active = !1,
                    console.log("%c[UIManager] \u5173\u95edui\uff1a" + this._uiConfig[e].path, "color:#BE13A6"))
                }
            }
            ,
            e.prototype.setRoot = function(e) {
                this._root = e
            }
            ,
            e.prototype.setUIConfig = function(e) {
                this._uiConfig = e
            }
            ,
            e.prototype.isShow = function(e) {
                return -1 != this._opens.indexOf(e)
            }
            ,
            e.prototype.getView = function(e) {
                return this._views[e]
            }
            ,
            e.prototype.uiOpenCallBack = function(e, t) {
                this._views[e] && cc.isValid(this._views[e]) && this._views[e].onOpen(t)
            }
            ,
            e.prototype._bindController = function(e) {
                var t = n.default.ControllerManager.getController(e);
                t && (t.view = this._views[e])
            }
            ,
            e.prototype._unbindController = function(e) {
                var t = n.default.ControllerManager.getController(e);
                t && (t.view = null)
            }
            ,
            e.prototype._createView = function(e) {
                return new Promise(function(t, o) {
                    cc.resources.load(e, cc.Prefab, function(n, i) {
                        if (n)
                            return console.error("[UIManager] \u521d\u59cb\u5316\u754c\u9762\u5931\u8d25 \u8bf7\u786e\u8ba4\u8def\u5f84: " + e),
                            void o();
                        var a = cc.instantiate(i)
                          , c = a.getComponent(r.default);
                        if (!c)
                            return console.error("[UIManager] \u754c\u9762\u4e0d\u5b58\u5728\u7ec4\u4ef6: BaseView"),
                            a.destroy(),
                            void o();
                        t(c)
                    })
                }
                )
            }
            ,
            e
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../App": "App",
        "../mvc/BaseView": "BaseView"
    }],
    UITitleView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bedb2hyPO1IcZgRAvHr0qco", "UITitleView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(e, t, o, n) {
            var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../game_framework/consts/ConstDefine")
          , c = e("../../data/UserData")
          , s = e("../currency/Currency")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.currencyPrefab = null,
                t.currencyParent = null,
                t.lblTitle = null,
                t.viewStyleNode = [],
                t.leftTopNode = null,
                t.lblNickName = null,
                t.data = null,
                t.currency = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = cc.instantiate(this.currencyPrefab);
                e.parent = this.currencyParent,
                this.currency = e.getComponent(s.default),
                this.node.setContentSize(cc.winSize)
            }
            ,
            t.prototype.onEnable = function() {
                cc.game.on("view-resize", this.onViewResize, this)
            }
            ,
            t.prototype.onDisable = function() {
                cc.game.targetOff(this)
            }
            ,
            t.prototype.onViewResize = function() {
                this.node.setContentSize(cc.winSize)
            }
            ,
            t.prototype.setData = function(e) {
                this.data = e,
                this.refleshView()
            }
            ,
            t.prototype.onBtnBackClicked = function() {
                var e = this.data.backButtonCallBack;
                e && e(),
                cc.game.emit("audio-play", a.eAudio.Click)
            }
            ,
            t.prototype.refleshView = function() {
                var e = this.data
                  , t = this.currency;
                t.setItemNumVisible(e.showItemNum),
                t.setDiamondNumVisible(e.showDiamond),
                t.setSettingButtonVisible(e.showSetting),
                t.setPDiamondButtonVisible(e.showPDiamond),
                this.lblTitle.string = e.titleName,
                this.leftTopNode.active = !e.hideBack;
                var o = e.viewStyle || 0;
                switch (this.viewStyleNode[0].active = 0 == o,
                this.viewStyleNode[1].active = 1 == o,
                o) {
                case 0:
                    break;
                case 1:
                    var n = c.default.instance.getNickName()
                      , r = "";
                    n.length > 10 && (r = n.slice(0, 6),
                    r += "...",
                    r += n.slice(n.length - 5, n.length)),
                    this.lblNickName.string = r
                }
            }
            ,
            i([p(cc.Prefab)], t.prototype, "currencyPrefab", void 0),
            i([p(cc.Node)], t.prototype, "currencyParent", void 0),
            i([p(cc.Label)], t.prototype, "lblTitle", void 0),
            i([p([cc.Node])], t.prototype, "viewStyleNode", void 0),
            i([p(cc.Node)], t.prototype, "leftTopNode", void 0),
            i([p(cc.Label)], t.prototype, "lblNickName", void 0),
            i([u], t)
        }(cc.Component);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../../game_framework/consts/ConstDefine": "ConstDefine",
        "../../data/UserData": "UserData",
        "../currency/Currency": "Currency"
    }],
    UserData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9dd0bE3GkRMXo0JayyKO6oQ", "UserData");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = e("../../../game_framework/mvc/BaseData")
          , a = e("../../define/EventDefine")
          , c = e("./UserProtocol")
          , s = e("./UserVo")
          , l = function(e) {
            function t() {
                var o = e.call(this) || this;
                return o._vo = new s.default,
                o.protocol = new c.default,
                o.needUpdateFromGS = !1,
                t.instance = o,
                o
            }
            return r(t, e),
            t.prototype.getAddress = function() {
                return this._vo.address
            }
            ,
            t.prototype.setAddress = function(e) {
                this._vo.address = e
            }
            ,
            t.prototype.getOpenId = function() {
                return this._vo.openId
            }
            ,
            t.prototype.setOpenId = function(e) {
                this._vo.openId = e
            }
            ,
            t.prototype.getSign = function() {
                return this._vo.sign
            }
            ,
            t.prototype.setSign = function(e) {
                this._vo.sign = e
            }
            ,
            t.prototype.getNickName = function() {
                return this._vo.nickName
            }
            ,
            t.prototype.setNickName = function(e) {
                var t = this._vo.nickName;
                this._vo.nickName = e,
                cc.game.emit(a.default.User_NickName_Change, e, t)
            }
            ,
            t.prototype.getDiamond = function() {
                return this._vo.diamond
            }
            ,
            t.prototype.setDiamond = function(e) {
                var t = this._vo.diamond;
                this._vo.diamond = e || 0,
                console.error("\u5237\u65b0\u94bb\u77f3", e, this._vo.diamond),
                cc.game.emit(a.default.User_Diamond_Change, e, t),
                cc.game.emit(a.default.User_Currency_Change, e, t)
            }
            ,
            t.prototype.addDiamond = function(e) {
                this.setDiamond(this.getDiamond() + e)
            }
            ,
            t.prototype.getPDiamond = function() {
                return this._vo.pDiamond
            }
            ,
            t.prototype.setPDiamond = function(e) {
                var t = this._vo.pDiamond;
                this._vo.pDiamond = e || 0,
                cc.game.emit(a.default.User_PDiamond_Change, e, t),
                cc.game.emit(a.default.User_Currency_Change, e, t)
            }
            ,
            t.prototype.addPDiamond = function(e) {
                this.setPDiamond(this.getPDiamond() + e)
            }
            ,
            t.prototype.getPotion = function() {
                return this._vo.potion
            }
            ,
            t.prototype.setPotion = function(e) {
                var t = this._vo.potion;
                this._vo.potion = e || 0,
                cc.game.emit(a.default.User_Ption_Change, e, t),
                cc.game.emit(a.default.User_Currency_Change, e, t)
            }
            ,
            t.prototype.getMonsterSelectId = function() {
                return this._vo.monsterSelectId
            }
            ,
            t.prototype.setMonsterSelectId = function(e) {
                var t = this._vo.monsterSelectId;
                this._vo.monsterSelectId = e,
                cc.game.emit(a.default.User_MonsterSelect_Change, e, t)
            }
            ,
            t.prototype.getMonsterList = function() {
                return this._vo.momsterList
            }
            ,
            t.prototype.setMonsterList = function(e) {
                this._vo.momsterList = e,
                cc.game.emit(a.default.User_All_Role_Change)
            }
            ,
            t.prototype.getMonsterInfoById = function(e) {
                return this.getMonsterList().find(function(t) {
                    return e == t.id
                })
            }
            ,
            t.prototype.getMonsterSelectInfo = function() {
                var e = this
                  , t = this.getMonsterList()
                  , o = t.find(function(t) {
                    return t.id == e.getMonsterSelectId()
                });
                return o || (o = t[0]),
                o
            }
            ,
            t.prototype.getFightId = function() {
                return this._vo.fightId
            }
            ,
            t.prototype.setFightId = function(e) {
                this._vo.fightId = e
            }
            ,
            t.prototype.getCurrencyNumByType = function(e) {
                var t = this.getPotion();
                switch (e) {
                case 2:
                    t = this.getDiamond();
                    break;
                case 3:
                    t = this.getPDiamond()
                }
                return t
            }
            ,
            t.prototype.getIsLogin = function() {
                return this._vo.isLogin
            }
            ,
            t.prototype.setIsLogin = function(e) {
                this._vo.isLogin = e
            }
            ,
            t.prototype.getCurrentSelectMonsterCanUpgrade = function() {
                return this.getMonsterCanUpgrade(this.getMonsterSelectId())
            }
            ,
            t.prototype.getMonsterCanUpgrade = function(e) {
                var t = !1
                  , o = this.getMonsterInfoById(e);
                return o && (t = this.getCurrencyNumByType(o.upgradeCostType) >= o.upgradeCost && o.exp >= o.expMax && o.level < 60),
                t
            }
            ,
            t.prototype.getCanUpgradeOneOfMonster = function() {
                for (var e = !1, t = this.getMonsterList(), o = 0; o < t.length; ++o) {
                    var n = t[o];
                    if (e = this.getMonsterCanUpgrade(n.id))
                        break
                }
                return e
            }
            ,
            t.instance = null,
            t
        }(i.default);
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseData": "BaseData",
        "../../define/EventDefine": "EventDefine",
        "./UserProtocol": "UserProtocol",
        "./UserVo": "UserVo"
    }],
    UserProtocol: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bdf2agbXAZF0KHuCPFU5Y1w", "UserProtocol");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), i = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }
            )
        }
        , a = this && this.__generator || function(e, t) {
            var o, n, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(e) {
                return function(t) {
                    return s([e, t])
                }
            }
            function s(i) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (o = 1,
                        n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, i[1])).done)
                            return r;
                        switch (n = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            n = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        n = 0
                    } finally {
                        o = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../../game_framework/App")
          , s = e("../../../game_framework/mvc/BaseProtocol")
          , l = e("../../config/NetConfig")
          , u = e("./UserData")
          , p = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.CS_orderStatus = function(e) {
                return i(this, void 0, Promise, function() {
                    var t = this;
                    return a(this, function() {
                        return [2, new Promise(function(o, n) {
                            return i(t, void 0, void 0, function() {
                                var t, r, i;
                                return a(this, function(a) {
                                    switch (a.label) {
                                    case 0:
                                        return l.NetConfig.getIsLocal() ? (t = {
                                            data: !0,
                                            message: "",
                                            result: 1
                                        },
                                        [2, this.SC_orderStatus(t)]) : (r = {
                                            address: u.default.instance.getAddress(),
                                            txHash: e
                                        },
                                        [4, c.default.Http.post(l.NetConfig.url + "orderStatus", {}, r).catch(n)]);
                                    case 1:
                                        return (i = a.sent()) ? (this.SC_orderStatus(i).then(o),
                                        [2]) : [2]
                                    }
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            t.prototype.SC_orderStatus = function(e) {
                return new Promise(function(t, o) {
                    1 == e.result ? t(e) : o()
                }
                )
            }
            ,
            t
        }(s.default);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/App": "App",
        "../../../game_framework/mvc/BaseProtocol": "BaseProtocol",
        "../../config/NetConfig": "NetConfig",
        "./UserData": "UserData"
    }],
    UserVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "db19bul2N1AlJhNC5Zs/gDW", "UserVo");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        );
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.address = "",
                t.openId = "",
                t.sign = "",
                t.nickName = "-",
                t.diamond = 300,
                t.pDiamond = 200,
                t.potion = 200,
                t.momsterList = [],
                t.monsterSelectId = 0,
                t.fightId = 1,
                t.isLogin = !1,
                t
            }
            return r(t, e),
            t
        }(e("../../../game_framework/mvc/BaseVo").default);
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../../game_framework/mvc/BaseVo": "BaseVo"
    }],
    Utils: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3be4bHfBhRMppaqTSHN7xVE", "Utils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = {
            N: 1,
            R: 2,
            SR: 3,
            SSR: 4
        }
          , r = function() {
            function e() {}
            return e.prototype.setSprite = function(e, t) {
                var o = null;
                e instanceof cc.Sprite ? o = e : (o = e.getComponent(cc.Sprite)) || (o = e.addComponent(cc.Sprite)),
                o.spPath != t && (o.node.opacity = 0),
                o.spPath = t,
                cc.loader.loadRes(t, cc.SpriteFrame, function(e, n) {
                    e ? console.error(e) : o.spPath == t && cc.isValid(o.node) && (o.node.opacity = 255,
                    o.spriteFrame = n)
                })
            }
            ,
            e.prototype.setMonsterSprite = function(e, t) {
                this.setSprite(e, "textures/monster/" + t)
            }
            ,
            e.prototype.setMonsterSpriteById = function() {}
            ,
            e.prototype.getQualityIndex = function(e) {
                return n[e]
            }
            ,
            e
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {}]
}, {}, ["Cfg", "IConfig", "ItemCfg", "MonsterCfg", "TConfig", "App", "BaseActor", "Charactor", "IActor", "ICharactor", "BaseScene", "ConstDefine", "LayerDefine", "ModuleDefine", "SceneDefine", "ControllerManager", "Global", "IRemind", "IUIconfig", "RemindManager", "SceneManager", "UIManager", "BaseController", "BaseData", "BaseProtocol", "BaseView", "BaseVo", "HttpAPI", "GlobalDefine", "Utils", "NetConfig", "UIConfig", "EventDefine", "BattlefieldCtrl", "BattlefieldData", "BattlefieldView", "BattlefiledVo", "GameModule", "IIncubationData", "IncubationResCtrl", "IncubationResData", "IncubationResView", "INoticeItem", "NoticeCtrl", "NoticeData", "NoticeItem", "NoticeView", "IPopTipsData", "PopTipsCtrl", "PopTipsData", "PopTipsView", "IRecordItem", "RecordCtrl", "RecordData", "RecordItem", "RecordView", "SetingCtrl", "SetingData", "SetingView", "BagCtrl", "BagData", "BagItem", "BagView", "BagVo", "IBagItem", "IBagRespond", "ITabItem", "TabItem", "ChooseOpponentCtrl", "ChooseOpponentData", "ChooseOpponentView", "ChooseOpponentVo", "IChooseOpponent", "BackGroundFix", "Currency", "EvolveStar", "IEvolveStar", "IImgQualityData", "ImgQuality", "IItemCellData", "ItemCell", "LevelInfo", "ProgressBar", "RemindTips", "RecycleScroll", "ShadowLabel", "ISkillCellData", "SkillCell", "IUITitleData", "UITitleView", "GameData", "GameVo", "IUserProtocol", "UserData", "UserProtocol", "UserVo", "FightCtrl", "FightData", "FightInfo", "FightView", "FightVo", "IFightData", "FightLoadingCtrl", "FightLoadingData", "FightLoadingView", "FightLoadingVo", "FloatTextCtrl", "FloatTextData", "FloatTextView", "HomeCtrl", "HomeData", "HomeView", "HomeVo", "ILoginData", "LoadingCtrl", "LoadingData", "LoadingView", "LoginVo", "IMonster", "Monster", "IResultDropItemData", "ResultCtrl", "ResultData", "ResultDropItem", "ResultView", "IEvolveViewData", "IMorphViewData", "IOverViewData", "IRoleInfo", "IRoleItemData", "RoleCtrl", "RoleData", "RoleEvolvePage", "RoleInfo", "RoleItemCell", "RoleMorphPage", "RoleOverViewPage", "RoleProperty", "RoleView", "Scene_Monster", "LoadingTipsCtrl", "LoadingTipsView", "ISuccessTipsData", "SuccessTipsCtrl", "SuccessTipsView", "Platform", "PlatformDefine", "BaseSDK", "Dapp", "IProtocol", "GameHome", "GameLaunch", "GameMain"]);

// Generated by CoffeeScript 1.8.0
define(function(require, exports, module) {
  'use strict';
  var Encrypt, Storage, Support, UserData, Utils, err;
  Support = require('lib/support');
  UserData = require('lib/userdata');
  Utils = require('lib/utils');
  Encrypt = require('lib/encrypt');
  err = null;
  Storage = (function() {
    function Storage(session, encrypt, token) {
      this.session = session;
      this.encrypt = encrypt;
      this.token = token;
      if (this.session) {
        if (!Support.sessionstorage()) {
          throw new Error("sessionStorage is not supported!");
        }
      } else if (!Support.localstorage()) {
        if (!Support.userdata()) {
          throw new Error("no browser storage engine is supported in your browser!");
        }
        this.userdata = new UserData();
      }
    }

    Storage.prototype.key = function(index, callback) {
      var e, key;
      try {
        key = (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).key(index);
      } catch (_error) {
        e = _error;
        callback(-1, err);
      }
      callback(key);
    };

    Storage.prototype.size = function(callback) {
      var e, size;
      try {
        if (this.session) {
          size = sessionStorage.length;
        } else if (Support.localstorage()) {
          size = localStorage.length;
        } else {
          size = this.userdata.size();
        }
      } catch (_error) {
        e = _error;
        callback(-1, err);
      }
      callback(size);
    };

    Storage.prototype.setItem = function(key, val, callback) {
      var data, e, flag, ls;
      ls = (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage));
      try {
        if (this.encrypt) {
          val = Encrypt.encode(val, this.token);
        }
        ls.setItem(key, val);
      } catch (_error) {
        e = _error;
        flag = true;
        data = Utils.parse(val);
        while (flag) {
          try {
            data.splice(0, 1);
            ls.setItem(key, Utils.stringify(data));
            flag = false;
          } catch (_error) {}
        }
      }

      /* TODO
       *  目前采用的是删除初始数据来保证在数据存满以后仍然可以继续存下去
       *  在初始化LocalDB的时候需要增加配置参数，根据参数来决定是否自动删除初始数据，还是返回err
       */
      callback();
    };

    Storage.prototype.getItem = function(key, callback) {
      var e, item;
      try {
        item = (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).getItem(key);
        if (this.encrypt) {
          item = Encrypt.decode(item, this.token);
        }
      } catch (_error) {
        e = _error;
        callback(null, err);
      }
      callback(item);
    };

    Storage.prototype.removeItem = function(key, callback) {
      var e;
      try {
        (this.session ? sessionStorage : (this.userdata != null ? this.userdata : localStorage)).removeItem(key);
      } catch (_error) {
        e = _error;
        callback(e);
      }
      callback();
    };

    Storage.prototype.usage = function(callback) {

      /*
       *  check it out: http://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
       */
      var allStrings, e, key, val;
      try {
        allStrings = "";
        if (this.tyep === 1) {
          for (key in sessionStorage) {
            val = sessionStorage[key];
            allStrings += val;
          }
        } else if (Support.localstorage()) {
          for (key in localStorage) {
            val = localStorage[key];
            allStrings += val;
          }
        } else {
          console.log("todo");
        }
      } catch (_error) {
        e = _error;
        callback(-1, err);
      }
      return callback(allStrings.length / 512);
    };

    return Storage;

  })();
  return module.exports = Storage;
});

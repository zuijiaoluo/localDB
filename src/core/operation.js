// Generated by CoffeeScript 1.8.0
define(function(require, exports, module) {
  "use strict";
  var Operation, Projection, Update, Utils, Where;
  Utils = require("core/utils");
  Where = require("core/where");
  Projection = require("core/projection");
  Operation = {};
  Operation.insert = function(data, rowData, options) {
    var d, _i, _len;
    if (Utils.isArray(rowData)) {
      for (_i = 0, _len = rowData.length; _i < _len; _i++) {
        d = rowData[_i];
        if (!(Utils.isObject(d))) {
          continue;
        }
        if (d._id == null) {
          d._id = Utils.createObjectId();
        }
        data.push(d);
      }
    } else if (Utils.isObject(rowData)) {
      if (rowData._id == null) {
        rowData._id = Utils.createObjectId();
      }
      data.push(rowData);
    }
    return data;
  };
  Operation.update = function(data, actions, options) {
    var action, multi, upsert, value, where;
    where = options.where || {};
    multi = options.multi != null ? options.multi : true;
    upsert = options.upsert != null ? options.upsert : true;
    for (action in actions) {
      value = actions[action];
      data = Update.generate(data, action, value, where, multi, upsert);
    }
    return data;
  };
  Operation.remove = function(data, options) {
    var d, flag, multi, result, where, _i, _len;
    where = options.where || {};
    multi = options.multi != null ? options.multi : true;
    result = [];
    flag = false;
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      d = data[_i];
      if (flag) {
        result.push(d);
        continue;
      }
      if (Where(d, where)) {
        if (!multi) {
          flag = true;
        }
        continue;
      }
      result.push(d);
    }
    return result;
  };
  Operation.find = function(data, options) {
    var d, limit, projection, result, where, _i, _len;
    where = options.where || {};
    projection = options.projection || {};
    limit = options.limit || -1;
    result = [];
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      d = data[_i];
      if (!(Where(d, where))) {
        continue;
      }
      if (limit === 0) {
        break;
      }
      limit -= 1;
      result.push(d);
    }
    result = Utils.sortObj(result, options.sort);
    return Projection.generate(result, projection);
  };
  Update = {
    isKeyReserved: function(key) {
      return key === "$inc" || key === "$set" || key === "$mul" || key === "$rename" || key === "$unset" || key === "$max" || key === "$min";
    },
    generate: function(data, action, value, where, multi, upsert) {
      var d, firstKey, flag, k, v, _i, _len;
      if (!Update.isKeyReserved(action)) {
        return data;
      }
      for (k in value) {
        v = value[k];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          d = data[_i];
          if (!(Where(d, where))) {
            continue;
          }
          flag = false;
          while (k.indexOf(".") > 0) {
            firstKey = k.split(".")[0];
            d = d[firstKey];
            if ((d == null) && !upsert) {
              flag = true;
              break;
            }
            if (upsert) {
              d = d || {};
            }
            k = k.substr(k.indexOf(".") + 1);
          }
          if (flag) {
            continue;
          }
          switch (action) {
            case "$inc":
              if ((d[k] != null) || upsert) {
                d[k] += v;
              }
              break;
            case "$set":
              if ((d[k] != null) || upsert) {
                d[k] = v;
              }
              break;
            case "$mul":
              if ((d[k] != null) || upsert) {
                d[k] *= v;
              }
              break;
            case "$rename":
              d[v] = d[k];
              delete d[k];
              break;
            case "$unset":
              delete d[k];
              break;
            case "$min":
              if ((d[k] != null) || upsert) {
                d[k] = Math.min(d[k], v);
              }
              break;
            case "$max":
              if ((d[k] != null) || upsert) {
                d[k] = Math.max(d[k], v);
              }
          }
          if (!multi) {
            break;
          }
        }
      }
      return data;
    }
  };
  return module.exports = Operation;
});

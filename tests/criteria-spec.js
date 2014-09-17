// Generated by CoffeeScript 1.7.1
'use strict';
var Collection, Criteria, LocalDB, db, expect;

expect = require('expect.js');

LocalDB = require('../src/localdb.js');

Collection = require('../src/lib/collection.js');

Criteria = require('../src/lib/criteria');

db = new LocalDB("foo");

describe('Criteria', function() {
  it('Criteria Comparison gt', function() {
    var criteria, obj;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gt": 1
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 2,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gt": 1
      }
    };
    obj = {
      "a": 0,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gt": 1
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Comparison gte', function() {
    var criteria, obj;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gte": 1
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 2,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gte": 1
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 0,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$gte": 1
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Comparisongte lt', function() {
    var criteria, obj;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lt": 10
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lt": 10
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lt": 10
      }
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Comparisonlte lte', function() {
    var criteria, obj;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lte": 10
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lte": 10
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$lte": 10
      }
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Comparison ne', function() {
    var criteria, obj;
    obj = {
      "a": 10,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$ne": 10
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 11,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$ne": 10
      }
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Comparison in', function() {
    var criteria, obj;
    obj = {
      "a": 9,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$in": [10, 9, 8]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$in": [10, 11, 12]
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Comparison nin', function() {
    var criteria, obj;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$nin": [1, 2, 3]
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$nin": [4, 2, 3]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": "1",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$nin": ["1", "2", "3"]
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Logical or', function() {
    var criteria, obj;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$or": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$or": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$or": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$or": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Logical and', function() {
    var criteria, obj;
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$and": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$and": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 6
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$and": [
        {
          "a": {
            "$gt": 0
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$and": [
        {
          "a": {
            "$gt": 2
          }
        }, {
          "b": {
            "$lt": 2
          }
        }
      ]
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Logical not', function() {
    var criteria, obj;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$not": {
          "$lt": 0
        }
      }
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Logical nor', function() {
    var criteria, obj;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$nor": [
        {
          "a": 5
        }, {
          "b": 4
        }
      ]
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "$nor": [
        {
          "a": 1
        }, {
          "b": 5
        }
      ]
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Element exists', function() {
    var criteria, obj;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$exists": true
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "z": {
        "$exists": true
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "z": {
        "$exists": false
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$exists": false
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Element type', function() {
    var criteria, obj;
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$type": "number"
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$type": "string"
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": "5",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$type": "string"
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$type": "eric"
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 5,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "d.e": {
        "$type": -1
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Evaluation mod', function() {
    var criteria, obj;
    obj = {
      "a": 0,
      "b": 5,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$mod": [2, 0]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 4,
      "b": 4,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$mod": [2, 0]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 5,
      "c": 0,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$mod": [3, 2]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": 5,
      "b": 5,
      "c": 3,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$mod": [2, 0]
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Evaluation regex', function() {
    var criteria, obj;
    obj = {
      "a": ['1', '2', '3', '4'],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": /\d/
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = [
      {
        "a": '1'
      }, {
        "a": '1'
      }
    ];
    criteria = {
      "a": /\d/
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": '1',
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": /\d/
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": "hello",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$regex": 'ello'
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": "hello",
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$regex": 'what'
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": 1,
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": /\d/
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": '1',
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": /\b/
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  it('Criteria Array all', function() {
    var criteria, obj;
    obj = [
      {
        "a": [1, 2, 3],
        "b": 4,
        "c": 5,
        "d": {
          "e": "4",
          "f": 5
        }
      }, {
        "a": 1
      }
    ];
    criteria = {
      "a": {
        "$all": [1, 2]
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": [1, 2, 3],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$all": [1, 2]
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": [1, 2],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$all": [3, 2]
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
  it('Criteria Array eleMatch', function() {
    var criteria, obj;
    obj = [
      {
        "a": [
          {
            "book": "abc",
            "price": 8
          }, {
            "book": "xyz",
            "price": 7
          }
        ],
        "b": 4,
        "c": 5,
        "d": {
          "e": "4",
          "f": 5
        }
      }, {
        "a": 1
      }
    ];
    criteria = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": [
        {
          "book": "abc",
          "price": 8
        }, {
          "book": "xyz",
          "price": 7
        }
      ],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": [
        {
          "book": "abc",
          "price": 8
        }, {
          "book": "xyz",
          "price": 9
        }
      ],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$elemMatch": {
          "book": "xyz",
          "price": {
            "$gte": 8
          }
        }
      }
    };
    return expect(Criteria.check(obj, criteria)).to.be.ok();
  });
  return it('Criteria Array size', function() {
    var criteria, obj;
    obj = [
      {
        "a": [1, 2, 3],
        "b": 4,
        "c": 5,
        "d": {
          "e": "4",
          "f": 5
        }
      }, {
        "a": 1
      }
    ];
    criteria = {
      "a": {
        "$size": 3
      }
    };
    expect(Criteria.check(obj, criteria)).not.to.be.ok();
    obj = {
      "a": [1, 2, 3],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$size": 3
      }
    };
    expect(Criteria.check(obj, criteria)).to.be.ok();
    obj = {
      "a": [1, 2, 3, 4],
      "b": 4,
      "c": 5,
      "d": {
        "e": "4",
        "f": 5
      }
    };
    criteria = {
      "a": {
        "$size": 3
      }
    };
    return expect(Criteria.check(obj, criteria)).not.to.be.ok();
  });
});

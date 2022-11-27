function getDifference(o1, o2) {
    var diff = {};
    var tmp = null;
    if (JSON.stringify(o1) === JSON.stringify(o2)) return;

    for (var k in o1) {
      if (Array.isArray(o1[k]) && Array.isArray(o2[k])) {
        tmp = o1[k].reduce(function(p, c, i) {
          var _t = getDifference(c, o2[k][i]);
          if (_t)
            p.push(_t);
          return p;
        }, []);
        if (Object.keys(tmp).length > 0)
          diff[k] = tmp;
      } else if (typeof(o1[k]) === "object" && typeof(o2[k]) === "object") {
        tmp = getDifference(o1[k], o2[k]);
        if (tmp && Object.keys(tmp) > 0)
          diff[k] = tmp;
      } else if (o1[k] !== o2[k]) {
        diff[k] = o2[k]
      }
    }
    return diff;
  }
  var o1={name:"person 1", age:5},
  o2={age:5, name:"person 1"},
  d = getDifference(o1, o2)
  console.log(d)
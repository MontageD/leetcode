// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
// var s = "aab"

var permutation = function(s) {
    if(typeof s != 'string'){
        return []
    }
    var list = s.split('')
    var _list = []
    for(var i = 0;i<list.length;i++){
        _list.push({
            key: i,
            value: list[i]
        })
    }
    var outList = []
    function pro(text,listArr,atomic){
        var _atomic = Object.assign(atomic,{})
        var _text = Object.assign(text,{})
        var listArr = listArr.slice()
        if(_atomic.key != _text.key){
            var _value = _atomic.value
            _atomic = {
                value: _value + _text.value,
                key: _atomic.key
            }
        }else{
            _atomic = {
                value: _text.value,
                key: _atomic.key
            }
        }
        if(listArr.length==0){
            outList.push(_atomic.value)
            return _atomic
        }else{
            for(var i = 0;i<listArr.length;i++){
                pro(listArr[i],listArr.filter((r)=> (r.key!= listArr[i].key)),_atomic)
            }
        }
    }
    for(var i = 0;i<_list.length;i++){
        var selectArr = _list.filter((r)=> {
                return  (r.key!= _list[i].key)
        } )
        var arr = selectArr.slice()
         pro(Object.assign({},_list[i]),selectArr,Object.assign({},_list[i]))
    }
    var _outList=[]
    for(var i = 0;i<outList.length;i++){
        if(_outList.indexOf(outList[i])===-1){
            _outList.push(outList[i])
        }
    }
    return _outList
};

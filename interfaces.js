var Module = /** @class */ (function () {
    function Module(x) {
        this.tiles = x;
    }
    Module.prototype.appendSucc = function (succesor) {
        this.tiles[succesor].push(1);
    };
    return Module;
}());
var mod = new Module([[1]]);
mod.appendSucc(0);
console.log(mod.tiles);

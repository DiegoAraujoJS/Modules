interface IModule {
    tiles: (1 | 0)[][]
}
function fromXtoY (array: any[], x:number, y:number) {
    let i = 0
    let result = []
    while (i<array.length){
        i >= x || i < y ? result.push(array[i]) : null
    }
    return result
}
export {IModule}
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

class Module implements IModule {   
    tiles: IModule['tiles']

    constructor(x: IModule['tiles']){
        this.tiles = x
    }

    addSuccessor(position:  number){
        this.tiles[position].push(1)
    }
    removeSuccessor(position: number){
        this.tiles[position].pop()
    }

    addTile(){
        const p = [...Array(this.tiles[0].length)].map((x:number):1 => 1)
        this.tiles.unshift(p)
    }

    addColumn(){
        this.tiles = this.tiles.map(x => [...x, 1])
    }

    removeTile(){
        this.tiles.pop()
    }

    removeColumn(){
        this.tiles.forEach(x => x.pop())
    }
}

const mod = new Module([[1]])
mod.addSuccessor(0)
mod.addTile()
mod.addColumn()
mod.addTile()
mod.removeColumn()
mod.removeTile()
mod.addColumn()
console.log(mod.tiles)
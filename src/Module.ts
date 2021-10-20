import { IModule } from "../interfaces"
class Module implements IModule {   
    tiles: IModule['tiles']

    constructor(){
        this.tiles = [[1]]
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

    join(position_1: [number,number], position_2: [number,number]) {
        this.tiles[position_1[1]][position_1[0]] = 0
        this.tiles[position_2[1]][position_2[0]] = 0
    }
}

const mod = new Module()
mod.addSuccessor(0)
mod.addSuccessor(0)
mod.addTile()
mod.join([1,1],[2,1])
console.log(mod.tiles)
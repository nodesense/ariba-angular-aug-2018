interface IShape {
    area(): number;
}

interface Animal {

}

class Circle implements IShape {
    area(): number {
        return 0
    }
}

let c = new Circle()
let a: Animal = c;

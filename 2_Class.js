class Lion {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return "내 이름은 " + this.name;
    }
}

myLion = new Lion("사자");
console.log(myLion.getName()); // 내 이름은 사자

class Animal {
    constructor(leg) {
        this.leg = leg;
    }

    getAnimal() {
        return `${this.name}은 ${this.leg}개의 다리를 갖는다.`;
    }
}

class Lion extends Animal {
    constructor(name, leg) {
        super(leg);
        this.name = name;
    }

    getName() {
        return "내 이름은 " + this.name;
    }
}

myLion = new Lion("사자", 4);
console.log(myLion.getName());
console.log(myLion.getAnimal());

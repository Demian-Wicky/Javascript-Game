//////////////////////////////////////////////////////////////////////////
class Character {
    constructor(hp, dmg, mana) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "playing";
    }

    takeDamage(damagepoint) {
        this.hp = this.hp - damagepoint
    }

    dealDamage(victim) {
        victim.hp = victim.hp - this.dmg
    }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40) {
        super(hp, dmg, mana);
        this.name = name
    }
}
//////////////////////////////////////////////////////////////////////////
class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160) {
        super(hp, dmg, mana);
        this.name = name
    }
}
//////////////////////////////////////////////////////////////////////////
class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200) {
        super(hp, dmg, mana);
        this.name = name
    }
}
//////////////////////////////////////////////////////////////////////////
class Berzerker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0) {
        super(hp, dmg, mana);
        this.name = name
    }
}
//////////////////////////////////////////////////////////////////////////
class Assassin extends Character {
    constructor(name, hp = 6, dmg = 6, mana = 20) {
        super(hp, dmg, mana);
        this.name = name
    }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////






// const player1 = new Fighter("Grace")
// const player2 = new Paladin("Ulder")
// const player3 = new Monk("Moana")
// const player4 = new Berzerker("Draven")
// const player5 = new Assassin("Carl")

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
// console.log(player5);
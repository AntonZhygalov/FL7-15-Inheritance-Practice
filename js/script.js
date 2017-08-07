function Pokemon(obj) {
    this.height = obj.height;
    this.weight = obj.weight;
    this.type = 'Fire';
    this.specie = 'Lizard Pokemon';
    this.fly = false;
    this.walk = true;

}

Pokemon.prototype.getType = function() {
    return this.type;
}

Pokemon.prototype.getSpecie = function() {
    return this.specie;
}

Pokemon.prototype.getHeight = function() {
    return this.height;
}

Pokemon.prototype.canWalk = function() {
    return this.walk;
}

Pokemon.prototype.canFly = function() {
    return this.fly;
}

Pokemon.prototype.evolve = function(evo = this.evolution) {
    if (map.hasOwnProperty(evo)) {
        return map[evo]();
    } else console.log('no such evolution');
}



var map = {
    'Charmeleon': function() {
        return new Charmeleon({
            height: 2,
            weight: 45
        })
    },
    'Charizard': function() {
        return new Charizard({
            height: 10,
            weight: 200
        })
    },
    'WaterStone': function() {
        return new Vaporeon({
            height: 1,
            weight: 30
        })
    },
    'ThunderStone': function() {
        return new Jolteon({
            height: 1,
            weight: 25
        })
    },
    'FireStone': function() {
        return new Flareon({
            height: 1,
            weight: 25
        })
    }
}


function Charmander(obj) {
    Pokemon.call(this, obj);
    this.evolution = 'Charmeleon';
}

Charmander.prototype = Object.create(Pokemon.prototype);

function Charmeleon(obj) {
    Pokemon.call(this, obj);
    this.evolution = 'Charizard';

}

Charmeleon.prototype = Object.create(Pokemon.prototype);

function Charizard(obj) {
    Pokemon.call(this, obj);
    this.specie = 'Flame Pokemon';
    this.fly = true;
}

Charizard.prototype = Object.create(Pokemon.prototype);

function Eevee(obj) {
    Pokemon.call(this, obj);
    this.type = 'normal';
    this.specie = 'Evolution Pokemon';
}

Eevee.prototype = Object.create(Pokemon.prototype);

function Vaporeon(obj) {
    Pokemon.call(this, obj);
    this.type = 'water';
    this.specie = 'Bubble Jet Pokemon';
}

Vaporeon.prototype = Object.create(Pokemon.prototype);

function Jolteon(obj) {
    Pokemon.call(this, obj);
    this.type = 'electric';
    this.specie = 'Lightning Pokemon';
}

Jolteon.prototype = Object.create(Pokemon.prototype);

function Flareon(obj) {
    Pokemon.call(this, obj);
    this.specie = 'Flame Pokemon';
}

Flareon.prototype = Object.create(Pokemon.prototype);


var embury = new Charmander({
    height: 1,
    weight: 15
});
var mercury = new Charmeleon({
    height: 2,
    weight: 45
});
var morderbrand = new Charizard({
    height: 10,
    weight: 200
});
var fluffy = new Eevee({
    height: 1,
    weight: 7
});
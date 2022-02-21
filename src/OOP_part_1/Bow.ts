import { Weapon } from './Weapon';

export class Bow extends Weapon {

    constructor(
        baseDamae: number,
        baseDurability: number,
        value: number,
        weight: number
    ) {
        super(baseDamae, baseDurability, 'bow', value, weight);
    }

    public polish(): void {
        if (this.durabilityModifier < 1) {
            this.durabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
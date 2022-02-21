import { Weapon } from './Weapon';

export class Sword extends Weapon {

    constructor(
        baseDamae: number,
        baseDurability: number,
        value: number,
        weight: number
    ) {
        super(baseDamae, baseDurability, 'sword', value, weight);
    }

    public polish(): void {
        const maxIncreaseDamage = (this.baseDamage * 0.25) + this.baseDamage;

        if (this.baseDamage < maxIncreaseDamage) {
            this.baseDamage = this.baseDamage + Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
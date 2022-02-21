import { Item } from "./Item";

export class Weapon extends Item {
    static readonly MODIFIER_CHANGE_RATE: number = 0.05;
    private _damageModifier: number = 0.05;
    private _durabilityModifier: number = 0.05;
    
    constructor(
        private _baseDamage: number,
        private _baseDurability: number,
        _name: string,
        _value: number,
        _weight: number
    ) {
        super(_name, _value, _weight);
    }

    public polish(): void {
        
    }

    public use(): string {
        if (this.baseDurability < 0) return `You can't use the ${this.name}, it is broken.`

        this.baseDurability = this._baseDurability - Weapon.MODIFIER_CHANGE_RATE;

        if (this.baseDurability > 0) {
            return `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;
        } else {
            return `You use the ${this.name}, dealing ${this.getDamage()} points of damage. The ${this.name} breaks`;
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.baseDurability}`;
    }

    public getDamage(): number {
        return Number((this.baseDamage + this.damageModifier).toFixed(2));
    }

    get damageModifier(): number {
        return this._damageModifier;
    }

    set damageModifier(damageModifier: number) {
        this._damageModifier = damageModifier;
    }

    get durabilityModifier(): number {
        return this._durabilityModifier;
    }

    set durabilityModifier(durabilityModifier: number) {
        this._durabilityModifier = durabilityModifier;
    }

    get baseDamage(): number {
        return this._baseDamage;
    }

    set baseDamage(baseDamage: number) {
        this._baseDamage = baseDamage;
    }

    get baseDurability(): number {
        return Number(((this._baseDurability + this.durabilityModifier) * 100).toFixed(2));
    }

    set baseDurability(baseDurability: number) {
        this._baseDurability = baseDurability;
    }
}


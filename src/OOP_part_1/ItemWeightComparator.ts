import { Item } from './Item';
import { ItemComparator } from './interfaces/ItemComparator';

export class ItemWeightComparator  implements ItemComparator {
    public compare(first: Item, second: Item): number {
        if ( first.weight === second.weight )
            return first.compareTo(second);

        if (first.weight > second.weight)
            return 1;
        
        return -1;
    }
}
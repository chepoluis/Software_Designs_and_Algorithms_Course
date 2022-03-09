import { Row } from "../components";

export interface options {
    without_posts: boolean,
    more_than_100_posts: boolean,
    sort_desc: boolean,
    sort_asc: boolean,
    search_by: string
}

export const filteredData = ( data: Row[], options: options ) => {
    let newData = [];
    const searchByArray = searchBy(options.search_by, data);
    
    if (options.without_posts) {
        newData = [...newData, ...withoutPost(data)];
    }

    if (options.more_than_100_posts) {
        newData = [...newData, ...moreThan100Posts(data)];
    }
    
    if (options.search_by !== '') {
        newData = [...newData, ...searchByArray];
    }

    if (options.sort_desc) {
        if (newData.length === 0) {
            data = sortDesc(data);
        } else {
            newData = sortDesc(newData);
        }
    } 

    if (options.sort_asc) {
        if (newData.length === 0) {
            data = sortAsc(data);
        } else {
            newData = sortAsc(newData);
        }
    } 
    
    return newData.length === 0 && searchByArray.length !== 0 
        ? data 
        : eliminateDuplicatedObjects(newData);
}

const withoutPost = ( data: Row[] ): Row[] => {
    return data.filter(user => user.posts === 0);
}

const moreThan100Posts = ( data: Row[] ): Row[] => {
    return data.filter(user => user.posts >= 100);
}

const sortDesc = ( data: Row[] ): Row[] => {
    return data.sort((a, b) => b.lastPayments - a.lastPayments);
}

const sortAsc = ( data: Row[] ): Row[] => {
    return data.sort((a, b) => a.lastPayments - b.lastPayments);
}

const searchBy = ( optionSearch: string, data: Row[] = [] ): Row[] => {
    optionSearch = optionSearch.toLocaleLowerCase();

    return data.filter(hero => ( 
        hero.country.toLocaleLowerCase().includes(optionSearch)
        || hero.name.toLocaleLowerCase().includes(optionSearch)
        || hero.username.toLocaleLowerCase().includes(optionSearch)
    ));
}

const eliminateDuplicatedObjects = ( data: Row[] ): Row[] => {
    return data.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.name === value.name
        ))
    )
}
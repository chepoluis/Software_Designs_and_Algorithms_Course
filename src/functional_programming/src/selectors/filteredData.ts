import { Row } from "../components";

export interface options {
    without_posts: boolean,
    more_than_100_posts: boolean,
    sort_desc: boolean,
    sort_asc: boolean,
    search_by: string
}

export const filteredData = ( data: Row[], options: options ) => {
    let newData = data ? [...data] : [];
    
    if (options.without_posts) {
        newData = [...newData.filter(user => user.posts === 0)];
    }

    if (options.more_than_100_posts) {
        newData = [...newData.filter(user => user.posts >= 100)];
    }
    
    if (options.sort_desc) {
        newData = [...newData.sort((a, b) => b.lastPayments - a.lastPayments)];
    } 

    if (options.sort_asc) {
        newData = [...newData.sort((a, b) => a.lastPayments - b.lastPayments)];
    } 
    
    if (options.search_by !== '') {
        options.search_by = options.search_by.toLocaleLowerCase();

        newData = newData.filter(hero => ( 
          hero.country.toLocaleLowerCase().includes(options.search_by)
          || hero.name.toLocaleLowerCase().includes(options.search_by)
          || hero.username.toLocaleLowerCase().includes(options.search_by)
        ));
    }

    return newData;
}
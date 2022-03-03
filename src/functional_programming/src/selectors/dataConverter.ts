import { Account, Image, User } from "../../types";
import { Row } from "../components";

export const dataConverter = (
    users: User[],
    accounts: Account[],
    images: Image[]
): Row[] => {
    return users.map(({ userID, username, country, name }) => {
        const { url: avatar } = images.find(image => image.userID === userID);
        const { payments, posts } = accounts.find(account => account.userID === userID);
        
        const lastPaymentDate = new Date(Math.max.apply(null, payments.map( date => new Date( date.date )))).toDateString();

        const { totalSum: lastPayments } = payments.length !== 0 ? payments.find( date => date.date === lastPaymentDate )
                                                                 : { totalSum : 0 };

        return {
          avatar,
          username,
          country,
          name,
          lastPayments,
          posts
        }
      });
}
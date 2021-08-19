function megaFriends(friends){
    let megaBondhu=friends[0];
    for(const friend of friends){
        if(friend.length>megaBondhu.length){
            megaBondhu=friend;
        }
    }
    return megaBondhu;
}
const allFriends=['adnan','sumir','babul','bulubulu','tulumulutulu'];
const largesFriends=megaFriends(allFriends);
console.log(largesFriends);

// we can concatinet the array with .concat
const first=['a','b'];
const second=['c','d'];
const combine=first.concat(second);
console.log(combine);

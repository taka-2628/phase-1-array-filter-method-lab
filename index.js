// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    const isNameMatch = array.filter(function(element){
        return element.toUpperCase() === name.toUpperCase()
    })
    return isNameMatch;
}

// console.log(findMatching(drivers, 'Bobby'));
// LOG: [ 'Bobby', 'Bobby' ]


function fuzzyMatch(array, query){
    return array.filter(function(element){
        return element.toLowerCase().startsWith(query.toLowerCase()) 
    })
}

// console.log(fuzzyMatch(drivers, 'A'));
// LOG:  [ 'Annette' ]


/* more loose filtering: if an element contains characters that match anywhere in the string 
function morefuzzyMatch(array, query){
    return array.filter(function(element){
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1 
    })
}

// console.log(morefuzzyMatch(drivers, 'A'))
// LOG: [ 'Sammy', 'Sally', 'Annette', 'Sarah' ]
*/


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function matchName(array, queryString){
    function matching(element){
        return element.name.toLowerCase() === queryString.toLowerCase();
    };
    return array.filter(matching);
}

console.log(matchName(drivers, 'sally'))

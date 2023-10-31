// code your solution here
function superbowlWin(record){
   const winning = record.find(isWin)
   if (winning === undefined){;
    return undefined;
   } else return winning.year;
    // (record.result === "W") ;
}

function isWin(indivRecord){
    return indivRecord.result === "W"
}




// // for statement 

// function superbowlWin(record){
//     for (const element in record){
//         if (element.result === "W"){
//             return (element.year)
//         }
//     }
// }
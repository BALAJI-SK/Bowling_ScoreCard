const score=(rolls)=>{
if(!Array.isArray(rolls)){throw new Error('usportted input')};
let frame=0;
let totalGamePoints=0;
for(;frame<10;frame++){
    let firstThrow=rolls.at(frame*2+1);
    let secondThrow=rolls.at(frame*2+2);
    let framePoints=firstThrow+secondThrow;
    if(firstThrow==10){
        framePoints=10+(secondThrow+rolls.at((frame+1)*2-1));
    }
    else if(framePoints==10){
        framePoints+=rolls.at((frame+1)*2-1);
    }
    totalGamePoints+=framePoints;
}
// console.log(totalGamePoints)
return totalGamePoints;
};

const bestScore=(games)=>{
let gamesPoints=[]
games.forEach(playerGame => {
    gamesPoints.push(score(playerGame));
});
return Math.max(gamesPoints);
};
score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
module.exports = { score,bestScore };

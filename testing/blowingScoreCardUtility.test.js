const {score,bestScore}=require('../blowingScoreCardUtility');

describe('Blowing Score Card testing',()=>{
describe('1 game Score verifying',()=>{
it('should return total score when 1 full game of 10 frames given',()=>{
let result = score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
expect(result).toBe(90);
});
it('should return total score when 1 full game of 10 frames given',()=>{
    let result = score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
    expect(result).toBe(30);
    });
    it('should return total score when 1 full game of 10 frames given',()=>{
        let result = score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(result).toBe(16);
        });
});
describe('Error of single game Score ',()=>{
  it('should throw error when non array is given as input',()=>{
    expect(()=>{score(12)}).toThrow('Unsportted Input');
  })  
  

});

});
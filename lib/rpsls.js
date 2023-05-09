let choicesRPS = ["rock", "paper", "scissors"];

let opponent= choicesRPS[Math.floor(Math.random()* choicesRPS.length)];
   
  
if (shot==null)
{
  return {"player": choicesRPS[Math.floor(Math.random()* choicesRPS.length)]};
}
if (!choicesRPS.includes(shot)){
    throw new Error(`${shot} is out of range`);
  	
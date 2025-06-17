// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

console.log(returnRandBase());
console.log(mockUpStrand());
const pAequorFactor = (specimenNum, dna) => {
let randomNumber = Math.floor(Math.random() * 15);
console.log(randomNumber);

return {

  specimenNum,
  dna,
  mutate (){
    newDna = this.dna;
    
    newDna[randomNumber] = returnRandBase();
    
    
    if(newDna[randomNumber] !== this.dna[randomNumber]){

    }

   return newDna() ;
  },
     compareDNA (pAequor){
    let newComparison = 0;
    for(let i = 0; i < this.dna.length; i++){
        if (pAequor.dna[i] === this.dna[i]){
          newComparison ++;
        }
          
    }
    const similarity = ((newComparison / pAequor.dna.length) * 100) ;
    console.log(similarity)
    return (`pAequor # ${this.specimenNum} and pAequor # ${pAequor.specimenNum} have a similarity of ${similarity}%`)
},
willLikelySurvive(){
  let likelyhood = 0;
  for(let  i=0; i<this.dna.length; i++){
    if(this.dna[i] === 'C' || this.dna[i] === 'G'){
      likelyhood ++;
    } 
  }
  let likelyhoodPercentage= (likelyhood/this.dna.length) * 100
  console.log(likelyhoodPercentage)
  if ( likelyhoodPercentage >= 60){
    return true;
  } else {
    return false;
  }
}
      }

}

// const newAn1 = pAequorFactor(1, mockUpStrand())
// const newAn2 = pAequorFactor(2, mockUpStrand())

// console.log(newAn2.compareDNA(newAn1));
// console.log(newAn1.willLikelySurvive());
const createAndCheck =(target) => {
const specimen =[];
const survivors =[];
for (let i = 0; ;i ++ ){
specimen[i]= pAequorFactor(i, mockUpStrand())
if (specimen[i].willLikelySurvive()){
  survivors.push(specimen[i]);
}
if (survivors.length === target){
  
  break;
}

}
return survivors;
}

console.log(createAndCheck(30));





 

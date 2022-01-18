var suit = ["spades","daimonds","club","heart"]
var value=[
    'ace',1,2,3,4,5,6,7,8,9,10,'queen','king','joker'
]
let deck=[]
for(i=1;i<=suit.length;i++){
    for(k=0;k<=value.length;k++){
        let card = {"value":value[k] ,"suit" :suit[i]}
        deck.push(card)

        for(var j=deck.length;i>=0;i--){
            let x=Math.floor(Math.random()*j)
            let temp = deck[j]
            deck[j]=deck[x]
            deck[x]=temp
        }

    }
}
console.log("5 cards are")
for(j=1;j<5;j++){
    console.log(`${deck[j].value} ${deck[j].suit}`)
}
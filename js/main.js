//Card- template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

var heart2 = new card(2,'2','Hearts');

//Deck - template function - just moulds
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];
  //52 loops = 4 *13
  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      var cardObject = new card(j+1, this.names[j], this.suits[i]);
      cards.push(cardObject);
    }
      
  }
  //deck of 52 card objects
  return cards;
};


var shuffle = function(deck){
  for(var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  
  return deck;
};

function compareVal ( a ,b)
{

  if ( a == b)
  {
    return true;
  }
  else
  {
    return false;
  }
}


//Creating a deck object
var myDeck = new deck();

window.onload = function(){

  shuffle(myDeck);
  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
      var vals = [];
    div = document.createElement('div');
    div.className = 'card';
     var click = 0;
    div.addEventListener('click', function(event,counter){
       // for(var counter = 0; counter<= 1; counter++){
        
       // for(var counter= 0; counter<2;counter++){
        vals[click] = this.querySelector(".number");
    
    if (vals.length == 3)
    {
      var result = compareVal(vals[0],vals[1])
      if (result == true)
      {
        alert("won");
      }
      else {
        alert ("try again");
      }
      vals =[];
    }
      
    if(click<2)
    {
            click += 1;
      this.querySelector(".number").style.display = "block";
      this.querySelector(".suit").style.display = "block";
     //   console.log(counter);
        console.log(click);
        
    }
    else
        {   // reset block here..check it out
            
            document.body.removeChild(div);
            div.innerHTML=" ";
           
          
        }
       
   //     }
                         
    });
      
 
    var ascii_char;
    if(myDeck[i].suit =='Diamonds'){
      ascii_char = '&diams;';
    }
    else
    {
      ascii_char = '&'+myDeck[i].suit.toLowerCase()+';';
    }
     
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit">' + ascii_char +'</span>';
    document.body.appendChild(div);
    
  }
};


 
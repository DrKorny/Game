//<script language="javascript" type="text/javascript">



//Tree decisions / attack - speak /
function Tree() {
	var oneTree = prompt("Now are you a diplomat or a berserker? Are you going to attack a tree? Or are you gonna ask for a way through the forest. And maybe he needs help? Who knows? So it's time to decide: ATTACK or TALK.").toLowerCase();
}
function TreeAttack() {
	confirm("Yea! Go full Minecraft!");
	//Tree_1();
}
function TreeTalk() {
	confirm("The mysterious creature seems to be asleep. You try to talk to him but that's not that easy.");
	confirm("After a while when he's awake he asks you who and what you are. He seems to be a bit suspicious about you.");
	Tree_2();
}

// Orc decisions / fight(refuse) - offer something other - surrender /
function Orc() {
var oneOrc= prompt("You're standing there alone on a field surrounded and suppressed by Orcs forcing you to choose between 3 options. You can REFUSE their offers which will probably cause the Orcs to attack you. Maybe you find something other valueble for them so you can OFFER this to keep your stuff and go on. The easiest solution is to SURRENDER and give them everything but you're safe and don't have to bag for your life.").toLowerCase();
switch(oneOrc) {
    case 'refuse':
        confirm("They're not happy with your decision. You hear them howl and see one two three Orcs charging right at you.");
        Orc_1();
        break;
    case 'offer':
        confirm("It seems like they don't want to kill you because somehow you are still alive.");
        Orc_2();
        break;
    case 'surrender':
        confirm("You don't want any problems so you're going to cooperate with them.");
        Orc_3();
        break;
    default:
        confirm("Is this game too hard? Choosing between 3 options? ENGAGE on them, NEGOTIATE with them or being robbed and GIVE them your stuff. Please try again.");
    }
} //text wieder überarbeiten

// Tree attack / stomp ending - talk /
function Tree_1() {
	var stomp = prompt("But you know you're going to attack a tree-looking ancient creature, right? ")
}

// Tree talk / quest - next question /
function Tree_2() {
	var race = prompt("human, orc?").toLowerCase();
	switch(race) {
		case 'human':
			confirm("y");
			confirm("->");
			//race = true
			break;
		case 'orc':
			confirm("N");
			//race = false
			Tree_2_1();
			break;
		default:
			confirm("Choose between Human and Orc.");
	}
}

// Tree if orc / quest - stomp ending /
function Tree_2_1() {
    race = false;
    var peaceful = prompt().toLowerCase();
	switch(peaceful) {
		case 'yes':
			confirm("yes");
			peaceful = true;
			break;
		case 'no':
			confirm("no");
			peaceful = false;
			break;
		default:
			confirm("choose right");
	}
	if (race || peaceful) {
		confirm("good");
	} else {
		confirm("not good");
	}
}

//Orc fight(refuse)/ kill - cave /
function Orc_1() {
    var strength = prompt("But are you even strong enough to beat 20 Orcs? I mean they look scary. You have to be a beast to be able to kill them all alone. (YES/NO)").toLowerCase();
    switch(strength) {
        case 'yes':
            strength = true;
            confirm("You will (maybe) totally wreck them, you manly Man!");
            break;
        case 'no':
            strength = false;
            confirm("Well strength is probably not so important if you want to kill 20 Orcs by yourself...");
            break;
        default:
            confirm("Decision-making is not one of your strengths, right? Please try again and choose between YES and NO.");
    }
    var armed = prompt("Are you gonna beat them to death with your bare hands or do you have any kind of weapon? They've got massive armors and heavy swords and axes! Do you have something equally? (YES/NO)").toLowerCase();
    switch(armed) {
        case 'yes':
            armed = true;
            confirm("Yes! Some pretty awesome super hyper mega ultra badass weapon, right?");
            break;
        case 'no':
            armed = false;
            confirm("Yea! A little boxing-fight is just right to deafeat 20 Orcs.");
            break;
        default:
            confirm("Decision-making is not one of your strengths, right? Please try again and choose between YES and NO.");
    }
    if(strength && armed) {
        confirm("You've got some big balls of steel! After killing 10 of them the rest flees and you can go on.");
    } else {
        confirm("You try to atttack one of them but it fails. He dodged your attack and knocks you out.");
        //koma, ausgeraubt aufwachen, nach essen suchend
    }
} //text wieder überarbeiten

//Orc offer / join - cave /
function Orc_2() {
    var join = prompt("The Orcs are willing to accept that you'll keep your stuff but only if you're going to serve them. They want you to 'join' and help them. Do you want to save your life and your possessions but sacrifice your freedom and serve the Orcs? Probably you're forced to kill innocents. Think twice. (YES/NO)").toLowerCase();
    switch(join) {
        case 'yes':
            confirm("You see some of them smiling and know there is something wrong. You get a hard object against the back of your head and you fall to the ground.");
            //coma, ausrauben, essen suchend 
            break;
        case 'no':
            confirm("Actually you had nothing to decide. The Orcs are taking you with force to their camp and torture you until you're willing to join them and do what they say.");
            break;
        default:
            confirm("Decision-making is not one of your strengths, right? Please try again and choose between YES and NO.");
    }
}

// Orc surrender / cave - arrow ending /
function Orc_3() {
	confirm("You let them take your stuff, you knee down and beg for your life.")
	var knee = prompt("You can't here them anymore so you thing they're gone. It's risky to stand up to early because it could be interpreted as an aggressive move. So do you want to stay DOWN for some minutes to be sure or accept DANGEROUSLY as your middle name ?").toLowerCase();
	switch(knee) {
		case 'down':
			confirm("You lay down for a while. After some time you get up, orientate yourself so you can go on. Sadly you don't have any food so you have to get some before you can continue your adventure.");
		
		case 'dangerously':
			confirm("You get up a little to eraly. One Orc sees you and shoots you an arrow to the knee.");
			confirm("Sadly your adventure ends here.");
			confirm("At least you can say that you were an adventurer until you got an arrow to the knee.");
			confirm("END OF THE STORY. But you can restart and explore other endings.");
	}
	
}

//function Cave() {}



//</script>
#TODO: make a JFrame pop up box, buttons, maybe animation?
import random

#basic introduction message:
print("Rock, Paper, Scissors! \nThink you have what it takes? Let's find out!")

#establish our variables for the loops
playAgain = True 
game_mode = 0


#create a play again loop:
while playAgain == True:
    while True: #allows user to select game mode and check if input is valid/reprompt if not:
        try: 
            print("\nSelect the Game Mode: \n1)Classic Mode \n2)Bonus Mode")
            game_mode = int(input("I would like to play: "))
            
            if game_mode == 1 or game_mode == 2: #user enters a 1 or 2 during a reprompt
                break
            else: #user enters a number other than 1 or 2:
                print("\nInvalid input. Please select 1 or 2.")
            
        except ValueError: #the user types the number out instead of entering 1 or 2
            print("\nPlease enter the numeric value of the selection you would like to make. ")
     
    #need for the player selection value!
    player = 0 
          
    #announce options based on the game mode and allow user to input their selection:
    if game_mode == 1:
        while True: #checks valid input from user and reprompts if invalid
            try:
                print("\nYou have selected Classic Mode. Please make your selection: \n1) Rock ✊ \n2) Paper ✋ \n3) Scissors ✌️")
                player = int(input("Enter the number of your selection here: "))
                
                if player == 1 or player == 2 or player == 3:
                    break;
                else:
                    print("\nInvalid selection. Please select a number 1-3.")
            except ValueError:
                print("\nPlease enter the numeric value of the selection you would like to make. ")
        
            
    if game_mode == 2:
        
        print("\nYou have selected Bonus Mode.")
        print("In this mode, you can select: \nRock ✊ \nPaper ✋ \nScissors ✌️ \nLizard 🦎 \nSpock 🖖")
        
        while True:
            try:
                print("\nWould you like to read the rules for this mode?")
                print("1) Yes 2)No, I know the rules already")
                read_rules = int(input("Please enter your selection here: "))
                
                if read_rules == 1:
                    print("\nPaper beats Rock \nRock beats Scissors \nScissors beat Paper \nRock crushes Lizard \nLizard poisons Spock \nSpock smashes Scissors \nScissors beat Lizard \nLizard eats Paper \nPaper disapproves Spock \nSpock vaporizes Rock\nNow that you know the rules...\n")
                    break
                elif read_rules == 2:
                    print("\nUnderstood. Let's get right into the game then, shall we?\n")
                    break
                else:
                    print("\nInvalid selection. Please select 1 for Yes or 2 for No")
            except ValueError:
                print("Please enter the numeric value of the selection you would like ot make.")
        
        while True:
            try:
                print("It\'s time for you to make your selection: \n1) Rock ✊ \n2) Paper ✋ \n3) Scissors ✌️ \n4) Lizard 🦎 \n5) Spock 🖖")
                player = int(input("Type a number 1-5: "))
                
                if player>=1 and player <=5:
                    break;
                else: 
                    print("\nInvalid selection. Please select a number 1-5.")
            except ValueError:
                print("Please enter the numerical value of the selection you would like to make. ")

    #print out what the player has selected:
    if player == 1:
        print("\nYou have selected: Rock ✊ ")
    elif player == 2:
        print("\nYou have selected: Paper ✋ ")
    elif player == 3:
        print("\nYou have selected: Scissors ✌️ ")
    elif player == 4:
        print("\nYou have selected: Lizard 🦎 ")
    elif player == 5:
        print("\nYou have selected: Spock 🖖")
    else:
        print("\nInvalid selection.")

       
    #randomly select a value for the computer to play:
    if game_mode == 1:
        computer = random.randint(1,3)
    else:
        computer = random.randint(1,5)

    #print out what the computer has selected:
    if computer == 1:
        print("The CPU has selected: Rock ✊ ")
    elif computer == 2:
        print("The CPU has selected: Paper ✋ ")
    elif computer == 3:
        print("The CPU has selected: Scissors ✌️ ")
    elif computer == 4:
        print("The CPU has selected: Lizard 🦎 ")
    elif computer == 5:
        print("The CPU has selected: Spock 🖖")
        
    #determining the winner:
    if player == computer:
        print("\nIt's a draw!")

    elif player == 1: #ROCK
        if computer == 3 or computer == 4: #computer has Scissors or Lizard
            print("\nYOU WIN!")
        else:
            print("\nYou LOSE. Better luck next time!")
            
    elif player == 2:#PAPER
        if computer == 1 or computer == 5: #computer has Rock or Spock
            print("\nYOU WIN!")
        else:
            print("\nYou LOSE. Better luck next time!")

    elif player == 3: #SCISSORS
        if computer == 2 or computer == 4: #computer has Paper or Lizard
            print("\nYOU WIN!")
        else: 
            print("\nYou LOSE. Better luck next time!")

    elif player == 4: #LIZARD
        if computer == 2 or computer == 5: #computer has Paper or Spock
            print("\nYOU WIN!")
        else:
            print("\nYou LOSE. Better luck next time!")

    elif player == 5: #SPOCK 
        if computer == 1 or computer == 3: #computer has Rock or Scissors
            print("\nYOU WIN!")
        else:
            print("\nYou LOSE. Better luck next time!")
    
    isValidEntry=False
    
    #asks the user if they would like to play again:
    while isValidEntry == False:
        print("\nWould you like to play again?")
        answer = input("Please type Yes or No:  ")
     
        if answer.lower() == "yes" or answer.lower() == "y":
            playAgain=True
            isValidEntry=True
        elif answer.lower() == "no" or answer.lower() =="n":
            playAgain=False
            isValidEntry=True
        else:
            print("\nInvalid answer.")
            isValidEntry=False
        


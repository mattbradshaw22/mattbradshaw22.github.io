import java.util.ArrayList;
import java.util.Scanner;

public class Driver {
    private static ArrayList<Dog> dogList = new ArrayList<Dog>();
    private static ArrayList<Monkey> monkeyList = new ArrayList<Monkey>(); 
    // Instance variables (if needed)

    public static void main(String[] args) {
    	Scanner scnr = new Scanner(System.in); // start scanner
    	boolean exit = false; //initialize exit to false
    	 Driver.initializeDogList();
         Driver.initializeMonkeyList();
    	while (!exit) {
    		displayMenu();
    		String choice = scnr.nextLine();
    		switch (choice) {
            case "1":
                intakeNewDog(scnr);
                break;
            case "2":
                intakeNewMonkey(scnr);
                break;
            case "3":
                reserveAnimal(scnr);
                break;
            case "4":
                printAnimals("dog");
                break;
            case "5":
                printAnimals("monkey");
                break;
            case "6":
                printAnimals("notReserved");
                break;
            case "q":
                exit = true;
                break;
            default:
                System.out.println("Invalid input. Please try again.");
    		}
    	
    		
    	
    	}
    	scnr.close();
       

        // Add a loop that displays the menu, accepts the users input
        // and takes the appropriate action.
	// For the project submission you must also include input validation
        // and appropriate feedback to the user.
        // Hint: create a Scanner and pass it to the necessary
        // methods 
	// Hint: Menu options 4, 5, and 6 should all connect to the printAnimals() method.

    }

    // This method prints the menu options
    public static void displayMenu() {
        System.out.println("\n\n");
        System.out.println("\t\t\t\tRescue Animal System Menu");
        System.out.println("[1] Intake a new dog");
        System.out.println("[2] Intake a new monkey");
        System.out.println("[3] Reserve an animal");
        System.out.println("[4] Print a list of all dogs");
        System.out.println("[5] Print a list of all monkeys");
        System.out.println("[6] Print a list of all animals that are not reserved");
        System.out.println("[q] Quit application");
        System.out.println();
        System.out.println("Enter a menu selection");
    }


    // Adds dogs to a list for testing
    public static void initializeDogList() {
        Dog dog1 = new Dog("Spot", "German Shepherd", "male", "1", "25.6", "05-12-2019", "United States", "intake", false, "United States");
        Dog dog2 = new Dog("Rex", "Great Dane", "male", "3", "35.2", "02-03-2020", "United States", "Phase I", false, "United States");
        Dog dog3 = new Dog("Bella", "Chihuahua", "female", "4", "25.6", "12-12-2019", "Canada", "in service", true, "Canada");
        Dog dog4 = new Dog("Benji", "Poodle", "male", "6", "45.6", "05-12-2019", "United States", "in service", false, "United States");

        dogList.add(dog1);
        dogList.add(dog2);
        dogList.add(dog3);
        dogList.add(dog4);
    }


    // Adds monkeys to a list for testing
    //Optional for testing
    public static void initializeMonkeyList() {

    }


    // Complete the intakeNewDog method
    // The input validation to check that the dog is not already in the list
    // is done for you
    public static void intakeNewDog(Scanner scnr) {
    	System.out.println("What is the dog's name?");
        String name = scnr.nextLine();
        for(Dog dog: dogList) {
            if(dog.getName().equalsIgnoreCase(name)) {
                System.out.println("\n\nThis dog is already in our system\n\n");
                return; //returns to menu
            }
        }
        System.out.println("What is the dog's breed?"); //prompt for breed
        String breed = scnr.nextLine(); //set breed to input
        System.out.println("What is the dog's gender?"); // prompt for gender
        String gender = scnr.nextLine(); // set gender from input
        System.out.println("What is the dog's age?"); // prompt for age
        String age = scnr.nextLine(); // set age from input
        System.out.println("What is the dog's weight?"); // prompt for weight
        String weight = scnr.nextLine(); // set weight from input
        System.out.println("What is the dog's acquisition date?"); // prompt for acquisition date
        String acquisitionDate = scnr.nextLine(); // set acqusition date from input
        System.out.println("What is the dog's acquisition country?"); // prompt for acquisition country
        String acquisitionCountry = scnr.nextLine(); // set acqusition country from input
        String trainingStatus = "intake"; // set training status to intake
        boolean reserved = false; // set reserved to false
        String inServiceCountry = "none"; // set inservice country to none
        
        // create object new dog with all attributes and add to array dogList      
        Dog newDog = new Dog(name, breed, gender, age, weight, acquisitionDate, acquisitionCountry, trainingStatus, reserved, inServiceCountry);
        dogList.add(newDog);
        System.out.println("Dog " + name + " has been added"); // print added to list
        return; // return to menu
        }
       
        // Complete intakeNewMonkey
	//Instantiate and add the new monkey to the appropriate list
        // For the project submission you must also  validate the input
	// to make sure the monkey doesn't already exist and the species type is allowed
    
    	public static void intakeNewMonkey(Scanner scnr) {
            System.out.println("What is the Monkey's name?"); // prompt monkey name
            String name = scnr.nextLine(); // get name from user input
            for(Monkey monkey: monkeyList) { //check monkey list to see if name already exists
                if(monkey.getName().equalsIgnoreCase(name)) { //if name exists in list...
                    System.out.println("\n\nThis monkey is already in our system\n\n"); //print already in system
                    return; //returns to menu
                }
            }
            
            System.out.println("What is " + name + "'s gender?"); // prompt for gender
            String gender = scnr.nextLine(); // set gender to input
            System.out.println("What is " + name + "'s age?"); // prompt for age
            String age = scnr.nextLine(); // set age to input
            System.out.println("What is " + name + "'s weight?"); // prompt for weight
            String weight = scnr.nextLine(); // set weight to input
            System.out.println("What is " + name + "'s acquisition date?"); //prompt for acquisition date
            String acquisitionDate = scnr.nextLine(); // set acquisition date to input
            System.out.println("What is " + name + "'s acquisition country?"); // prompt for acquisition country
            String acquisitionCountry = scnr.nextLine(); // set acquisition country to input
            String trainingStatus = "intake"; // set training status to intake
            boolean reserved = false; // set reserved to false
            String inServiceCountry = "none"; // set inservice country to none
            System.out.println("What is " + name + "'s tail length?"); // prompt for tail length
            String tailLength = scnr.nextLine(); // set tail length to input
            System.out.println("What is " + name + "'s height?");// prompt for height
            String height = scnr.nextLine();// set height to input
            System.out.println("What is " + name + "'s body length?"); // prompt for body length
            String bodyLength = scnr.nextLine(); // set body length to input
            System.out.println("What is " + name + "'s species?"); // prompt for species
            System.out.println("Acceptable species are:\n"); // list available species
            System.out.println("Capuchin" + "\t" + "Guenon" + "\t" + "Macaque");
            System.out.println("Marmoset" + "\t" + "Squirrel Monkey" + "\t" + "Tamarin");
            String species = scnr.nextLine().toLowerCase(); // set species to input
            // if the species isnt trainable
            if (!species.equals("capuchin") && !species.equals("guenon") && !species.equals("macaque") 
            		&& !species.equals("marmoset") && !species.equals("squirrel monkey") && !species.equals("tamarin")) {
            	System.out.println("This monkey isn't fit for training. \n"); // print the monkey cant be trained
            	return;
            }
                  
            // create object new monkey and add to array monkeyList
            Monkey newMonkey = new Monkey(name, gender, age, weight, acquisitionDate, acquisitionCountry, trainingStatus, reserved, inServiceCountry, tailLength, height, bodyLength, species);
            monkeyList.add(newMonkey);
            System.out.println("Monkey " + name + " has been added"); // print monkey name has been added to list
            return; // return to menu
        }
        

        // Complete reserveAnimal
        // You will need to find the animal by animal type and in service country
        public static void reserveAnimal(Scanner scnr) {
            System.out.println("What animal would you like to reserve? [Dog/Monkey]"); //prompt for animal type
            String animal = scnr.nextLine(); // store input as variable animal
            if (!animal.equalsIgnoreCase("dog") && !animal.equalsIgnoreCase("monkey")) { // if input isnt dog or monkey
            	System.out.println("Invalid Input"); //print invalid input
            	return;
            	}
                    
            System.out.println("Enter service country:"); // prompt for country
            String country = scnr.nextLine(); //store input to country
        
        	if (animal.equalsIgnoreCase("dog")) { // if animal input was dog
            	for (Dog dog : dogList) { // for dogs in doglist
            		if (dog.getInServiceLocation().equalsIgnoreCase(country) && dog.getTrainingStatus().equalsIgnoreCase("in service")&& !dog.getReserved()) { 
            			// check for matching service country training status and not reserved
            			dog.setReserved(true); // set to reserved
            			System.out.println(dog.getName() + " has been reserved"); //print the dog that has been reserved
            			return; // exit after reserving dog
            		}
            	}
        	} else if (animal.equalsIgnoreCase("monkey")) {
            		for (Monkey monkey : monkeyList) {
            			if (monkey.getInServiceLocation().equalsIgnoreCase(country) && monkey.getTrainingStatus().equalsIgnoreCase("in service") && !monkey.getReserved()) {
            				monkey.setReserved(true);
            				System.out.println(monkey.getName() + " has been reserved");
            				return; //exit loop
            			}
            		}	      
        		}
        	System.out.println("No available " + animal + " in this location");
        }
            
        // Complete printAnimals
        // Include the animal name, status, acquisition country and if the animal is reserved.
	// Remember that this method connects to three different menu items.
        // The printAnimals() method has three different outputs
        // based on the listType parameter
        // dog - prints the list of dogs
        // monkey - prints the list of monkeys
        // available - prints a combined list of all animals that are
        // fully trained ("in service") but not reserved 
	// Remember that you only have to fully implement ONE of these lists. 
	// The other lists can have a print statement saying "This option needs to be implemented".
	// To score "exemplary" you must correctly implement the "available" list.
        public static void printAnimals(String animal) {
        	if(animal.equals("dog")) { // if parameter for print animals is dog
        		System.out.println("List of Dogs \n"); // print preface of list
        		for (Dog dog : dogList) { //for each dog in dogList
        			System.out.println("Name: " + dog.getName() + "\t" + "Training Status: "  + dog.getTrainingStatus() + "\t" +
        					"Acquisition Location: "  + dog.getAcquisitionLocation() + "\t" + "Reserved: " + dog.getReserved() + "\n");
        			//print dog name, training status, acquisition location, and reserved status
        		}
        	}else if (animal.equals("monkey")) { // if parameter is monkey
        		System.out.println("List of Monkeys"); // print preface of list
        		for (Monkey monkey : monkeyList) { //for each monkey in monkeyList
        			System.out.println("Name: " + monkey.getName() + "\t" + "Training Status: " + monkey.getTrainingStatus() + "\t" +
        					"Acquisition Location: " + monkey.getAcquisitionLocation() + "\t" + "Reserved: " + monkey.getReserved() + "\n"); 
        			//print monkey name, training status, acquisition location, and reserved status	
        		}
        	}else if (animal.equals("notReserved")) { // if parameter is not reserved
        		System.out.println("Available Rescue Animals:"); // print preface of list
        		for (Dog dog : dogList){ // for each dog in dog list
        			//if the dog is in service and the reserved status is false
        			if (dog.getTrainingStatus().equals("in service") && !dog.getReserved()) {
        				System.out.println("Name: " + dog.getName() + "\t" + "Training Status: "  + dog.getTrainingStatus() + "\t" +
            					"Acquisition Location: "  + dog.getAcquisitionLocation() + "\t" + "Reserved: " + dog.getReserved() + "\n");
            			//print dog name, training status, acquisition location, and reserved status
        			}
        		}
        		for (Monkey monkey : monkeyList) { // for each monkey in monkeyList
        			// if the monkey is in service and not reserved
        			if(monkey.getTrainingStatus().equals("in service") && !monkey.getReserved()) {
        				System.out.println("Name: " + monkey.getName() + "\t" + "Training Status: " + monkey.getTrainingStatus() + "\t" +
            					"Acquisition Location: " + monkey.getAcquisitionLocation() + "\t" + "Reserved: " + monkey.getReserved() + "\n"); 
            			//print monkey name, training status, acquisition location, and reserved status	
        			}
        		}
        	}        	
        }

}


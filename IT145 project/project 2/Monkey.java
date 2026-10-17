
public class Monkey extends RescueAnimal { // create monkey class inheriting from rescue animal
	// Instance Variables
	private String tailLength;
	private String height;
	private String bodyLength;
	private String species;
	
	// Constructor
	public Monkey(String name, String gender, String age,
	String weight, String acquisitionDate, String acquisitionCountry,
	String trainingStatus, boolean reserved, String inServiceCountry, 
	String tailLength, String height, String bodyLength, String species) {
		setName(name);
	    setGender(gender);
	    setAge(age);
	    setWeight(weight);
	    setAcquisitionDate(acquisitionDate);
	    setAcquisitionLocation(acquisitionCountry);
	    setTrainingStatus(trainingStatus);
	    setReserved(reserved);
	    setInServiceCountry(inServiceCountry);
	    setTailLength(tailLength);
	    setHeight(height);
	    setBodyLength(bodyLength);
	    setSpecies(species);
	}
	
	public String getTailLength() { // accessor method for tail length
		return tailLength;
	}
	public void setTailLength(String tailLength) { // mutator method for tail length
		this.tailLength = tailLength;
	}
	public String getHeight() { // accessor method for height
		return height;
	}
	public void setHeight(String height) { // mutator method for monkey height
		this.height = height;
	}
	public String getBodyLength() { // accessor for body length
		return bodyLength;
	}
	public void setBodyLength(String bodyLength) { // mutator for body length
		this.bodyLength = bodyLength;
	}
	public String getSpecies() { //accessor for monkey species
		return species;
	}
	public void setSpecies(String species) { // mutator for monkey species
		this.species = species;
	}
}

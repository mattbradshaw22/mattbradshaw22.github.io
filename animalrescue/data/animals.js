// Provides the in-memory rescue animal dataset used by the web views and API controllers.

/* Sample records from Driver file initializeDogList() from my IT 145 project.
  {
    name: 'Spot', animalType: 'Dog', breed: 'German Shepherd', gender: 'male',
    age: '1', weight: '25.6', acquisitionDate: '05-12-2019',
    acquisitionCountry: 'United States', trainingStatus: 'intake',
    reserved: false, inServiceCountry: 'United States', sample: true
  },
  {
    name: 'Rex', animalType: 'Dog', breed: 'Great Dane', gender: 'male',
    age: '3', weight: '35.2', acquisitionDate: '02-03-2020',
    acquisitionCountry: 'United States', trainingStatus: 'Phase I',
    reserved: false, inServiceCountry: 'United States', sample: true
  },
  {
    name: 'Bella', animalType: 'Dog', breed: 'Chihuahua', gender: 'female',
    age: '4', weight: '25.6', acquisitionDate: '12-12-2019',
    acquisitionCountry: 'Canada', trainingStatus: 'in service',
    reserved: true, inServiceCountry: 'Canada', sample: true
  },
  {
    name: 'Benji', animalType: 'Dog', breed: 'Poodle', gender: 'male',
    age: '6', weight: '45.6', acquisitionDate: '05-12-2019',
    acquisitionCountry: 'United States', trainingStatus: 'in service',
    reserved: false, inServiceCountry: 'United States', sample: true
  }
    */


// Animal Data
// Fictional dog and monkey records used by the site views and tests.
// Each record includes profile details, acquisition location, training status,
// reservation status, graduation date, and a public image path.
const animals = [
  {  
    "id": 1,
    "name": "Rocky",
    "animalType": "Dog",
    "breed": "American Pit Bull Terrier",
    "gender": "Male",
    "age": 3,
    "weight": 62,
    "acquisitionDate": "2025-03-15",
    "acquisitionLocation": {
      "city": "Montgomery",
      "state": "AL",
      "country": "USA",
      "latitude": 32.3792,
      "longitude": -86.3077
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/americanPitbullTerrier1.jfif",
    "description": ""
  },
  {
    "id": 2,
    "name": "Luna",
    "animalType": "Dog",
    "breed": "American Pit Bull Terrier",
    "gender": "Female",
    "age": 4,
    "weight": 55,
    "acquisitionDate": "2024-11-08",
    "acquisitionLocation": {
      "city": "Juneau",
      "state": "AK",
      "country": "USA",
      "latitude": 58.3019,
      "longitude": -134.4197
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2026-02-20",
    "imagePath": "/images/americanPittbullTerrier2.jpg",
    "description": ""
  },

  {
    "id": 3,
    "name": "Buddy",
    "animalType": "Dog",
    "breed": "Beagle",
    "gender": "Male",
    "age": 2,
    "weight": 28,
    "acquisitionDate": "2025-06-12",
    "acquisitionLocation": {
      "city": "Phoenix",
      "state": "AZ",
      "country": "USA",
      "latitude": 33.4484,
      "longitude": -112.074
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/beagle1.jfif",
    "description": ""
  },
  {
    "id": 4,
    "name": "Daisy",
    "animalType": "Dog",
    "breed": "Beagle",
    "gender": "Female",
    "age": 3,
    "weight": 25,
    "acquisitionDate": "2025-01-19",
    "acquisitionLocation": {
      "city": "Little Rock",
      "state": "AR",
      "country": "USA",
      "latitude": 34.7465,
      "longitude": -92.2896
    },
    "trainingStatus": "Completed",
    "reserved": false,
    "graduationDate": "2026-04-15",
    "imagePath": "/images/beagle2.jfif",
    "description": ""
  },

  {
    "id": 5,
    "name": "Ace",
    "animalType": "Dog",
    "breed": "Belgian Malinois",
    "gender": "Male",
    "age": 4,
    "weight": 68,
    "acquisitionDate": "2024-08-03",
    "acquisitionLocation": {
      "city": "Sacramento",
      "state": "CA",
      "country": "USA",
      "latitude": 38.5816,
      "longitude": -121.4944
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-10-12",
    "imagePath": "/images/belgianMalinois1.jfif",
    "description": ""
  },
  {
    "id": 6,
    "name": "Nova",
    "animalType": "Dog",
    "breed": "Belgian Malinois",
    "gender": "Female",
    "age": 2,
    "weight": 58,
    "acquisitionDate": "2025-09-14",
    "acquisitionLocation": {
      "city": "Denver",
      "state": "CO",
      "country": "USA",
      "latitude": 39.7392,
      "longitude": -104.9903
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/belgianMalinois2.jfif",
    "description": ""
  },

  {
    "id": 7,
    "name": "Finn",
    "animalType": "Dog",
    "breed": "Border Collie",
    "gender": "Male",
    "age": 3,
    "weight": 42,
    "acquisitionDate": "2025-04-22",
    "acquisitionLocation": {
      "city": "Hartford",
      "state": "CT",
      "country": "USA",
      "latitude": 41.7658,
      "longitude": -72.6734
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/BorderCollie1.jfif",
    "description": ""
  },
  {
    "id": 8,
    "name": "Skye",
    "animalType": "Dog",
    "breed": "Border Collie",
    "gender": "Female",
    "age": 4,
    "weight": 39,
    "acquisitionDate": "2024-12-01",
    "acquisitionLocation": {
      "city": "Dover",
      "state": "DE",
      "country": "USA",
      "latitude": 39.1582,
      "longitude": -75.5244
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2026-01-18",
    "imagePath": "/images/BorderCollie2.jfif",
    "description": ""
  },

  {
    "id": 9,
    "name": "Duke",
    "animalType": "Dog",
    "breed": "Bloodhound",
    "gender": "Male",
    "age": 5,
    "weight": 92,
    "acquisitionDate": "2024-05-20",
    "acquisitionLocation": {
      "city": "Tallahassee",
      "state": "FL",
      "country": "USA",
      "latitude": 30.4383,
      "longitude": -84.2807
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-07-01",
    "imagePath": "/images/Bloodhound1.jfif",
    "description": ""
  },
  {
    "id": 10,
    "name": "Ruby",
    "animalType": "Dog",
    "breed": "Bloodhound",
    "gender": "Female",
    "age": 3,
    "weight": 78,
    "acquisitionDate": "2025-02-11",
    "acquisitionLocation": {
      "city": "Atlanta",
      "state": "GA",
      "country": "USA",
      "latitude": 33.749,
      "longitude": -84.388
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Bloodhound2.jfif",
    "description": ""
  },

  {
    "id": 11,
    "name": "Hunter",
    "animalType": "Dog",
    "breed": "Coonhound",
    "gender": "Male",
    "age": 4,
    "weight": 67,
    "acquisitionDate": "2025-01-05",
    "acquisitionLocation": {
      "city": "Honolulu",
      "state": "HI",
      "country": "USA",
      "latitude": 21.3099,
      "longitude": -157.8581
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Coonhound1.jfif",
    "description": ""
  },
  {
    "id": 12,
    "name": "Sadie",
    "animalType": "Dog",
    "breed": "Coonhound",
    "gender": "Female",
    "age": 3,
    "weight": 61,
    "acquisitionDate": "2025-07-18",
    "acquisitionLocation": {
      "city": "Boise",
      "state": "ID",
      "country": "USA",
      "latitude": 43.615,
      "longitude": -116.2023
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Coonhound2.jfif",
    "description": ""
  },

  {
    "id": 13,
    "name": "Cooper",
    "animalType": "Dog",
    "breed": "English Springer Spaniel",
    "gender": "Male",
    "age": 2,
    "weight": 46,
    "acquisitionDate": "2025-05-24",
    "acquisitionLocation": {
      "city": "Springfield",
      "state": "IL",
      "country": "USA",
      "latitude": 39.7817,
      "longitude": -89.6501
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/EnglishSpringerSpaniel1.jfif",
    "description": ""
  },
  {
    "id": 14,
    "name": "Molly",
    "animalType": "Dog",
    "breed": "English Springer Spaniel",
    "gender": "Female",
    "age": 4,
    "weight": 44,
    "acquisitionDate": "2024-09-17",
    "acquisitionLocation": {
      "city": "Indianapolis",
      "state": "IN",
      "country": "USA",
      "latitude": 39.7684,
      "longitude": -86.1581
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2025-12-10",
    "imagePath": "/images/EnglishSpringerSpaniel2.jfif",
    "description": ""
  },

  {
    "id": 15,
    "name": "Rex",
    "animalType": "Dog",
    "breed": "German Shepherd",
    "gender": "Male",
    "age": 4,
    "weight": 82,
    "acquisitionDate": "2024-10-30",
    "acquisitionLocation": {
      "city": "Des Moines",
      "state": "IA",
      "country": "USA",
      "latitude": 41.5868,
      "longitude": -93.625
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-11-15",
    "imagePath": "/images/GermanShepherd1.jfif",
    "description": ""
  },
  {
    "id": 16,
    "name": "Heidi",
    "animalType": "Dog",
    "breed": "German Shepherd",
    "gender": "Female",
    "age": 3,
    "weight": 70,
    "acquisitionDate": "2025-03-28",
    "acquisitionLocation": {
      "city": "Topeka",
      "state": "KS",
      "country": "USA",
      "latitude": 39.0473,
      "longitude": -95.6752
    },
    "trainingStatus": "Phase 4",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/GermanShepherd2.jfif",
    "description": ""
  },

  {
    "id": 17,
    "name": "Scout",
    "animalType": "Dog",
    "breed": "German Shorthaired Pointer",
    "gender": "Male",
    "age": 3,
    "weight": 64,
    "acquisitionDate": "2025-06-09",
    "acquisitionLocation": {
      "city": "Frankfort",
      "state": "KY",
      "country": "USA",
      "latitude": 38.2009,
      "longitude": -84.8733
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/GermanShorthairedPointer.jfif",
    "description": ""
  },
  {
    "id": 18,
    "name": "Willow",
    "animalType": "Dog",
    "breed": "German Shorthaired Pointer",
    "gender": "Female",
    "age": 4,
    "weight": 57,
    "acquisitionDate": "2024-11-25",
    "acquisitionLocation": {
      "city": "Baton Rouge",
      "state": "LA",
      "country": "USA",
      "latitude": 30.4515,
      "longitude": -91.1871
    },
    "trainingStatus": "Completed",
    "reserved": false,
    "graduationDate": "2026-03-12",
    "imagePath": "/images/GermanShorthairedPointer2.jfif",
    "description": ""
  },

  {
    "id": 19,
    "name": "Tucker",
    "animalType": "Dog",
    "breed": "Golden Retriever",
    "gender": "Male",
    "age": 3,
    "weight": 71,
    "acquisitionDate": "2025-01-30",
    "acquisitionLocation": {
      "city": "Augusta",
      "state": "ME",
      "country": "USA",
      "latitude": 44.3106,
      "longitude": -69.7795
    },
    "trainingStatus": "Phase 4",
    "reserved": true,
    "graduationDate": null,
    "imagePath": "/images/GoldenRetriever1.jfif",
    "description": ""
  },
  {
    "id": 20,
    "name": "Bella",
    "animalType": "Dog",
    "breed": "Golden Retriever",
    "gender": "Female",
    "age": 4,
    "weight": 64,
    "acquisitionDate": "2024-07-14",
    "acquisitionLocation": {
      "city": "Annapolis",
      "state": "MD",
      "country": "USA",
      "latitude": 38.9784,
      "longitude": -76.4922
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-09-25",
    "imagePath": "/images/GoldenRetriever2.jfif",
    "description": ""
  },

  {
    "id": 21,
    "name": "Max",
    "animalType": "Dog",
    "breed": "Labrador Retriever",
    "gender": "Male",
    "age": 2,
    "weight": 72,
    "acquisitionDate": "2025-08-02",
    "acquisitionLocation": {
      "city": "Boston",
      "state": "MA",
      "country": "USA",
      "latitude": 42.3601,
      "longitude": -71.0589
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/LabradorRetriever1.jfif",
    "description": ""
  },
  {
    "id": 22,
    "name": "Lucy",
    "animalType": "Dog",
    "breed": "Labrador Retriever",
    "gender": "Female",
    "age": 5,
    "weight": 66,
    "acquisitionDate": "2024-04-16",
    "acquisitionLocation": {
      "city": "Lansing",
      "state": "MI",
      "country": "USA",
      "latitude": 42.7325,
      "longitude": -84.5555
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-06-08",
    "imagePath": "/images/LabradorRetriever2.jfif",
    "description": ""
  },

  {
    "id": 23,
    "name": "Rusty",
    "animalType": "Dog",
    "breed": "Nova Scotia Duck Tolling Retriever",
    "gender": "Male",
    "age": 3,
    "weight": 48,
    "acquisitionDate": "2025-04-07",
    "acquisitionLocation": {
      "city": "Saint Paul",
      "state": "MN",
      "country": "USA",
      "latitude": 44.9537,
      "longitude": -93.09
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/NovaScotiaDuckTollingRetriever1.jfif",
    "description": ""
  },
  {
    "id": 24,
    "name": "Maple",
    "animalType": "Dog",
    "breed": "Nova Scotia Duck Tolling Retriever",
    "gender": "Female",
    "age": 4,
    "weight": 43,
    "acquisitionDate": "2024-12-19",
    "acquisitionLocation": {
      "city": "Jackson",
      "state": "MS",
      "country": "USA",
      "latitude": 32.2988,
      "longitude": -90.1848
    },
    "trainingStatus": "Completed",
    "reserved": false,
    "graduationDate": "2026-02-28",
    "imagePath": "/images/NovaScotiaDuckTollingRetriever2.jfif",
    "description": ""
  },

  {
    "id": 25,
    "name": "Lassie",
    "animalType": "Dog",
    "breed": "Rough Collie",
    "gender": "Female",
    "age": 3,
    "weight": 58,
    "acquisitionDate": "2025-02-25",
    "acquisitionLocation": {
      "city": "Jefferson City",
      "state": "MO",
      "country": "USA",
      "latitude": 38.5767,
      "longitude": -92.1735
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/RoughCollie1.jfif",
    "description": ""
  },
  {
    "id": 26,
    "name": "Murphy",
    "animalType": "Dog",
    "breed": "Rough Collie",
    "gender": "Male",
    "age": 4,
    "weight": 65,
    "acquisitionDate": "2024-09-08",
    "acquisitionLocation": {
      "city": "Helena",
      "state": "MT",
      "country": "USA",
      "latitude": 46.5891,
      "longitude": -112.0391
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2025-12-22",
    "imagePath": "/images/RoughCollie2.jfif",
    "description": ""
  },

  {
    "id": 27,
    "name": "Charlie",
    "animalType": "Dog",
    "breed": "Smooth Collie",
    "gender": "Male",
    "age": 3,
    "weight": 61,
    "acquisitionDate": "2025-03-11",
    "acquisitionLocation": {
      "city": "Lincoln",
      "state": "NE",
      "country": "USA",
      "latitude": 40.8136,
      "longitude": -96.7026
    },
    "trainingStatus": "Phase 4",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/SmoothCollie1.jfif",
    "description": ""
  },
  {
    "id": 28,
    "name": "Rosie",
    "animalType": "Dog",
    "breed": "Smooth Collie",
    "gender": "Female",
    "age": 2,
    "weight": 52,
    "acquisitionDate": "2025-07-03",
    "acquisitionLocation": {
      "city": "Carson City",
      "state": "NV",
      "country": "USA",
      "latitude": 39.1638,
      "longitude": -119.7674
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/SmoothCollie2.jfif",
    "description": ""
  },

  {
    "id": 29,
    "name": "Milo",
    "animalType": "Monkey",
    "breed": "Capuchin",
    "species": "Capuchin",
    "gender": "Male",
    "age": 4,
    "weight": 8,
    "tailLength": 17,
    "height": 15,
    "bodyLength": 18,
    "acquisitionDate": "2025-01-10",
    "acquisitionLocation": {
      "city": "Concord",
      "state": "NH",
      "country": "USA",
      "latitude": 43.2081,
      "longitude": -71.5376
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Capuchin1.jfif",
    "description": ""
  },
  {
    "id": 30,
    "name": "Coco",
    "animalType": "Monkey",
    "breed": "Capuchin",
    "species": "Capuchin",
    "gender": "Female",
    "age": 5,
    "weight": 7,
    "tailLength": 16,
    "height": 14,
    "bodyLength": 17,
    "acquisitionDate": "2024-06-21",
    "acquisitionLocation": {
      "city": "Trenton",
      "state": "NJ",
      "country": "USA",
      "latitude": 40.2206,
      "longitude": -74.7597
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2025-10-05",
    "imagePath": "/images/Capuchin2.jfif",
    "description": ""
  },

  {
    "id": 31,
    "name": "Kito",
    "animalType": "Monkey",
    "breed": "Guenon",
    "species": "Guenon",
    "gender": "Male",
    "age": 4,
    "weight": 14,
    "tailLength": 22,
    "height": 19,
    "bodyLength": 22,
    "acquisitionDate": "2025-02-16",
    "acquisitionLocation": {
      "city": "Santa Fe",
      "state": "NM",
      "country": "USA",
      "latitude": 35.687,
      "longitude": -105.9378
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Guenon1.jfif",
    "description": ""
  },
  {
    "id": 32,
    "name": "Zuri",
    "animalType": "Monkey",
    "breed": "Guenon",
    "species": "Guenon",
    "gender": "Female",
    "age": 3,
    "weight": 12,
    "tailLength": 21,
    "height": 18,
    "bodyLength": 21,
    "acquisitionDate": "2025-08-04",
    "acquisitionLocation": {
      "city": "Albany",
      "state": "NY",
      "country": "USA",
      "latitude": 42.6526,
      "longitude": -73.7562
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Guenon2.jfif",
    "description": ""
  },

  {
    "id": 33,
    "name": "Kai",
    "animalType": "Monkey",
    "breed": "Macaque",
    "species": "Macaque",
    "gender": "Male",
    "age": 6,
    "weight": 22,
    "tailLength": 10,
    "height": 24,
    "bodyLength": 25,
    "acquisitionDate": "2024-03-30",
    "acquisitionLocation": {
      "city": "Raleigh",
      "state": "NC",
      "country": "USA",
      "latitude": 35.7796,
      "longitude": -78.6382
    },
    "trainingStatus": "In Service",
    "reserved": true,
    "graduationDate": "2025-05-17",
    "imagePath": "/images/Macaque1.jfif",
    "description": ""
  },
  {
    "id": 34,
    "name": "Nala",
    "animalType": "Monkey",
    "breed": "Macaque",
    "species": "Macaque",
    "gender": "Female",
    "age": 4,
    "weight": 18,
    "tailLength": 9,
    "height": 22,
    "bodyLength": 23,
    "acquisitionDate": "2025-01-22",
    "acquisitionLocation": {
      "city": "Bismarck",
      "state": "ND",
      "country": "USA",
      "latitude": 46.8083,
      "longitude": -100.7837
    },
    "trainingStatus": "Phase 4",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Macaque2.jfif",
    "description": ""
  },

  {
    "id": 35,
    "name": "Pip",
    "animalType": "Monkey",
    "breed": "Marmoset",
    "species": "Marmoset",
    "gender": "Male",
    "age": 3,
    "weight": 1.2,
    "tailLength": 12,
    "height": 7,
    "bodyLength": 8,
    "acquisitionDate": "2025-06-18",
    "acquisitionLocation": {
      "city": "Columbus",
      "state": "OH",
      "country": "USA",
      "latitude": 39.9612,
      "longitude": -82.9988
    },
    "trainingStatus": "In Training",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Marmoset1.jfif",
    "description": ""
  },
  {
    "id": 36,
    "name": "Mimi",
    "animalType": "Monkey",
    "breed": "Marmoset",
    "species": "Marmoset",
    "gender": "Female",
    "age": 4,
    "weight": 1.1,
    "tailLength": 11,
    "height": 7,
    "bodyLength": 8,
    "acquisitionDate": "2024-10-14",
    "acquisitionLocation": {
      "city": "Oklahoma City",
      "state": "OK",
      "country": "USA",
      "latitude": 35.4676,
      "longitude": -97.5164
    },
    "trainingStatus": "Completed",
    "reserved": false,
    "graduationDate": "2026-01-09",
    "imagePath": "/images/Marmoset2.jfif",
    "description": ""
  },

  {
    "id": 37,
    "name": "Benny",
    "animalType": "Monkey",
    "breed": "Squirrel Monkey",
    "species": "Squirrel Monkey",
    "gender": "Male",
    "age": 3,
    "weight": 2.1,
    "tailLength": 15,
    "height": 10,
    "bodyLength": 11,
    "acquisitionDate": "2025-05-12",
    "acquisitionLocation": {
      "city": "Salem",
      "state": "OR",
      "country": "USA",
      "latitude": 44.9429,
      "longitude": -123.0351
    },
    "trainingStatus": "Phase 3",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/SquirrelMonkey1.jfif",
    "description": ""
  },
  {
    "id": 38,
    "name": "Lola",
    "animalType": "Monkey",
    "breed": "Squirrel Monkey",
    "species": "Squirrel Monkey",
    "gender": "Female",
    "age": 4,
    "weight": 1.8,
    "tailLength": 14,
    "height": 9,
    "bodyLength": 10,
    "acquisitionDate": "2024-12-06",
    "acquisitionLocation": {
      "city": "Harrisburg",
      "state": "PA",
      "country": "USA",
      "latitude": 40.2732,
      "longitude": -76.8867
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2026-03-02",
    "imagePath": "/images/SquirrelMonkey2.jfif",
    "description": ""
  },

  {
    "id": 39,
    "name": "Toby",
    "animalType": "Monkey",
    "breed": "Tamarin",
    "species": "Tamarin",
    "gender": "Male",
    "age": 3,
    "weight": 1.4,
    "tailLength": 13,
    "height": 8,
    "bodyLength": 9,
    "acquisitionDate": "2025-04-13",
    "acquisitionLocation": {
      "city": "Providence",
      "state": "RI",
      "country": "USA",
      "latitude": 41.824,
      "longitude": -71.4128
    },
    "trainingStatus": "Phase 2",
    "reserved": false,
    "graduationDate": null,
    "imagePath": "/images/Tamarin1.jfif",
    "description": ""
  },
  {
    "id": 40,
    "name": "Kiki",
    "animalType": "Monkey",
    "breed": "Tamarin",
    "species": "Tamarin",
    "gender": "Female",
    "age": 4,
    "weight": 1.3,
    "tailLength": 12,
    "height": 8,
    "bodyLength": 9,
    "acquisitionDate": "2024-08-27",
    "acquisitionLocation": {
      "city": "Columbia",
      "state": "SC",
      "country": "USA",
      "latitude": 34.0007,
      "longitude": -81.0348
    },
    "trainingStatus": "Completed",
    "reserved": true,
    "graduationDate": "2025-11-20",
    "imagePath": "/images/Tamarin2.jfif",
    "description": ""
  }
];

module.exports = animals;

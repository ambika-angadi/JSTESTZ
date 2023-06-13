let people = [
    {
      "name": "Selinda",
      "age": 30,
      "hobbies": [
        "Nordic skating"
      ]
    },
    {
      "name": "Ketty",
      "age": 62,
      "hobbies": []
    },
    {
      "name": "Carmita",
      "age": 33,
      "hobbies": [
        "Roller skating",
        "Slacklining",
        "Metalworking",
        "Jewelry making",
        "role-playing games"
      ]
    },
    {
      "name": "Concordia",
      "age": 34,
      "hobbies": []
    },
    {
      "name": "Talyah",
      "age": 62,
      "hobbies": [
        "Kitesurfing",
        "Stand-up comedy",
        "Poi",
        "Kayaking",
        "Gaming",
        "Playing musical instruments",
        "Geocaching"
      ]
    },
    {
      "name": "Ede",
      "age": 42,
      "hobbies": [
        "Water sports",
        "Ghost hunting",
        "Rowing",
        "Dowsing",
        "Bodybuilding",
        "Gardening",
        "Mountaineering"
      ]
    },
    {
      "name": "Bernice",
      "age": 13,
      "hobbies": []
    },
    {
      "name": "Nadiya",
      "age": 38,
      "hobbies": [
        "Table tennis",
        "Candle making"
      ]
    },
    {
      "name": "Karola",
      "age": 50,
      "hobbies": []
    },
    {
      "name": "Adelina",
      "age": 97,
      "hobbies": [
        "Rafting"
      ]
    },
    {
      "name": "Cheslie",
      "age": 29,
      "hobbies": [
        "Web surfing",
        "Whittling",
        "Snowboarding",
        "Parkour",
        "Hiking",
        "Rock climbing"
      ]
    },
    {
      "name": "Jacquetta",
      "age": 11,
      "hobbies": []
    },
    {
      "name": "Farand",
      "age": 11,
      "hobbies": [
        "Pet",
        "Cosplaying",
        "Lego building",
        "Amateur radio",
        "Woodworking",
        "Roller skating"
      ]
    }
];
function findMinMax(people) {
    let min = people[0].age;
    let max = people[0].age;
    let youngestPerson = people[0];
    let oldestPerson = people[0];
  
    for (let i = 1, len = people.length; i < len; i++) {
      let v = people[i].age;
  
      if (v < min) {
        min = v;
        youngestPerson = people[i];
      }
  
      if (v > max) {
        max = v;
        oldestPerson = people[i];
      }
    }
  
    return [youngestPerson, oldestPerson];
  };  
  const result = findMinMax(people);
  console.log("Youngest person - Name:", result[0].name, "Age:", result[0].age);
  console.log("Oldest person - Name:", result[1].name, "Age:", result[1].age);

  function mostHobbies(people) {
    let maxHobbiesCount = people[0].hobbies.length;
    let maxHobbiesPersons = [people[0]];
  
    for (let i = 1, len = people.length; i < len; i++) {
      let hobbiesCount = people[i].hobbies.length;
      if (hobbiesCount > maxHobbiesCount) {
        maxHobbiesCount = hobbiesCount;
        maxHobbiesPersons = [people[i]];
      } else if (hobbiesCount === maxHobbiesCount) {
        maxHobbiesPersons.push(people[i]);
      }
    }
  
    return maxHobbiesPersons;
  }
  const result1 = mostHobbies(people);
  console.log("Persons with the most hobbies:");
  result1.forEach(person => {
    console.log("- Name:", person.name);
  });
  
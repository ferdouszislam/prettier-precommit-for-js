class Character {
  constructor(name, age, isGood) {
    this.name = name;
    this.age = age;
    this.isGood = isGood;
  }

  isCharacterGood() {
    return this.isGood;
  }
}

function addObject(objectArray, newObj) {
  console.log("(adding object...)");

  return new Promise((resolve, reject) => {
    if (objectArray == null || newObj == null) reject("parameter/s null!");
    else if (
      typeof objectArray[0] == typeof newObj &&
      newObj instanceof Character
    ) {
      // wait 5s before success response
      setTimeout(() => {
        objectArray.push(newObj);
        resolve("object succesfully added.");
      }, 5000);
    } else reject("parameters type mismatch!");
  });
}

const characters = [
  new Character("abul", 20, false),
  new Character("kashem", 45, true),
];

const newCharacter = new Character("noob", 23, true);

async function run() {
  try {
    await addObject(characters, newCharacter);

    // filter out 'good' characters and concat their names
    const characterNames = characters
      .filter((character) => character.isCharacterGood())
      .reduce((allNames, character) => allNames + character.name + " ", "");

    console.log("Good character/s = " + characterNames);
  } catch (e) {
    console.error(e);
  }
}

// call async function
run();

// should run before async
console.log("All characters = " + JSON.stringify(characters));

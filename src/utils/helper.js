

export function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function generateRandomName() {
    const names = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Helen",
      "Ivy",
      "Jack",
      "jaya",
      "ravi",
    ];
  
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
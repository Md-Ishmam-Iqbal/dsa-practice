export function semanticVersioning(input) {
  let maxMajor = [];
  let maxMinor = [];

  let major = 0;
  let minor = 0;
  let patch = 0;

  let result = "";

  for (let i = 0; i < input.length; i++) {
    let current = input[i];

    let split = current.split(".").map((i) => Number(i));

    if (split[0] > major) {
      major = split[0];
      maxMajor[0] = current;
    } else if (split[0] == major) {
      maxMajor.push(current);
    }

    if (maxMajor.includes(current)) {
      if (maxMajor.length < 2) {
        result = maxMajor[0];
      }

      if (split[1] > minor) {
        minor = split[1];
        maxMinor[0] = current;
      } else if (split[1] !== 0 && split[1] == minor) {
        maxMinor.push(current);
      }
    }

    if (maxMinor.includes(current)) {
      if (maxMinor.length < 2) {
        result = maxMinor[0];
      }

      if (split[2] > patch) {
        patch = split[2];
        result = current;
      }
    }
  }

  return result;
}

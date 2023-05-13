// const dictionary: any = {
//   a: " ### \n#   #\n#####\n#   #\n#   #",
//   b: "#### \n#   #\n#### \n#   #\n#### ",
//   c: " ####\n#    \n#    \n#    \n ####",
//   d: "#### \n#   #\n#   #\n#   #\n#### \n",
//   e: "#####\n#    \n#####\n#    \n#####",
//   f: "#####\n#    \n#####\n#    \n#    ",
//   g: "#####\n#    \n#  ##\n#   #\n#####",
//   h: "#   #\n#   #\n#####\n#   #\n#   #",
//   i: "#####\n  #  \n  #  \n  #  \n#####",
//   j: "    #\n    #\n    #\n#   #\n#####",
//   k: "#   #\n#   #\n#### \n#   #\n#   #",
//   l: "#    \n#    \n#    \n#    \n#####",
//   m: "#   #\n## ##\n# # #\n#   #\n#   #",
//   n: "#   #\n##  #\n# # #\n#  ##\n#   #",
//   o: " ### \n#   #\n#   #\n#   #\n ### ",
//   p: "#### \n#   #\n#### \n#    \n#    ",
//   q: " ### \n#   #\n#   #\n#  # \n ## #",
//   r: "#### \n#   #\n#### \n#   #\n#   #",
//   s: " ####\n#    \n ### \n    #\n#### ",
//   t: "#####\n  #  \n  #  \n  #  \n  #  ",
//   u: "#   #\n#   #\n#   #\n#   #\n ### ",
//   v: "#   #\n#   #\n#   #\n # # \n  #  ",
//   w: "#   #\n#   #\n# # #\n## ##\n#   #",
//   x: "#   #\n # # \n  #  \n # # \n#   #",
//   y: "#   #\n # # \n  #  \n  #  \n  #  ",
//   z: "#####\n   # \n  #  \n #   \n#####",
//   " ": "   ",
// };
// const undefinedCharacter = "#####\n#   #\n#   #\n#   #\n#####";
// const textCharacters: any = [];

export function asciify(
  text: string,
  replacementChar = "\u2588",
  isDividedByWords = false
): any[] {
  const dictionary: any = {
    a: " ### \n#   #\n#####\n#   #\n#   #",
    b: "#### \n#   #\n#### \n#   #\n#### ",
    c: " ####\n#    \n#    \n#    \n ####",
    d: "#### \n#   #\n#   #\n#   #\n#### \n",
    e: "#####\n#    \n#####\n#    \n#####",
    f: "#####\n#    \n#####\n#    \n#    ",
    g: " ####\n#    \n#  ##\n#   #\n ####",
    h: "#   #\n#   #\n#####\n#   #\n#   #",
    i: "#####\n  #  \n  #  \n  #  \n#####",
    j: "    #\n    #\n    #\n#   #\n ### ",
    k: "#   #\n#  # \n###  \n#  # \n#   #",
    l: "#    \n#    \n#    \n#    \n#####",
    m: "#   #\n## ##\n# # #\n#   #\n#   #",
    n: "#   #\n##  #\n# # #\n#  ##\n#   #",
    o: " ### \n#   #\n#   #\n#   #\n ### ",
    p: "#### \n#   #\n#### \n#    \n#    ",
    q: " ### \n#   #\n#   #\n#  # \n ## #",
    r: "#### \n#   #\n#### \n#   #\n#   #",
    s: " ####\n#    \n ### \n    #\n#### ",
    t: "#####\n  #  \n  #  \n  #  \n  #  ",
    u: "#   #\n#   #\n#   #\n#   #\n ### ",
    v: "#   #\n#   #\n#   #\n # # \n  #  ",
    w: "#   #\n#   #\n# # #\n## ##\n#   #",
    x: "#   #\n # # \n  #  \n # # \n#   #",
    y: "#   #\n#   #\n # # \n  #  \n  #  ",
    z: "#####\n   # \n  #  \n #   \n#####",
    " ": "   ",
  };
  const undefinedCharacter = "#####\n#   #\n#   #\n#   #\n#####";
  const textCharacters: string[] = [];
  const textWords: string[][] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (!(char in dictionary)) {
      textCharacters.push(undefinedCharacter.replaceAll("#", replacementChar));

      continue;
    }

    textCharacters.push(dictionary[char].replaceAll("#", replacementChar));
  }

  if (!isDividedByWords) return textCharacters;

  textCharacters.push(dictionary[" "]);
  let wordBuffer: string[] = [];

  for (let i = 0; i < textCharacters.length; i++) {
    if (textCharacters[i] !== "   ") {
      wordBuffer.push(textCharacters[i]);
    } else {
      textWords.push(wordBuffer);
      wordBuffer = [];
    }
  }

  return textWords;
}

export default asciify;

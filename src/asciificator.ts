export function asciify(text: string): string[] {
  const dictionary: any = {
    a: " ### \n#   #\n#####\n#   #\n#   #",
    b: "#### \n#   #\n#### \n#   #\n#### ",
    c: " ####\n#    \n#    \n#    \n ####",
    d: "#### \n#   #\n#   #\n#   #\n#### \n",
    e: "#####\n#    \n#####\n#    \n#####",
    f: "#####\n#    \n#####\n#    \n#    ",
    g: "#####\n#    \n#  ##\n#   #\n#####",
    h: "#   #\n#   #\n#####\n#   #\n#   #",
  };

  const undefinedCharacter = "#####\n#   #\n#   #\n#   #\n#####";

  const textCharacters: any = [];

  for (let i = 0; i < text.length; i++) {
    if (!(text[i] in dictionary)) {
      textCharacters.push(undefinedCharacter);
      continue;
    }

    textCharacters.push(dictionary[text[i]]);
  }

  return textCharacters;
}

export default asciify;

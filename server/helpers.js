const capitalize = ([firstLetter, ...restOfWord]) => {
    return firstLetter.toUpperCase() + restOfWord.join("")
}
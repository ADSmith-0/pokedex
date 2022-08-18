/*
    Return a formatted version of the ID,
    so 1 => #001
    id <integer>: the id to be formatted
    return value <string>: the formatted id
*/ 
const formatId = id => ("#"+String(id).padStart(3, "0"));

/*
    Removes the word "-species" from a url
    so .../pokemon-species/2 => .../pokemon/2
    url <string>: url to modify
    return value <string>: string with "-species" taken out, or
        if string never had it then it skips it
*/ 
const removeSpeciesFromUrl = url => (url.includes("-species") ? url.replace("-species", "") : url);

/* 
    Makes a word into title case
    so bulbasaur => Bulbasaur
    return value <string>: string in title case
*/ 
// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function(){ 
    return this[0].toUpperCase() + this.substring(1, this.length)
};

export { formatId, removeSpeciesFromUrl};
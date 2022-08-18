/*
    Return a formatted version of the ID,
    so 1 => #001
    id <integer>: the id to be formatted
    return value <string>: the formatted id
*/ 
const formatId = id => ("#"+String(id).padStart(3, "0"));

export { formatId };
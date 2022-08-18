import { formatId, removeSpeciesFromUrl } from '../util';
describe("Format ID", () => {
    test("It should format the ID to be 3 numbers with a #", () => {
        expect(formatId(59)).toEqual("#059");
    });
});
describe("Remove Species from url", () => {
    test("It should remove the string '-species' from the url", () => {
        expect(removeSpeciesFromUrl(process.env.REACT_APP_API_URL + "pokemon-species/aegislash")).toEqual(process.env.REACT_APP_API_URL + "pokemon/aegislash");
    });
});
describe("Title case", () => { 
    test("Change a string to title case", () => {
        expect("hello world".toTitleCase()).toEqual("Hello world");
    }) 
});

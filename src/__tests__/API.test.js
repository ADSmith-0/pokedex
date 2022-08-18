import { getGeneration, getPokemon } from '../APIHelper';
describe("Get Bulbasaur", () => {
    test("It should return the pokemon named 'bulbasaur'", async () => {
        expect((await getPokemon(0, 1))[0]["name"]).toEqual("bulbasaur");      
    });
});
describe("Get generation", () => {
    test("It should return the first pokemon (chikorita) and last pokemon (mantine) of generation 2", async () => {
        const data = await getGeneration(2);
        expect(data[0]["name"]).toEqual("chikorita");
        expect(data[data.length-1]["name"]).toEqual("mantine");
    });
});

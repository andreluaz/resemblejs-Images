/* eslint-env jest*/

const compareImages = require("../support/compararImages");
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

describe("compareImages", () => {
    test("Buffers data", async () => {
        const readImg1 = readFile("./figuras/car1.jpg");
        const readImg2 = readFile("./figuras/car.jpg");
        // const readComparison = readFile(
        //     "./nodejs-tests/assets/PeopleComparedToPeople2.png"
        // );

        const data = await compareImages(await readImg1, await readImg2);
        //const buffer = data.getBuffer();
        //const comparison = await readComparison;

        console.log ("As imagens são do mesmo tamanho: " + data.isSameDimensions);
        //expect(data.isSameDimensions).toBe(true);

        console.log ("Igualdade entre as imagens em %: " + (100-parseFloat(data.misMatchPercentage)).toString() + "%");
        console.log ("Diferença entre as imagens em %: " + parseFloat(data.misMatchPercentage).toString() + "%" );
        
        //expect(data.misMatchPercentage).toEqual("0.00");
        expect(parseInt(data.misMatchPercentage)).toBeLessThan(1);
        //expect(buffer).toBeInstanceOf(Buffer);
        //expect(buffer.length).toBe(91876);
        //expect(buffer.equals(comparison)).toBe(true);
    });

    // test("Buffer data includeOriginal", async () => {
    //     const readImg1 = readFile("./demoassets/People.jpg");
    //     const readImg2 = readFile("./demoassets/People2.jpg");
    //     const readComparison = readFile(
    //         "./nodejs-tests/assets/PeopleComparedToPeople2WithOriginal.png"
    //     );
    //     const data = await compareImages(await readImg1, await readImg2);
    //     const buffer = data.getBuffer(true);
    //     const comparison = await readComparison;
    //     expect(buffer.equals(comparison)).toBe(true);
    // });

    // test("throws when failed", async () => {
    //     const promise = compareImages(
    //         fs.readFileSync("./demoassets/People.jpg"),
    //         "bogus data"
    //     );
    //     await expect(promise).rejects.toMatch(
    //         "Error: ENOENT, No such file or directory 'bogus data'"
    //     );
    //});
});

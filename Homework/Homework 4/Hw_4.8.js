function foobar (array){
    document.write(`<ul>`);
        for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
    }
    foobar([17, 256, 28, 'hello', 'world']);
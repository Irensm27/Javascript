async function foo() {
    const res = await fetch('https://dummyjson.com/users');
    const result = await res.json();

    console.log(result);
}

foo();
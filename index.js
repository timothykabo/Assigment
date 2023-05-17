// Nama :Deo Timothy Kabo
// Exercise 4

// 1. PROMISE 
// 1a.
function helloWorld (){
    new Promise ((resolve)=>{
        console.log("Hello World");
    }, 2000)
}
helloWorld()

// 1b.
async function messages (){
    const msg = await helloWorld()
    console.log(msg);
}

// 1c.
async function messages (){
    setTimeout(()=>{
        const msg = await helloWorld()
        console.log(msg)
    }, 2000)
}
messages()


// 2. FETCH
const ambilDataUser = document.querySelectir ('.input-keyword');
fetch ('https://reqres.in/api/users' + inputKeyword.value)
.then(response => console.log(response));


// 3. ASYNC AWAIT
const ambilDataUser = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        console.log("\n3. ASYNC AWAIT");
        console.log(json.data);
    }
    catch(error) {
        console.log(error);
    }
}

ambilDataUser();


// 4. AXIOS
const ambilDataUser = async () => {
    try {
        const response = axios.get("https://reqres.in/api/users")
        .then((response) => {
            console.log(response.data);
        });
    }
    catch(error) {
        console.log(error);
    }
}

ambilDataUser();



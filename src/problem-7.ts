function logString(val:unknown){
    typeof val ==="string" ? console.log("input is a string"): console.log("input is not a string")
}

// Sample Input 1: 
logString("Hello, TypeScript!");

// Sample Output 1:  
"Hello, TypeScript!"

// Sample Input 2: 
logString(42)
class App
{
runApplication()
{
    console.log("hello world");

}

newClassFunction()
{
    console.log("hello world in de nieuwClassFunction");

}

anotherFunctionwithArguments(aArgument)
{
    console.log("kom maar met je argument");
    console.log("hier:");
    console.log(aArgument)
    
}
}
let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionwithArguments("mijn argument is iets...");


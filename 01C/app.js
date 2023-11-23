class App
{
    runApplication()
    {
        //code
        this.greeting = "Starting up";
        this.versienummer = "beta alpha test 0.1"
        this.Variableswdar = 387
        this.appNaam = "i dont need no"
        this.versie = "apetrots"
        this.versiedatum = "23-234-2049"
        this.auther = "Bas Bijl"
        this.copyright = "ja toch niet stelen"
        this.distributeur = "je weet zelf"
        this.darkmode = true 
        this.activated = true
        this.developer = "bigidagoe"
        this.usersonline = 1
    }
}

let app = new App();
app.runApplication();


console.log(app.greeting);
console.log("versienummer: " + app.versienummer)
console.log("Variabelwaarde = " + app.Variableswdar)
console.log("appnaam: " + app.appNaam)
console.log("versie: " + app.versie)
console.log("versiedatum: " + app.versiedatum)
console.log("auther: " + app.auther)
console.log("copyright: " + app.copyright)
console.log("distributeur: " + app.distributeur)
console.log("darkmode = " + app.darkmode)
console.log("activation: " + app.activated)
console.log("developer: " + app.developer)
console.log("users online: " + app.usersonline)
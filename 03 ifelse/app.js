class App {
  runApplication() {
    console.log("hello world");

    let title = document.getElementById("newstitle");
    console.log(title);

    let random = Math.random();
    console.log(random);
    if (random < 0.2) {
      title.style.backgroundColor = "#FF0000"
    }
    else if (random >= 0.2 && random <= 0.6) {
      title.style.backgroundColor = "#5aff1f"
    }
    else if (random >= 0.6 && random <= 0.75) {
      title.style.backgroundColor = "#7800f7"
    }
    else if (random < 0.75) {
      title.style.backgroundColor = "#fa1125"
    }
    let newsitem1 = document.getElementsByClassName("gamenews")[0];
    console.log(newsitem1);

    console.log(random);
    if (random < 0.2) {
      newsitem1.style.backgroundColor = "#FF0000"
    }
    else if (random >= 0.2 && random <= 0.6) {
      newsitem1.style.backgroundColor = "#5aff1f"
    }
    else if (random >= 0.6 && random <= 0.75) {
      newsitem1.style.backgroundColor = "#7800f7"
    }
    else if (random < 0.75) {
      newsitem1.style.backgroundColor = "#fa1125"
    }

    let newsitem2 = document.getElementsByClassName("gamenews")[1];
    console.log(newsitem1);

    console.log(random);
    if (random < 0.2) {
      newsitem2.style.backgroundColor = "#FF0000"
    }
    else if (random >= 0.2 && random <= 0.6) {
      newsitem2.style.backgroundColor = "#5aff1f"
    }
    else if (random >= 0.6 && random <= 0.75) {
      newsitem2.style.backgroundColor = "#7800f7"
    }
    else if (random < 0.75) {
      newsitem2.style.backgroundColor = "#fa1125"
    }
  }
}
let app = new App();
app.runApplication();



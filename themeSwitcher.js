alert("METEZ LE SON A 100%")

const root = document.documentElement;
const wrapper = document.querySelectorAll('.wrapper');
const ul = document.querySelector("ul");
const jeux = document.querySelector('.jeux');
const accueil = document.querySelector('.accueil');
const myCoucou = document.getElementById('mycoucou');
const MyAllert = document.getElementById('myAlert')
const main = document.querySelector('main')
// const getBlackColors = () => {
//   const bgBlackLight = getComputedStyle(root).getPropertyValue("--bg-black-light");
//   const bgBlackMedium = getComputedStyle(root).getPropertyValue("--bg-black-medium");
//   const bgBlackDark = getComputedStyle(root).getPropertyValue("--bg-black-dark");

//   return [bgBlackLight, bgBlackMedium, bgBlackDark];
// };




// const getWhiteColors = () => {
//   const bgWhiteLight = getComputedStyle(root).getPropertyValue("--bg-white-light");
//   const bgWhiteMedium = getComputedStyle(root).getPropertyValue("--bg-white-medium");
//   const bgWhiteDark = getComputedStyle(root).getPropertyValue("--bg-white-dark");



//   return [bgWhiteLight, bgWhiteMedium, bgWhiteDark];
// };


// setInterval(() => {
//   const post = `<li>${emoji[1]}</li>`
//   ul.innerHTML += post
// }, 1000)


const getColors = () => {
  const bgDark = getComputedStyle(root).getPropertyValue("--bg-dark")
  const bgLight = getComputedStyle(root).getPropertyValue("--bg-light")
  const bgRed = getComputedStyle(root).getPropertyValue("--bg-red")
  const bgBlue = getComputedStyle(root).getPropertyValue("--bg-blue")
  const bgGreen = getComputedStyle(root).getPropertyValue("--bg-green")

  return [bgDark, bgLight, bgRed, bgBlue, bgGreen];
}



const getTextColors = () => {
  const textWhite = getComputedStyle(root).getPropertyValue("--text-white");
  const textBlack = getComputedStyle(root).getPropertyValue("--text-black");
  return [textWhite, textBlack];
};

 const toggleDarkTheme = (theme) => {
  // const [bgBlackLight, bgBlackMedium, bgBlackDark] = getBlackColors();
  // const [bgWhiteLight, bgWhiteMedium, bgWhiteDark] = getWhiteColors();

  // const [bgBlackLight, bgBlackMedium, bgBlackDark] = randomColor;
  // const [bgWhiteLight, bgWhiteMedium, bgWhiteDark] = randomColor;

  const [textWhite, textBlack] = getTextColors();

  if (theme && theme === "light") {
    root.style.setProperty("--bg-light", randomColor);
    root.style.setProperty("--bg-medium", randomColor);
    root.style.setProperty("--bg-dark", randomColor);

    root.style.setProperty("--text-color", textBlack);
  }

  else if (theme && theme === "dark") {
    root.style.setProperty("--bg-light", randomColor);
    root.style.setProperty("--bg-medium", randomColor);
    root.style.setProperty("--bg-dark", randomColor);

    root.style.setProperty("--text-color", textWhite);
  } else {
    return;
  }

  // if (theme && theme === "light") {
  //   root.style.setProperty("--bg-light", bgWhiteLight);
  //   root.style.setProperty("--bg-medium", bgWhiteMedium);
  //   root.style.setProperty("--bg-dark", bgWhiteDark);

  //   root.style.setProperty("--text-color", textBlack);
  // } 

  // else if (theme && theme === "dark") {
  //   root.style.setProperty("--bg-light", bgBlackLight);
  //   root.style.setProperty("--bg-medium", bgBlackMedium);
  //   root.style.setProperty("--bg-dark", bgBlackDark);

  //   root.style.setProperty("--text-color", textWhite);
  // } else {
  //   return;
  // }

};

const getRandomColor = () => {

  const GET_COLORS = getColors();
  const randomIndex = Math.floor(Math.random() * GET_COLORS.length);

  return GET_COLORS[randomIndex];
};

let randomColor = getRandomColor();
let themeButton = document.getElementById("theme-button");
let themeLogo = document.getElementById("theme-logo");
let theme = "light";


let go = themeButton.addEventListener("click", () => {
  alert("Vous venez de changer de theme")
  // myCoucou.play()


  if (theme === "light") {

    randomColor = getRandomColor();
    console.log(randomColor);

    theme = "dark";
    themeLogo.name = "sunny";
    
  } else if (theme === "dark") {
    randomColor = getRandomColor();
    console.log(randomColor);

    theme = "light";
    themeLogo.name = "moon";
  }

  toggleDarkTheme(theme);
})



accueil.addEventListener('click', () => {
  MyAllert.play()
  setTimeout(() => {
    alert('RIEN DE TEL Q\'UNE BONNE NUIT BLANCHE !! N\'EST CE PAS ?')

  }, 1000)

})




jeux.addEventListener('click', () => {
  myCoucou.play();

  if (ul.style.visibility == 'visible') {
    ul.style.visibility = 'hidden'
  }
  else {
    MyAllert.play()
    alert("COUCOUUU ! çA VAS ?")

    ul.style.visibility = 'visible'


    ul.animate([
      { transform: "scale(0.1)" },
      { transform: "scale(1)" },

    ], { duration: 3000 })
  }
})


wrapper.forEach(elts => {
  elts.addEventListener('click', () => {
    MyAllert.play()
    setTimeout(() => {
      alert("IL")
    }, 1000)

    MyAllert.play()
    setTimeout(() => {
      alert("NE")
    }, 1000)

    MyAllert.play()
    setTimeout(() => {
      alert("FAUT ")
    }, 1000)

    MyAllert.play()


    MyAllert.play()
    setTimeout(() => {
      alert("CLICKER")
    }, 1000)

    MyAllert.play()
    setTimeout(() => {
      alert("SUR")
    }, 1000)

    MyAllert.play()
    setTimeout(() => {
      alert("LA")
    }, 1000)

    MyAllert.play()
    setTimeout(() => {
      alert("PAGE")
    }, 1000)
    MyAllert.play()
    MyAllert.play()

  })
})


document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", function (event) {
    createRandomEmoji(event.pageX, event.pageY);
    if (event.pageY == 500 + "px") {
      main.style.transform = "rotate(90deg)"

    }

    console.log(event.pageY)

  });
});

function createRandomEmoji(mouseX, mouseY) {
  // Liste d'emojis (ajoutez vos propres emojis ici)
  const emojis = ["😀", "😂", "😍", "🎉", "🌟", "❤️", "👍", "🐱", "🍕", "🚀", "🤣", "😅", "😎", "😜", "😝", "😛", "😆", "😁", "😑", "😮"];

  // Sélectionnez un emoji au hasard
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];

  // Créez un élément div pour l'emoji
  const emojiElement = document.createElement("div");
  emojiElement.textContent = randomEmoji;
  emojiElement.id = "emoji";

  // Positionnez l'emoji autour de la souris
  emojiElement.style.left = mouseX + "px";
  emojiElement.style.top = mouseY + "px";

  // Ajoutez l'emoji à la page
  document.body.appendChild(emojiElement);

  // Supprimez l'emoji après un certain délai (par exemple, 2 secondes)
  setTimeout(function () {
    document.body.removeChild(emojiElement);
  }, 2000);
}




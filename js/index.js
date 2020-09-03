const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
  headerImg.src = siteContent["cta"]["img-src"];
  
  const header = document.querySelector('h1');
  
  //header.innerHTML = "Dom is awesome";
  const splitThis = siteContent["cta"]["h1"].split(' ');
  header.innerHTML = splitThis[0] + "<br>" + splitThis[1] + "<br>" + splitThis[2];
  
  const buttonHeader = document.querySelector('button');
  buttonHeader.textContent = siteContent["cta"]["button"];  //"Get Started";
  
  const middleImg = document.getElementById('middle-img');
  middleImg.src = siteContent["main-content"]["middle-img-src"];
  
  const paragraphs = document.querySelectorAll('p');
  paragraphs[0].textContent = siteContent["main-content"]["features-content"]; //"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  
  paragraphs[1].textContent = siteContent["main-content"]["about-content"]; //"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  
  paragraphs[2].textContent = siteContent["main-content"]["services-content"]; //"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  
  paragraphs[3].textContent = siteContent["main-content"]["product-content"]; //"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  
  paragraphs[4].textContent = siteContent["main-content"]["vision-content"]; //"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
  
  //paragraphs[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
  const split = siteContent["contact"]["address"].split(" ");
  paragraphs[5].innerHTML = split[0] + split[1] + split[2] + split[3] + "<br>" + split[4] + split[5]; 
  
  paragraphs[6].textContent = siteContent["contact"]["phone"]; //"1 (888) 888-8888";
  paragraphs[7].textContent = siteContent["contact"]["email"]; //"sales@greatidea.io";
  paragraphs[8].textContent = siteContent["footer"]["copyright"];"Copyright Great Idea! 2018";
  
  const forthHeader = document.querySelectorAll('h4');
  forthHeader[0].textContent = siteContent["main-content"]["features-h4"];
  forthHeader[1].textContent = siteContent["main-content"]["about-h4"];
  forthHeader[2].textContent = siteContent["main-content"]["services-h4"];
  forthHeader[3].textContent = siteContent["main-content"]["product-h4"];
  forthHeader[4].textContent = siteContent["main-content"]["vision-h4"];
  forthHeader[5].textContent = siteContent["contact"]["contact-h4"];
  
  const navBar = document.querySelectorAll('a');
  navBar[0].textContent = siteContent["nav"]["nav-item-1"];
  navBar[1].textContent = siteContent["nav"]["nav-item-2"];
  navBar[2].textContent = siteContent["nav"]["nav-item-3"];
  navBar[3].textContent = siteContent["nav"]["nav-item-4"];
  navBar[4].textContent = siteContent["nav"]["nav-item-5"];
  navBar[0].style.color = "green";
  navBar[1].style.color = "green";
  navBar[2].style.color = "green";
  navBar[3].style.color = "green";
  navBar[4].style.color = "green";
  

  const newAnchor = document.createElement("a");
  newAnchor.href = "https://github.com/DavidHall-Code";
  newAnchor.textContent = "David M Hall";
  newAnchor.style.color = "green";
  const navigation = document.querySelector('nav');
  navigation.prepend(newAnchor);
  const buttonInTheNav = document.createElement('button');
  buttonInTheNav.textContent = "Dont Touch!";
  buttonInTheNav.style.color = "yellow";
  buttonInTheNav.style.background = "blue";
  navigation.appendChild(buttonInTheNav);
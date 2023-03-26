const header = document.getElementById("header");
const section = document.getElementById("section");
const story = document.getElementById("story");
const posts = document.getElementsByClassName("posts");
const storyname = document.getElementsByClassName("sn");
const li = document.getElementsByClassName("li");
const search_icon = document.getElementById("search_icon");

const change_theme = () => {
  if (section.style.backgroundColor !== "black") {
    section.style.backgroundColor = "black";
    story.style.backgroundColor = "black";

    for (i = 0; i < posts.length; i++) {
      posts[i].style.backgroundColor = "black";
    }

    header.style.backgroundColor = "black";
    document.body.style.color = "white";
    story.style.color = "white";
    search_icon.style.color = "black";
    for (i = 0; i < li.length; i++) {
      li[i].style.color = "white";
    }

    for (i = 0; i < storyname.length; i++) {
      storyname[i].style.color = "white";
    }
  } else {
    section.style.backgroundColor = "#fafafa";
    story.style.backgroundColor = "white";

    for (i = 0; i < posts.length; i++) {
      posts[i].style.backgroundColor = "white";
    }

    header.style.backgroundColor = "white";
    document.body.style.color = "black";
    story.style.color = "black";
    search_icon.style.color = "black";
    for (i = 0; i < li.length; i++) {
      li[i].style.color = "black";
    }

    for (i = 0; i < storyname.length; i++) {
      storyname[i].style.color = "black";
    }
  }
};

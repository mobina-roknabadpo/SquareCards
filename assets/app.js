const cards = [
    {
        cls: "fa-brands fa-youtube",
        num: 0,
        url: "https://www.youtube.com/@FrontendMasters/videos"
    },
    {
        cls: "fa-brands fa-youtube",
        num: 1,
        url: "https://www.youtube.com/@FrontendMasters/videos"
    },
    {
        cls: "fa-brands fa-youtube",
        num: 2,
        url: "https://www.youtube.com/@FrontendMasters/videos"
    },
    {
        cls: "article",
        num: 0,
        url: "https://www.pexels.com/search/videos/software%20development/"
    },
    {
        cls: "article",
        num: 1,
        url: "https://www.pexels.com/search/videos/software%20development/"
    },
    {
        cls: "article",
        num: 2,
        url: "https://www.pexels.com/search/videos/software%20development/"
    },

]

cards.map((item) => {
    document.getElementsByClassName(item.cls)[item.num].addEventListener('click', () => {
        window.open(item.url)
    })
})
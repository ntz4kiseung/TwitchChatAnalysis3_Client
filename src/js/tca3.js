const search = () => {
    const keyword = document.getElementsByName("searchInput")[0].value;
    console.log(keyword);
    return window.location.href="localhost:3000/main";
}

export default search;
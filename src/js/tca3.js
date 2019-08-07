const search = (obj) => {
    const keyword = document.getElementsByName("searchInput")[0].value;
    console.log(obj);
    console.log(keyword);
    if(keyword==="" || keyword==null){
        return false;
    }
    var regex = /[^0-9]/g;
    if(regex.test(keyword)){
        window.location.href=`http://localhost:3000/streamer/${keyword}`;        
    }else{
        window.location.href=`http://localhost:3000/video/search/${keyword}`;
    }
    return false;
}

export default search;
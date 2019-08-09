const search = (obj) => {
    const keyword = obj.target.parentElement.parentElement.childNodes[0].value;
    if(keyword==="" || keyword==null){
        return false;
    }
    var regex = /[^0-9]/g;
    if(regex.test(keyword)){
        window.location.href=`http://localhost:3000/streamer/${keyword}`;        
    }else{
        window.location.href=`http://localhost:3000/video/${keyword}`;
    }
    return false;
}

export default search;
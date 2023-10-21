

const URL1 = 'https://653155c34d4c2e3f333cdb65.mockapi.io/API1/Songs'

$.get(URL1).then(data=>{
    data.map(Songs =>{
        $('tbody').append(
            $(`
            <tr>
                <td>${Songs.songName}</td>
                <td>${Songs.band}</td>
                <td>${Songs.favSongs}</td>
            `)
        )
    })
 })

function addSong(){
$.get(URL1)
    $('tbody').append(
        $(`
        <tr>
            <td>${$('#songName').val()}</td>
            <td>${$('#band').val()}</td>
            <td>${$('#songNum').val()}</td>
        </tr>
        `)

    )
}
function removeSong(){
    $('tbody').remove(
        $(`
        <tr>
            <td>${$('#songName').val()}</td>
            <td>${$('#band').val()}</td>
            <td>${$('#songNum').val()}</td>
        </tr>
        `)
    )

}



$('#addBtn').click(function (){

    $.post(URL1, {
        songName: $('#songName').val(),
        band: $('#band').val(),
        favSongs: $('#songNum').val(),
        }); 
        alert($('#songName').val() + " Added successfully");
        addSong()
    })   




$('#deleteBtn').click(function (){
    id = $('#songNum').val();
    alert("Song "+ id +" Deleted!");
    return $.ajax({
        url:`${URL1}/${parseInt(id)}`,
        method: "DELETE",
    }) 
    
})




function getPlaylist(){
    return $.ajax({
        url: URL1,
        method: "GET",
        dataType:"json",
    })
}

function getSongId(favSongs) {
    return $.ajax({
        url: `${this.URL1}/${favSongs}`,
        method: "GET",
        dataType: "json",
    })
}




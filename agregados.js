
var gameId = "";

function selectGame(evt) {
    gameId = evt.target.id;
    cleanupUi();
    startDatabaseQueries();
    document.getElementById("signInButton").click();
    

}


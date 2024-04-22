gdjs.Score_32sceneCode = {};
gdjs.Score_32sceneCode.GDDistanceNameObjects1= [];
gdjs.Score_32sceneCode.GDDistanceNameObjects2= [];
gdjs.Score_32sceneCode.GDDistanceValueObjects1= [];
gdjs.Score_32sceneCode.GDDistanceValueObjects2= [];
gdjs.Score_32sceneCode.GDStarsNameObjects1= [];
gdjs.Score_32sceneCode.GDStarsNameObjects2= [];
gdjs.Score_32sceneCode.GDStarsValueObjects1= [];
gdjs.Score_32sceneCode.GDStarsValueObjects2= [];
gdjs.Score_32sceneCode.GDScoreName1Objects1= [];
gdjs.Score_32sceneCode.GDScoreName1Objects2= [];
gdjs.Score_32sceneCode.GDScoreValueObjects1= [];
gdjs.Score_32sceneCode.GDScoreValueObjects2= [];
gdjs.Score_32sceneCode.GDExitScene1Objects1= [];
gdjs.Score_32sceneCode.GDExitScene1Objects2= [];
gdjs.Score_32sceneCode.GDScoreName2Objects1= [];
gdjs.Score_32sceneCode.GDScoreName2Objects2= [];
gdjs.Score_32sceneCode.GDExitScene2Objects1= [];
gdjs.Score_32sceneCode.GDExitScene2Objects2= [];
gdjs.Score_32sceneCode.GDback_9595sloud_9595scoreObjects1= [];
gdjs.Score_32sceneCode.GDback_9595sloud_9595scoreObjects2= [];
gdjs.Score_32sceneCode.GDback_9595soil_9595scoreObjects1= [];
gdjs.Score_32sceneCode.GDback_9595soil_9595scoreObjects2= [];
gdjs.Score_32sceneCode.GDInputPlayerNameObjects1= [];
gdjs.Score_32sceneCode.GDInputPlayerNameObjects2= [];
gdjs.Score_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Score_32sceneCode.GDNewSpriteObjects2= [];


gdjs.Score_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) != "0";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.Score_32sceneCode.GDInputPlayerNameObjects1);
{for(var i = 0, len = gdjs.Score_32sceneCode.GDInputPlayerNameObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDInputPlayerNameObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}}

}


};gdjs.Score_32sceneCode.userFunc0xb16038 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
function UploadScore() {
    // Leaderboard-key
    const leaderboardKey = 'escap_leaderboard_key'

    // Score from scene-variable
    const score = runtimeScene.getGame().getVariables().get('HighScore').getValue()

    // Upload score
    const Http = new XMLHttpRequest()
    const url = 'https://api.lootlocker.io/game/leaderboards/' + leaderboardKey + '/submit'
    Http.open('POST', url)
    Http.setRequestHeader('Content-Type', 'application/json')
    // Add session token
    Http.setRequestHeader('x-session-token', runtimeScene.getGame().getVariables().get('session_token').getValue())

    // Send score and player identifier
    Http.send(
        JSON.stringify({ score: score, member_id: runtimeScene.getGame().getVariables().get('player_id').getValue() })
    )
    Http.onreadystatechange = e => {
        // Log server response
        console.log(Http.responseText)

        // Get the leaderboard after the new score was added to keep it fresh
        // Get leaderboard data
        const leaderboardHTTP = new XMLHttpRequest()
        const amountOfEntries = 10
        const leaderboardUrl =
            'https://api.lootlocker.io/game/leaderboards/' + leaderboardKey + '/list?count=' + amountOfEntries
        leaderboardHTTP.open('GET', leaderboardUrl)
        leaderboardHTTP.setRequestHeader('Content-Type', 'application/json')

        // Add session token
        leaderboardHTTP.setRequestHeader(
            'x-session-token',
            runtimeScene.getGame().getVariables().get('session_token').getValue()
        )
        leaderboardHTTP.send('')

        leaderboardHTTP.onreadystatechange = e => {
            const leaderboardData = ''
            const leaderboardResponseText = JSON.parse(leaderboardHTTP.responseText)
            for (let i = 0; i < leaderboardResponseText.items.length; i++) {
                leaderboardData += leaderboardResponseText.items[i].rank + '. '
                leaderboardData += leaderboardResponseText.items[i].player.id
                leaderboardData += '        '
                leaderboardData += leaderboardResponseText.items[i].score
                leaderboardData += '\n'
            }
            runtimeScene.getVariables().get('leaderboardData').setValue(leaderboardData)
        }
    }
}

function SetName(name) {
    const Http = new XMLHttpRequest()
    const url = 'https://api.lootlocker.io/game/player/name'
    Http.open('PATCH', url)
    Http.setRequestHeader('Content-Type', 'application/json')
    // Add session token
    Http.setRequestHeader('x-session-token', runtimeScene.getGame().getVariables().get('session_token').getValue())

    // Send score and player identifier
    Http.send(
        JSON.stringify({ name: name })
    )
    Http.onreadystatechange = e => {
        // Log server response
        console.log(Http.responseText)

        
    }
}

function changePlaceholderColor(toColor) {
  var addCSS = document.createElement('style');
  addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
  document.body.append(addCSS);
}

objects[0].focus();


if (runtimeScene.getTimeManager().isFirstFrame()) {
    changePlaceholderColor('brown');

    document.body.addEventListener('keyup', function(e) {
            if (e.key === "Escape") {
                SetName(objects[0].getText());
                document.activeElement.blur();
            }
        }
    );
    UploadScore();

}
};
gdjs.Score_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DistanceValue"), gdjs.Score_32sceneCode.GDDistanceValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Score_32sceneCode.GDExitScene2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue"), gdjs.Score_32sceneCode.GDScoreValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("StarsValue"), gdjs.Score_32sceneCode.GDStarsValueObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() * 100);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(Math.max(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDDistanceValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDDistanceValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber())));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDStarsValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDStarsValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDScoreValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDScoreValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber())));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("rightEtween", 5, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Crimson Nightmares.mp3", 1, true, 100, 1);
}
{ //Subevents
gdjs.Score_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.Score_32sceneCode.GDInputPlayerNameObjects1);

var objects = [];
objects.push.apply(objects,gdjs.Score_32sceneCode.GDInputPlayerNameObjects1);
gdjs.Score_32sceneCode.userFunc0xb16038(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("InputPlayerName"), gdjs.Score_32sceneCode.GDInputPlayerNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Score_32sceneCode.GDInputPlayerNameObjects1.length === 0 ) ? "" :gdjs.Score_32sceneCode.GDInputPlayerNameObjects1[0].getBehavior("Text").getText()) != "");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Score_32sceneCode.GDInputPlayerNameObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setString((( gdjs.Score_32sceneCode.GDInputPlayerNameObjects1.length === 0 ) ? "" :gdjs.Score_32sceneCode.GDInputPlayerNameObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Score_32sceneCode.GDExitScene2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Score_32sceneCode.GDExitScene2Objects1.length;i<l;++i) {
    if ( gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").hasFinished("leftEtween") ) {
        isConditionTrue_0 = true;
        gdjs.Score_32sceneCode.GDExitScene2Objects1[k] = gdjs.Score_32sceneCode.GDExitScene2Objects1[i];
        ++k;
    }
}
gdjs.Score_32sceneCode.GDExitScene2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Score_32sceneCode.GDExitScene2Objects1 */
{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").removeTween("leftEtween");
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("rightEtween", 5, "linear", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Score_32sceneCode.GDExitScene2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Score_32sceneCode.GDExitScene2Objects1.length;i<l;++i) {
    if ( gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").hasFinished("rightEtween") ) {
        isConditionTrue_0 = true;
        gdjs.Score_32sceneCode.GDExitScene2Objects1[k] = gdjs.Score_32sceneCode.GDExitScene2Objects1[i];
        ++k;
    }
}
gdjs.Score_32sceneCode.GDExitScene2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Score_32sceneCode.GDExitScene2Objects1 */
{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").removeTween("rightEtween");
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("leftEtween", -(5), "linear", 1, false);
}
}}

}


};

gdjs.Score_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Score_32sceneCode.GDDistanceNameObjects1.length = 0;
gdjs.Score_32sceneCode.GDDistanceNameObjects2.length = 0;
gdjs.Score_32sceneCode.GDDistanceValueObjects1.length = 0;
gdjs.Score_32sceneCode.GDDistanceValueObjects2.length = 0;
gdjs.Score_32sceneCode.GDStarsNameObjects1.length = 0;
gdjs.Score_32sceneCode.GDStarsNameObjects2.length = 0;
gdjs.Score_32sceneCode.GDStarsValueObjects1.length = 0;
gdjs.Score_32sceneCode.GDStarsValueObjects2.length = 0;
gdjs.Score_32sceneCode.GDScoreName1Objects1.length = 0;
gdjs.Score_32sceneCode.GDScoreName1Objects2.length = 0;
gdjs.Score_32sceneCode.GDScoreValueObjects1.length = 0;
gdjs.Score_32sceneCode.GDScoreValueObjects2.length = 0;
gdjs.Score_32sceneCode.GDExitScene1Objects1.length = 0;
gdjs.Score_32sceneCode.GDExitScene1Objects2.length = 0;
gdjs.Score_32sceneCode.GDScoreName2Objects1.length = 0;
gdjs.Score_32sceneCode.GDScoreName2Objects2.length = 0;
gdjs.Score_32sceneCode.GDExitScene2Objects1.length = 0;
gdjs.Score_32sceneCode.GDExitScene2Objects2.length = 0;
gdjs.Score_32sceneCode.GDback_9595sloud_9595scoreObjects1.length = 0;
gdjs.Score_32sceneCode.GDback_9595sloud_9595scoreObjects2.length = 0;
gdjs.Score_32sceneCode.GDback_9595soil_9595scoreObjects1.length = 0;
gdjs.Score_32sceneCode.GDback_9595soil_9595scoreObjects2.length = 0;
gdjs.Score_32sceneCode.GDInputPlayerNameObjects1.length = 0;
gdjs.Score_32sceneCode.GDInputPlayerNameObjects2.length = 0;
gdjs.Score_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Score_32sceneCode.GDNewSpriteObjects2.length = 0;

gdjs.Score_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Score_32sceneCode'] = gdjs.Score_32sceneCode;

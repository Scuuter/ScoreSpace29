gdjs.Menu_32sceneCode = {};
gdjs.Menu_32sceneCode.GDScoreObjects1= [];
gdjs.Menu_32sceneCode.GDScoreObjects2= [];
gdjs.Menu_32sceneCode.GDTitle1Objects1= [];
gdjs.Menu_32sceneCode.GDTitle1Objects2= [];
gdjs.Menu_32sceneCode.GDCampointerObjects1= [];
gdjs.Menu_32sceneCode.GDCampointerObjects2= [];
gdjs.Menu_32sceneCode.GDCampointer2Objects1= [];
gdjs.Menu_32sceneCode.GDCampointer2Objects2= [];
gdjs.Menu_32sceneCode.GDPlaybuttonObjects1= [];
gdjs.Menu_32sceneCode.GDPlaybuttonObjects2= [];
gdjs.Menu_32sceneCode.GDSetbuttonObjects1= [];
gdjs.Menu_32sceneCode.GDSetbuttonObjects2= [];
gdjs.Menu_32sceneCode.GDLeadbuttonObjects1= [];
gdjs.Menu_32sceneCode.GDLeadbuttonObjects2= [];
gdjs.Menu_32sceneCode.GDScore1Objects1= [];
gdjs.Menu_32sceneCode.GDScore1Objects2= [];
gdjs.Menu_32sceneCode.GDScore2Objects1= [];
gdjs.Menu_32sceneCode.GDScore2Objects2= [];
gdjs.Menu_32sceneCode.GDTitle2Objects1= [];
gdjs.Menu_32sceneCode.GDTitle2Objects2= [];
gdjs.Menu_32sceneCode.GDBackbuttonObjects1= [];
gdjs.Menu_32sceneCode.GDBackbuttonObjects2= [];
gdjs.Menu_32sceneCode.GDEtitleObjects1= [];
gdjs.Menu_32sceneCode.GDEtitleObjects2= [];
gdjs.Menu_32sceneCode.GDBack_9595cloud_9595menuObjects1= [];
gdjs.Menu_32sceneCode.GDBack_9595cloud_9595menuObjects2= [];
gdjs.Menu_32sceneCode.GDBack_9595soil_9595menuObjects1= [];
gdjs.Menu_32sceneCode.GDBack_9595soil_9595menuObjects2= [];
gdjs.Menu_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Menu_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Menu_32sceneCode.GDMenuLightsObjects1= [];
gdjs.Menu_32sceneCode.GDMenuLightsObjects2= [];
gdjs.Menu_32sceneCode.GDMusicVObjects1= [];
gdjs.Menu_32sceneCode.GDMusicVObjects2= [];
gdjs.Menu_32sceneCode.GDSoundsVObjects1= [];
gdjs.Menu_32sceneCode.GDSoundsVObjects2= [];
gdjs.Menu_32sceneCode.GDMusicSliderObjects1= [];
gdjs.Menu_32sceneCode.GDMusicSliderObjects2= [];
gdjs.Menu_32sceneCode.GDSoundsSliderObjects1= [];
gdjs.Menu_32sceneCode.GDSoundsSliderObjects2= [];
gdjs.Menu_32sceneCode.GDSign1Objects1= [];
gdjs.Menu_32sceneCode.GDSign1Objects2= [];
gdjs.Menu_32sceneCode.GDSignEObjects1= [];
gdjs.Menu_32sceneCode.GDSignEObjects2= [];
gdjs.Menu_32sceneCode.GDSign2Objects1= [];
gdjs.Menu_32sceneCode.GDSign2Objects2= [];


gdjs.Menu_32sceneCode.userFunc0xe8e008 = function GDJSInlineCode(runtimeScene) {
"use strict";
function Authentication() {
    // Game API key
    const gameAPIKey = 'dev_5c1ec450962049d98a8620bb13826e45'

    // Development mode true/false
    const developmentMode = 'true'

    // Authentication request
    const AuthHttp = new XMLHttpRequest()
    const auth_url = 'https://api.lootlocker.io/game/v2/session/guest'
    AuthHttp.open('POST', auth_url)
    AuthHttp.setRequestHeader('Content-Type', 'application/json')

    //This is used to ensure that a new player is not created if one already exists when starting a session
    const playerIdentifier = localStorage.getItem('player_identifier')

    if (playerIdentifier == null) {
        // No player identifier was found, start new session
        AuthHttp.send(
            JSON.stringify({ game_key: gameAPIKey, game_version: '0.1.0.0', development_mode: developmentMode })
        )
    } else {
        // Player identifier was found, continue with this player
        AuthHttp.send(
            JSON.stringify({
                game_key: gameAPIKey,
                player_identifier: playerIdentifier,
                game_version: '0.1.0.0',
                development_mode: developmentMode,
            })
        )
    }

    AuthHttp.onreadystatechange = e => {
        // Log server response
        console.log(AuthHttp.responseText)

        // Parse json
        const text = JSON.parse(AuthHttp.responseText)

        // Save player identifier to storage
        localStorage.setItem('player_identifier', text.player_identifier)

        // Save session_token to a global variable
        runtimeScene.getGame().getVariables().get('session_token').setString(text.session_token)
        // Save player ID
        runtimeScene.getGame().getVariables().get('player_id').setString(text.player_id)

        getName();

    }
}

function getName() {
    // Upload score
    const Http = new XMLHttpRequest()
    const url = 'https://api.lootlocker.io/game/player/name'
    Http.open('GET', url)
    Http.setRequestHeader('Content-Type', 'application/json')
    // Add session token
    Http.setRequestHeader('x-session-token', runtimeScene.getGame().getVariables().get('session_token').getValue())

    // Send score and player identifier
    Http.send()
    Http.onreadystatechange = e => {
        // Log server response
        console.log(Http.responseText);
        const text = JSON.parse(Http.responseText);
        const name = text.name;
        if (name !== undefined) {
            runtimeScene.getGame().getVariables().get('PlayerName').setString(name);
        }
    }
}

if (runtimeScene.getTimeManager().isFirstFrame()) {
    Authentication();
}
};
gdjs.Menu_32sceneCode.asyncCallback13018356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Etitle"), gdjs.Menu_32sceneCode.GDEtitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Menu_32sceneCode.GDMusicSliderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sign1"), gdjs.Menu_32sceneCode.GDSign1Objects2);
gdjs.copyArray(runtimeScene.getObjects("SoundsSlider"), gdjs.Menu_32sceneCode.GDSoundsSliderObjects2);
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDEtitleObjects2.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDEtitleObjects2[i].getBehavior("Tween").addObjectAngleTween2("Eangle", 45, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDSign1Objects2.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSign1Objects2[i].getBehavior("Animation").setAnimationName("thick_line");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Midnight Masquerade-timestrech.mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Music_volume").getAsNumber(), 1);
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDMusicSliderObjects2.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDMusicSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Music_volume").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDSoundsSliderObjects2.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSoundsSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Sound_volume").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
gdjs.Menu_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32sceneCode.asyncCallback13018356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Menu_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Menu_32sceneCode.userFunc0xe8e008(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campointer"), gdjs.Menu_32sceneCode.GDCampointerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Campointer2"), gdjs.Menu_32sceneCode.GDCampointer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Menu_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDCampointerObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDCampointerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDCampointer2Objects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDCampointer2Objects1[i].hide();
}
}
{ //Subevents
gdjs.Menu_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Etitle"), gdjs.Menu_32sceneCode.GDEtitleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDEtitleObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDEtitleObjects1[i].getBehavior("Tween").hasFinished("Eangle") ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDEtitleObjects1[k] = gdjs.Menu_32sceneCode.GDEtitleObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDEtitleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDEtitleObjects1 */
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDEtitleObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDEtitleObjects1[i].addForce(0, 60, 5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Etitle"), gdjs.Menu_32sceneCode.GDEtitleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDEtitleObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDEtitleObjects1[i].getY() > 600 ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDEtitleObjects1[k] = gdjs.Menu_32sceneCode.GDEtitleObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDEtitleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDEtitleObjects1 */
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDEtitleObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDEtitleObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playbutton"), gdjs.Menu_32sceneCode.GDPlaybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[k] = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leadbutton"), gdjs.Menu_32sceneCode.GDLeadbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Setbutton"), gdjs.Menu_32sceneCode.GDSetbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDSetbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campointer2"), gdjs.Menu_32sceneCode.GDCampointer2Objects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "SetMenuTween", (( gdjs.Menu_32sceneCode.GDCampointer2Objects1.length === 0 ) ? 0 :gdjs.Menu_32sceneCode.GDCampointer2Objects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeOutQuad", 0.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Backbutton"), gdjs.Menu_32sceneCode.GDBackbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDBackbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campointer"), gdjs.Menu_32sceneCode.GDCampointerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "BackMenutween", (( gdjs.Menu_32sceneCode.GDCampointerObjects1.length === 0 ) ? 0 :gdjs.Menu_32sceneCode.GDCampointerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeOutQuad", 0.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Backbutton"), gdjs.Menu_32sceneCode.GDBackbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leadbutton"), gdjs.Menu_32sceneCode.GDLeadbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playbutton"), gdjs.Menu_32sceneCode.GDPlaybuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Setbutton"), gdjs.Menu_32sceneCode.GDSetbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[k] = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDSetbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDBackbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDBackbuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDLeadbuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDPlaybuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDSetbuttonObjects1 */
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1.05, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1.05, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1.05, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1.05, "linear", 0.2, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Backbutton"), gdjs.Menu_32sceneCode.GDBackbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leadbutton"), gdjs.Menu_32sceneCode.GDLeadbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playbutton"), gdjs.Menu_32sceneCode.GDPlaybuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Setbutton"), gdjs.Menu_32sceneCode.GDSetbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length;i<l;++i) {
    if ( !(gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[k] = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length;i<l;++i) {
    if ( !(gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length;i<l;++i) {
    if ( !(gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDSetbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length;i<l;++i) {
    if ( !(gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDBackbuttonObjects1[k] = gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDBackbuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDLeadbuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDPlaybuttonObjects1 */
/* Reuse gdjs.Menu_32sceneCode.GDSetbuttonObjects1 */
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDPlaybuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDLeadbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDSetbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1, "linear", 0.2, false, true);
}
for(var i = 0, len = gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDBackbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween3("butsize", 1, "linear", 0.2, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundsSlider"), gdjs.Menu_32sceneCode.GDSoundsSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDSoundsSliderObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDSoundsSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDSoundsSliderObjects1[k] = gdjs.Menu_32sceneCode.GDSoundsSliderObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDSoundsSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDSoundsSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Sound_volume").setNumber((( gdjs.Menu_32sceneCode.GDSoundsSliderObjects1.length === 0 ) ? 0 :gdjs.Menu_32sceneCode.GDSoundsSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Menu_32sceneCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDMusicSliderObjects1[k] = gdjs.Menu_32sceneCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_32sceneCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Music_volume").setNumber((( gdjs.Menu_32sceneCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.Menu_32sceneCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Music_volume").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Midnight Masquerade-timestrech.mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Music_volume").getAsNumber(), 1);
}}

}


};

gdjs.Menu_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Menu_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Menu_32sceneCode.GDTitle1Objects1.length = 0;
gdjs.Menu_32sceneCode.GDTitle1Objects2.length = 0;
gdjs.Menu_32sceneCode.GDCampointerObjects1.length = 0;
gdjs.Menu_32sceneCode.GDCampointerObjects2.length = 0;
gdjs.Menu_32sceneCode.GDCampointer2Objects1.length = 0;
gdjs.Menu_32sceneCode.GDCampointer2Objects2.length = 0;
gdjs.Menu_32sceneCode.GDPlaybuttonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDPlaybuttonObjects2.length = 0;
gdjs.Menu_32sceneCode.GDSetbuttonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDSetbuttonObjects2.length = 0;
gdjs.Menu_32sceneCode.GDLeadbuttonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDLeadbuttonObjects2.length = 0;
gdjs.Menu_32sceneCode.GDScore1Objects1.length = 0;
gdjs.Menu_32sceneCode.GDScore1Objects2.length = 0;
gdjs.Menu_32sceneCode.GDScore2Objects1.length = 0;
gdjs.Menu_32sceneCode.GDScore2Objects2.length = 0;
gdjs.Menu_32sceneCode.GDTitle2Objects1.length = 0;
gdjs.Menu_32sceneCode.GDTitle2Objects2.length = 0;
gdjs.Menu_32sceneCode.GDBackbuttonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDBackbuttonObjects2.length = 0;
gdjs.Menu_32sceneCode.GDEtitleObjects1.length = 0;
gdjs.Menu_32sceneCode.GDEtitleObjects2.length = 0;
gdjs.Menu_32sceneCode.GDBack_9595cloud_9595menuObjects1.length = 0;
gdjs.Menu_32sceneCode.GDBack_9595cloud_9595menuObjects2.length = 0;
gdjs.Menu_32sceneCode.GDBack_9595soil_9595menuObjects1.length = 0;
gdjs.Menu_32sceneCode.GDBack_9595soil_9595menuObjects2.length = 0;
gdjs.Menu_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Menu_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Menu_32sceneCode.GDMenuLightsObjects1.length = 0;
gdjs.Menu_32sceneCode.GDMenuLightsObjects2.length = 0;
gdjs.Menu_32sceneCode.GDMusicVObjects1.length = 0;
gdjs.Menu_32sceneCode.GDMusicVObjects2.length = 0;
gdjs.Menu_32sceneCode.GDSoundsVObjects1.length = 0;
gdjs.Menu_32sceneCode.GDSoundsVObjects2.length = 0;
gdjs.Menu_32sceneCode.GDMusicSliderObjects1.length = 0;
gdjs.Menu_32sceneCode.GDMusicSliderObjects2.length = 0;
gdjs.Menu_32sceneCode.GDSoundsSliderObjects1.length = 0;
gdjs.Menu_32sceneCode.GDSoundsSliderObjects2.length = 0;
gdjs.Menu_32sceneCode.GDSign1Objects1.length = 0;
gdjs.Menu_32sceneCode.GDSign1Objects2.length = 0;
gdjs.Menu_32sceneCode.GDSignEObjects1.length = 0;
gdjs.Menu_32sceneCode.GDSignEObjects2.length = 0;
gdjs.Menu_32sceneCode.GDSign2Objects1.length = 0;
gdjs.Menu_32sceneCode.GDSign2Objects2.length = 0;

gdjs.Menu_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Menu_32sceneCode'] = gdjs.Menu_32sceneCode;

gdjs.Leaderboard_32sceneCode = {};
gdjs.Leaderboard_32sceneCode.forEachIndex2 = 0;

gdjs.Leaderboard_32sceneCode.forEachObjects2 = [];

gdjs.Leaderboard_32sceneCode.forEachTemporary2 = null;

gdjs.Leaderboard_32sceneCode.forEachTotalCount2 = 0;

gdjs.Leaderboard_32sceneCode.GDLeaderboardTitleObjects1= [];
gdjs.Leaderboard_32sceneCode.GDLeaderboardTitleObjects2= [];
gdjs.Leaderboard_32sceneCode.GDScoreValueObjects1= [];
gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2= [];
gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects1= [];
gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2= [];
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects1= [];
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2= [];
gdjs.Leaderboard_32sceneCode.GDExitScene1Objects1= [];
gdjs.Leaderboard_32sceneCode.GDExitScene1Objects2= [];
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1= [];
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects2= [];
gdjs.Leaderboard_32sceneCode.GDback_9595sloud_9595scoreObjects1= [];
gdjs.Leaderboard_32sceneCode.GDback_9595sloud_9595scoreObjects2= [];
gdjs.Leaderboard_32sceneCode.GDback_9595soil_9595scoreObjects1= [];
gdjs.Leaderboard_32sceneCode.GDback_9595soil_9595scoreObjects2= [];
gdjs.Leaderboard_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Leaderboard_32sceneCode.GDNewSpriteObjects2= [];


gdjs.Leaderboard_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Leaderboard_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlaceValue"), gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects1);

for (gdjs.Leaderboard_32sceneCode.forEachIndex2 = 0;gdjs.Leaderboard_32sceneCode.forEachIndex2 < gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects1.length;++gdjs.Leaderboard_32sceneCode.forEachIndex2) {
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2.length = 0;


gdjs.Leaderboard_32sceneCode.forEachTemporary2 = gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects1[gdjs.Leaderboard_32sceneCode.forEachIndex2];
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2.push(gdjs.Leaderboard_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2[i].getBehavior("Text").setText(gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2[i].getVariables().getFromIndex(0).getAsString());
}
}}
}

}


};gdjs.Leaderboard_32sceneCode.userFunc0xa635a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
function GetLeaderboard() {
        // Leaderboard key
        const leaderboardKey = 'escap_leaderboard_key'

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
        // Send leaderboard request
        leaderboardHTTP.send('')
        leaderboardHTTP.onreadystatechange = e => {
            runtimeScene.getVariables().get('leaderboardString').setString(leaderboardHTTP.responseText);
            // var leaderboardData = runtimeScene.getVariables().get('leaderboardData');

            // let placeData = {
            //     rank: 0,
            //     playerName: '',
            //     score: 0,
            // }
            // const leaderboardResponseText = JSON.parse(leaderboardHTTP.responseText)
            // for (let i = 0; i < leaderboardResponseText.items.length; i++) {
            //     // placeData[rank] = leaderboardResponseText.items[i].rank;
            //     placeData[playerName] = leaderboardResponseText.items[i].player.playerName
            //     // placeData[score] = leaderboardResponseText.items[i].score;
            //     console.log(placeData[playerName]);
            //     leaderboardData.pushVariableCopy(fromJSObject(placeData));
            // }
            // Save leaderboard data to sceneVariable
        }
}

if (runtimeScene.getTimeManager().isFirstFrame()) {
    GetLeaderboard();

}
};
gdjs.Leaderboard_32sceneCode.mapOfGDgdjs_9546Leaderboard_959532sceneCode_9546GDPlayerNameObjects2Objects = Hashtable.newFrom({"PlayerName": gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2});
gdjs.Leaderboard_32sceneCode.mapOfGDgdjs_9546Leaderboard_959532sceneCode_9546GDScoreValueObjects2Objects = Hashtable.newFrom({"ScoreValue": gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2});
gdjs.Leaderboard_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Leaderboard_32sceneCode.eventsList3 = function(runtimeScene) {

{


const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("child");
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(1).getChild("items");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue"), gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Leaderboard_32sceneCode.mapOfGDgdjs_9546Leaderboard_959532sceneCode_9546GDPlayerNameObjects2Objects, 280, 120 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 40, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Leaderboard_32sceneCode.mapOfGDgdjs_9546Leaderboard_959532sceneCode_9546GDScoreValueObjects2Objects, 600, 120 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 40, false);
}
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("child").getChild("player").getChild("name")));
}
}{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("child").getChild("score")));
}
}}
}
}

}


};gdjs.Leaderboard_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1);
{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("rightEtween", 5, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.Leaderboard_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Leaderboard_32sceneCode.userFunc0xa635a0(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "0";
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("0");
}
{ //Subevents
gdjs.Leaderboard_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length;i<l;++i) {
    if ( gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").hasFinished("leftEtween") ) {
        isConditionTrue_0 = true;
        gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[k] = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i];
        ++k;
    }
}
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1 */
{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").removeTween("leftEtween");
}
}{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("rightEtween", 5, "linear", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length;i<l;++i) {
    if ( gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").hasFinished("rightEtween") ) {
        isConditionTrue_0 = true;
        gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[k] = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i];
        ++k;
    }
}
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1 */
{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").removeTween("rightEtween");
}
}{for(var i = 0, len = gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("leftEtween", -(5), "linear", 1, false);
}
}}

}


};

gdjs.Leaderboard_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Leaderboard_32sceneCode.GDLeaderboardTitleObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDLeaderboardTitleObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDScoreValueObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDScoreValueObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDPlayerNameObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDPlaceValueObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDExitScene1Objects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDExitScene1Objects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDExitScene2Objects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDback_9595sloud_9595scoreObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDback_9595sloud_9595scoreObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDback_9595soil_9595scoreObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDback_9595soil_9595scoreObjects2.length = 0;
gdjs.Leaderboard_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Leaderboard_32sceneCode.GDNewSpriteObjects2.length = 0;

gdjs.Leaderboard_32sceneCode.eventsList4(runtimeScene);

return;

}

gdjs['Leaderboard_32sceneCode'] = gdjs.Leaderboard_32sceneCode;

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


gdjs.Score_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DistanceValue"), gdjs.Score_32sceneCode.GDDistanceValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitScene2"), gdjs.Score_32sceneCode.GDExitScene2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue"), gdjs.Score_32sceneCode.GDScoreValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("StarsValue"), gdjs.Score_32sceneCode.GDStarsValueObjects1);
{for(var i = 0, len = gdjs.Score_32sceneCode.GDDistanceValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDDistanceValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber())));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDStarsValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDStarsValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDScoreValueObjects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDScoreValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() * 100, 2)));
}
}{for(var i = 0, len = gdjs.Score_32sceneCode.GDExitScene2Objects1.length ;i < len;++i) {
    gdjs.Score_32sceneCode.GDExitScene2Objects1[i].getBehavior("Tween").addObjectAngleTween2("rightEtween", 5, "linear", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu scene", false);
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

gdjs.Score_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Score_32sceneCode'] = gdjs.Score_32sceneCode;

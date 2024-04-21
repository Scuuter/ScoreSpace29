gdjs.Score_32sceneCode = {};
gdjs.Score_32sceneCode.GDDistanceNameObjects1= [];
gdjs.Score_32sceneCode.GDDistanceNameObjects2= [];
gdjs.Score_32sceneCode.GDDistanceValueObjects1= [];
gdjs.Score_32sceneCode.GDDistanceValueObjects2= [];
gdjs.Score_32sceneCode.GDStarsNameObjects1= [];
gdjs.Score_32sceneCode.GDStarsNameObjects2= [];
gdjs.Score_32sceneCode.GDStarsValueObjects1= [];
gdjs.Score_32sceneCode.GDStarsValueObjects2= [];
gdjs.Score_32sceneCode.GDScoreNameObjects1= [];
gdjs.Score_32sceneCode.GDScoreNameObjects2= [];
gdjs.Score_32sceneCode.GDScoreValueObjects1= [];
gdjs.Score_32sceneCode.GDScoreValueObjects2= [];
gdjs.Score_32sceneCode.GDExitSceneObjects1= [];
gdjs.Score_32sceneCode.GDExitSceneObjects2= [];


gdjs.Score_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DistanceValue"), gdjs.Score_32sceneCode.GDDistanceValueObjects1);
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
gdjs.Score_32sceneCode.GDScoreNameObjects1.length = 0;
gdjs.Score_32sceneCode.GDScoreNameObjects2.length = 0;
gdjs.Score_32sceneCode.GDScoreValueObjects1.length = 0;
gdjs.Score_32sceneCode.GDScoreValueObjects2.length = 0;
gdjs.Score_32sceneCode.GDExitSceneObjects1.length = 0;
gdjs.Score_32sceneCode.GDExitSceneObjects2.length = 0;

gdjs.Score_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Score_32sceneCode'] = gdjs.Score_32sceneCode;

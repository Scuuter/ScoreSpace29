gdjs.Menu_32sceneCode = {};
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1= [];
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects2= [];
gdjs.Menu_32sceneCode.GDScoreObjects1= [];
gdjs.Menu_32sceneCode.GDScoreObjects2= [];


gdjs.Menu_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Menu_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1[k] = gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", false);
}}

}


};

gdjs.Menu_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.Menu_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Menu_32sceneCode.GDScoreObjects2.length = 0;

gdjs.Menu_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Menu_32sceneCode'] = gdjs.Menu_32sceneCode;

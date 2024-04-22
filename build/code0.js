gdjs.Menu_32sceneCode = {};
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1= [];
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects2= [];
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


gdjs.Menu_32sceneCode.asyncCallback13205172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Etitle"), gdjs.Menu_32sceneCode.GDEtitleObjects2);
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDEtitleObjects2.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDEtitleObjects2[i].getBehavior("Tween").addObjectAngleTween2("Eangle", 45, "linear", 1, false);
}
}}
gdjs.Menu_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Menu_32sceneCode.asyncCallback13205172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Menu_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campointer"), gdjs.Menu_32sceneCode.GDCampointerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Campointer2"), gdjs.Menu_32sceneCode.GDCampointer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Menu_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Menu_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Menu_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 2)));
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


};

gdjs.Menu_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.Menu_32sceneCode.GDOnScreenControlsButtonObjects2.length = 0;
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

gdjs.Menu_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Menu_32sceneCode'] = gdjs.Menu_32sceneCode;

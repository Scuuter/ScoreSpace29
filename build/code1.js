gdjs.Game_32sceneCode = {};
gdjs.Game_32sceneCode.forEachIndex2 = 0;

gdjs.Game_32sceneCode.forEachObjects2 = [];

gdjs.Game_32sceneCode.forEachTemporary2 = null;

gdjs.Game_32sceneCode.forEachTotalCount2 = 0;

gdjs.Game_32sceneCode.GDRedHatBoyObjects1= [];
gdjs.Game_32sceneCode.GDRedHatBoyObjects2= [];
gdjs.Game_32sceneCode.GDRedHatBoyObjects3= [];
gdjs.Game_32sceneCode.GDRedHatBoyObjects4= [];
gdjs.Game_32sceneCode.GDLineObjects1= [];
gdjs.Game_32sceneCode.GDLineObjects2= [];
gdjs.Game_32sceneCode.GDLineObjects3= [];
gdjs.Game_32sceneCode.GDLineObjects4= [];
gdjs.Game_32sceneCode.GDDesertBackgroundObjects1= [];
gdjs.Game_32sceneCode.GDDesertBackgroundObjects2= [];
gdjs.Game_32sceneCode.GDDesertBackgroundObjects3= [];
gdjs.Game_32sceneCode.GDDesertBackgroundObjects4= [];
gdjs.Game_32sceneCode.GDCactusObjects1= [];
gdjs.Game_32sceneCode.GDCactusObjects2= [];
gdjs.Game_32sceneCode.GDCactusObjects3= [];
gdjs.Game_32sceneCode.GDCactusObjects4= [];
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1= [];
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2= [];
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects3= [];
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects4= [];
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1= [];
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects2= [];
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects3= [];
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects4= [];
gdjs.Game_32sceneCode.GDSpawnObjects1= [];
gdjs.Game_32sceneCode.GDSpawnObjects2= [];
gdjs.Game_32sceneCode.GDSpawnObjects3= [];
gdjs.Game_32sceneCode.GDSpawnObjects4= [];
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects1= [];
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects2= [];
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects3= [];
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects4= [];
gdjs.Game_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Game_32sceneCode.GDNewSpriteObjects4= [];
gdjs.Game_32sceneCode.GDDestroyerObjects1= [];
gdjs.Game_32sceneCode.GDDestroyerObjects2= [];
gdjs.Game_32sceneCode.GDDestroyerObjects3= [];
gdjs.Game_32sceneCode.GDDestroyerObjects4= [];
gdjs.Game_32sceneCode.GDFenceObjects1= [];
gdjs.Game_32sceneCode.GDFenceObjects2= [];
gdjs.Game_32sceneCode.GDFenceObjects3= [];
gdjs.Game_32sceneCode.GDFenceObjects4= [];
gdjs.Game_32sceneCode.GDStarObjects1= [];
gdjs.Game_32sceneCode.GDStarObjects2= [];
gdjs.Game_32sceneCode.GDStarObjects3= [];
gdjs.Game_32sceneCode.GDStarObjects4= [];
gdjs.Game_32sceneCode.GDScoreObjects1= [];
gdjs.Game_32sceneCode.GDScoreObjects2= [];
gdjs.Game_32sceneCode.GDScoreObjects3= [];
gdjs.Game_32sceneCode.GDScoreObjects4= [];


gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects2ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects2Objects = Hashtable.newFrom({"Cactus": gdjs.Game_32sceneCode.GDCactusObjects2, "Fence": gdjs.Game_32sceneCode.GDFenceObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDDestroyerObjects2Objects = Hashtable.newFrom({"Destroyer": gdjs.Game_32sceneCode.GDDestroyerObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Game_32sceneCode.GDStarObjects1});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDDestroyerObjects1Objects = Hashtable.newFrom({"Destroyer": gdjs.Game_32sceneCode.GDDestroyerObjects1});
gdjs.Game_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cactus"), gdjs.Game_32sceneCode.GDCactusObjects2);
gdjs.copyArray(runtimeScene.getObjects("Destroyer"), gdjs.Game_32sceneCode.GDDestroyerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fence"), gdjs.Game_32sceneCode.GDFenceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects2ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects2Objects, gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDDestroyerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDCactusObjects2 */
/* Reuse gdjs.Game_32sceneCode.GDFenceObjects2 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDCactusObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDCactusObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32sceneCode.GDFenceObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDFenceObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destroyer"), gdjs.Game_32sceneCode.GDDestroyerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Game_32sceneCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects1Objects, gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDDestroyerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDStarObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDRedHatBoyObjects2Objects = Hashtable.newFrom({"RedHatBoy": gdjs.Game_32sceneCode.GDRedHatBoyObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.Game_32sceneCode.GDStarObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDRedHatBoyObjects1Objects = Hashtable.newFrom({"RedHatBoy": gdjs.Game_32sceneCode.GDRedHatBoyObjects1});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects1ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects1Objects = Hashtable.newFrom({"Cactus": gdjs.Game_32sceneCode.GDCactusObjects1, "Fence": gdjs.Game_32sceneCode.GDFenceObjects1});
gdjs.Game_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Game_32sceneCode.GDRedHatBoyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Game_32sceneCode.GDStarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDRedHatBoyObjects2Objects, gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32sceneCode.GDScoreObjects2);
/* Reuse gdjs.Game_32sceneCode.GDStarObjects2 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStarObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDScoreObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus"), gdjs.Game_32sceneCode.GDCactusObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fence"), gdjs.Game_32sceneCode.GDFenceObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Game_32sceneCode.GDRedHatBoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDRedHatBoyObjects1Objects, gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects1ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game scene");
}}

}


};gdjs.Game_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DesertBackground"), gdjs.Game_32sceneCode.GDDesertBackgroundObjects2);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].setX(gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].getX() - (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DesertBackground"), gdjs.Game_32sceneCode.GDDesertBackgroundObjects1);

for (gdjs.Game_32sceneCode.forEachIndex2 = 0;gdjs.Game_32sceneCode.forEachIndex2 < gdjs.Game_32sceneCode.GDDesertBackgroundObjects1.length;++gdjs.Game_32sceneCode.forEachIndex2) {
gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length = 0;


gdjs.Game_32sceneCode.forEachTemporary2 = gdjs.Game_32sceneCode.GDDesertBackgroundObjects1[gdjs.Game_32sceneCode.forEachIndex2];
gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.push(gdjs.Game_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].getX() <= -((gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[k] = gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].setX((gdjs.Game_32sceneCode.GDDesertBackgroundObjects2[i].getWidth()) * 2);
}
}}
}

}


};gdjs.Game_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LetterKey_up"), gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Game_32sceneCode.GDRedHatBoyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, (( gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2.length === 0 ) ? "" :gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2[0].getBehavior("Animation").getAnimationName()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDRedHatBoyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDRedHatBoyObjects2[i].getY() > 145 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDRedHatBoyObjects2[k] = gdjs.Game_32sceneCode.GDRedHatBoyObjects2[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDRedHatBoyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDRedHatBoyObjects2 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDRedHatBoyObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDRedHatBoyObjects2[i].setY(gdjs.Game_32sceneCode.GDRedHatBoyObjects2[i].getY() - (108));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LetterKey_down"), gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Game_32sceneCode.GDRedHatBoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, (( gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1.length === 0 ) ? "" :gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1[0].getBehavior("Animation").getAnimationName()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDRedHatBoyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDRedHatBoyObjects1[i].getY() < 469 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDRedHatBoyObjects1[k] = gdjs.Game_32sceneCode.GDRedHatBoyObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDRedHatBoyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDRedHatBoyObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDRedHatBoyObjects1[i].setY(gdjs.Game_32sceneCode.GDRedHatBoyObjects1[i].getY() + (108));
}
}}

}


};gdjs.Game_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Input_change") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LetterKey_down"), gdjs.Game_32sceneCode.GDLetterKey_9595downObjects2);
gdjs.copyArray(runtimeScene.getObjects("LetterKey_up"), gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.random(4));
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595downObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595downObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.random(4));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Input_change");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LetterKey_down"), gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("LetterKey_up"), gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1[i].getBehavior("Animation").getAnimationIndex() == (( gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1[0].getBehavior("Animation").getAnimationIndex()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1[k] = gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.random(4));
}
}}

}


};gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects3Objects = Hashtable.newFrom({"Spawn": gdjs.Game_32sceneCode.GDSpawnObjects3});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects2Objects = Hashtable.newFrom({"Spawn": gdjs.Game_32sceneCode.GDSpawnObjects2});
gdjs.Game_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Game_32sceneCode.GDSpawnObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDSpawnObjects3 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpawnObjects3.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpawnObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Game_32sceneCode.GDSpawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDSpawnObjects2 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpawnObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpawnObjects2[i].getBehavior("Animation").setAnimationName("Bonus");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeBonus");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CurrentBonus");
}}

}


};gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects2Objects = Hashtable.newFrom({"Spawn": gdjs.Game_32sceneCode.GDSpawnObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects2ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects2Objects = Hashtable.newFrom({"Cactus": gdjs.Game_32sceneCode.GDCactusObjects2, "Fence": gdjs.Game_32sceneCode.GDFenceObjects2});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects1Objects = Hashtable.newFrom({"Spawn": gdjs.Game_32sceneCode.GDSpawnObjects1});
gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Game_32sceneCode.GDStarObjects1});
gdjs.Game_32sceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ChangeBonus") >= gdjs.randomFloatInRange(1, 2);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Game_32sceneCode.GDSpawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Obstacle") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDSpawnObjects2.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDSpawnObjects2[i].getBehavior("Animation").getAnimationName() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDSpawnObjects2[k] = gdjs.Game_32sceneCode.GDSpawnObjects2[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDSpawnObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDSpawnObjects2 */
gdjs.Game_32sceneCode.GDCactusObjects2.length = 0;

gdjs.Game_32sceneCode.GDFenceObjects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDCactusObjects2ObjectsGDgdjs_9546Game_959532sceneCode_9546GDFenceObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.random(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1)).getAsString(), (( gdjs.Game_32sceneCode.GDSpawnObjects2.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpawnObjects2[0].getPointX("")), (( gdjs.Game_32sceneCode.GDSpawnObjects2.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpawnObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDCactusObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDCactusObjects2[i].addForce(-(150), 0, 1);
}
for(var i = 0, len = gdjs.Game_32sceneCode.GDFenceObjects2.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDFenceObjects2[i].addForce(-(150), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Obstacle");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Game_32sceneCode.GDSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CurrentBonus") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDSpawnObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDSpawnObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDSpawnObjects1[i].getBehavior("Animation").getAnimationName() == "Bonus" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32sceneCode.GDSpawnObjects1[k] = gdjs.Game_32sceneCode.GDSpawnObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDSpawnObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32sceneCode.GDSpawnObjects1 */
gdjs.Game_32sceneCode.GDStarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_9546Game_959532sceneCode_9546GDStarObjects1Objects, (( gdjs.Game_32sceneCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpawnObjects1[0].getPointX("")), (( gdjs.Game_32sceneCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpawnObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStarObjects1[i].addForce(-(150), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CurrentBonus");
}}

}


};gdjs.Game_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LetterKey_ability"), gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects1);
gdjs.copyArray(runtimeScene.getObjects("LetterKey_down"), gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("LetterKey_up"), gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Game_32sceneCode.GDRedHatBoyObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1[i].getBehavior("Animation").setAnimationName("a");
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1[i].getBehavior("Animation").setAnimationName("c");
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects1[i].getBehavior("Animation").setAnimationName("Escape");
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDRedHatBoyObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Obstacle");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Input_change");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeBonus");
}}

}


{


gdjs.Game_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Game_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Game_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.Game_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Game_32sceneCode.eventsList7(runtimeScene);
}


};

gdjs.Game_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32sceneCode.GDRedHatBoyObjects1.length = 0;
gdjs.Game_32sceneCode.GDRedHatBoyObjects2.length = 0;
gdjs.Game_32sceneCode.GDRedHatBoyObjects3.length = 0;
gdjs.Game_32sceneCode.GDRedHatBoyObjects4.length = 0;
gdjs.Game_32sceneCode.GDLineObjects1.length = 0;
gdjs.Game_32sceneCode.GDLineObjects2.length = 0;
gdjs.Game_32sceneCode.GDLineObjects3.length = 0;
gdjs.Game_32sceneCode.GDLineObjects4.length = 0;
gdjs.Game_32sceneCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Game_32sceneCode.GDDesertBackgroundObjects2.length = 0;
gdjs.Game_32sceneCode.GDDesertBackgroundObjects3.length = 0;
gdjs.Game_32sceneCode.GDDesertBackgroundObjects4.length = 0;
gdjs.Game_32sceneCode.GDCactusObjects1.length = 0;
gdjs.Game_32sceneCode.GDCactusObjects2.length = 0;
gdjs.Game_32sceneCode.GDCactusObjects3.length = 0;
gdjs.Game_32sceneCode.GDCactusObjects4.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects1.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects2.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects3.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595upObjects4.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects1.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects2.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects3.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595downObjects4.length = 0;
gdjs.Game_32sceneCode.GDSpawnObjects1.length = 0;
gdjs.Game_32sceneCode.GDSpawnObjects2.length = 0;
gdjs.Game_32sceneCode.GDSpawnObjects3.length = 0;
gdjs.Game_32sceneCode.GDSpawnObjects4.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects1.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects2.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects3.length = 0;
gdjs.Game_32sceneCode.GDLetterKey_9595abilityObjects4.length = 0;
gdjs.Game_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_32sceneCode.GDDestroyerObjects1.length = 0;
gdjs.Game_32sceneCode.GDDestroyerObjects2.length = 0;
gdjs.Game_32sceneCode.GDDestroyerObjects3.length = 0;
gdjs.Game_32sceneCode.GDDestroyerObjects4.length = 0;
gdjs.Game_32sceneCode.GDFenceObjects1.length = 0;
gdjs.Game_32sceneCode.GDFenceObjects2.length = 0;
gdjs.Game_32sceneCode.GDFenceObjects3.length = 0;
gdjs.Game_32sceneCode.GDFenceObjects4.length = 0;
gdjs.Game_32sceneCode.GDStarObjects1.length = 0;
gdjs.Game_32sceneCode.GDStarObjects2.length = 0;
gdjs.Game_32sceneCode.GDStarObjects3.length = 0;
gdjs.Game_32sceneCode.GDStarObjects4.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects3.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects4.length = 0;

gdjs.Game_32sceneCode.eventsList8(runtimeScene);

return;

}

gdjs['Game_32sceneCode'] = gdjs.Game_32sceneCode;

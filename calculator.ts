function deadmanDropCalc(npcCombatLevel : number, npcName : string):string {
    let text = ''
    if (npcCombatLevel <= 0) {
        text = "invalid NPC"
    }
    if (npcCombatLevel > 0 && npcCombatLevel <= 50) {
        let calculation : number = (250 + ((Math.pow(50-npcCombatLevel,2)/5)))
        text = `The chance of you hitting the drop table  is  1/${calculation} \n  you need to kill ${calculation} ${npcName}s to get a drop`
    }
    if (npcCombatLevel > 50 && npcCombatLevel < 150) {
        let calculation2 : number = (337.5-(1.75*npcCombatLevel))
        text = `The chance of you hitting the drop table  is  1/${calculation2} \n  you need to kill ${calculation2} ${npcName}s to get a drop`
    }
    if (npcCombatLevel >=150) {
        let calculation3 : number = 75
        text = `The chance of you hitting the drop table  is  1/${calculation3} \n  you need to kill 75 ${npcName}s to get a drop`
    }
    return text
}
console.log(deadmanDropCalc(82, 'Lesser Demon')) //replace 82 with the NPC's combat level, and 'Lesser Demon' with the NPC name

const xBox = 80;
const yBox = 100;
const xCentre = 40;
const yOutsideOffset = 5;
const xShoulderOffset = 5;
const yShoulderOffset = 10;
const xCheek = 5;
const yCheek = 66;
const xJaw = 5;
const yJaw = 15;

export const traitShieldPath = `M ${xCentre} ${yOutsideOffset}
        L ${xBox - xShoulderOffset} ${yShoulderOffset}
        C ${xBox - xJaw} ${yBox - yJaw} ${xBox - xCheek} ${yCheek} ${xCentre} ${yBox - yOutsideOffset}
        C ${xCheek} ${yCheek} ${xJaw} ${yBox - yJaw} ${xShoulderOffset} ${yShoulderOffset}
        Z`;

export const traitShieldViewBox = `0 0 ${xBox} ${yBox}`;

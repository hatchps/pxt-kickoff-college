//% fixedInstances
class TeamData {
    constructor(
        public readonly name: string,
        public readonly abbreviation: string,
        public readonly colorOne: number,
        public readonly colorTwo: number
    ) { }
}

namespace league {
    //% fixedInstance whenUsed block="BYU Cougars"
    export const byucougars = new TeamData("BYU Cougars", "BYU", 0x0047BA, 0xFFFFFF);

    //% fixedInstance whenUsed block="Utah Utes"
    export const utahutes = new TeamData("Utah Utes", "UT", 0xCC0000, 0xFFFFFF);

    //% fixedInstance whenUsed block="Utah State Aggies"
    export const utahstateaggies = new TeamData("Utah State Aggies", "USU", 0x00263A, 0x8a8d8f);

    //% fixedInstance whenUsed block="Stanford Cardinal"
    export const stanfordcardinal = new TeamData("Stanford Cardinal", "SU", 0x8C1515, 0xffffff);

    //% fixedInstance whenUsed block="Kansas State Wildcats"
    export const kansasstatewildcats = new TeamData("Kansas State Wildcats", "KSU", 0x512888, 0xa7a7a7);

    //% fixedInstance whenUsed block="Kansas Jayhawks"
    export const kansasjayhawks = new TeamData("Kansas Jayhawks", "KU", 0x0051BA, 0xE8000D);

    //% fixedInstance whenUsed block="Arizona Wildcats"
    export const arizonawildcats = new TeamData("Arizona Wildcats", "AU", 0xCC0033, 0x003366);

    //% fixedInstance whenUsed block="Arizona State Sundevils"
    export const arizonastatesundevils = new TeamData("Arizona State Sundevils", "ASU", 0x8C1D40, 0xFFC627);

    //% fixedInstance whenUsed block="West Virginia Mountaineers"
    export const westvirginiamountaineers = new TeamData("West Virginia Mountaineers", "WVU", 0x002855, 0xEAAA00);

    //% fixedInstance whenUsed block="Baylor Bears"
    export const baylorbears = new TeamData("Baylor Bears", "BAY", 0x154734, 0xFFB81C);

    //% fixedInstance whenUsed block="Iowa State Cyclones"
    export const iowastatecyclones  = new TeamData("Iowa State Cyclones", "ISU", 0xC8102E, 0xF1BE48);

    //% fixedInstance whenUsed block="Wyoming Cowboys"
    export const wyomingcowboys = new TeamData("Wyoming Cowboys", "WU", 0xffc425, 0x492f24);

    //% fixedInstance whenUsed block="Texas Tech Red Raiders"
    export const texastechredraiders = new TeamData("Texas Tech Red Raiders", "TTU", 0xE90802, 0x000000
    //% fixedInstance whenUsed block="Alabama Chrimson Tide"
    export const alabamachrimsontide = new TeamData("Alabama Chrimson Tide", "ALA", 0x9e1b32, 0xffffff
    //% fixedInstance whenUsed block="Texas A&M Aggies"
    export const texasamaggies = new TeamData("Texas A&M Aggies", "A&M", 0x500000, 0xffffff
    //% fixedInstance whenUsed block="Oregon Ducks"
    export const oregonducks = new TeamData("Oregon Ducks", "ORE", 0x154733, 0xFEE123
    //% fixedInstance whenUsed block="LSU Tigers"
    export const lsutigers = new TeamData("LSU Tigers", "LSU", 0x461D7C, 0xFDD023
                                                    
);

}

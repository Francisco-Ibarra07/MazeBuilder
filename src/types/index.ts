export enum TileType {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  ROADBLOCK = "ROADBLOCK",
  START = "START",
  FINISH = "FINISH",
  PORTAL = "PORTAL",
}

export enum TooltipTypes {
  FLAG = "FLAG",
  ROAD = "ROAD",
  CLEAR = "CLEAR",
  ROADBLOCK = "ROADBLOCK",
  PORTAL = "PORTAL",
}

export interface Location {
  row: number;
  col: number;
}

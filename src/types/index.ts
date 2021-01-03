export enum TileType {
  INACTIVE,
  ACTIVE,
  ROADBLOCK,
  START,
  FINISH,
  PORTAL,
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

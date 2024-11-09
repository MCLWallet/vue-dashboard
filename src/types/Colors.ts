export type ColorItem = [number, number, number] | "N";

export type Colors = {
  result: number[][];
};

export type ColorsPayload = {
  model: "default";
  input?: ColorItem[];
};

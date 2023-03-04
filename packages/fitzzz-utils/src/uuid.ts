export interface UUID {
  generate(type: "easy" | "medium" | "hard"): string;
}

export const uuid: UUID = {
  generate(type: "easy" | "medium" | "hard"): string {
    let d: number;
    switch (type) {
      case "easy":
        return (
          Math.random().toString(36).substring(2) +
          new Date().getTime().toString(36)
        );
      case "medium":
        return [...[1e7], -1e3, -4e3, -8e3, -1e11]
          .join("")
          .replace(/[018]/g, (c) =>
            (
              Number(c) ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))
            ).toString(16)
          );
      case "hard":
        d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
          }
        );
      default:
        throw new Error("Invalid type of UUID");
    }
  },
};

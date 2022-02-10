export class RandomColor {
    applyColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
}

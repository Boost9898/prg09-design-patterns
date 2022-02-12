export class RandomColor implements Color {
    public applyColor(){        
        return Math.floor(Math.random()*16777215).toString(16)
    }
}
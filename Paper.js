class Paper extends Base
{
    constructor(diameter)
    {
        super(100,200,diameter,diameter);
        this.image = loadImage("sprites/crumpledPaper.png");
    }
}
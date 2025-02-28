export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly Python = new Tag('Python', 'pink');
    static readonly Csharp = new Tag('C#', 'green');
    static readonly Java = new Tag('Java', 'orange');
    static readonly NodeJS = new Tag('NODEJS', 'red');

    private constructor (private readonly key: string, public color: string ){

    }

    toString(){
        return this.key;
    }
}
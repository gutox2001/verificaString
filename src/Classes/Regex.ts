class Regex {
    private regex: RegExp;

    constructor(regex?: string) {
        if (regex)
            this.regex = new RegExp(regex);

        else {
            this.regex = new RegExp('');
            console.log('É necessário criar regex para utilizar a classe Regex');
        }
    }

    public test(str: string): boolean {
        return this.regex.test(str);
    }

    public isEmailValid(str: string): boolean {
        // Verificar se o nome não contém números ou caracteres especiais
        return /^[a-z0-9]+@[a-z]+.[com]*.[br]*$/.test(str);
    }
}

export default Regex;
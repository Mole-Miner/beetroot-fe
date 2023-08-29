/*Create a PrintMaсhine class that consists of:
    font size;
font color;
print() method that accepts text and prints it out.*/

class Printer {
    fontSize;
    fontColor;

    constructor(fontSize, fontColor) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
    }

    /*print(element, text) {
        console.log(element);
        element.style.fontSize = this.fontSize;
        element.style.color = this.fontColor;
        element.textContent = text;
    }*/

    /*print(selector, text) {
        const element = document.querySelector(selector);
        element.style.fontSize = this.fontSize;
        element.style.color = this.fontColor;
        element.textContent = text;
    }*/

    print(selector, text, fontColor, fontSize) {
        const element = document.querySelector(selector);
        element.style.fontSize = fontSize ?? this.fontSize;
        element.style.color = fontColor ?? this.fontColor;
        element.textContent = text;
    }
}

const printer = new Printer('34px', 'orange');
/*
printer.print('#output1', "This is my printed text 1");
printer.print('#output2', "This is my printed text 2", 'red', '48px');
printer.print('#output3', "This is my printed text 3");
*/

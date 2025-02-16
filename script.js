class PhoneNumberObserver {
    constructor(name, observerFunction) {
        this.name = name;
        this.notify = observerFunction;
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = new Set();
    }

    AddPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }

    RemovePhoneNumber(number) {
        this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
    }

    DialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) {
            this.notifyObservers(number);
        } else {
            console.log("Number not found in phone book");
        }
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.notify(number));
    }
}

window.onload = function() {
    const telephone = new Telephone();

    const numberObserver = new PhoneNumberObserver(
        "NumberPrinter",
        (number) => console.log(number)
    );

    const dialingObserver = new PhoneNumberObserver(
        "DialingPrinter",
        (number) => console.log(`Now Dialling ${number}`)
    );

    telephone.addObserver(numberObserver);
    telephone.addObserver(dialingObserver);

    telephone.AddPhoneNumber("2347023232");
    telephone.DialPhoneNumber("2347023232");
}
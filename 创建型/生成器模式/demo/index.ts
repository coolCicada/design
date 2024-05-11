class Car {
    seats?: number
    engine?: string
    tripComputer?: boolean
    gps?: boolean
}

class Manual {
    seats?: number
    engine?: string
    tripComputer?: boolean
    gps?: boolean
}

interface NBuilder<T> {
    reset(): void
    setSeats(seats: number): void
    setEngine(engine: string): void
    setTripComputer(hasTripComputer: boolean): void
    setGPS(hasGps: boolean): void
    getProduct(): T;
}

class NCarBuilder implements NBuilder<Car> {
    private car!: Car
    constructor() {
        this.reset()
    }
    public reset(): void {
        this.car = new Car()
    }
    public setSeats(seats: number): void {
        this.car.seats = seats
    }
    public setEngine(engine: string): void {
        this.car.engine = engine
    }
    public setTripComputer(hasTripComputer: boolean): void {
        this.car.tripComputer = hasTripComputer
    }
    public setGPS(hasGps: boolean): void {
        this.car.gps = hasGps
    }

    public getProduct() {
        const p = this.car;
        this.reset();
        return p;
    }
}

class NCarManualBuilder implements NBuilder<Manual> {
    private manual!: Manual
    constructor() {
        this.reset()
    }
    getProduct() {
        const p = this.manual;
        this.reset();
        return p;
    }
    public reset(): void {
        this.manual = new Manual()
    }
    public setSeats(seats: number): void {
        this.manual.seats = seats
    }
    public setEngine(engine: string): void {
        this.manual.engine = engine
    }
    public setTripComputer(hasTripComputer: boolean): void {
        this.manual.tripComputer = hasTripComputer
    }
    public setGPS(hasGps: boolean): void {
        this.manual.gps = hasGps
    }
}

class NDirector {
    constructSportsCar(builder: NBuilder<Car>): Car {
        builder.reset()
        builder.setSeats(2)
        builder.setEngine('V10')
        builder.setTripComputer(true)
        builder.setGPS(true)
        return builder.getProduct();
    }
}

function main() {
    const director = new NDirector();
    const builder = new NCarBuilder();
    console.log(director.constructSportsCar(builder));
}

main();
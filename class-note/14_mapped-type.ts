type Heroes = 'Hulk' | 'Capt' | 'Thor';

// mapped 타입 선언
type HeroAges = {
    [K in Heroes]: number
};

const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}

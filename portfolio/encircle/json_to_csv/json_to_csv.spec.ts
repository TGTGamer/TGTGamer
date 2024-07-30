import {jsonToCsv} from './json_to_csv.js';
import json from './task_2_and_3.json'

const expected = `Date, Brand, Pattern, Tyre Size, Season, Class, Rolling Resistance, Wet Rating, Noise Rating, Price (£)
Tue Jul 30 2024, Uniroyal, RainSport 3, 205, Winter, C1, E, A, 2, 93.93
Tue Jul 30 2024, Dexel, Premium Choice, 205, Winter, C1, C, A, 1, 79.71
Tue Jul 30 2024, Pirelli, P7, 205, Winter, C1, C, B, 2, 97.96
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 54.04
Tue Jul 30 2024, Continental, PremiumContact 5, 205, Winter, C1, C, A, 2, 97.32
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 54.04
Tue Jul 30 2024, Continental, PremiumContact 5, 205, Winter, C1, C, B, 2, 98.17
Tue Jul 30 2024, Dunlop, SP Sport BluResponse, 205, Winter, C1, B, A, 1, 90.49
Tue Jul 30 2024, Pirelli, Cinturato P7, 205, Winter, C1, E, B, 2, 96.49
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 106.47
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 104.84
Tue Jul 30 2024, Bridgestone, Turanza ER300, 205, Winter, C1, E, B, 2, 94.64
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 112.86
Tue Jul 30 2024, Economy, , 205, Winter, , E, C, 2, 74.94
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, C, A, 2, 96.93
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 112.14
Tue Jul 30 2024, Uniroyal, RainSport 3, 205, Winter, C1, C, A, 2, 84.91
Tue Jul 30 2024, Bridgestone, Turanza ER300, 205, Winter, C1, E, B, 2, 94.64
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 79.20
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 80.76
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 87.46
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, A, 2, 96.73
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 74.66
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 2, 101.35
Tue Jul 30 2024, Continental, SportContact 2, 205, Winter, C1, E, C, 2, 96.73
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 107.19
Tue Jul 30 2024, Uniroyal, RainSport 5, 205, Winter, C1, C, A, 2, 74.31
Tue Jul 30 2024, Economy, , 205, Winter, C1, G, F, 3, 55.16
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 83.97
Tue Jul 30 2024, , , 205, Winter, C1, B, A, 1, 99.10
Tue Jul 30 2024, Continental, PremiumContact, 205, Winter, C1, F, C, 1, 116.68
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, C, A, 2, 81.24
Tue Jul 30 2024, Continental, PremiumContact 6, 205, Winter, C1, C, A, 2, 96.73
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 112.62
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, F, C, 2, 103.58
Tue Jul 30 2024, , , 205, Winter, C1, B, A, 2, 84.56
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 96.73
Tue Jul 30 2024, Goodyear, EfficientGrip Performance, 205, Winter, C1, B, A, 1, 84.56
Tue Jul 30 2024, , , 205, Winter, , , , 0, 147.80
Tue Jul 30 2024, Continental, eContact (Hybrid cars), 205, Winter, C1, A, B, 2, 113.78
Tue Jul 30 2024, Dexel, Premium Choice, 205, Winter, C1, C, A, 1, 81.56
Tue Jul 30 2024, , , 205, Winter, , , , 0, 118.82
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, A, B, 2, 96.73
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 97.32
Tue Jul 30 2024, Continental, PremiumContact 6, 205, Winter, C1, C, A, 2, 97.32
Tue Jul 30 2024, Hankook, Ventus Prime 3 (K125), 205, Winter, C1, C, A, 2, 81.04
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, B, B, 2, 96.73
Tue Jul 30 2024, Pirelli, Cinturato P7, 205, Winter, C1, C, B, 2, 83.89
Tue Jul 30 2024, Continental, EcoContact 5, 205, Winter, C1, C, B, 2, 98.17
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 97.75
Tue Jul 30 2024, Michelin, Energy Saver, 205, Winter, C1, B, A, 2, 99.16
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, A, 2, 97.75
Tue Jul 30 2024, , , 205, Winter, , , , 0, 129.67
Tue Jul 30 2024, , , 205, Winter, , , , 0, 119.07
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, A, 2, 97.32
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 118.56
Tue Jul 30 2024, Michelin, Primacy 4, 205, Winter, C1, A, B, 1, 109.95
Tue Jul 30 2024, Michelin, Cross Climate +, 205, Winter, C1, C, B, 1, 106.04
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, B, B, 2, 105.37
Tue Jul 30 2024, Michelin, Primacy 3, 205, Winter, C1, E, A, 2, 103.94
Tue Jul 30 2024, , , 205, Winter, C1, C, A, 2, 94.95
Tue Jul 30 2024, Continental, EcoContact 6, 205, Winter, C1, A, B, 2, 98.17
Tue Jul 30 2024, Dunlop, SportMaxx RT, 205, Winter, C1, E, A, 1, 90.49
Tue Jul 30 2024, Bridgestone, Turanza T005, 205, Winter, C1, C, B, 2, 95.80
Tue Jul 30 2024, Vredestein, Snowtrac 5, 205, Winter, C1, E, E, 1, 107.14`

it('renders with the correct text', () => {
    expect(jsonToCsv(json)).toEqual(expected);
});

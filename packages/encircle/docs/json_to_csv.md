---
labels: ['JsonToCsv', 'module']
description: 'A JsonToCsv module.'
---

##  Task - JSON to CSV
Using the JSON data provided, generate a CSV of the data. Headers for the CSV must be:
Date, Brand, Pattern, Tyre Size, Season, Class, Rolling Resistance, Wet Rating, Noise Rating, Price (£)
Store the CSV in the same DIR you are working in.

## intuition

Once you have a type definition you can trust, you should be able to output a csv pretty easily.
There are a few ways to do this, best practice would be to use a module which handles more complex cases, but I'm going to manually generate it.



import repl from "repl";
const cards = [
    {
        name: "Card 1",
        description: "This is the first card"
    }
    ,
    {
        name: "Card 2",
        description: "This is the second card"
    }
]
const r = repl.start(">> ");
r.context.cards = cards;
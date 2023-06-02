import { createContext } from "react";

export const ThemeContext = createContext("dark");

//possiamo utilizzarlo anche per passare dati tra componenti non direttaamente collegati, simile a redux ma meno potente e utilizzato in strutture con poche richieste

// datové typy

// operátor typeof


/*
    - string .... 'string'
    - number .... 'number'
    - boolean .... 'boolean'
    - undefined .... 'undefined'
    - null .... 'object' = chyba v java scriptu
    - NaN .... 'number'

    - array .... 'object'
    - object -... 'object'
    - function ... 'function'
    */


    /*
        myVar

        - string - if(typeof myVar === 'string')
        - number - if (typeof myVar === 'number' && !Number.isNan(myVar))
        - boolean - if (typeof myVar === 'boolean')
        - undefined - if (myVar === undefined)
        - null if (myVar === null)
        - NaN - if (Number.isNan(myVar)))

        - array - if (Array.isArray)
        - object - if (typeof myVar === 'object' && myVar !== null && !Array.isArray(myVar)) - testování jednotlivých datových typů
        - function - if (typeof myVar === 'function')




        value === value // true
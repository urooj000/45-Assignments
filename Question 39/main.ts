// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function citycountry(city: string, country: string):  string  {
    const formattedstring =
    "${city.tolowerCase()}, ${country.tolowerCase()}";
        return formattedstring;
}

 const lahorePakistan = citycountry("Lahore", "Pakistan");
 const tokyoJapan = citycountry("Tokyo", "Japan");
 const londonEngland = citycountry("London", "England");

 console.log("Lahore", "Pakistan");
 console.log("Tokyo", "Japan");
 console.log("London", "England");
 
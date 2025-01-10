![Peaks '87 Logo](https://github.com/WaspVentMan/Peaks-87/blob/main/img/NGlogoV3.png?raw=true)
# Peaks '87: Climb an endless mountain in the Great Gales

me when documentation

# Index
[Text Rendering Functions](#text-rendering-functions)

# Text Rendering Functions
[`renderChar(char)`](#rendercharchar)

[`renderString(string)`](#renderstringstring)

[`renderStrings(strings)`](#renderstringsstrings)

[`renderDots(count)`](#renderdotscount)

## Compatable Characters
Compatable chars: `a-z, 0-9, -, í, ó, plus those displayed below`

Char subs: `_ to space` `+ to '` `, to .` `^ to <` `% to >`

## renderChar(char)
### input
`char` can be any string of chars within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: a string of html, apply it to a HTML element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderChar("L")
```

outputs:

![l](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/l.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause the console to throw 404 errors and missing letters to occur.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderChar("!")
> ```
>
> output:
>
> nothing

Renders a list of strings as a html compatible UFO 50 string.

All chars are automatically converted to lower case.

## renderString(string)
### input
`string` can be any string of chars within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: a string of html, apply it to a HTML element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderString("words_and_stuff")
```

outputs:

![w](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/w.png?raw=true)![o](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/o.png?raw=true)![r](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/r.png?raw=true)![d](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/d.png?raw=true)![s](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/s.png?raw=true)![_](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/_.png?raw=true)![a](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/a.png?raw=true)![n](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/n.png?raw=true)![d](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/d.png?raw=true)![_](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/_.png?raw=true)![s](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/s.png?raw=true)![t](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/t.png?raw=true)![u](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/u.png?raw=true)![f](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/f.png?raw=true)![f](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/f.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause the console to throw 404 errors and missing letters to occur.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderString("epic!")
> ```
>
> output:
>
> ![e](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/e.png?raw=true)![p](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/p.png?raw=true)![i](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/i.png?raw=true)![c](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/c.png?raw=true)

Renders a list of strings as a html compatible UFO 50 string.

All chars are automatically converted to lower case.

## renderStrings(strings)
### input
`strings` must be an array of strings, the string's chars must be within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: a string of html, apply it to a HTML element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderStrings(["string", "string"])
```

outputs:

![s](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/s.png?raw=true)![t](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/t.png?raw=true)![r](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/r.png?raw=true)![i](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/i.png?raw=true)![n](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/n.png?raw=true)![g](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/g.png?raw=true)<br>
![s](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/s.png?raw=true)![t](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/t.png?raw=true)![r](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/r.png?raw=true)![i](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/i.png?raw=true)![n](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/n.png?raw=true)![g](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/g.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause the console to throw 404 errors and missing letters to occur.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderStrings(["super", "!hot!"])
> ```
>
> output:
>
> ![s](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/s.png?raw=true)![u](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/u.png?raw=true)![p](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/p.png?raw=true)![e](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/e.png?raw=true)![r](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/r.png?raw=true)<br>
>![_](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/_.png?raw=true)![h](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/h.png?raw=true)![o](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/o.png?raw=true)![t](https://github.com/WaspVentMan/Peaks-87/blob/main/img/letter/t.png?raw=true)

Renders a list of strings as a html compatible UFO 50 string.

All chars are automatically converted to lower case.

## renderDots(count)
### input
`count` must be a positive integer.
### returns
`string`: `count` number of full stops.

i.e.

```
renderDots(5)
```

output:

`"....."`

> [!NOTE]
> A negative number will cause it to return an empty string.

Function used for filling the middle secions of the leaderboard, there could probably be another use for this, but I don't know it.
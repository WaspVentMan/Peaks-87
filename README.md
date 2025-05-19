![Peaks '87 Logo](./.docs/logo/NGlogoV5.png?raw=true)
# Peaks '87: Climb an endless mountain in the Great Gales

# Index
[`Text Rendering Functions`](#text-rendering-functions)

[`Audio Playing Functions`](#audio-playing-functions)

# Audio Playing Functions

[`playSound(sound, vol)`](#playsoundsound-vol)

[`playMusic(sound, vol)`](#playmusicsound-vol)

[`clearSound(sound, vol)`](#clearsound)

[`clearMusic(sound, vol)`](#clearmusic)

## playSound(sound, vol)
Plays a desired sound at a desired volume.
Can play up to 32 sounds at once.

### params
`sound (string)` can be the path to any audio file

`vol (integer)` can by any number from `0-100` 
### returns
`nothing`: lol

i.e.

```
playSound(audio/click.mp3", 87)
```

outputs:

Plays the audio file `audio/click.mp3` at 87% volume

## playMusic(sound, vol)
Plays a desired song at a desired volume.
Can play up to 16 songs at once.

### params
`sound (string)` can be the path to any audio file

`vol (integer)` can by any number from `0-100` 
### returns
`nothing`: lol

i.e.

```
playMusic("`audio/ForestA.mp3", 69)
```

outputs:

Plays the audio file `audio/ForestA.mp3` at 69% volume

## clearSound()
Clears all currently playing sounds.

### params
`nothing`: lol
### returns
`nothing`: lol

## clearMusic()
Clears all currently playing songs.

### params
`nothing`: lol
### returns
`nothing`: lol

# Text Rendering Functions
[`Compatable Characters`](#compatable-characters)

[`renderChar(char)`](#rendercharchar)

[`renderString(string)`](#renderstringstring)

[`renderStrings(strings)`](#renderstringsstrings)

[`renderDots(count)`](#renderdotscount)

[`renderTime(time)`](#rendertimetime)

## Compatable Characters
All chars are automatically converted to lower case.
Compatable chars: ` 0123456789abcdefghijklmnopqrstuvwxyz.,!?'-+$"~&/#%():[]|{}<>`

## renderChar(char)
Renders a character into a HTML String.

### param
`char (string)` must be a string with a singular char within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: a string of html, apply it to a HTML element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderChar("L")
```

outputs:

![l](./.docs/renderChar.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause a random "glitch" character to generate.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderChar("_")
> ```
>
> output:
>
> ![_](./.docs/renderCharError.png?raw=true)

## renderString(string)
Renders a string into a HTML String.

### param
`string (string)` can be any string of chars within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: a string of html, apply it to a HTML element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderString("words & stuff")
```

outputs:

![words & stuff](./.docs/renderString.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause the console to throw 404 errors and missing letters to occur.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderString("words_&_stuff")
> ```
>
> output:
>
> ![words_&_stuff](./.docs/renderStringError.png?raw=true)

## renderStrings(strings)
Renders a list of strings as a HTML String.

### param
`strings (list)` must be an array of strings, the string's chars must be within the "[Compatable chars](#compatable-characters)" section.
### returns
`string`: HTML String, apply to an element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderStrings(["string", "string"])
```

outputs:

![string string](./.docs/renderStrings.png?raw=true)

> [!NOTE]
> Using a character that is not in the list of [Compatable chars](#compatable-characters) and applying the result to a HTML element's `.innerHTML` will cause the console to throw 404 errors and missing letters to occur.
>
> i.e.
>
> ```
> HTMLObject.innerHTML = renderStrings(["super", "_hot_"])
> ```
>
> output:
>
> ![super _hot_](./.docs/renderStringsError.png?raw=true)

## renderDots(count)
Function used for filling the middle secions of the leaderboard, there could probably be another use for this, but I don't know it.

### param
`count (integer)` must be a positive integer.
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

## renderTime(time)
Renders a time integer as a HTML String.

### param
`time (integer)` must be a positive integer.
### returns
`string`: HTML String, apply to an element's `.innerHTML`.

i.e.

```
HTMLObject.innerHTML = renderTime(69420)
```

outputs:

![0:01:09.420](./.docs/renderTime.png?raw=true)
#TinyIF#

*By Rob Beschizza*

A quick experiment in making a minimal but very user-friendly thingy for making Twine-style interaction fiction or choose-your-own-adventure games.

See it in action at <a href="https://codepen.io/honeybunches/pen/OmgvrN">this codepen</a>

As in the example HTML file, just bang out pages or rooms with one per line, each with a name for the system, a readable title, and a description, like so:

name|title|description

For example:

beach|A sunny beach|Sand stretches for miles either way, disappearing in to the distant haze, and the [calm sea:sea] murmurs and claws at your feet

Links are made by putting square brackets around the phrase you want to link, with the destination room's system name after a colon. In the example above, it will write out "calm sea" and clicking it will take you to a room named "sea"

That's it for now!

**ToDo**

- items/inventory/player variables
- things that cause changes to rooms (e.g. puzzles)
- images

It's about 1kb of javascript at the moment (not including the game content) even with comments. I wonder how many features could be added while keeping it that way! Maybe 4kb is a more reasonable goal..

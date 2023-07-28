---
sidebar_position: 1
---

# Introduction

[![Static Badge](https://img.shields.io/badge/pylode-online-purple?style=plastic)](pathname:///pylode/music-representation.html)

The music domain landscape is populated by a large number of representation systems that serve different purposes. Trying to learn a new tune on the guitar? Chances are you will rely on [tabs](https://en.wikipedia.org/wiki/ASCII_tab). Are you working with a digital score? [MusicXML](https://www.musicxml.com/) is the industry standard. Your digital score is using some unconventional notation? Then [MEI](https://music-encoding.org/) is what you are looking for. And if you just need a simple way of notating a musical piece, [Lead sheet](https://en.wikipedia.org/wiki/Lead_sheet) can help, or perhaps [ABC](https://abcmusicnotation.weebly.com/) notation. Writing chords in natural language can be very confusing though. [Harte notation](https://ismir2005.ismir.net/proceedings/1080.pdf) can really rescue you, and if you are theoretically-inclined, using [Roman Numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis) can bring a whole new level of knowledge to your notation. 
Such a large pool of options is great for written music, it really fits many different needs. But music is not only in written form, it is mostly played by real humans. If you are trying to notate a live performance there is no need to worry, [MIDI](https://www.midi.org/) can cover that use case for you!

It truly is a vastly populated landscape and every different notation format has countless advantages and drawbacks. Being able to exploit the best part of each method is extremely valuable, but it is very difficult to convert one format to a different one. Some information might be lost in that process, with the risk that it will be lost forever.

Despite the apparent differences between two formats, their goal is eventually the same: notate music. When an information on a musical piece is identified, such information should be universal. Different formats might ignore some particular information while other might describe it very thouroughly, but the information is inherent to the musical piece in the first place.
The Music Representation Ontology tackles this problem by providing a simple, general and extremely flexible model that allows universal music informations to be represented in a coherent form. Each different notation format can benefit from information carried by other formats. **Interoperability** is a key comitment of the Music Representation Ontology, and this is solved by focusing on **representing musical knowledge** while retaining the flexibility and efficacy of the whole notation landscape.

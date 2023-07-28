---
sidebar_position: 1
---

# Introduction

[![Static Badge](https://img.shields.io/badge/pylode-online-purple?style=plastic)](pathname:///pylode/cometa.html)


An extension of [Music Meta](https://github.com/polifonia-project/musicmeta-ontology) to describe the metadata of music **co**llections, **co**rpora, **co**ntainers, or simply music datasets! Here, metadata is described at the collection-level (data curator, annotations provided, availability of audio music, etc.), and at the content-level, (e.g., the title, artist, release of each piece in a dataset). The design of CoMeta is informed by a survey of Music Information Retrieval datasets, which allowed for the categorisation of common fields.

The ontology designed to describe music datasets as containers of music-related data with specific characteristics and annotations.

- **Collection Information**: the ontology captures information about the dataset as a whole, including the number of records (compositions or performances), genres, year of release, collection metadata (project investigator, university, etc.), and content metadata (specification document with track-level information like title, artist, release, MusicBrainz identifier). This also includes properties such as music media type (audio or symbolic), duration, audio format (MP3, WAV, FLAC), symbolic format (MIDI, MusicXML, MEI), and other additional media (audio features, rankings, etc.).

- **Annotations**: to represent the annotations provided within the dataset, which are crucial for MIR tasks. It would include various types of annotations contributed by domain experts (musicologists, composition teachers) or listeners, covering aspects like music structure, key, chord progressions, emotions, listening habits, etc.

- **Computational tasks**: to define the different tasks that a dataset enables based on the available annotations. Examples in MIR include music emotion recognition, pattern extraction, cadence detection, etc. Together with the [Music Algorithm](https://github.com/polifonia-project/music-algorithm-ontology) ontology (its sibling ontology) it also allows to track the performance/accuracy of computational methods tested on each dataset.

- **Access and availability**: to capture information regarding the accessibility of the dataset, including whether it is open, on-demand, or closed, and whether it can be accessed online or requires manual provisioning. It may also include details about an API if available.

- **License/Copyright**: to represent the licensing and copyright information associated with the dataset, ensuring compliance and proper attribution.

- **References**: to provide links to official websites and academic manuscripts describing the dataset and its collection process, facilitating proper citation and reference.


By incorporating and supporting these requirements, the ontology would provide a structured representation of music datasets, their metadata, annotations, and interconnections. It would enable researchers and practitioners to explore, analyse, and utilize the datasets more effectively, promote interoperability, and facilitate the automatic discovery and extraction of knowledge from music-related data.


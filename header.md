---
component-id: https://w3id.org/polifonia/ontology/ontology-network/
type: Ontology
name: Polifonia Ontology Network (PON)
description: Top level description of the ontology modules in the Polifonia Ontology Network, with pointers to each submodule.
image: https://github.com/polifonia-project/ontology-network/raw/main/assets/pon_architecture.png
work-package:
- WP2
pilot:
- INTERLINK
- TUNES
- FACETS
- TONALITIES
- MEETUPS
- MUSICBO
- CHILD
- ORGANS
- BELLS
- TUNES
- ACCESS
project: polifonia-project
resource: ontology/ontology-network.owl
release-date: 09/05/2023
release-number: v1.0
release-link: https://github.com/polifonia-project/ontology-network/releases
doi: 10.5281/zenodo.7919970
changelog: https://github.com/polifonia-project/ontology-network/releases
licence:
- CC-BY_v4
copyright: "Copyright (c) 2023 Polifonia Ontology Network Contributors"
contributors: # replace these with the GitHub URL of each contributor
- Valentina Anita Carriero <https://github.com/valecarriero>
- Andrea Poltronieri <https://github.com/andreamust>
- Nicolas Lazzari <https://github.com/n28div>
- Jacopo de Berardinis <https://github.com/jonnybluesman>
- Fiorela Ciroku <https://github.com/jonnybluesman>
related-components:
- informed-by:
  - https://github.com/polifonia-project/polifoniacq-dataset
  - https://github.com/polifonia-project/idea
- reuses:
  - https://w3id.org/polifonia/ontology/core/
  - https://w3id.org/polifonia/ontology/music-meta/
  - https://w3id.org/polifonia/ontology/music-representation/
  - https://w3id.org/polifonia/ontology/source/
  - https://w3id.org/polifonia/ontology/instrument/
  - https://w3id.org/polifonia/ontology/tunes/
  - https://w3id.org/polifonia/ontology/music-projection/
  - https://w3id.org/polifonia/ontology/organs/
  - https://w3id.org/polifonia/ontology/cometa/
  - https://w3id.org/polifonia/ontology/bells/
  - https://w3id.org/polifonia/ontology/music-algorithm/
  - https://w3id.org/polifonia/ontology/music-analyis/
  - https://w3id.org/polifonia/ontology/music-annotation/
- documentation:
  - https://github.com/polifonia-project/ontology-network  # FIXME
---
# Polifonia Ontology Network (PON)

The Polifonia Ontology Network (PON) provides a modular backbone of music
ontologies to address both cultural heritage and more general queries in the
music domain. As illustrated in the diagram below, `PON v1.0` comprises 15
ontology module that are organised thematically (colours, horizontal view) and
hierarchically, to highlight their dependencies (vertical view). At the bottom
of the architecture lies our `Core` module (providing general-purpose elements
of design, ODPs, and alignments) and the reused ontologies. Four foundational
models provide interoperability across PON through their abstract design:
`Source`, `Instrument`, `Music Meta`, and `Music Representation`. These are
specialised and extended in the upper levels to add functionalities and
contextualise specific domains.

![overview](assets/pon_architecture.png)

[Link to the website](https://github.com/polifonia-project/ontology-network)

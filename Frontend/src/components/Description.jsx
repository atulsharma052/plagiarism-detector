import React, { Component } from "react";
import { Jumbotron, Grid } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron style={{ paddingTop: "2%" }}>
          <h2 style={{ fontSize: "38px" }}>Introduction: </h2>
          <p style={{ fontSize: "17px" }}>
            Plagiarism detection is the process of locating instances of
            plagiarism within a work or document. The widespread use of
            computers and the advent of the Internet have made it easier to
            plagiarize the work of others.
            <br />
            Detection of plagiarism can be undertaken in a variety of ways.
            Human detection is the most traditional form of identifying
            plagiarism from written work. This can be a lengthy and
            time-consuming task for the reader and can also result in
            inconsistencies in how plagiarism is identified within an
            organization.Text-matching software (TMS), which is also referred to
            as "plagiarism detection software" or "anti-plagiarism" software,
            has become widely available, in the form of both commercially
            available products as well as open-source software.
          </p>
          <h2 style={{ fontSize: "35px" }}>
            Approaches to Plagiarism Detection:
          </h2>
          <p style={{ fontSize: "17px" }}>
            The figure below represents a classification of all detection
            approaches currently in use for computer-assisted plagiarism
            detection. The approaches are characterized by the type of
            similarity assessment they undertake: global or local. Global
            similarity assessment approaches use the characteristics taken from
            larger parts of the text or the document as a whole to compute
            similarity, while local methods only examine pre-selected text
            segments as input.
          </p>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PDS_Classification.png"
              alt=""
              style={{
                width: "50%",
                height: "60%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </div>
          <h2 style={{ fontSize: "25px" }}>1. Fingerprinting:</h2>
          <p style={{ fontSize: "17px" }}>
            Fingerprinting is currently the most widely applied approach to
            plagiarism detection. This method forms representative digests of
            documents by selecting a set of multiple substrings (n-grams) from
            them. The sets represent the fingerprints and their elements are
            called minutiae. A suspicious document is checked for plagiarism by
            computing its fingerprint and querying minutiae with a precomputed
            index of fingerprints for all documents of a reference collection.
            Minutiae matching with those of other documents indicate shared text
            segments and suggest potential plagiarism if they exceed a chosen
            similarity threshold. Computational resources and time are limiting
            factors to fingerprinting, which is why this method typically only
            compares a subset of minutiae to speed up the computation and allow
            for checks in very large collection, such as the Internet.
          </p>
          <h2 style={{ fontSize: "25px" }}>2. String Matching:</h2>
          <p style={{ fontSize: "17px" }}>
            String matching is a prevalent approach used in computer science.
            When applied to the problem of plagiarism detection, documents are
            compared for verbatim text overlaps. Numerous methods have been
            proposed to tackle this task, of which some have been adapted to
            external plagiarism detection. Checking a suspicious document in
            this setting requires the computation and storage of efficiently
            comparable representations for all documents in the reference
            collection to compare them pairwise. Generally, suffix document
            models, such as suffix trees or suffix vectors, have been used for
            this task. Nonetheless, substring matching remains computationally
            expensive, which makes it a non-viable solution for checking large
            collections of documents
          </p>
          <h2 style={{ fontSize: "25px" }}>3. Bag Of Words:</h2>
          <p style={{ fontSize: "17px" }}>
            Bag of words analysis represents the adoption of vector space
            retrieval, a traditional IR concept, to the domain of plagiarism
            detection. Documents are represented as one or multiple vectors,
            e.g. for different document parts, which are used for pair wise
            similarity computations. Similarity computation may then rely on the
            traditional cosine similarity measure, or on more sophisticated
            similarity measures
          </p>
          <h2 style={{ fontSize: "25px" }}>4. Citation Analysis:</h2>
          <p style={{ fontSize: "17px" }}>
            Citation-based plagiarism detection (CbPD) relies on citation
            analysis, and is the only approach to plagiarism detection that does
            not rely on the textual similarity.CbPD examines the citation and
            reference information in texts to identify similar patterns in the
            citation sequences. As such, this approach is suitable for
            scientific texts, or other academic documents that contain
            citations.
          </p>
          <h2 style={{ fontSize: "25px" }}>5. Stylometry:</h2>
          <p style={{ fontSize: "17px" }}>
            Stylometry subsumes statistical methods for quantifying an author’s
            unique writing style and is mainly used for authorship attribution
            or intrinsic CaPD. By constructing and comparing stylometric models
            for different text segments, passages that are stylistically
            different from others, hence potentially plagiarized, can be
            detected.
          </p>
        </Jumbotron>
      </Grid>
    );
  }
}

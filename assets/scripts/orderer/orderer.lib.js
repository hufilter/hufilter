// Basic filter orderer
// By scripthunter7

class FilterOrderer {
  constructor() {
    // All sections
    this.__arrayOfLines = [];
    this.__sections = [];

    // Actually handled section
    this.__currentSectionName = null;
    this.__currentSectionDescriptions = [];
    this.__currentSectionRules = [];
    this.__collectedBeginComments = [];
    this.__collectedEndComments = [];
    this.__collectedComments = [];
  }

  __storeSection = () => {
    // Skip empty sections
    if (
      this.__currentSectionName === null &&
      this.__currentSectionDescriptions.length === 0 &&
      this.__currentSectionRules.length === 0 &&
      this.__collectedBeginComments.length === 0 &&
      this.__collectedEndComments.length === 0 &&
      this.__collectedComments.length === 0
    )
      return;

    // Store current section
    this.__sections.push({
      name: this.__currentSectionName,
      descriptions: this.__currentSectionDescriptions,
      beginComments: this.__collectedBeginComments,
      endComments: [
        ...this.__collectedEndComments,
        ...this.__collectedComments,
      ],
      rules: this.__currentSectionRules,
    });
    // Clean current section data for next sections
    this.__currentSectionName = null;
    this.__currentSectionDescriptions = [];
    this.__currentSectionRules = [];
    this.__collectedBeginComments = [];
    this.__collectedEndComments = [];
    this.__collectedComments = [];
  };

  parse = (lines) => {
    this.__arrayOfLines = lines;
    // Possible line types:
    //   - named section begin
    //   - section description
    //   - empty line
    //   - comment
    //   - rule
    for (let line of this.__arrayOfLines) {
      // Trim unnecessary things
      line = line.trim();

      // Case#1: Section begin
      if (line.startsWith("! Section:")) {
        // Store previous section
        this.__storeSection();
        // Store current section name
        this.__currentSectionName = line;
      }
      // Case#2: Section begin
      else if (line.startsWith("! Description:")) {
        this.__currentSectionDescriptions.push(line);
      }
      // Case#3: Empty line
      else if (!line.length) {
        if (this.__collectedComments.length > 0) {
          if (this.__currentSectionRules.length === 0) {
            this.__collectedBeginComments =
              this.__collectedBeginComments.concat(this.__collectedComments);
          } else {
            this.__collectedEndComments = this.__collectedEndComments.concat(
              this.__collectedComments
            );
          }
          this.__collectedComments = [];
        }
        // Simply skip
        continue;
      }
      // Case#4: Comment
      else if (line.startsWith("!")) {
        if (line === "!" || line === "! Empty section") continue;
        // Just collect it
        this.__collectedComments.push(line);
      }
      // Case#5: Rule
      else {
        // We need to keep rule comments if we order the file
        this.__currentSectionRules.push({
          comments: this.__collectedComments,
          rule: line,
        });
        // Clean collected comments
        this.__collectedComments = [];
      }
    }
    // Handle remaining
    this.__storeSection();
    return this;
  };

  order = () => {
    // Order rules by rule text (this will keep comments)
    for (let i = 0; i < this.__sections.length; i++) {
      this.__sections[i].rules = this.__sections[i].rules.sort((a, b) =>
        a.rule.localeCompare(b.rule)
      );
    }
    return this;
  };

  getSections = () => {
    return Object.assign({}, this.__sections);
  };

  generateOutput = () => {
    let output = "";
    // Generate output string
    for (const section of this.__sections) {
      if (section.name !== null) {
        output += section.name + "\n";
        if (section.descriptions.length) {
          for (const description of section.descriptions) {
            output += description + "\n";
          }
        }
        output += "!\n";
      }
      for (const comment of section.beginComments) {
        output += comment + "\n";
      }
      // Write "Empty section" comment to section body if the section has no rules but it's named
      if (section.rules.length === 0 && section.name !== null) {
        output += "! Empty section\n";
      } else {
        for (const rule of section.rules) {
          for (const comment of rule.comments) {
            output += comment + "\n";
          }
          output += rule.rule + "\n";
        }
      }
      if (section.endComments.length > 0) {
        for (const comment of section.endComments) {
          output += comment + "\n";
        }
      }
      output += "\n";
    }
    // Remove last NL char
    return output.slice(0, -1);
  };
}

module.exports = FilterOrderer;

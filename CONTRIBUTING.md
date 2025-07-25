# 🤝 Contributing to Mr. Russky

<!-- Consider replacing hard-coded emojis with Markdown :emoji: syntax in the future. -->
<!-- Commit messages and code should be in English for consistency. -->
<!-- Use explicit terminology: e.g., "Pull Request" instead of "PR" in documentation. -->

Thank you for considering contributing to **Mr. Russky**! 🎉  
This is a community-driven educational project to help users learn Russian vocabulary in an accessible, respectful, and open-source way.

Please take a moment to review this guide before making changes.

<br>

## 📌 Project Status

🟢 **Vocabulary contributions are now open!**  
While the application is still under development, we’ve finalized a working data format and structure for adding new Russian words.

We’re actively looking for help expanding the database of **nouns** (`сущ.`), including their grammatical data, plural forms, and translations.

<br>


## ✅ What Kind of Contributions Are Welcome Right Now?

- Adding new Russian **nouns** with the following format (see below).
- Expanding underrepresented **categories** of vocabulary.
- Reporting typos or translation mistakes.
- Suggesting improvements to UI/UX or accessibility.
- Refactoring code and improving structure.
- Reporting bugs or feature issues.
- Improving documentation (README.md, CONTRIBUTING.md).
- Adding tests or utilities related to vocabulary logic.

<br>


## 💡 Before You Begin

Before submitting a pull request:

1. Please read this file.
2. Make sure your contribution aligns with the educational and respectful goals of the project.
3. If you're unsure whether your idea or change is appropriate, feel free to open a **discussion or issue** first.

<br>


## 🧠 Vocabulary Entry Format

When contributing new **nouns**, please follow this sample structure precisely.  
All fields, except the ones on **image** and **group** must be lowercase.
Fields outside the ones listed below **must not be removed or altered**.

```ts
{
    id: "рука",                 // Base nominative russian word.
    gender: "female",           // Gender of the word. Must be: "male", "female" or "neutral".
    translation: {
        es: "mano/brazo",       // Translation in spanish.
        en: "hand/arm"          // Translation in english.
    },
    cases: {
    singular: {
        nominative: "рука",     // Singular nominative form.
        genitive: "",           // Reserved for later.
        dative: "",             // Reserved for later.
        accusative: "",         // Reserved for later.
        instrumental: "",       // Reserved for later.
        prepositional: ""       // Reserved for later.
    },
    plural: {
        nominative: "руки",     // Plural nominative form.
        genitive: "",           // Reserved for later.
        dative: "",             // Reserved for later.
        accusative: "",         // Reserved for later.
        instrumental: "",       // Reserved for later.
        prepositional: ""       // Reserved for later.
    }
    },
    image: {
        imageUrl: "",           // Optional: Link to an image from Wikipedia Commons of the nominative form of the word.
        imageAttributon: "",    // Optional: If Wikipedia asks for author's attribution, copy paste their required text here.
        imageSource: ""         // Optional: If added an imageUrl then just add "Wikipedia Commons", if not left in "".
    },
    difficulty: 1,              // Reserved for later, leave it as 1.
    group: "A",                 // Reserved for later, leave it as "A".
    categories: [],             // Reserved for later.
    notes: "",                  // Optional: If you would like to add special indications about this particular word.
    example: {
        ru: "",                 // Reserved for later.
        es: "",                 // Reserved for later.
        en: ""                  // Reserved for later.
    },
    verified: false,            // Reserved for later, leave it in false.
    completed: false            // Reserved for later, leave it in false.
}
```

⚠️ For now, only the following fields are required:

- id: Russian noun in nominative singular form.
- cases.singular.nominative: Nominative singular form.
- cases.plural.nominative: Nominative plural form.
- gender: One of "male", "female", or "neutral".
- translation.es and/or translation.en. for translation in spanish/english.

The rest must remain present but can be left empty or filled as needed later.

Also, please register new nouns in alphabetical order according to its id.



## 📂 File and Folder Structure

Words are organized by:

src/
└── data/
    └── words/
        ├── inflected/
        │   └── nouns/
        │       ├── family.ts
        │       ├── home.ts
        │       ├── school.ts
        │       └── ... more categories will be added in the future.
        └── invariable/

Each file represents a thematic category.

You must place the new word in its proper file depending on the theme.

If you're unsure where to put something, open an Issue or Discussion first.

<br>


## 📋 Current Priority Categories

We will follow a proven logical-pedagogical category scheme, so the order of priority for noun categories will be published as they are added to the project.

We kindly ask you to prioritize vocabulary for the following themes first:

1. 👨‍🏫 School
2. 👪 Family
3. 🏠 Home

<br>


## 🛠️ Quick Start Guide

1. **Fork this repository** and clone it to your local machine:
```bash
git clone https://github.com/your-username/Mr-Russky.git
```

2. Install the required dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Create a new branch for your changes:
```bash
git checkout -b my-new-feature
```

5. Make your changes and test the app.

6. Once you are sure you want to upload your code commit your changes with a clear message. Add "-e" to add as much information (in a list format) as you need, but keep the main commit message short.
```bash
git commit -m "Add a short description of changes." -e
```

7. Push your branch and open a Pull Request (PR) on GitHub.

<br>


## 📣 Tips for a Good Vocabulary Contribution

- Use accurate and standard forms (check Wiktionary or academic sources).
- Include as much detail as possible where applicable.
- Always double-check spelling and diacritics.
- Use // comments in the .ts file if clarification is needed.

<br>


## ❤️ Code of Conduct

This project aims to foster an open, welcoming, and respectful environment.
Discrimination, harassment, or any form of disrespect will not be tolerated.
Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.
<br>

## 🙏 Thank You

Thank you for being a part of this educational and language-loving community.
Your time and knowledge can help others discover the beauty of the Russian language in a more accessible and visual way.

Добро пожаловать и спасибо! 🇷🇺
